import React, { useState } from 'react';
import styles from './css/AppCostCalculator.module.css';

export default function AppCostCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    platform: '',
    projectType: '',
    signupMethod: [],
    userProfile: '',
    mapIntegration: [],
    imageFeatures: [],
    paymentGateway: [],
    adminPanel: '',
    analytics: [],
    appSecurity: [],
    // Form fields
    projectName: '',
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handlePlatformSelect = (platform) => {
    setFormData({ ...formData, platform });
  };

  const handleProjectTypeSelect = (type) => {
    setFormData({ ...formData, projectType: type });
  };

  const handleSignupMethodToggle = (method) => {
    const currentMethods = formData.signupMethod;
    if (currentMethods.includes(method)) {
      setFormData({
        ...formData,
        signupMethod: currentMethods.filter(m => m !== method)
      });
    } else {
      setFormData({
        ...formData,
        signupMethod: [...currentMethods, method]
      });
    }
  };

  const handleUserProfileSelect = (profile) => {
    setFormData({ ...formData, userProfile: profile });
  };

  const handleMapIntegrationToggle = (feature) => {
    const currentFeatures = formData.mapIntegration;
    if (currentFeatures.includes(feature)) {
      setFormData({
        ...formData,
        mapIntegration: currentFeatures.filter(f => f !== feature)
      });
    } else {
      setFormData({
        ...formData,
        mapIntegration: [...currentFeatures, feature]
      });
    }
  };

  const handleImageFeatureToggle = (feature) => {
    const currentFeatures = formData.imageFeatures;
    if (currentFeatures.includes(feature)) {
      setFormData({
        ...formData,
        imageFeatures: currentFeatures.filter(f => f !== feature)
      });
    } else {
      setFormData({
        ...formData,
        imageFeatures: [...currentFeatures, feature]
      });
    }
  };

  const handlePaymentGatewayToggle = (gateway) => {
    const currentGateways = formData.paymentGateway;
    if (currentGateways.includes(gateway)) {
      setFormData({
        ...formData,
        paymentGateway: currentGateways.filter(g => g !== gateway)
      });
    } else {
      setFormData({
        ...formData,
        paymentGateway: [...currentGateways, gateway]
      });
    }
  };

  const handleAdminPanelSelect = (type) => {
    setFormData({ ...formData, adminPanel: type });
  };

  const handleAnalyticsToggle = (feature) => {
    const currentFeatures = formData.analytics;
    if (currentFeatures.includes(feature)) {
      setFormData({
        ...formData,
        analytics: currentFeatures.filter(f => f !== feature)
      });
    } else {
      setFormData({
        ...formData,
        analytics: [...currentFeatures, feature]
      });
    }
  };

  const handleSecurityToggle = (feature) => {
    const currentFeatures = formData.appSecurity;
    if (currentFeatures.includes(feature)) {
      setFormData({
        ...formData,
        appSecurity: currentFeatures.filter(f => f !== feature)
      });
    } else {
      setFormData({
        ...formData,
        appSecurity: [...currentFeatures, feature]
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // Validate all required fields
    if (!formData.projectName || !formData.name || !formData.email || !formData.phoneNumber) {
      alert('Please fill all required fields');
      return;
    }

    try {
      // Show loading state (optional)
      const submitButton = document.querySelector(`.${styles.submitButton}`);
      if (submitButton) {
        submitButton.textContent = 'SUBMITTING...';
        submitButton.disabled = true;
      }

      // Send data to API
      const response = await fetch('/api/submit-calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you! Your app cost estimate request has been submitted successfully. We will send you a detailed estimate via email shortly.');
        
        // Reset form or redirect
        // router.push('/thank-you'); // Optional: redirect to thank you page
        
        // Reset the calculator
        setCurrentStep(1);
        setFormData({
          platform: '',
          projectType: '',
          signupMethod: [],
          userProfile: '',
          mapIntegration: [],
          imageFeatures: [],
          paymentGateway: [],
          adminPanel: '',
          analytics: [],
          appSecurity: [],
          projectName: '',
          name: '',
          email: '',
          phoneNumber: ''
        });
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting your request. Please try again.');
    } finally {
      // Reset button state
      const submitButton = document.querySelector(`.${styles.submitButton}`);
      if (submitButton) {
        submitButton.textContent = 'GET THE ESTIMATE';
        submitButton.disabled = false;
      }
    }
  };

  const handleNext = () => {
    console.log('Current Step:', currentStep);
    console.log('Form Data:', formData);
    
    if (currentStep === 1 && formData.platform) {
      setCurrentStep(2);
    } else if (currentStep === 2 && formData.projectType) {
      setCurrentStep(3);
    } else if (currentStep === 3 && formData.signupMethod.length > 0) {
      setCurrentStep(4);
    } else if (currentStep === 4 && formData.userProfile) {
      setCurrentStep(5);
    } else if (currentStep === 5 && formData.mapIntegration.length > 0) {
      setCurrentStep(6);
    } else if (currentStep === 6 && formData.imageFeatures.length > 0) {
      setCurrentStep(7);
    } else if (currentStep === 7 && formData.paymentGateway.length > 0) {
      setCurrentStep(8);
    } else if (currentStep === 8 && formData.adminPanel) {
      setCurrentStep(9);
    } else if (currentStep === 9 && formData.analytics.length > 0) {
      setCurrentStep(10);
    } else if (currentStep === 10 && formData.appSecurity.length > 0) {
      setCurrentStep(11);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className="container">
        {/* Step 1: Platform Selection */}
        {currentStep === 1 && (
          <div className={styles.stepContainer}>
            <h1 className={styles.mainTitle}>Choose the desired platform</h1>
            
            <div className={styles.optionsGrid}>
              <div className={styles.optionItem}>
                <button
                  onClick={() => handlePlatformSelect('android')}
                  className={styles.iconButton}
                >
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7V8H5v8z"/>
                    <path d="M8 1v4"/>
                    <path d="M16 1v4"/>
                    <path d="M3 8h18"/>
                    <circle cx="8.5" cy="12.5" r="0.5" fill="currentColor"/>
                    <circle cx="15.5" cy="12.5" r="0.5" fill="currentColor"/>
                  </svg>
                </button>
                <div className={styles.radioWrapper}>
                  <input
                    type="radio"
                    name="platform"
                    id="android"
                    checked={formData.platform === 'android'}
                    onChange={() => handlePlatformSelect('android')}
                    className={styles.radioInput}
                  />
                  <label htmlFor="android" className={styles.radioLabel}>Android App</label>
                </div>
              </div>

              <div className={styles.optionItem}>
                <button
                  onClick={() => handlePlatformSelect('ios')}
                  className={styles.iconButton}
                >
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M12 7c-1.66 0-3 1.34-3 3 0 1.31.84 2.41 2 2.83V17h2v-4.17c1.16-.42 2-1.52 2-2.83 0-1.66-1.34-3-3-3z"/>
                  </svg>
                </button>
                <div className={styles.radioWrapper}>
                  <input
                    type="radio"
                    name="platform"
                    id="ios"
                    checked={formData.platform === 'ios'}
                    onChange={() => handlePlatformSelect('ios')}
                    className={styles.radioInput}
                  />
                  <label htmlFor="ios" className={styles.radioLabel}>iOS App</label>
                </div>
              </div>

              <div className={styles.optionItem}>
                <button
                  onClick={() => handlePlatformSelect('both')}
                  className={styles.iconButton}
                >
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="5" y="3" width="14" height="18" rx="2"/>
                    <rect x="7" y="8" width="10" height="10" rx="1"/>
                    <circle cx="12" cy="5.5" r="0.5" fill="currentColor"/>
                    <line x1="12" y1="19" x2="12" y2="20"/>
                  </svg>
                </button>
                <div className={styles.radioWrapper}>
                  <input
                    type="radio"
                    name="platform"
                    id="both"
                    checked={formData.platform === 'both'}
                    onChange={() => handlePlatformSelect('both')}
                    className={styles.radioInput}
                  />
                  <label htmlFor="both" className={styles.radioLabel}>Both</label>
                </div>
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <button
                onClick={handleNext}
                disabled={!formData.platform}
                className={`${styles.nextButton} ${!formData.platform ? styles.disabled : ''}`}
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Project Type Selection */}
        {currentStep === 2 && (
          <div className={styles.stepContainer}>
            <h1 className={styles.mainTitle}>What type of project do you need?</h1>
            
            <div className={styles.projectGrid}>
              <div className={styles.optionItem}>
                <button
                  onClick={() => handleProjectTypeSelect('ecommerce')}
                  className={styles.iconButton}
                >
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 9h18l-1 10H4L3 9z"/>
                    <path d="M3 9l1-4h16l1 4"/>
                    <circle cx="9" cy="22" r="1"/>
                    <circle cx="15" cy="22" r="1"/>
                  </svg>
                </button>
                <div className={styles.radioWrapper}>
                  <input
                    type="radio"
                    name="projectType"
                    id="ecommerce"
                    checked={formData.projectType === 'ecommerce'}
                    onChange={() => handleProjectTypeSelect('ecommerce')}
                    className={styles.radioInput}
                  />
                  <label htmlFor="ecommerce" className={styles.radioLabel}>E-commerce</label>
                </div>
              </div>

              <div className={styles.optionItem}>
                <button
                  onClick={() => handleProjectTypeSelect('social')}
                  className={styles.iconButton}
                >
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    <path d="M20.5 7.5L16 12l4.5 4.5M3.5 7.5L8 12l-4.5 4.5"/>
                  </svg>
                </button>
                <div className={styles.radioWrapper}>
                  <input
                    type="radio"
                    name="projectType"
                    id="social"
                    checked={formData.projectType === 'social'}
                    onChange={() => handleProjectTypeSelect('social')}
                    className={styles.radioInput}
                  />
                  <label htmlFor="social" className={styles.radioLabel}>Social Media</label>
                </div>
              </div>

              <div className={styles.optionItem}>
                <button
                  onClick={() => handleProjectTypeSelect('booking')}
                  className={styles.iconButton}
                >
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                    <circle cx="12" cy="16" r="1" fill="currentColor"/>
                  </svg>
                </button>
                <div className={styles.radioWrapper}>
                  <input
                    type="radio"
                    name="projectType"
                    id="booking"
                    checked={formData.projectType === 'booking'}
                    onChange={() => handleProjectTypeSelect('booking')}
                    className={styles.radioInput}
                  />
                  <label htmlFor="booking" className={styles.radioLabel}>Booking</label>
                </div>
              </div>

              <div className={styles.optionItem}>
                <button
                  onClick={() => handleProjectTypeSelect('cab')}
                  className={styles.iconButton}
                >
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 11v5a2 2 0 002 2h14a2 2 0 002-2v-5"/>
                    <path d="M5 11l2-5h10l2 5"/>
                    <circle cx="7.5" cy="15.5" r="1.5"/>
                    <circle cx="16.5" cy="15.5" r="1.5"/>
                  </svg>
                </button>
                <div className={styles.radioWrapper}>
                  <input
                    type="radio"
                    name="projectType"
                    id="cab"
                    checked={formData.projectType === 'cab'}
                    onChange={() => handleProjectTypeSelect('cab')}
                    className={styles.radioInput}
                  />
                  <label htmlFor="cab" className={styles.radioLabel}>Cab App</label>
                </div>
              </div>

              <div className={styles.customOption}>
                <div className={styles.optionItem}>
                  <button
                    onClick={() => handleProjectTypeSelect('custom')}
                    className={styles.iconButton}
                  >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="4" y="4" width="16" height="16" rx="2"/>
                      <rect x="9" y="9" width="6" height="6"/>
                      <line x1="9" y1="1" x2="9" y2="4"/>
                      <line x1="15" y1="1" x2="15" y2="4"/>
                      <line x1="9" y1="20" x2="9" y2="23"/>
                      <line x1="15" y1="20" x2="15" y2="23"/>
                      <line x1="20" y1="9" x2="23" y2="9"/>
                      <line x1="20" y1="15" x2="23" y2="15"/>
                      <line x1="1" y1="9" x2="4" y2="9"/>
                      <line x1="1" y1="15" x2="4" y2="15"/>
                    </svg>
                  </button>
                  <div className={styles.radioWrapper}>
                    <input
                      type="radio"
                      name="projectType"
                      id="custom"
                      checked={formData.projectType === 'custom'}
                      onChange={() => handleProjectTypeSelect('custom')}
                      className={styles.radioInput}
                    />
                    <label htmlFor="custom" className={styles.radioLabel}>Custom App</label>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.navigationButtons}>
              <button
                onClick={handleBack}
                className={styles.backButton}
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.projectType}
                className={`${styles.nextButton} ${!formData.projectType ? styles.disabled : ''}`}
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Sign-up Method Selection */}
        {currentStep === 3 && (
          <div className={styles.signupContainer}>
            <div className={styles.progressIndicator}>
              <span className={styles.currentStep}>1</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalSteps}>10</span>
            </div>

            <h1 className={styles.signupTitle}>How would you like your users to sign-up?</h1>
            
            <div className={styles.checkboxList}>
              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.signupMethod.includes('email')}
                  onChange={() => handleSignupMethodToggle('email')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.signupMethod.includes('email') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Email</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.signupMethod.includes('social')}
                  onChange={() => handleSignupMethodToggle('social')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.signupMethod.includes('social') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Social Media</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.signupMethod.includes('phone')}
                  onChange={() => handleSignupMethodToggle('phone')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.signupMethod.includes('phone') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Phone Number</span>
              </label>
            </div>

            <div className={styles.signupNavigation}>
              <button
                onClick={handleBack}
                className={styles.backButton}
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={formData.signupMethod.length === 0}
                className={`${styles.nextButton} ${formData.signupMethod.length === 0 ? styles.disabled : ''}`}
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* Step 4: User Profile Type */}
        {currentStep === 4 && (
          <div className={styles.signupContainer}>
            <div className={styles.progressIndicator}>
              <span className={styles.currentStep}>2</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalSteps}>10</span>
            </div>

            <h1 className={styles.signupTitle}>What type of user profile would you prefer?</h1>
            
            <div className={styles.checkboxList}>
              <label className={styles.checkboxWrapper}>
                <input
                  type="radio"
                  name="userProfile"
                  checked={formData.userProfile === 'simple'}
                  onChange={() => handleUserProfileSelect('simple')}
                  className={styles.radioInput}
                />
                <span className={styles.checkboxLabel}>Simple Profile</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="radio"
                  name="userProfile"
                  checked={formData.userProfile === 'complex'}
                  onChange={() => handleUserProfileSelect('complex')}
                  className={styles.radioInput}
                />
                <span className={styles.checkboxLabel}>Complex Profile</span>
              </label>
            </div>

            <div className={styles.signupNavigation}>
              <button
                onClick={handleBack}
                className={styles.backButton}
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.userProfile}
                className={`${styles.nextButton} ${!formData.userProfile ? styles.disabled : ''}`}
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Map Integration */}
        {currentStep === 5 && (
          <div className={styles.signupContainer}>
            <div className={styles.progressIndicator}>
              <span className={styles.currentStep}>3</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalSteps}>10</span>
            </div>

            <h1 className={styles.signupTitle}>What type of map integration would you prefer?</h1>
            
            <div className={styles.checkboxList}>
              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.mapIntegration.includes('simple')}
                  onChange={() => handleMapIntegrationToggle('simple')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.mapIntegration.includes('simple') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Simple Map</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.mapIntegration.includes('geofencing')}
                  onChange={() => handleMapIntegrationToggle('geofencing')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.mapIntegration.includes('geofencing') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Geofencing</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.mapIntegration.includes('search')}
                  onChange={() => handleMapIntegrationToggle('search')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.mapIntegration.includes('search') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Search Places</span>
              </label>
            </div>

            <div className={styles.signupNavigation}>
              <button
                onClick={handleBack}
                className={styles.backButton}
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={formData.mapIntegration.length === 0}
                className={`${styles.nextButton} ${formData.mapIntegration.length === 0 ? styles.disabled : ''}`}
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Image Management */}
        {currentStep === 6 && (
          <div className={styles.signupContainer}>
            <div className={styles.progressIndicator}>
              <span className={styles.currentStep}>4</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalSteps}>10</span>
            </div>

            <h1 className={styles.signupTitle}>How do you want your users to manage and upload images?</h1>
            
            <div className={styles.checkboxList}>
              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.imageFeatures.includes('direct')}
                  onChange={() => handleImageFeatureToggle('direct')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.imageFeatures.includes('direct') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Direct Upload</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.imageFeatures.includes('capture')}
                  onChange={() => handleImageFeatureToggle('capture')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.imageFeatures.includes('capture') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Capture and Upload</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.imageFeatures.includes('editing')}
                  onChange={() => handleImageFeatureToggle('editing')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.imageFeatures.includes('editing') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Image Editing</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.imageFeatures.includes('album')}
                  onChange={() => handleImageFeatureToggle('album')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.imageFeatures.includes('album') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Create Album</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.imageFeatures.includes('filters')}
                  onChange={() => handleImageFeatureToggle('filters')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.imageFeatures.includes('filters') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Filters</span>
              </label>
            </div>

            <div className={styles.signupNavigation}>
              <button
                onClick={handleBack}
                className={styles.backButton}
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={formData.imageFeatures.length === 0}
                className={`${styles.nextButton} ${formData.imageFeatures.length === 0 ? styles.disabled : ''}`}
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* Step 7: Payment Gateway */}
        {currentStep === 7 && (
          <div className={styles.signupContainer}>
            <div className={styles.progressIndicator}>
              <span className={styles.currentStep}>5</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalSteps}>10</span>
            </div>

            <h1 className={styles.signupTitle}>Which payment gateway would you like to integrate?</h1>
            
            <div className={styles.checkboxList}>
              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.paymentGateway.includes('stripe')}
                  onChange={() => handlePaymentGatewayToggle('stripe')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.paymentGateway.includes('stripe') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Stripe</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.paymentGateway.includes('paypal')}
                  onChange={() => handlePaymentGatewayToggle('paypal')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.paymentGateway.includes('paypal') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>PayPal</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.paymentGateway.includes('razorpay')}
                  onChange={() => handlePaymentGatewayToggle('razorpay')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.paymentGateway.includes('razorpay') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Razorpay</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.paymentGateway.includes('square')}
                  onChange={() => handlePaymentGatewayToggle('square')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.paymentGateway.includes('square') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Square</span>
              </label>
            </div>

            <div className={styles.signupNavigation}>
              <button
                onClick={handleBack}
                className={styles.backButton}
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={formData.paymentGateway.length === 0}
                className={`${styles.nextButton} ${formData.paymentGateway.length === 0 ? styles.disabled : ''}`}
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* Step 8: Admin Panel */}
        {currentStep === 8 && (
          <div className={styles.signupContainer}>
            <div className={styles.progressIndicator}>
              <span className={styles.currentStep}>6</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalSteps}>10</span>
            </div>

            <h1 className={styles.signupTitle}>What type of admin panel would you need?</h1>
            
            <div className={styles.checkboxList}>
              <label className={styles.checkboxWrapper}>
                <input
                  type="radio"
                  name="adminPanel"
                  checked={formData.adminPanel === 'basic'}
                  onChange={() => handleAdminPanelSelect('basic')}
                  className={styles.radioInput}
                />
                <span className={styles.checkboxLabel}>Basic Admin Panel</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="radio"
                  name="adminPanel"
                  checked={formData.adminPanel === 'advanced'}
                  onChange={() => handleAdminPanelSelect('advanced')}
                  className={styles.radioInput}
                />
                <span className={styles.checkboxLabel}>Advanced Admin Panel</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="radio"
                  name="adminPanel"
                  checked={formData.adminPanel === 'none'}
                  onChange={() => handleAdminPanelSelect('none')}
                  className={styles.radioInput}
                />
                <span className={styles.checkboxLabel}>No Admin Panel</span>
              </label>
            </div>

            <div className={styles.signupNavigation}>
              <button
                onClick={handleBack}
                className={styles.backButton}
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.adminPanel}
                className={`${styles.nextButton} ${!formData.adminPanel ? styles.disabled : ''}`}
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* Step 9: Analytics */}
        {currentStep === 9 && (
          <div className={styles.signupContainer}>
            <div className={styles.progressIndicator}>
              <span className={styles.currentStep}>7</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalSteps}>10</span>
            </div>

            <h1 className={styles.signupTitle}>Which analytics features would you like to include?</h1>
            
            <div className={styles.checkboxList}>
              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.analytics.includes('userTracking')}
                  onChange={() => handleAnalyticsToggle('userTracking')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.analytics.includes('userTracking') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>User Behavior Tracking</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.analytics.includes('crashReporting')}
                  onChange={() => handleAnalyticsToggle('crashReporting')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.analytics.includes('crashReporting') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Crash Reporting</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.analytics.includes('performance')}
                  onChange={() => handleAnalyticsToggle('performance')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.analytics.includes('performance') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Performance Monitoring</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.analytics.includes('customEvents')}
                  onChange={() => handleAnalyticsToggle('customEvents')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.analytics.includes('customEvents') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Custom Event Tracking</span>
              </label>
            </div>

            <div className={styles.signupNavigation}>
              <button
                onClick={handleBack}
                className={styles.backButton}
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={formData.analytics.length === 0}
                className={`${styles.nextButton} ${formData.analytics.length === 0 ? styles.disabled : ''}`}
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* Step 10: App Security */}
        {currentStep === 10 && (
          <div className={styles.signupContainer}>
            <div className={styles.progressIndicator}>
              <span className={styles.currentStep}>8</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalSteps}>10</span>
            </div>

            <h1 className={styles.signupTitle}>What security features does your app need?</h1>
            
            <div className={styles.checkboxList}>
              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.appSecurity.includes('encryption')}
                  onChange={() => handleSecurityToggle('encryption')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.appSecurity.includes('encryption') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Data Encryption</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.appSecurity.includes('twoFactor')}
                  onChange={() => handleSecurityToggle('twoFactor')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.appSecurity.includes('twoFactor') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Two-Factor Authentication</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.appSecurity.includes('biometric')}
                  onChange={() => handleSecurityToggle('biometric')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.appSecurity.includes('biometric') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>Biometric Authentication</span>
              </label>

              <label className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={formData.appSecurity.includes('sslPinning')}
                  onChange={() => handleSecurityToggle('sslPinning')}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  {formData.appSecurity.includes('sslPinning') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </span>
                <span className={styles.checkboxLabel}>SSL Certificate Pinning</span>
              </label>
            </div>

            <div className={styles.signupNavigation}>
              <button
                onClick={handleBack}
                className={styles.backButton}
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={formData.appSecurity.length === 0}
                className={`${styles.nextButton} ${formData.appSecurity.length === 0 ? styles.disabled : ''}`}
              >
                FINISH
              </button>
            </div>
          </div>
        )}

        {/* Final Form */}
        {currentStep === 11 && (
          <div className={styles.finalFormContainer}>
            <div className={styles.formHeader}>
              <h1 className={styles.formTitle}>You are almost there...</h1>
              <p className={styles.formSubtitle}>
                Please fill out this short form and you will immediately get a detailed estimate.
              </p>
            </div>

            <div className={styles.formContent}>
              <div className={styles.leftSection}>
                <h2 className={styles.brandTitle}>Choose Faj IT Solutions</h2>
                <p className={styles.brandSubtitle}>Because quality matters</p>
                
                <div className={styles.floatingIcons}>
                  <div className={styles.floatingIcon1}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9b59b6" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="16 10 12 14 8 10"/>
                    </svg>
                  </div>
                  <div className={styles.floatingIcon2}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f39c12" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                  <div className={styles.floatingIcon3}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="12" cy="5" r="1"/>
                      <circle cx="12" cy="19" r="1"/>
                      <circle cx="16.24" cy="7.76" r="1"/>
                      <circle cx="7.76" cy="16.24" r="1"/>
                      <circle cx="16.24" cy="16.24" r="1"/>
                      <circle cx="7.76" cy="7.76" r="1"/>
                    </svg>
                  </div>
                  <div className={styles.floatingIcon4}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <rect x="7" y="7" width="10" height="10"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className={styles.rightSection}>
                <form className={styles.estimateForm}>
                  <input
                    type="text"
                    name="projectName"
                    placeholder="YOUR PROJECT NAME"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                  
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="YOUR PHONE NUMBER"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                  
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className={styles.submitButton}
                    disabled={!formData.projectName || !formData.name || !formData.email || !formData.phoneNumber}
                  >
                    GET THE ESTIMATE
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}