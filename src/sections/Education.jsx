import Section from '../components/ui/Section';
import Icon from '../components/ui/Icon';
import { education } from '../data/education';
import styles from './Education.module.css';

export default function Education() {
  return (
    <Section id="education" eyebrow="education" title="Education">
      <ul className={styles.grid}>
        {education.map((e) => (
          <li key={e.degree} className={styles.card} data-reveal>
            <span className={styles.icon}>
              <Icon name="graduation" size={22} />
            </span>
            <div>
              <h3 className={styles.degree}>{e.degree}</h3>
              <p className={styles.school}>{e.institution}</p>
              <p className={styles.period}>{e.period}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
