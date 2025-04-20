import css from "./FriendList.module.css"
import FriendListItem from "../friendListItem/FriendListItem";

export default function FriendList({friends}) {
	return (		
    <ul className={css.container}>
		{friends.map((friend) => {
			return <li  key={friend.id} className={css.card}> <FriendListItem
				avatar={friend.avatar}
				name={friend.name}
				status={friend.isOnline} /></li>;
      })}
	</ul>);
          
}