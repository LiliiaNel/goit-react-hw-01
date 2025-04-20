import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
    return (
        <div className={css.container}>
        <div className={css.card}>
            <img className={css.avatarImg}
                src={image}
                alt="User avatar"
            />
            <p className={css.nameText}>{name}</p>
                <p className={css.lightText}>@{tag}</p>
            <p className={css.lightText}>{location}</p>
        </div>
        <ul className={css.boxList}>
            <li className={css.boxItem}>
                <span className={css.stats}>Followers</span>
                <span className={css.statsValue}>{followers}</span>
            </li>
            <li className={css.boxItem}>
                <span className={css.stats}>Views</span>
                <span className={css.statsValue}>{views}</span>
            </li>
            <li className={css.boxItem}>
                <span className={css.stats}>Likes</span>
                <span className={css.statsValue}>{likes}</span>
            </li>
        </ul>
    </div>);
}




