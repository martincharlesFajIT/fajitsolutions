import InfiniteScroll from '@/components/InfinityScroll';
import React from 'react'

const AspIndustry = () => {
    const items = [
  { content: <p>Retail & E-commerce</p> },
  { content: <p>Banking</p> },
  { content: <p>Finance & Insurance</p> },
  { content: <p>Travel & Hospitality</p> },
  { content: <p>Health Care</p> },
  { content: <p>Utilities</p> },
  { content: <p>Automotive</p> },
  { content: <p>Education</p> },
  { content: <p>Healthcare</p> },
];
  return (
  <div style={{height: '500px', position: 'relative'}}>
    <h2 className='text-center'>Industry Experience & Expertise</h2>
  <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={0.5}
    autoplayDirection="up"
    pauseOnHover={true}
  />
  
</div>
  )
}

export default AspIndustry