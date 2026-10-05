import clsx from "clsx";
import { type Component, For } from "solid-js";
import UKIcon from "../icon/UKIcon.tsx";
import UKText from "../text/UKText.tsx";
import styles from "./UKNavigationBar.module.scss";

export interface UKNavigationBarItem {
  icon: string;
  // shown instead of `icon` while the item is active
  activeIcon?: string;
  label: string;
  active?: boolean;
  badgeCount?: number;
  onClick: () => void;
}

const UKNavigationBar: Component<{
  items: UKNavigationBarItem[];
  class?: string;
}> = (props) => {
  return (
    <nav class={clsx(styles.root, props.class)}>
      <For each={props.items}>
        {(item) => (
          <button type="button" class={styles.item} data-active={!!item.active} aria-current={item.active ? "page" : undefined} onClick={item.onClick}>
            <div class={styles.indicator}>
              <UKIcon class={styles.icon}>{item.active && item.activeIcon ? item.activeIcon : item.icon}</UKIcon>
              {item.badgeCount ? <div class={styles.badge}>{item.badgeCount > 99 ? "99+" : item.badgeCount}</div> : null}
            </div>
            <UKText role="label" size="m" emphasized={!!item.active} class={styles.label}>
              {item.label}
            </UKText>
          </button>
        )}
      </For>
    </nav>
  );
};

export default UKNavigationBar;
