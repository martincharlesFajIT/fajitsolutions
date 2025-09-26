// src/(pages)/blog/[id].jsx
'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import '../../../../components/css/blog.css';

// Mock blog detail data
const mockBlogDetail = {
  1: {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "earn the fundamentals of Next.js and how to build modern React applications.",
    category: "Web Development",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Introduction to Next.js',
        id: 'introduction'
      },
      {
        type: 'paragraph',
        text: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Key Features of Next.js',
        id: 'key-features'
      },
      {
        type: 'paragraph',
        text: 'Next.js comes with many built-in features that make it an excellent choice for modern web development.'
      }
    ]
  },
  2: {
    id: 2,
    title: "React Hooks Deep Dive",
    excerpt: "Understanding React Hooks and how they revolutionize component state management.",
    category: "React",
    date: "2024-01-10",
    readTime: "8 min read",
    author: "Jane Smith",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'What are React Hooks?',
        id: 'what-are-hooks'
      },
      {
        type: 'paragraph',
        text: 'Ever since neobanks appeared on the scene, big banks have had to come to terms with a new competitor. Neobanks are glorified mobile-first banks that have a far more agile approach to customer service, allowing them to offer a much more personalized touch to their clients’ query resolution. For big banks, new strategic changes such as embracing a hybrid cloud model as an agile IT backbone shift are imperative. They now need to capture the most agile, cloud-empowered banking services that neobanks offer.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'What Is a Hybrid Cloud for Baking?',
        id: 'what-is-a-hybrid-cloud-for-baking',
      },
         {
        type: 'paragraph',
        text: 'A bank hybrid cloud is an IT architecture that integrates a private cloud (on-premises, proprietary infrastructure) with a public cloud (a third-party-provided service). The two disparate environments are structured to interconnect in a manner that data and applications are not isolated in individual silos.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Hybrid Cloud Adoption in Banking',
      },
      {
        type: 'paragraph',
        text: 'Financial institutions struggle to gain control and ensure security for sensitive data and core operations. Meanwhile, they also seek to reach flexibility, scalability, and cost efficiency in a public cloud for non-sensitive workloads and innovative applications.The hybrid cloud banking model enables financial institutions to strike a balance between private and public clouds. For instance, a bank can store its customer financial records on a hybrid-private cloud to comply with data residency regulations. Simultaneously, it can run customer-facing mobile applications and other analytics on public cloud servers. This would allow the bank to integrate mobile applications with the private cloud in a seamless manner.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'What Is a Hybrid Cloud for Baking?',
      },
       {
        type: 'paragraph',
        text: 'Market analysis estimates that the cloud finance industry will be worth over USD 51 billion in 2026, with projections to reach roughly USD 217 billion by 2034. This denotes a 19.78% CAGR over the next 9 years.In 2025, an LSEG (London Stock Exchange Group) industry survey stated that 82% of orgs already function on a multi-cloud or hybrid-cloud basis. This implies that the transition to flexible cloud infrastructure is ongoing. Banks are no longer in the exploratory phase. They are increasing investment. The same report states that 87% of financial services firms report that of all cloud expenditures in the last two years, over a quarter fueled spending focusing on scalability, revenue growth, and AI enablement.'
      },
    ]
  },

  3: {
    id: 3,
    title: "CSS Grid vs Flexbox",
    excerpt: "Understanding React Hooks and how they revolutionize component state management.",
    category: "React",
    date: "2024-01-10",
    readTime: "8 min read",
    author: "Jane Smith",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'What are React Hooks?',
        id: 'what-are-hooks'
      },
      {
        type: 'paragraph',
        text: 'React Hooks are functions that let you use state and other React features without writing a class component.'
      }
    ]
  }
};

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id;
  const [blog, setBlog] = useState(null);
  const [tableOfContents, setTableOfContents] = useState([]);
  const [activeHeading, setActiveHeading] = useState('');

  useEffect(() => {
    console.log('Blog ID:', id); // Debug log
    if (id) {
      const blogData = mockBlogDetail[id];
      console.log('Blog Data:', blogData); // Debug log
      if (blogData) {
        setBlog(blogData);
        const headings = blogData.content.filter(item => item.type === 'heading');
        setTableOfContents(headings);
      }
    }
  }, [id]);

  const scrollToHeading = (headingId) => {
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!blog) {
    return (
      <div className="blog-detail-container">
        <div className="loading">
          <h2>Loading...</h2>
          <p>Blog ID: {id}</p>
          <p>Available IDs: {Object.keys(mockBlogDetail).join(', ')}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{blog.title} - TechBlog</title>
        <meta name="description" content={blog.excerpt} />
      </Head>

      <div className="blog-detail-container">
        {/* Breadcrumbs */}
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/blog">Blog</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{blog.title}</span>
        </nav>

        {/* Blog Header */}
        <header className="blog-detail-header">
          <div className="blog-hero-image">
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className="blog-header-content">
            <span className="blog-category-tag">{blog.category}</span>
            <h1>{blog.title}</h1>
          </div>
        </header>

        <div className="blog-content-wrapper">
          {/* Table of Contents - Left Sidebar */}
          <aside className="table-of-contents">
            <div className="toc-sticky">
              <h3>Table of Contents</h3>
              <ul className="toc-list">
                {tableOfContents.map((heading, index) => (
                  <li 
                    key={index} 
                    className={`toc-item toc-level-${heading.level} ${activeHeading === heading.id ? 'active' : ''}`}
                  >
                    <button onClick={() => scrollToHeading(heading.id)}>
                      {heading.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="blog-main-content">
            <article className="blog-article">
              {blog.content.map((item, index) => {
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
        </div>
      </div>
    </>
  );
}