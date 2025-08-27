"use client";
import React from 'react';
import './css/CybersecurityServices.css'; // Your separate CSS file
import {
    GoShieldLock, GoServer, GoChecklist, GoGear,
    GoCloud, GoPeople, GoFileSubmodule
} from 'react-icons/go';
import DecryptedText from '../Dycripted-Text';
import RotatingText from '../Rotate-Text';
import MagicBento from '../MagicBento';

const CybersecurityServices = () => {
    return (

        <div className="cybersecurity-container">
            <div className="content-wrapper">
                <div className="header-section">
                    <h1 className="main-title">

                        Cyber Security Service
                        <RotatingText
                            texts={['Penetration', 'Cloud Security', 'Data Security', 'MSSP']}
                            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </h1>

                    <p className="subtitle">
                        <DecryptedText text="As a top cybersecurity services provider in The USA, UK, Canada, the Middle East and Australia, we apply 
            Zero-Trust principles to capitalize on AI and human-led services." />
                    </p>
                </div>
                       <MagicBento
                        textAutoHide={true}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="132, 0, 255"
                    />
            </div>
        </div>
    );
};

export default CybersecurityServices;