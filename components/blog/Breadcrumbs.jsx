import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          {item.current ? (
            <span className="breadcrumb-current">{item.label}</span>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}