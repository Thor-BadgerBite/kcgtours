import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { SEO } from './SEO';
import { Footer } from './Footer';

export const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // GTM Conversion Tracking
    window.dataLayer ??= [];
    window.dataLayer.push({
      event: 'thank_you_page_view',
      conversion_type: 'inquiry'
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F0] flex flex-col">
      <SEO 
        title="Thank You" 
        description="Thank you for your booking request. We will contact you shortly."
      />

      {/* Simple Header for Thank You Page */}
      <nav className="bg-white px-4 h-[80px] text-[#404041] sticky top-0 z-50 shadow-sm flex items-center border-b border-gray-100">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
          <button 
            onClick={() => navigate('/')} 
            className="text-[#69857A] hover:text-dark font-medium flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center">
            <img 
              src="/images/logo-new.png" 
              alt="KCG Tours" 
              className="h-[40px] md:h-[50px] w-auto cursor-pointer" 
              onClick={() => navigate('/')} 
            />
          </div>
          <div className="w-[120px] hidden md:block"></div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-100 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#69857A] opacity-5 rounded-bl-full pointer-events-none" />
          
          <div className="flex justify-center mb-6">
            <div className="bg-green-50 p-4 rounded-full">
              <CheckCircle size={80} className="text-[#69857A]" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Thank You for Your Booking!
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            We have received your request and will contact you shortly to confirm your pickup point and exact pickup time.
          </p>
          
          <div className="bg-[#F7F7F0] p-6 rounded-xl mb-10 border border-[#69857A]/10">
            <p className="text-gray-700 font-medium">
              Please ensure your contact details are accurate. We will reach out via email, phone or WhatsApp.
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 bg-[#69857A] hover:bg-[#5a7369] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Back to Tours
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};
