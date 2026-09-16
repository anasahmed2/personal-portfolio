import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Wrapper that fades + slides its children into view on scroll.
 * `delay` (ms) staggers grouped items. `as` sets the rendered element.
 */
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) => {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
