import Button from '../components/ui/Button';
import SocialLinks from '../components/ui/SocialLinks';
import { profile } from '../data/profile';
import styles from './Hero.module.css';

const stack = ['Python', 'FastAPI', 'RabbitMQ'];
const stack2 = ['Kubernetes', 'AWS'];
const domains = ['VoIP', 'Payments', 'SaaS'];

function CodeCard() {
  const list = (items) =>
    items.map((item, i) => (
      <span key={item}>
        <span className={styles.str}>&quot;{item}&quot;</span>
        {i < items.length - 1 && ', '}
      </span>
    ));

  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.cardBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.fileName}>engineer.py</span>
      </div>
      <pre className={styles.code}>
        <code>
          <span className={styles.kw}>class</span> <span className={styles.cls}>Engineer</span>:{'\n'}
          {'    '}name{'     '}= <span className={styles.str}>&quot;{profile.name}&quot;</span>{'\n'}
          {'    '}role{'     '}= <span className={styles.str}>&quot;{profile.title}&quot;</span>{'\n'}
          {'    '}years{'    '}= <span className={styles.num}>7</span>  <span className={styles.cm}># and counting</span>{'\n'}
          {'    '}stack{'    '}= [{list(stack)},{'\n'}
          {'               '}{list(stack2)}]{'\n'}
          {'    '}domains{'  '}= [{list(domains)}]{'\n'}
          {'\n'}
          {'    '}<span className={styles.kw}>async def</span> <span className={styles.fn}>build</span>(self, problem):{'\n'}
          {'        '}<span className={styles.kw}>return await</span> self.<span className={styles.fn}>ship</span>(problem){'\n'}
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.badge}>
            <span className={styles.pulse} />
            {profile.availability}
          </p>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.hello}>Hi, I&apos;m {profile.firstName}.</span>
            <span className={styles.role}>{profile.title}</span>
          </h1>
          <p className={styles.subtitle}>{profile.subtitle}</p>
          <p className={styles.summary}>{profile.summary}</p>

          <div className={styles.ctas}>
            <Button href="#projects" icon="arrowRight">
              View Projects
            </Button>
            <Button href={profile.resume.href} download={profile.resume.fileName} variant="secondary" icon="download" iconPosition="start">
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost" icon="mail" iconPosition="start">
              Contact Me
            </Button>
          </div>

          <SocialLinks className={styles.socials} />
        </div>

        <div className={styles.visual}>
          <CodeCard />
        </div>
      </div>

      <div className="container">
        <dl className={styles.stats}>
          {profile.stats.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <dt className="visually-hidden">{label}</dt>
              <dd className={styles.statValue}>{value}</dd>
              <dd className={styles.statLabel} aria-hidden="true">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
