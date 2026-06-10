import ARROW_DROP_DOWN_ICON from "@material-symbols/svg-700/outlined/arrow_drop_down.svg";
import CLOSE_ICON from "@material-symbols/svg-700/outlined/close.svg";
import clsx from "clsx";
import { type Component, createSignal } from "solid-js";
import UKAvatar from "../avatar/UKAvatar";
import UKIcon from "../icon/UKIcon";
import UKMenu from "../menu/UKMenu";
import UKText from "../text/UKText";
import styles from "./UKChip.module.scss";

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
  onSelectItem: (itemId: string) => void;
}

interface DropDownFilterChipWithDefaultSelection extends DropDownFilterChip {
  defaultSelectionId: string;
}

interface DropDownFilterChipWithPlaceholderText extends DropDownFilterChip {
  placeholderText: string;
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

const UKChip: Component<
  | AssistChip
  | RemovableFilterChip
  | DropDownFilterChipWithDefaultSelection
  | DropDownFilterChipWithPlaceholderText
  | DeselectableFilterChip
  | InputChip
  | SuggestionChip
> = (props) => {
  const [dropdownSelected, setDropdownSelected] = createSignal<{ x: number; y: number; align: "right"; minWidth: number } | false>(false);
  const [selectedValue, setSelectedValue] = createSignal<string | undefined>("defaultSelectionId" in props ? props.defaultSelectionId : undefined);

  return (
    <button
      type="button"
      class={clsx(styles.root, props.class)}
      data-type={props.type}
      data-selected={props.type === "filter_deselectable" ? props.isSelected : props.type === "filter_dropdown" ? true : props.type === "filter_removable"}
      onClick={
        "onClick" in props
          ? props.onClick
          : "deselect" in props
            ? props.deselect
            : (event) => {
                if (props.type !== "filter_dropdown") return;

                if (dropdownSelected() !== false) {
                  return setDropdownSelected(false);
                }

                const br = event.currentTarget!.getBoundingClientRect();
                setDropdownSelected({ x: br.x, y: br.bottom, align: "right", minWidth: br.width });
              }
      }
    >
      {props.type === "filter_dropdown"
        ? props.items.find((i) => i.id === selectedValue())?.icon && (
            <UKIcon class={styles.leadingIcon}>{props.items.find((i) => i.id === selectedValue())?.icon || "missing_icon?"}</UKIcon>
          )
        : "leading" in props && props.leading?.type === "icon" && <UKIcon class={styles.leadingIcon}>{props.leading.value}</UKIcon>}
      {"leading" in props && props.leading?.type === "image" && <img class={styles.leadingImage} alt={props.leading.alt || ""} src={props.leading.value} />}
      {"leading" in props && props.leading?.type === "avatar" && (
        <UKAvatar size="xs" containerClass={styles.leadingAvatar} avatar={props.leading.value} username={props.leading.alt || "Unknown"}></UKAvatar>
      )}
      <UKText role="label" size="m" emphasized={false} class={styles.label}>
        {props.type === "filter_dropdown"
          ? props.items.find((i) => i.id === selectedValue())?.label !== undefined
            ? props.items.find((i) => i.id === selectedValue())?.label
            : "placeholderText" in props
              ? (props.placeholderText as string)
              : null
          : "children" in props
            ? props.children
            : "missing"}
      </UKText>
      {("deselect" in props || props.type === "filter_dropdown") && (
        <UKIcon class={clsx(styles.trailingIcon, dropdownSelected() !== false && styles.dropdownOpen)}>
          {props.type === "filter_dropdown" ? ARROW_DROP_DOWN_ICON : CLOSE_ICON}
        </UKIcon>
      )}
      {props.type === "filter_dropdown" && (
        <UKMenu
          vibrant
          showMenu={dropdownSelected}
          closeMenu={() => setDropdownSelected(false)}
          items={props.items.map((item) => {
            return {
              type: "button",
              label: item.label,
              leadingIcon: item.icon,
              onClick() {
                setSelectedValue(item.id);
              },
            };
          })}
        />
      )}
    </button>
  );
};

export default UKChip;
