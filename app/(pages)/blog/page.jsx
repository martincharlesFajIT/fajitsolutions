"use client";
// src/pages/blog/page.jsx
import { useState, useEffect } from 'react';
import Head from 'next/head';
import BlogHeader from '../../../components/Blog/BlogHeader';
import BlogGrid from '../../../components/Blog/BlogGrid';
import CategoryFilter from '../../../components/Blog/CategoryFilter';
import Pagination from '../../../components/Blog/Pagination';
import Breadcrumbs from '../../../components/blog/Breadcrumbs';
import '../../../components/css/blog.css';


const mockBlogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the fundamentals of Next.js and how to build modern React applications.",
    category: "Web Development",
    date: "2024-01-15",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "React Hooks Deep Dive",
    excerpt: "Understanding React Hooks and how they revolutionize component state management.",
    category: "React",
    date: "2024-01-10",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    excerpt: "When to use CSS Grid and when to use Flexbox for your layouts.",
    category: "CSS",
    date: "2024-01-05",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "JavaScript ES6 Features",
    excerpt: "Explore the most important ES6 features that every developer should know.",
    category: "JavaScript",
    date: "2024-01-01",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Node.js Performance Tips",
    excerpt: "Optimize your Node.js applications for better performance and scalability.",
    category: "Backend",
    date: "2023-12-28",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "10 min read"
  },
  {
    id: 6,
    title: "Database Design Principles",
    excerpt: "Learn the fundamental principles of designing efficient database schemas.",
    category: "Database",
    date: "2023-12-25",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "12 min read"
  },
  {
    id: 7,
    title: "API Security Best Practices",
    excerpt: "Essential security measures to protect your APIs from common threats.",
    category: "Security",
    date: "2023-12-20",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "9 min read"
  },
  {
    id: 8,
    title: "Mobile-First Design",
    excerpt: "Why mobile-first design is crucial in today's web development landscape.",
    category: "Design",
    date: "2023-12-15",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "6 min read"
  },
  {
    id: 9,
    title: "Testing React Components",
    excerpt: "Comprehensive guide to testing React components with Jest and React Testing Library.",
    category: "Testing",
    date: "2023-12-10",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "11 min read"
  },
  {
    id: 10,
    title: "DevOps for Frontend Developers",
    excerpt: "Essential DevOps concepts that frontend developers should understand.",
    category: "DevOps",
    date: "2023-12-05",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "8 min read"
  },
  {
    id: 11,
    title: "Advanced TypeScript Patterns",
    excerpt: "Explore advanced TypeScript patterns for better type safety.",
    category: "TypeScript",
    date: "2023-12-01",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "15 min read"
  },
  {
    id: 12,
    title: "GraphQL vs REST APIs",
    excerpt: "Compare GraphQL and REST APIs to choose the right approach.",
    category: "API",
    date: "2023-11-28",
    image: "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg",
    readTime: "10 min read"
  }
];

const BLOGS_PER_PAGE = 10;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState(mockBlogs);


  const categories = ['All', ...new Set(mockBlogs.map(blog => blog.category))];


  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredBlogs(mockBlogs);
    } else {
      setFilteredBlogs(mockBlogs.filter(blog => blog.category === selectedCategory));
    }
    setCurrentPage(1);
  }, [selectedCategory]);


  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Head>
        <title>Blog - TechBlog</title>
        <meta name="description" content="Explore our latest articles on web development, programming, and technology." />
      </Head>

      <div className="blog-container">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog', current: true }
          ]} 
        />

        <BlogHeader />

        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <BlogGrid blogs={currentBlogs} />

        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        <div className="results-info">
          <p>
            Showing {startIndex + 1}-{Math.min(endIndex, filteredBlogs.length)} of {filteredBlogs.length} articles
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>
      </div>
    </>
  );
}