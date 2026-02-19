export default function Button({ children, className, link }) {
  return (
    <a className={className} href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
