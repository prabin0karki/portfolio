import Icon from './Icon';
import styles from './Button.module.css';

/**
 * Link-styled button. Renders an <a> when `href` is set, otherwise a <button>.
 * Variants: primary | secondary | ghost.
 */
export default function Button({ href, variant = 'primary', icon, iconPosition = 'end', children, className = '', ...rest }) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();
  const content = (
    <>
      {icon && iconPosition === 'start' && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <Icon name={icon} size={18} />}
    </>
  );

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
