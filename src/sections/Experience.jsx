import Section from '../components/ui/Section';
import { TagList } from '../components/ui/Tag';
import { experience } from '../data/experience';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="experience"
      title="Where I’ve worked"
      intro="Seven-plus years across product companies and agencies, moving from Python developer to leading backend work for a real-time voice platform."
      alt
    >
      <ol className={styles.timeline}>
        {experience.map((job) => (
          <li key={job.id} className={styles.item} data-reveal>
            <span className={`${styles.marker} ${job.current ? styles.current : ''}`} aria-hidden="true" />
            <article className={styles.card}>
              <header className={styles.head}>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>
                    {job.company} <span className={styles.sep}>·</span> {job.location}
                  </p>
                </div>
                <p className={styles.dates}>
                  {job.current && <span className={styles.now}>Current</span>}
                  <time>{job.start}</time> – <time>{job.end}</time>
                </p>
              </header>
              <ul className={styles.points}>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <TagList items={job.stack} tone="mono" label={`Technologies used at ${job.company}`} />
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
