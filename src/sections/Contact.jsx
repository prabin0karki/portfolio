import Section from '../components/ui/Section';
import Icon from '../components/ui/Icon';
import ContactForm from '../components/ContactForm';
import { profile, socials } from '../data/profile';
import styles from './Contact.module.css';

const channels = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  ...socials
    .filter((s) => s.id !== 'medium')
    .map((s) => ({ icon: s.id, label: s.label, value: s.handle, href: s.href, external: true })),
  { icon: 'phone', label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: 'pin', label: 'Location', value: `${profile.location} · open to remote` },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="contact"
      title="Let’s build something reliable."
      intro="I’m open to senior backend and engineering roles, remote or international. Email is the fastest way to reach me."
      alt
    >
      <div className={styles.layout}>
        <ul className={styles.channels} data-reveal>
          {channels.map(({ icon, label, value, href, external }) => {
            const inner = (
              <>
                <span className={styles.icon}>
                  <Icon name={icon} size={20} />
                </span>
                <span className={styles.text}>
                  <span className={styles.label}>{label}</span>
                  <span className={styles.value}>{value}</span>
                </span>
                {href && <Icon name={external ? 'arrowUpRight' : 'arrowRight'} size={18} className={styles.arrow} />}
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    className={styles.channel}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={styles.channel}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>

        <div className={styles.formWrap} data-reveal>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
