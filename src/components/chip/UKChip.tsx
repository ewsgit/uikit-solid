import clsx from "clsx";
import type { Component } from "solid-js";
import UKIcon from "../icon/UKIcon";
import UKText from "../text/UKText";
import styles from "./UKChip.module.scss";
import UKAvatar from "../avatar/UKAvatar";
import CLOSE_ICON from "@material-symbols/svg-700/outlined/close.svg";

interface BaseChip {
  class?: string;
  leading?: { type: "icon" | "avatar" | "image"; value: string; alt?: string };
}

interface AssistChip extends BaseChip {
  type: "assist";
  children: string; // label text
  onClick?: () => void;
}

interface RemovableFilterChip extends BaseChip {
  type: "filter_removable";
  children: string; // label text
  onRemove: () => void;
}

interface DropDownFilterChip extends BaseChip {
  type: "filter_dropdown";
  items: { icon?: string; label: string; id: string }[];
  defaultSelectionId: string;
  onSelectItem: (itemId: string) => void;
}

interface DeselectableFilterChip extends BaseChip {
  type: "filter_deselectable";
  children: string; // label text
  select: () => void;
  deselect?: () => void;
  isSelected: boolean;
}

interface InputChip extends BaseChip {
  type: "input";
  children: string; // label text
  onClick?: () => void;
}

interface SuggestionChip extends BaseChip {
  type: "suggestion";
  children: string; // label text
  onClick?: () => void;
}

const UKChip: Component<AssistChip | RemovableFilterChip | DropDownFilterChip | DeselectableFilterChip | InputChip | SuggestionChip> = (props) => {
  return (
    <button
      type="button"
      class={clsx(styles.root, props.class)}
      data-type={props.type}
      data-selected={props.type === "filter_deselectable" ? props.isSelected : props.type === "filter_dropdown" ? true : props.type === "filter_removable"}
      data-noLeadingIcon={!("leadingIcon" in props && props.leadingIcon)}
      data-noTrailingIcon={!("trailingIcon" in props && props.trailingIcon)}
      onClick={"onClick" in props ? props.onClick : () => {}}
    >
      {"leading" in props && props.leading?.type === "icon" && <UKIcon class={styles.icon}>{props.leading.value}</UKIcon>}
      {"leading" in props && props.leading?.type === "image" && <img alt={props.leading.alt || ""} class={styles.icon} src={props.leading.value} />}
      {"leading" in props && props.leading?.type === "avatar" && (
        <UKAvatar size="xs" class={styles.icon} avatar={props.leading.value} username={props.leading.alt || "Unknown"}></UKAvatar>
      )}
      <UKText role="label" size="m" emphasized={false} class={styles.label}>
        {"children" in props && props.children}
      </UKText>
      {"deselect" in props && <UKIcon class={styles.icon}>{CLOSE_ICON}</UKIcon>}
    </button>
  );
};

export default UKChip;
