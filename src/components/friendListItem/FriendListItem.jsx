import css from "./FriendListItem.module.css"
import clsx from "clsx";
export default function FriendListItem ({avatar, name, status}){
    return (
        <div className={css.card}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.title}>{name}</p>
            <p className={clsx(status? css.online : css.offline)}>{status? "Online" : "Offline"}</p>
        </div>);
    }