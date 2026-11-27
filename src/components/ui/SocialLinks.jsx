import Icon from './Icon';
import { socials } from '../../data/profile';
import styles from './SocialLinks.module.css';

export default function SocialLinks({ size = 20, className = '' }) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {socials.map(({ id, label, href }) => (
        <li key={id}>
          <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label={`${label} (opens in a new tab)`}>
            <Icon name={id} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
