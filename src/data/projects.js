import fenced640 from '../assets/images/fenced-640.webp';
import fenced1200 from '../assets/images/fenced-1200.webp';
import migratu640 from '../assets/images/migratu-640.webp';
import migratu1200 from '../assets/images/migratu-1200.webp';
import amejpay640 from '../assets/images/amejpay-640.webp';
import amejpay1200 from '../assets/images/amejpay-1200.webp';
import mydonate640 from '../assets/images/mydonate-640.webp';
import mydonate1200 from '../assets/images/mydonate-1200.webp';

const img = (small, large, alt) => ({ src: large, srcSet: `${small} 640w, ${large} 1200w`, alt });

/**
 * Projects delivered while working as a backend engineer at Codavatar Tech.
 * `links` entries are optional; only verified public URLs are listed.
 */
export const projects = [
  {
    id: 'fenced',
    name: 'Fenced.ai',
    tagline: 'Device monitoring & parental / employee control platform',
    description:
      'SaaS platform that monitors call logs, messages, location history with geofence alerts, and app and browser activity on managed devices. It sends real-time suspicious-activity alerts and allows remote control from a web dashboard.',
    contribution: 'Backend features: REST APIs, business logic, database design and deployments.',
    tags: ['SaaS', 'Real-time alerts', 'Geofencing', 'REST APIs'],
    image: img(fenced640, fenced1200, 'Fenced.ai dashboard showing device activity, call logs and location map'),
    links: [{ label: 'Live site', href: 'https://fenced.ai/' }],
  },
  {
    id: 'migratu',
    name: 'Migratu',
    tagline: 'Cross-platform data migration service',
    description:
      'Integration-heavy service that moves user data between platforms in a few clicks, built on third-party API integrations, data mapping and transformation.',
    contribution: 'Backend integration work: third-party APIs, data mapping and transformation pipelines.',
    tags: ['Integrations', 'Data mapping', 'Third-party APIs'],
    image: img(migratu640, migratu1200, 'Migratu landing page'),
    links: [{ label: 'Live site', href: 'https://migratu.com/' }],
  },
  {
    id: 'amejpay',
    name: 'Amejpay',
    tagline: 'Digital wallet & virtual payments',
    description:
      'Wallet system for virtual payments, with transactional backend logic built for data consistency and secure handling of financial records.',
    contribution: 'Transactional backend logic, data consistency and secure handling of financial records.',
    tags: ['Fintech', 'Wallet', 'Transactions'],
    image: img(amejpay640, amejpay1200, 'Amejpay digital wallet landing page'),
    links: [],
  },
  {
    id: 'mydonate',
    name: 'My Donate',
    tagline: 'Online fundraising platform',
    description:
      'Non-profit platform for raising funds for social causes, covering campaign management and donation workflows.',
    contribution: 'Backend for campaign management and donation workflows.',
    tags: ['Non-profit', 'Payments', 'Campaigns'],
    image: img(mydonate640, mydonate1200, 'My Donate fundraising platform homepage'),
    links: [{ label: 'Live site', href: 'https://mydonate.org/' }],
  },
];
