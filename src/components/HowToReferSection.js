import React from 'react';
import docs from './docs.png';
import payment from './payment.png';
import profile from './Profile.png';
const HowToReferSection = () => {
  return (
    <div id='benefits' className="bg-gray-100 md:p-16 p-8 text-center">
      <h2 className="md:text-4xl text-3xl font-bold mb-12">How Do  <span className='text-blue-600'> I Refer? </span></h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-around">
        <div className="mb-8 lg:mb-0">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-4 mr-4">
            <img src={profile} alt="Step 1" className="mx-auto w-10 mb-4" />
            <p className='md:text-lg'>Submit referrals easily via our web/mobile referral section.</p>
          </div>
        </div>
        <div className="mb-8 lg:mb-0">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-4 mr-4">
            <img src={docs} alt="Step 2" className="mx-auto mb-4 w-10" />
            <p className='md:text-lg'>Earn rewards once your referral joins an accredian program.</p>
          </div>
        </div>
        <div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-4 mr-4">
            <img src={payment} alt="Step 1" className="mx-auto w-8 mb-4" />
            <p className='md:text-lg'>Both parties receive a bonus 30 days after program enrollment..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToReferSection;
