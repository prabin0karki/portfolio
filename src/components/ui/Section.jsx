import styles from './Section.module.css';

/** Consistent section wrapper with an eyebrow label, heading and optional intro. */
export default function Section({ id, eyebrow, title, intro, children, alt = false }) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`${styles.section} ${alt ? styles.alt : ''}`}>
      <div className="container">
        <header className={styles.header} data-reveal>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
