import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import HowToReferSection from './components/HowToReferSection';
import ReferralBenefitsSection from './components/ReferralBenefitsSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
import ReferralModal from './components/ReferralModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HeroSection onReferNowClick={handleReferNowClick} />
      <HowToReferSection />
      <ReferralBenefitsSection onReferNowClick={handleReferNowClick}  />
      <FAQSection />
      <FooterSection />
      <ReferralModal open={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default App;
