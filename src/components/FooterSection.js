import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const FooterSection = () => {
  return (
    <div id='support' className="bg-gray-900 text-white p-4">
        <h1 className='text-center py-4 font-serif text-4xl'>Accredian - <span className='text-gray-300 text-xl font-mono italic  text-nowrap'> credentials that matters </span></h1>
      <div className="hidden max-w-6xl mx-auto md:flex flex-col  border-t-2 lg:flex-row justify-between">
        <div className='mt-4'> 
          <h3 className="font-bold mb-4">Programs</h3>
          <ul className='space-y-4 font-medium'>
            <li>Data Science & AI</li>
            <li>Product Management</li>
          <li>Business Analytics</li>           
          <li>Digital Transformation</li>
            <li>Business Management</li>
          <li>Project Management</li>
          <li>Business Strategy</li>
          <li>Leadership</li>  
          </ul>
        </div>
        <div className='mt-4'>
        <h3 className="font-bold mb-4">Accredian </h3>
        <ul className='space-y-4 font-medium'>
            <li>About</li>
            <li>Career</li>
          <li>Blog</li>           
          <li>Admission Policy</li>
            <li>Referral Policy</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Master Faqs</li>  
          </ul>
        </div>
        <div className='mt-4'>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <p className='font-semibold'>Email us : admissions@accredian.com</p>
          <p className='mt-4 font-semibold'>Phone: +91 9079653292 (9 AM - 7 PM)</p>
          <div className="mt-4 flex space-x-4">
            {/* Social media icons */}
            <a href="https://www.facebook.com/accredianlearn/" target='_blank' className="text-white"><FaFacebookF /></a>
            <a href="https://www.instagram.com/accredian_edu/" target='_blank' className="text-white"><FaInstagram /></a>
            <a href="https://x.com/accredianedu" target='_blank' className="text-white"><FaTwitter /></a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
