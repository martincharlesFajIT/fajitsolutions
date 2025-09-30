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
import Shuffle from '../ShuffleText';

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
      <Shuffle
        text="OUR TECH STACK"
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={false}
        triggerOnHover={false}
        respectReducedMotion={true}
      />
      <div className="earth-container">
        <div className="earth-sphere">
          <div>
            <Image
              src="https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_960_720.jpg"
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
    </section>
  )
}

export default Brandstack