export default function HeadingsSidebar({ headings, activeHeading, onHeadingClick }) {
  return (
    <aside className="headings-sidebar">
      <div className="headings-sticky">
        <h3>On This Page</h3>
        <ul className="headings-list">
          {headings.map((heading, index) => (
            <li 
              key={index} 
              className={`heading-item heading-level-${heading.level} ${activeHeading === heading.id ? 'active' : ''}`}
            >
              <button onClick={() => onHeadingClick(heading.id)}>
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}