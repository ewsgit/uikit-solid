import clsx from "clsx";
import { type Accessor, type Component, For, Show } from "solid-js";
import CHECK_ICON from "@material-symbols/svg-700/outlined/check.svg";
import UKIcon from "../icon/UKIcon.tsx";
import UKText from "../text/UKText.tsx";
import styles from "./UKSegmentedButton.module.scss";

export interface UKSegmentedButtonItem {
  id: string;
  icon?: string;
  label?: string;
  // required when there is no label
  accessibleLabel?: string;
}

const UKSegmentedButton: Component<{
  items: UKSegmentedButtonItem[];
  selectedId: Accessor<string>;
  onSelect: (id: string) => void;
  // show a check mark in front of the selected segment's content (M3 default)
  showCheck?: boolean;
  class?: string;
}> = (props) => {
  return (
    <div class={clsx(styles.root, props.class)} role="radiogroup">
      <For each={props.items}>
        {(item) => {
          const selected = () => props.selectedId() === item.id;
          return (
            <button
              type="button"
              role="radio"
              aria-checked={selected()}
              aria-label={item.label ? undefined : item.accessibleLabel}
              class={styles.segment}
              data-selected={selected()}
              onClick={() => props.onSelect(item.id)}
            >
              <Show when={selected() && (props.showCheck ?? true)}>
                <UKIcon class={styles.icon}>{CHECK_ICON}</UKIcon>
              </Show>
              <Show when={item.icon}>
                <UKIcon class={styles.icon}>{item.icon!}</UKIcon>
              </Show>
              <Show when={item.label}>
                <UKText role="label" size="l">
                  {item.label}
                </UKText>
              </Show>
            </button>
          );
        }}
      </For>
    </div>
  );
};

export default UKSegmentedButton;
