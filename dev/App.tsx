import ARROW_LEFT_ICON from "@material-symbols/svg-700/outlined/arrow_left.svg";
import ARROW_RIGHT_ICON from "@material-symbols/svg-700/outlined/arrow_right.svg";
import BORG_ICON from "@material-symbols/svg-700/outlined/borg.svg";
import FACE_ICON from "@material-symbols/svg-700/outlined/face.svg";
import MAIL_ICON from "@material-symbols/svg-700/outlined/mail.svg";
import PERSON_ICON from "@material-symbols/svg-700/outlined/person.svg";
import ROTATE_AUTO_ICON from "@material-symbols/svg-700/outlined/rotate_auto.svg";
import VERIFIED_ICON from "@material-symbols/svg-700/outlined/verified.svg";
import type { Component } from "solid-js";
import { css } from "solid-styled-components";
import UKBadge from "../src/components/badge/UKBadge.tsx";
import type { ButtonSize } from "../src/components/button/lib/size.ts";
import UKButton from "../src/components/button/UKButton.tsx";
import UKButtonGroup from "../src/components/buttonGroup/UKButtonGroup.tsx";
import UKCard from "../src/components/card/UKCard.tsx";
import UKChip from "../src/components/chip/UKChip.tsx";
import { DividerDirection } from "../src/components/divider/lib/direction.ts";
import UKDivider from "../src/components/divider/UKDivider.tsx";
import UKExtendedFloatingActionButton from "../src/components/extendedFloatingActionButton/UKExtendedFloatingActionButton.tsx";
import UKIconButton from "../src/components/iconButton/UKIconButton.tsx";
import UKList from "../src/components/list/UKList.tsx";
import UKListItem from "../src/components/list/UKListItem.tsx";
import Root from "../src/components/Root.tsx";
import UKSplitButton from "../src/components/splitButtons/UKSplitButton.tsx";
import UKText from "../src/components/text/UKText.tsx";
import { uk } from "../src/core/design/tokens.ts";

const ButtonVariantsForSize: Component<{ size: ButtonSize }> = ({ size }) => {
  return (
    <UKCard>
      <UKText size="l" role="title">
        Button Variant '{size}'
      </UKText>

      <UKText size="m" role="title">
        Filled Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)
      </UKText>
      <div
        class={css`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `}
      >
        <UKButton color="filled" size={size} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={size} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={size} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={size} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={size} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={size} leadingIcon={BORG_ICON} trailingIcon={ROTATE_AUTO_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </div>

      <UKText size="m" role="title">
        Tonal Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)
      </UKText>
      <div
        class={css`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `}
      >
        <UKButton color="tonal" size={size} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="tonal" size={size} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="tonal" size={size} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="tonal" size={size} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="tonal" size={size} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="tonal" size={size} leadingIcon={BORG_ICON} trailingIcon={ROTATE_AUTO_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </div>

      <UKText size="m" role="title">
        Outlined Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)
      </UKText>
      <div
        class={css`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `}
      >
        <UKButton color="outlined" size={size} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="outlined" size={size} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="outlined" size={size} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="outlined" size={size} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="outlined" size={size} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="outlined" size={size} leadingIcon={BORG_ICON} trailingIcon={ROTATE_AUTO_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </div>

      <UKText size="m" role="title">
        Text Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)
      </UKText>
      <div
        class={css`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `}
      >
        <UKButton color="standard" size={size} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="standard" size={size} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="standard" size={size} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="standard" size={size} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="standard" size={size} leadingIcon={BORG_ICON} trailingIcon={ROTATE_AUTO_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </div>
    </UKCard>
  );
};

export default function App() {
  return (
    <Root>
      <ButtonVariantsForSize size={"xs"} />
      <UKDivider direction={DividerDirection.horizontal} />
      <ButtonVariantsForSize size={"s"} />
      <UKDivider direction={DividerDirection.horizontal} />
      <ButtonVariantsForSize size={"m"} />
      <UKDivider direction={DividerDirection.horizontal} />
      <ButtonVariantsForSize size={"l"} />
      <UKDivider direction={DividerDirection.horizontal} />
      <ButtonVariantsForSize size={"xl"} />

      <UKCard>
        <UKBadge count={12}>
          <h3
            class={css`
                            background: rgb(${uk.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `}
          >
            Random Placeholder
          </h3>
        </UKBadge>

        <UKBadge count={1000}>
          <h3
            class={css`
                            background: rgb(${uk.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `}
          >
            Random Placeholder
          </h3>
        </UKBadge>

        <UKBadge count={1}>
          <h3
            class={css`
                            background: rgb(${uk.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `}
          >
            Random Placeholder
          </h3>
        </UKBadge>
      </UKCard>

      <UKList>
        <UKListItem labelText={"Heading"} supportingText={"Supporting text"} onClick={() => {}} />
        <UKListItem
          labelText={"Heading"}
          supportingText={"Supporting text"}
          leading={{
            type: "icon",
            value: ARROW_RIGHT_ICON,
          }}
          onClick={() => {}}
        />
        <UKListItem labelText={"Heading"} supportingText={"Supporting text"} trailing={{ type: "text", value: "100+" }} onClick={() => {}} canSelect={true} />
        <UKListItem
          labelText={"Heading"}
          supportingText={"Supporting text"}
          leading={{
            type: "icon",
            value: ARROW_RIGHT_ICON,
          }}
          onClick={() => {}}
          trailing={{ type: "icon", value: ARROW_LEFT_ICON }}
          selected={true}
          canSelect={true}
        />
        <UKListItem
          labelText={"Heading"}
          supportingText={"Supporting text"}
          leading={{
            type: "avatar",
            value: "https://google.com/favicon.ico",
          }}
          onClick={() => {}}
          trailing={{ type: "icon", value: ARROW_LEFT_ICON }}
        />
        <UKListItem
          divider={true}
          labelText={"Heading"}
          supportingText={"Supporting text"}
          leading={{
            type: "avatar",
            value: "https://google.com/favicon.ico",
          }}
          onClick={() => {}}
        />
        <UKListItem
          divider={true}
          labelText={"Heading"}
          supportingText={"Supporting text"}
          leading={{
            type: "image",
            value: "https://google.com/favicon.ico",
          }}
          onClick={() => {}}
          selected={true}
          canSelect={true}
        />
        <UKListItem
          divider={true}
          labelText={"Heading"}
          supportingText={"Supporting text"}
          leading={{
            type: "large-image",
            value: "https://google.com/favicon.ico",
          }}
          onClick={() => {}}
          selected={true}
          canSelect={true}
        />
        <UKListItem
          labelText={"Heading"}
          supportingText={"Supporting text"}
          leading={{
            type: "video",
            value: "https://google.com/favicon.ico",
          }}
          onClick={() => {}}
        />
      </UKList>

      <UKButtonGroup size={"xs"}>
        <UKButton color="filled" size={"xs"} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xs"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xs"} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xs"} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xs"} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </UKButtonGroup>

      <UKButtonGroup size={"s"}>
        <UKButton color="filled" size={"s"} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"s"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"s"} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"s"} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"s"} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </UKButtonGroup>

      <UKButtonGroup size={"m"}>
        <UKButton color="filled" size={"m"} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"m"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"m"} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"m"} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"m"} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </UKButtonGroup>

      <UKButtonGroup size={"l"}>
        <UKButton color="filled" size={"l"} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"l"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"l"} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"l"} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"l"} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </UKButtonGroup>

      <UKButtonGroup size={"xl"}>
        <UKButton color="filled" size={"xl"} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xl"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xl"} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xl"} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xl"} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </UKButtonGroup>

      <UKButtonGroup connected size={"xs"}>
        <UKButton color="filled" size={"xs"} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xs"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xs"} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xs"} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xs"} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </UKButtonGroup>

      <UKButtonGroup connected size={"s"}>
        <UKButton color="filled" size={"s"} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"s"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"s"} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"s"} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"s"} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </UKButtonGroup>

      <UKButtonGroup connected size={"m"}>
        <UKButton color="filled" size={"m"} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"m"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"m"} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"m"} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"m"} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </UKButtonGroup>

      <UKButtonGroup connected size={"l"}>
        <UKButton color="filled" size={"l"} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"l"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"l"} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"l"} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"l"} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </UKButtonGroup>

      <UKButtonGroup connected size={"xl"}>
        <UKButton color="filled" size={"xl"} type={"toggle"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xl"} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xl"} disabled onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xl"} leadingIcon={VERIFIED_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
        <UKButton color="filled" size={"xl"} trailingIcon={FACE_ICON} onClick={() => {}}>
          Confirm
        </UKButton>
      </UKButtonGroup>

      {/* <UKSplitFilledButton onClick={() => 0} dropDownItems={[]}>
                test
            </UKSplitFilledButton> */}

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"narrow"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"default"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"filled"} width={"wide"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"narrow"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"default"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"tonal"} width={"wide"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"narrow"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"default"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"outlined"} width={"wide"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"xs"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"xs"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"xs"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"xs"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"s"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"s"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"s"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"s"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"m"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"m"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"m"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"m"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"l"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"l"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"l"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"l"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <div
        class={css`
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `}
      >
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"narrow"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"default"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />

        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"xl"} icon={PERSON_ICON} type={"toggle"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"xl"} icon={PERSON_ICON} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"xl"} icon={PERSON_ICON} shape={"square"} onClick={() => 0} />
        <UKIconButton alt={"Hello world"} color={"standard"} width={"wide"} size={"xl"} icon={PERSON_ICON} disabled={true} onClick={() => 0} />
      </div>

      <UKText size="m" role="title">Split Button</UKText>

      <UKSplitButton
        items={[
          {
            type: "button",
            label: "Hello World!",
            onClick() {
              alert("clicked!!!");
            },
          },
        ]}
      />

      <UKText size="m" role="title">Chips</UKText>

      <UKText size="s" role="title">Assist Chip</UKText>
      <UKChip type="assist">{"Hello world"}</UKChip>
      <UKText size="s" role="title">Filter Deselectable Chip</UKText>
      <UKChip type="filter_deselectable" deselect={() => {}} isSelected={true} select={() => {}}>
        {"Hello world"}
      </UKChip>
      <UKChip type="filter_deselectable" deselect={() => {}} isSelected={true} select={() => {}} leading={{ type: "icon", value: PERSON_ICON }}>
        {"Hello world"}
      </UKChip>
      <UKChip type="filter_deselectable" deselect={() => {}} isSelected={true} select={() => {}} leading={{ type: "image", value: "https://google.com/favicon.ico" }}>
        {"Hello world"}
      </UKChip>
      <UKChip type="filter_deselectable" deselect={() => {}} isSelected={true} select={() => {}} leading={{ type: "avatar", value: "https://google.com/favicon.ico" }}>
        {"Hello world"}
      </UKChip>
      <UKChip type="filter_deselectable" deselect={() => {}} isSelected={false} select={() => {}}>
        {"Hello world"}
      </UKChip>
      <UKText size="s" role="title">Filter Dropdown Chip</UKText>
      <UKChip type="filter_dropdown" defaultSelectionId="1" onSelectItem={() => {}} items={[ { id: "1", label: "First", icon: PERSON_ICON }, { id: "2", label: "Seccond" }, { id: "3", label: "Third" } ]}/>
      <UKText size="s" role="title">Filter Removable Chip</UKText>
      <UKChip onRemove={() => {}} type="filter_removable">{"Hello world"}</UKChip>
      <UKText size="s" role="title">Input Chip</UKText>
      <UKChip type="input">{"Hello world"}</UKChip>
      <UKText size="s" role="title">Suggestion Chip</UKText>
      <UKChip type="suggestion">{"Hello world"}</UKChip>

      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="primary" size="small">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="primary" size="medium">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="primary" size="large">
        Test
      </UKExtendedFloatingActionButton>

      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="secondary" size="small">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="secondary" size="medium">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="secondary" size="large">
        Test
      </UKExtendedFloatingActionButton>

      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tertiary" size="small">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tertiary" size="medium">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tertiary" size="large">
        Test
      </UKExtendedFloatingActionButton>

      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tonal-primary" size="small">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tonal-primary" size="medium">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tonal-primary" size="large">
        Test
      </UKExtendedFloatingActionButton>

      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tonal-secondary" size="small">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tonal-secondary" size="medium">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tonal-secondary" size="large">
        Test
      </UKExtendedFloatingActionButton>

      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tonal-tertiary" size="small">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tonal-tertiary" size="medium">
        Test
      </UKExtendedFloatingActionButton>
      <UKExtendedFloatingActionButton onClick={() => 0} leadingIcon={MAIL_ICON} color="tonal-tertiary" size="large">
        Test
      </UKExtendedFloatingActionButton>

      <span>
        UIKit Material Expressive for SolidJS | "@ewsgit/uikit-solid" | Created by <a href={"https://ewsgit.uk"}>Ewsgit</a>
      </span>
    </Root>
  );
}
