import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      {isOnline ? (
        <p className={[css.status, css.online].join(' ')}>Online</p>
      ) : (
        <p className={[css.status, css.offline].join(' ')}>Offline</p>
      )}
    </div>
  );
}
