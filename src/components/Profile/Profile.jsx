import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.subtitle}>@{tag}</p>
        <p className={css.subtitle}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.statsItemLabel}>Followers</span>
          <span className={css.statsItemValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsItemLabel}>Views</span>
          <span className={css.statsItemValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsItemLabel}>Likes</span>
          <span className={css.statsItemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
