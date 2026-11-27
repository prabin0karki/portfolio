import Section from '../components/ui/Section';
import Icon from '../components/ui/Icon';
import { TagList } from '../components/ui/Tag';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

function ProjectCard({ project }) {
  const { name, tagline, description, contribution, tags, image, links } = project;
  return (
    <article className={styles.card} data-reveal>
      <div className={styles.media}>
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="(max-width: 760px) 100vw, 560px"
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
          alt={image.alt}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.tagline}>{tagline}</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.contribution}>
          <strong>My role:</strong> {contribution}
        </p>
        <TagList items={tags} tone="mono" label={`${name} focus areas`} />
        <div className={styles.links}>
          {links.length > 0 ? (
            links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {link.label}
                <Icon name="arrowUpRight" size={16} />
                <span className="visually-hidden"> for {name} (opens in a new tab)</span>
              </a>
            ))
          ) : (
            <span className={styles.private}>Private / client project</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="projects"
      title="Featured work"
      intro="SaaS products whose backends I built at Codavatar Tech, covering device monitoring, data migration, digital payments and fundraising."
    >
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
