import clsx from "clsx";
import type { Component } from "solid-js";
import UKIcon from "../icon/UKIcon.tsx";
import styles from "./UKFloatingActionButton.module.scss";

const UKFloatingActionButton: Component<{
  icon: string;
  alt: string;
  onClick: (event: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "tertiary" | "tonal-primary" | "tonal-secondary" | "tonal-tertiary";
  class?: string;
}> = (props) => {
  return (
    <button
      type="button"
      class={clsx(styles.root, props.class)}
      data-size={props.size || "medium"}
      data-color={props.color || "tonal-primary"}
      aria-label={props.alt}
      onClick={props.onClick}
    >
      <UKIcon class={styles.icon}>{props.icon}</UKIcon>
    </button>
  );
};

export default UKFloatingActionButton;
