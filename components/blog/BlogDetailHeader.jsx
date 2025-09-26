export default function BlogDetailHeader({ blog }) {
  return (
    <header className="blog-detail-header">
      <div className="blog-hero-image">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="blog-header-content">
        <span className="blog-category-tag">{blog.category}</span>
        <h1>{blog.title}</h1>
        <div className="blog-meta-info">
          <span className="blog-author">By {blog.author}</span>
          <span className="blog-date">
            {new Date(blog.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
          <span className="blog-read-time">{blog.readTime}</span>
        </div>
      </div>
    </header>
  );
}