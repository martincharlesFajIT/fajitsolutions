// components/FAQSection.jsx
"use client";
import React, { useState } from 'react';
import FAQSection from '@/components/FAQSection';
import faqsdotnetcore from '/public/data/faqsdotnetcore.json';

const FaqsDotNetCore = () => {

  return (

        <div>

<FAQSection
        faqData={faqsdotnetcore} 
        title=".Net Core"
      />
    </div>
 
  );
};

export default FaqsDotNetCore;