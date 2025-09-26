import Link from 'next/link';

export default function BlogGrid({ blogs }) {
  return (
    <div className="blog-grid">
      {blogs.map(blog => (
        <article key={blog.id} className="blog-card">
          <div className="blog-image">
            <img src={blog.image} alt={blog.title} />
            <span className="blog-category">{blog.category}</span>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span className="blog-date">{new Date(blog.date).toLocaleDateString()}</span>
              <span className="blog-read-time">{blog.readTime}</span>
            </div>
            <h2 className="blog-title">
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </h2>
            <p className="blog-excerpt">{blog.excerpt}</p>
            <Link href={`/blog/${blog.id}`} className="read-more">
              Read More →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}