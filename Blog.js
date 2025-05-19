import React from 'react';
import './Blog.css';
import cli from "./images/CSS.jpg";

const blogPosts = [
  {
    title: "Why Medical Transcription is Still Vital in 2025",
    date: "May 1, 2025",
    summary: "Explore how transcription supports clinical accuracy, EMR entry, and doctor efficiency.",
  },
  {
    title: "Top 5 Transcription Tools for Clinics",
    date: "April 18, 2025",
    summary: "We compare the best transcription tools compatible with EHR and HIPAA standards.",
  },
  {
    title: "HIPAA Compliance for Medical Transcriptionists",
    date: "March 30, 2025",
    summary: "A guide on privacy rules, data handling, and compliance in transcription work.",
  },
];

const Blog = () => {
  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${cli})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '40px 20px',
    color: '#fff',  // Text color white for contrast
  };

  return (
    <div className="blog-container" style={backgroundStyle}>
      <h2>Industry Insights & Resources</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.summary}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
