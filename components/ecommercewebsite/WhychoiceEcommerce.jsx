import './css/Ecom-website.css'

const WhychoiceEcommerce = () => {
  return (
    <section className="ecommerce-features-section">
      <div className="ecommerce-container">
        <div className="ecommerce-header">
          <h2 className="ecommerce-title">Why Choose FAJ IT Solutions</h2>
          <p className="ecommerce-description">
            Our expertise and dedication to your online business success set us apart. We provide a 
            full-spectrum e-commerce website solution, blending advanced technology with tailored 
            strategies to ensure your digital store stands out and grows.
          </p>
        </div>

        <div className="ecommerce-cards-grid">
          {/* Card 1 */}
          <div className="ecommerce-card">
            <div className="ecommerce-card-header">
              <div className="ecommerce-icon-wrapper">
                <img className="ecommerce-icon" src="/icon2.png" alt="" />
              </div>
              <h3 className="ecommerce-card-title">Tailored to your Brand</h3>
            </div>
            <div className="ecommerce-card-content">
              <p className="ecommerce-card-description">
                Your store is unique and so are our solutions.
              </p>
              <p className="ecommerce-card-subtitle">we:</p>
              <ul className="ecommerce-feature-list">
                <li>Customize every detail to match your brand identity and business goals</li>
                <li>Optimize for SEO and digital marketing from the ground up</li>
                <li>Offer flexible add-ons: loyalty programs, coupon systems, analytics dashboards, and more</li>
                <li>Ensure scalability, so your site grows with your business</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="ecommerce-card">
            <div className="ecommerce-card-header">
              <div className="ecommerce-icon-wrapper">
                <img className="ecommerce-icon" src="/icon1.png" alt="" />
              </div>
              <h3 className="ecommerce-card-title">Performance & Growth Driven</h3>
            </div>
            <div className="ecommerce-card-content">
              <p className="ecommerce-card-description">
                We focus on measurable results for your e-commerce business:
              </p>
              <ul className="ecommerce-feature-list">
                <li>Use the latest tools to increase conversions and customer retention</li>
                <li>Provide detailed analytics and reporting for all key metrics</li>
                <li>Continuously monitor, update, and enhance your site for peak performance and ROI</li>
                <li>Advise on cybersecurity best practices to keep your business safe</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="ecommerce-card">
            <div className="ecommerce-card-header">
              <div className="ecommerce-icon-wrapper">
                <img className="ecommerce-icon" src="/icon3.png" alt="" />
              </div>
              <h3 className="ecommerce-card-title">Complete E-commerce Solutions</h3>
            </div>
            <div className="ecommerce-card-content">
              <p className="ecommerce-card-description">
                Get everything you need to launch and expand your online shop:
              </p>
              <ul className="ecommerce-feature-list">
                <li>Modern UI/UX designs for seamless customer journeys</li>
                <li>Integration of robust e-commerce platforms (Shopify, WooCommerce, custom solutions)</li>
                <li>Secure payment gateways and checkout processes</li>
                <li>Responsive multi-windows</li>
                <li>Product catalog management and order automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhychoiceEcommerce