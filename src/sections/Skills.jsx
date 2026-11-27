import Section from '../components/ui/Section';
import Icon from '../components/ui/Icon';
import { TagList } from '../components/ui/Tag';
import { practices, skillGroups } from '../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="skills"
      title="Technical toolkit"
      intro="Python is my core language. Around it is the tooling I use to build, integrate and run backend systems in production."
    >
      <div className={styles.grid}>
        {skillGroups.map(({ id, title, icon, items }) => (
          <article key={id} className={styles.card} data-reveal>
            <div className={styles.head}>
              <span className={styles.icon}>
                <Icon name={icon} size={20} />
              </span>
              <h3 className={styles.title}>{title}</h3>
            </div>
            <TagList items={items} label={title} />
          </article>
        ))}
      </div>

      <div className={styles.practices} data-reveal>
        <h3 className={styles.practicesTitle}>
          <Icon name="layers" size={18} /> Architecture & practices
        </h3>
        <TagList items={practices} tone="accent" label="Architecture and development practices" />
      </div>
    </Section>
  );
}
