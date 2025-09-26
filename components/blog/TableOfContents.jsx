export default function TableOfContents({ headings, activeHeading, onHeadingClick }) {
  return (
    <aside className="table-of-contents">
      <div className="toc-sticky">
        <h3>Table of Contents</h3>
        <ul className="toc-list">
          {headings.map((heading, index) => (
            <li 
              key={index} 
              className={`toc-item toc-level-${heading.level} ${activeHeading === heading.id ? 'active' : ''}`}
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