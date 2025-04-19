import FriendListItem from "../friendListItem/FriendListItem";

export default function FriendList({friends}) {
	return (		
    <ul>
		{friends.map((friend) => {
			return <li  key={friend.id}> <FriendListItem
				avatar={friend.avatar}
				name={friend.name}
				status={friend.isOnline} /></li>;
      })}
	</ul>);
          
}