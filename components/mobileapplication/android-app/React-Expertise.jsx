'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { TbBrandJavascript } from "react-icons/tb";
import { SiBootstrap } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandAzure } from "react-icons/tb";
import { SiSteamdb } from "react-icons/si";
import { SiRealm } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiReactos } from "react-icons/si";
import { SiReduxsaga } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbRobot } from "react-icons/tb";
import { LiaRandomSolid } from "react-icons/lia";
import { SiJest } from "react-icons/si";
import { BsFillRocketFill } from "react-icons/bs";
import { FaRegFileCode } from "react-icons/fa6";
import { IoLogoOctocat } from "react-icons/io5";

import {
    FaReact,
    FaAws,
} from 'react-icons/fa';
import {
    SiFlutter,
    SiFirebase,
} from 'react-icons/si';

import '../css/TechExpertiseSection.css';

const ReactExpertise = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('Frontend');
    const sectionRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const techCategories = {
        'Frontend': [
            { name: 'JavaScript', icon: <TbBrandJavascript />, color: '#ffe367ff' },
            { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7b18fdff' },
            { name: 'React Native', icon: <FaReact />, color: '#52fff6ff' },
            { name: 'TypeScript', icon: <SiTypescript />, color: '#3981daff' },
        ],
        'Backend': [
            { name: 'Apollo', icon: <SiApollographql />, color: '#ffffffff' },
            { name: 'GraphQL', icon: <GrGraphQl />, color: '#E10098' },
            { name: 'RESTful APIs', icon: <TbApi />, color: '#512BD4' },
        ],
        'Database': [
            { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
            { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
            { name: 'Azure', icon: <TbBrandAzure />, color: '#1575F9' },
            { name: 'Pouchdb', icon: <SiSteamdb />, color: '#15f99aff' },
            { name: 'Realm', icon: <SiRealm />, color: '#b62c2cff' },
        ],
        'React Tools': [
            { name: 'Expo', icon: <SiExpo />, color: '#61DAFB' },
            { name: 'Reactnav', icon: <SiReactquery />, color: '#a2d1f8ff' },
            { name: 'Reactotron', icon: <SiReactos />, color: '#FFCA28' },
            { name: 'ReduxPersist', icon: <SiRedux />, color: '#31a2f8ff' },
            { name: 'ReduxSause', icon: <SiReduxsaga />, color: '#2496ED' }
        ],
        'Testing Tools': [
            { name: 'Detox', icon: <TbRobot />, color: '#61DAFB' },
            { name: 'Enzyme', icon: <LiaRandomSolid />, color: '#FFCA28' },
            { name: 'Jest', icon: <SiJest />, color: '#FF9900' },
        ],
        'UI kITS': [
            { name: 'Ignite', icon:<BsFillRocketFill />, color: '#1ab1dbff' },
            { name: 'NativeBase', icon: <FaRegFileCode />, color: '#02569B' },
            { name: 'UI kitten', icon: <IoLogoOctocat />, color: '#ffa928ff' },
        ]
    };

    return (
        <section className="mp-tech-section" ref={sectionRef}>
            {/* Background Effects */}
            <div className="mp-background-effects">
                <div className="mp-grid-pattern" />
                <div className="mp-gradient-orb-1" />
                <div className="mp-gradient-orb-2" />
                <div className="mp-noise-overlay" />
            </div>

            {/* Floating Tech Icons Background */}
            <div className="mp-floating-icons">
                {Object.values(techCategories).flat().map((tech, index) => (
                    <div
                        key={index}
                        className="mp-floating-icon"
                        style={{
                            '--delay': `${index * 0.5}s`,
                            '--duration': `${20 + Math.random() * 10}s`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    >
                        {tech.icon}
                    </div>
                ))}
            </div>

            <div className="mp-te-container">
                <div className="mp-content-wrapper">
                    {/* Left Content */}
                    <div className={`mp-left-content ${isVisible ? 'visible' : ''}`}>
                        <h2 className="mp-title">
                            Robust Expertise in<br />
                            Leveraging Advanced<br />
                            Technologies
                        </h2>
                        <p className="mp-description">
                            The technology stack plays a critical role in shaping the functionality, UI/UX, and
                            performance of your mobile application. Here's a glimpse into the world of diverse
                            technologies that our top app developers UK leverage to develop enthralling mobile
                            applications.
                        </p>
                    </div>

                    {/* Right Tech Display */}
                    <div className={`mp-right-content ${isVisible ? 'visible' : ''}`}>
                        {/* Tab Navigation */}
                        <div className="mp-tab-nav">
                            {Object.keys(techCategories).map((category) => (
                                <button
                                    key={category}
                                    className={`mp-tab-button ${activeTab === category ? 'active' : ''}`}
                                    onClick={() => setActiveTab(category)}
                                >
                                    <span>{category}</span>
                                    <div className="mp-tab-indicator" />
                                </button>
                            ))}
                        </div>

                        {/* Tech Icons Display */}
                        <div className="mp-tech-display">
                            <div className="mp-tech-grid">
                                {techCategories[activeTab].map((tech, index) => (
                                    <div
                                        key={tech.name}
                                        className="mp-tech-card"
                                        style={{
                                            '--index': index,
                                            '--color': tech.color
                                        }}
                                    >
                                        <div className="mp-tech-card-inner">
                                            <div className="mp-icon-wrapper">
                                                <div className="mp-icon-container">
                                                    {tech.icon}
                                                </div>
                                                <div className="mp-icon-glow" />
                                                <div className="mp-icon-ring" />
                                            </div>
                                            <span className="mp-tech-name">{tech.name}</span>

                                            {/* Hover Effects */}
                                            <div className="mp-card-bg" />
                                            <div className="mp-card-shine" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReactExpertise;