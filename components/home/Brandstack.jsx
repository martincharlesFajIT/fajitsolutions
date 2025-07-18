"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import '../../app/globals.css'
import { 
  FaAws, 
  FaDocker, 
  FaReact, 
  FaLaravel, 
  FaBootstrap, 
  FaNodeJs, 
  FaAngular 
} from "react-icons/fa6";
import { 
  SiMysql, 
  SiMongodb, 
  SiJavascript, 
  SiNextdotjs, 
  SiRedis, 
  SiFlutter, 
  SiFirebase 
} from "react-icons/si";

const Brandstack = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

  const techStack = [
    [
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
    [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ]
  ];

  return (
    <section className="brands-section">
      <div className="what-we-do-badge">
        <span className="purple-dot"></span>
        What We Do
      </div>
      <div className="main-heading">
        <h1 style={{
              fontSize: isMobile ? '32px' : '70px',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '30px',
              lineHeight: '1.2'
            }}>
              Our&nbsp;
              <span style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #8b5cf6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Tech Stack
              </span>
            </h1>
      </div>

      <div className="earth-container">
        <div className="earth-sphere">
          <div>
            <Image 
              src="https://cdn.pixabay.com/photo/2019/11/12/09/49/matrix-4620651_960_720.jpg" 
              alt="Tech atmosphere"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>

      {techStack.map((row, rowIndex) => (
        <div key={rowIndex} className="brand-logos">
          {row.map((tech, techIndex) => (
            <div key={techIndex} className="logo-item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      ))}

      <div className="global-presence">
        <span className="presence-label">Our Global Presence</span>
        <div className="presence-tags">
          <span className="tag active">UAE</span>
          <span className="tag">UK</span>
          <span className="tag">Pakistan</span>
        </div>
      </div>
    </section>
  )
}

export default Brandstack