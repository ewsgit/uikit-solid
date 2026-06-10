import STAT_MINUS_1_ICON from "@material-symbols/svg-700/outlined/stat_minus_1.svg";
import clsx from "clsx";
import { type Component, createSignal } from "solid-js";
import UKButton from "../button/UKButton";
import UKIconButton from "../iconButton/UKIconButton";
import UKMenu, { type MenuItem } from "../menu/UKMenu";
import type { SplitButtonColor } from "./lib/color";
import type { SplitButtonSize } from "./lib/size";
import styles from "./UKSplitButton.module.scss";

const UKSplitButton: Component<{
  class?: string;
  color?: SplitButtonColor;
  disabled?: boolean;
  size?: SplitButtonSize;
  items: (MenuItem | undefined)[];
  showIcon?: boolean;
}> = (props) => {
  const [dropdownSelected, setDropdownSelected] = createSignal<{ x: number; y: number; align: "right"; minWidth: number } | false>(false);

  return (
    <div class={styles.root}>
      <UKButton
        leadingIcon={(props.showIcon && props.items.find((item) => item?.type === "button")?.leadingIcon) || undefined}
        class={styles.textButton}
        size={props.size || "s"}
        color={props.color}
        onClick={() => {
          props.items.find((item) => item?.type === "button")?.onClick();
        }}
      >
        {props.items.find((item) => item?.type === "button")?.label}
      </UKButton>
      <UKIconButton
        class={clsx(styles.iconButton, dropdownSelected() !== false && styles.iconButtonDropdownSelected)}
        color={props.color !== "elevated" ? props.color : "filled"}
        icon={STAT_MINUS_1_ICON}
        size={props.size || "s"}
        alt="alt"
        onClick={(event) => {
          const br = event.currentTarget.parentElement!.getBoundingClientRect();
          setDropdownSelected({ x: br.x, y: br.bottom, align: "right", minWidth: br.width });
        }}
      />
      <UKMenu vibrant showMenu={dropdownSelected} closeMenu={() => setDropdownSelected(false)} items={props.items} />
    </div>
  );
};

export default UKSplitButton;
