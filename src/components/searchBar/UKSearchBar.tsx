import clsx from "clsx";
import { type Accessor, type Component, type JSX, Show } from "solid-js";
import UKIcon from "../icon/UKIcon.tsx";
import UKIconButton from "../iconButton/UKIconButton.tsx";
import styles from "./UKSearchBar.module.scss";

const UKSearchBar: Component<{
  value: Accessor<string>;
  placeholder: string;
  onValueChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  leadingButton?: { icon: string; accessibleLabel: string; onClick: () => void };
  // a decorative icon, for when the leading element should not be pressable
  leadingIcon?: string;
  // elements shown after the input, e.g. an avatar button
  trailingElements?: JSX.Element;
  class?: string;
}> = (props) => {
  return (
    <div class={clsx(styles.root, props.class)} role="search">
      <Show when={props.leadingButton}>
        {(button) => <UKIconButton color="standard" icon={button().icon} alt={button().accessibleLabel} onClick={button().onClick} />}
      </Show>
      <Show when={props.leadingIcon}>
        {(icon) => <UKIcon class={styles.leadingIcon}>{icon()}</UKIcon>}
      </Show>
      <input
        class={styles.input}
        type="text"
        enterkeyhint="search"
        placeholder={props.placeholder}
        aria-label={props.placeholder}
        value={props.value()}
        onInput={(e) => props.onValueChange(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") props.onSubmit?.(e.currentTarget.value);
        }}
      />
      <Show when={props.trailingElements}>
        <div class={styles.trailing}>{props.trailingElements}</div>
      </Show>
    </div>
  );
};

export default UKSearchBar;
