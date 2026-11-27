import { useState } from 'react';
import Button from './ui/Button';
import Icon from './ui/Icon';
import { contactFormEndpoint, profile } from '../data/profile';
import styles from './ContactForm.module.css';

const initial = { name: '', email: '', message: '', _gotcha: '' };

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.';
  if (message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(contactFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _subject: `Portfolio enquiry from ${values.name}` }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setValues(initial);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Icon name="check" size={26} />
        </span>
        <h3>Thanks, your message is on its way.</h3>
        <p>I’ll get back to you at the email you provided as soon as I can.</p>
        <Button variant="secondary" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    );
  }

  const field = (name, label, { multiline = false, ...rest } = {}) => {
    const Tag = multiline ? 'textarea' : 'input';
    const errorId = `${name}-error`;
    return (
      <div className={styles.field}>
        <label htmlFor={`cf-${name}`}>{label}</label>
        <Tag
          id={`cf-${name}`}
          name={name}
          value={values[name]}
          onChange={onChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? errorId : undefined}
          className={errors[name] ? styles.invalid : ''}
          {...rest}
        />
        {errors[name] && (
          <p id={errorId} className={styles.error}>
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <h3 className={styles.heading}>Send a message</h3>
      <div className={styles.row}>
        {field('name', 'Name', { type: 'text', autoComplete: 'name', placeholder: 'Your name' })}
        {field('email', 'Email', { type: 'email', autoComplete: 'email', inputMode: 'email', placeholder: 'you@company.com' })}
      </div>
      {field('message', 'Message', { multiline: true, rows: 6, placeholder: 'Tell me about the role, team or project…' })}

      {/* Honeypot field for bots; hidden from people and assistive tech. */}
      <input type="text" name="_gotcha" value={values._gotcha} onChange={onChange} tabIndex={-1} autoComplete="off" className={styles.honeypot} aria-hidden="true" />

      {status === 'error' && (
        <p className={styles.formError} role="alert">
          Something went wrong sending your message. Please email me directly at{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      )}

      <Button type="submit" icon="send" disabled={status === 'sending'} className={styles.submit}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
