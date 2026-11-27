export const profile = {
  name: 'Prabin Karki',
  firstName: 'Prabin',
  title: 'Senior Backend Engineer',
  subtitle: 'System Architect · VoIP · Python · AWS · RabbitMQ',
  location: 'Kathmandu, Nepal',
  availability: 'Open to remote opportunities',
  email: 'prabin0karki@gmail.com',
  phone: '+977 986 148 7381',
  phoneHref: 'tel:+9779861487381',
  website: 'https://www.kprabin.com.np',
  resume: {
    href: '/Prabin_Karki_Senior_Backend_Developer_CV.pdf',
    fileName: 'Prabin_Karki_Senior_Backend_Developer_CV.pdf',
  },
  summary:
    'I design and scale high-performance backend systems in Python: asynchronous microservices with FastAPI, RabbitMQ and Kubernetes, real-time voice and SMS platforms, and payment and CRM integrations that run reliably in production.',
  stats: [
    { value: '7+', label: 'Years building production backends' },
    { value: '4', label: 'Companies, from intern to Lead Developer' },
    { value: '4', label: 'SaaS products shipped to production' },
  ],
};

export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/prabin0karki', handle: 'prabin0karki' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/prabin-k-2b7541170/', handle: 'prabin-k-2b7541170' },
  { id: 'medium', label: 'Medium', href: 'https://medium.com/@pkkarki18', handle: '@pkkarki18' },
];

/** Endpoint used by the legacy site's contact form. */
export const contactFormEndpoint = 'https://formspree.io/f/xknqpwdg';
