import Link from 'next/link';

export default function BlogContent({ content }) {
  return (
    <main className="blog-main-content">
      <article className="blog-article">
        {content.map((item, index) => {
          switch (item.type) {
            case 'heading':
              const HeadingTag = `h${item.level}`;
              return (
                <HeadingTag key={index} id={item.id} className="blog-heading">
                  {item.text}
                </HeadingTag>
              );
            case 'paragraph':
              return <p key={index} className="blog-paragraph">{item.text}</p>;
            case 'code':
              return (
                <pre key={index} className="blog-code">
                  <code>{item.text}</code>
                </pre>
              );
            default:
              return null;
          }
        })}
      </article>

      <div className="blog-navigation">
        <Link href="/blog" className="back-to-blog">
          ← Back to All Posts
        </Link>
      </div>
    </main>
  );
}