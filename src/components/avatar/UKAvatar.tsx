import clsx from "clsx";
import type {Component} from "solid-js";
import styles from "./UKAvatar.module.scss";

const UKAvatar: Component<{
    size: "xs" | "s" | "m" | "l" | "xl" | "2xl";
    username: string;
    avatar: string;
    class?: string;
    containerClass?: string;
    onClick?: (e: MouseEvent) => void;
}> = (props) => {
    return (<>
        {props.onClick ? <>
            <button
                class={clsx(styles.root, props.containerClass)}
                type="button"
                onClick={props.onClick}
                data-size={props.size}
            >
                <img
                    draggable={false}
                    src={props.avatar}
                    class={clsx(styles.image, props.class)}
                    alt={`${props.username}'s avatar`}
                />
            </button>
        </> : <>
            <div class={clsx(styles.root, props.containerClass)} data-size={props.size}>
                <img
                    draggable={false}
                    src={props.avatar}
                    class={clsx(styles.image, props.class)}
                    alt={`${props.username}'s avatar`}/>
            </div>
        </>}
    </>);
};

export default UKAvatar;
