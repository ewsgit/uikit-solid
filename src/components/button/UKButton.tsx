import CHECK_ICON from "@material-symbols/svg-700/outlined/check.svg";
import ERROR_ICON from "@material-symbols/svg-700/outlined/error.svg";
import PROGRESS_ACTIVITY_ICON from "@material-symbols/svg-700/outlined/progress_activity.svg";
import clsx from "clsx";
import { createSignal, type ParentProps } from "solid-js";
import UKIcon from "../icon/UKIcon.tsx";
import type { ButtonShape } from "./lib/shape.ts";
import type { ButtonSize } from "./lib/size.ts";
import styles from "./UKButton.module.scss";

export enum AffirmativeButtonState {
  Success,
  Error,
  InProgress,
  Unset,
}

interface BaseButtonProps {
  class?: string;
  disabled?: boolean;
  size?: ButtonSize;
  shape?: ButtonShape;
  type?: "normal" | "toggle";
  leadingIcon?: string;
  trailingIcon?: string;
}

interface NonAffirmativeButtonProps extends BaseButtonProps {
  color?: "elevated" | "filled" | "tonal" | "outlined" | "standard";
  onClick: (
    event: MouseEvent & {
      currentTarget: HTMLButtonElement;
      target: Element;
    },
  ) => void | Promise<void>;
}

interface AffirmativeButtonProps extends BaseButtonProps {
  affirmative: true;
  color?: "elevated" | "filled" | "tonal" | "outlined";
  onClick: (
    event: MouseEvent & {
      currentTarget: HTMLButtonElement;
      target: Element;
    },
  ) => Promise<{ state: AffirmativeButtonState; cb?: () => void | Promise<void> }>;
  onSuccess?: () => void;
  onError?: () => void;
}

const AFFIRMATIVE_BUTTON_HOLD_TIME = 1000;

const UKButton = (props: ParentProps<NonAffirmativeButtonProps | AffirmativeButtonProps>) => {
  const [isSelected, setIsSelected] = createSignal(false);
  const [affirmativeState, setAffirmativeState] = createSignal<AffirmativeButtonState>(AffirmativeButtonState.Unset);

  if (props.color === "standard" && props.type === "toggle") {
    alert("You cannot have a standard color button be toggle-able");
  }

  return (
    <button
      disabled={props.disabled || false}
      data-selected={isSelected()}
      data-toggle-able={props.type === "toggle" || false}
      data-size={props.size || "s"}
      data-shape={isSelected() ? ((props.shape || "round") === "round" ? "square" : "round") : props.shape || "round"}
      data-color={props.color || "filled"}
      onClick={async (e) => {
        e.stopPropagation();
        if (props.type === "toggle") {
          setIsSelected(!isSelected());
          props.onClick(e);
          return;
        }
        if ("affirmative" in props && props.affirmative) {
          if (affirmativeState() !== AffirmativeButtonState.Unset) {
            return;
          }

          setAffirmativeState(AffirmativeButtonState.InProgress);

          try {
            const clickResponse = await props.onClick(e);

            setAffirmativeState(clickResponse?.state || AffirmativeButtonState.Success);

            setTimeout(() => {
              setAffirmativeState(AffirmativeButtonState.Unset);

              clickResponse?.cb?.();
            }, AFFIRMATIVE_BUTTON_HOLD_TIME);
          } catch (_) {
            setAffirmativeState(AffirmativeButtonState.Unset);
          }

          return;
        }

        props.onClick(e);
      }}
      class={clsx(styles.root, props.class, affirmativeState() === AffirmativeButtonState.InProgress && styles.inProgress)}
      type="button"
    >
      {"affirmative" in props && props.affirmative ? (
        <UKIcon
          class={clsx(
            styles.iconClass,
            affirmativeState() === AffirmativeButtonState.InProgress && styles.leadingIconSpin,
            affirmativeState() === AffirmativeButtonState.Unset && styles.leadingIconNoWidth,
          )}
        >
          {affirmativeState() === AffirmativeButtonState.Success
            ? CHECK_ICON
            : affirmativeState() === AffirmativeButtonState.InProgress
              ? PROGRESS_ACTIVITY_ICON
              : affirmativeState() === AffirmativeButtonState.Error
                ? ERROR_ICON
                : props.leadingIcon || ""}
        </UKIcon>
      ) : (
        props.leadingIcon && <UKIcon class={styles.iconClass}>{props.leadingIcon}</UKIcon>
      )}
      {props.children || "No Label Provided"}
      {props.trailingIcon && <UKIcon class={styles.iconClass}>{props.trailingIcon}</UKIcon>}
    </button>
  );
};

export default UKButton;
