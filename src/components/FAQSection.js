import React from 'react';

const FAQSection = () => {
  return (
    <div id='faq' className="bg-gray-100 md:p-16 p-8 text-center">
      <h2 className="text-3xl font-bold mb-12">Frequently Asked <span className='text-blue-600'>Questions</span></h2>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h3 className="font-bold mb-2">Do I need to have prior experience?</h3>
          <p>No, the program is designed to be inclusive of all levels of experience.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h3 className="font-bold mb-2">What is the minimum system configuration required?</h3>
          <p>Any modern computer with an internet connection should be sufficient.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h3 className="font-bold mb-2">How long is the program?</h3>
          <p>The duration of the program varies but typically lasts between 6 to 12 months.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h3 className="font-bold mb-2">Is there any support available during the program?</h3>
          <p>Yes, we offer 24/7 support through our online platform and dedicated mentors.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h3 className="font-bold mb-2">Are there any exams or assessments?</h3>
          <p>Yes, there are periodic assessments and a final exam to evaluate your understanding.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h3 className="font-bold mb-2">Can I get a refund if I'm not satisfied?</h3>
          <p>Yes, we offer a 30-day money-back guarantee if you are not satisfied with the program.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
