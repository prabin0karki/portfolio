import Icon from '../ui/Icon';
import SocialLinks from '../ui/SocialLinks';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.tagline}>
            {profile.title} · {profile.location}
          </p>
          <SocialLinks size={18} />
        </div>

        <nav aria-label="Footer" className={styles.nav}>
          <p className={styles.heading}>Navigate</p>
          <ul>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.nav}>
          <p className={styles.heading}>Get in touch</p>
          <ul>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.resume.href} download={profile.resume.fileName}>
                Download resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <a href="#top" className={styles.top}>
          Back to top <Icon name="arrowUp" size={16} />
        </a>
      </div>
    </footer>
  );
}
