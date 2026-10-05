import clsx from "clsx";
import type { Component } from "solid-js";
import { Show } from "solid-js";
import UKText from "../text/UKText.tsx";
import styles from "./UKSnackbar.module.scss";

const UKSnackbar: Component<{
  message: string;
  action?: { label: string; onClick: () => void };
  onDismiss?: () => void;
  class?: string;
}> = (props) => {
  return (
    <div class={clsx(styles.root, props.class)} role="status" aria-live="polite">
      <UKText role="body" size="m" class={styles.message}>
        {props.message}
      </UKText>
      <Show when={props.action}>
        {(action) => (
          <button type="button" class={styles.action} onClick={action().onClick}>
            {action().label}
          </button>
        )}
      </Show>
      <Show when={props.onDismiss}>
        <button type="button" class={styles.action} aria-label="Dismiss" onClick={props.onDismiss}>
          ✕
        </button>
      </Show>
    </div>
  );
};

export default UKSnackbar;
