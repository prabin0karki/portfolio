import Section from '../components/ui/Section';
import Icon from '../components/ui/Icon';
import { TagList } from '../components/ui/Tag';
import { about } from '../data/about';
import { profile } from '../data/profile';
import portrait420 from '../assets/images/portrait-420.webp';
import portrait720 from '../assets/images/portrait-720.webp';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id="about" eyebrow="about" title="Backend engineer, from intern to lead." alt>
      <div className={styles.layout}>
        <figure className={styles.photo} data-reveal>
          <img
            src={portrait720}
            srcSet={`${portrait420} 420w, ${portrait720} 720w`}
            sizes="(max-width: 860px) 280px, 360px"
            width="720"
            height="1044"
            loading="lazy"
            decoding="async"
            alt={`Portrait of ${profile.name}`}
          />
          <figcaption className={styles.caption}>
            <Icon name="pin" size={16} /> {profile.location}
          </figcaption>
        </figure>

        <div className={styles.body}>
          <div className={styles.text} data-reveal>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className={styles.panel} data-reveal>
            <h3 className={styles.panelTitle}>Career highlights</h3>
            <ul className={styles.highlights}>
              {about.highlights.map((h) => (
                <li key={h}>
                  <Icon name="check" size={18} className={styles.check} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <h3 className={styles.panelTitle}>Professional interests</h3>
            <TagList items={about.interests} tone="accent" label="Professional interests" />
          </div>
        </div>
      </div>
    </Section>
  );
}
