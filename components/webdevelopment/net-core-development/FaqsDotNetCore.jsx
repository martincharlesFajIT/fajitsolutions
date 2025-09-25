// components/FAQSection.jsx
"use client";
import React, { useState } from 'react';
import './css/FaqsDotNetMvc.css'
import FAQSection from '@/components/FAQSection';
import faqsdotnetcore from '/public/data/faqsdotnetcore.json';

const FaqsDotNetCore = () => {

  return (

        <div>

<FAQSection
        faqData={faqsdotnetcore} 
        title="Laravel"
      />
    </div>
 
  );
};

export default FaqsDotNetCore;