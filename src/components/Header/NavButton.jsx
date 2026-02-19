export default function NavButton({ href, children }) {
  return (
    <>
      <li>
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      </li>
    </>
  );
}
