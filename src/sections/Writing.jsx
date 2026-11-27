import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import { articles } from '../data/writing';
import { socials } from '../data/profile';
import styles from './Writing.module.css';

const medium = socials.find((s) => s.id === 'medium');

export default function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="writing"
      title="Technical writing"
      intro="I write about the tools I use, from secrets management and databases to deployment and API design."
      alt
    >
      <ul className={styles.grid}>
        {articles.map((a) => (
          <li key={a.href} data-reveal>
            <a href={a.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <p className={styles.meta}>
                <span>{a.topic}</span>
                <span aria-hidden="true">·</span>
                <span>{a.year}</span>
              </p>
              <h3 className={styles.title}>{a.title}</h3>
              <p className={styles.summary}>{a.summary}</p>
              <span className={styles.read}>
                Read on Medium <Icon name="arrowUpRight" size={16} />
                <span className="visually-hidden">(opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.more}>
        <Button href={medium.href} variant="secondary" icon="medium" iconPosition="start">
          All articles on Medium
        </Button>
      </div>
    </Section>
  );
}
