import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#fbfbfe] text-gray-900 pt-24 pb-12 px-6 md:px-12 w-full border-t border-[#065084]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex items-center space-x-6 mb-12">
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#065084]/60 font-mono">SYS://CONTACT</span>
          <div className="flex-1 h-[1px] bg-[#065084]/20"></div>
        </div>

        {/* Title */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-sora font-bold inline-block border-b-[3px] border-[#320A6B] pb-2 tracking-tight text-[#320A6B]">
            GET IN TOUCH
          </h2>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-32">
          
          {/* Left Column */}
          <div>
            {/* YOU -> ME visual */}
            <div className="flex items-center justify-start w-full max-w-[320px] mb-12">
              {/* YOU */}
              <div className="flex flex-col items-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#065084" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-[9px] text-[#065084]/60 mt-4 tracking-[0.2em] font-sora">YOU</span>
              </div>

              {/* Dashed curved line */}
              <div className="flex-1 mx-4 h-12 relative">
                <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0 50 Q 50 -10 100 50" fill="none" stroke="#78B9B5" strokeWidth="1.5" strokeDasharray="6 6" />
                </svg>
              </div>

              {/* ME */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border border-[#065084]/20 flex items-center justify-center bg-transparent">
                  <div className="w-[52px] h-[52px] rounded-full bg-white overflow-hidden p-0.5 border border-[#065084]/30 shadow-sm">
                    <img 
                      src="Me.jpeg" 
                      alt="Himanshu Prusty - Contact Information" 
                      className="w-full h-full rounded-full grayscale object-cover" 
                    />
                  </div>
                </div>
                <span className="text-[9px] text-[#065084]/60 mt-3 tracking-[0.2em] font-sora">ME</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 font-inter text-sm md:text-base leading-relaxed max-w-md pr-4">
              Want to chat, collaborate or discuss a project? Reach out and I'll respond as quick as possible.
            </p>
          </div>

          {/* Right Column - Contacts */}
          <div className="flex flex-col justify-center space-y-2">
            
            {/* Email */}
            <a href="mailto:himanshuprusty931@gmail.com" className="group flex items-center justify-between border-b border-[#065084]/20 py-6 hover:border-[#78B9B5] transition-colors">
              <div className="flex items-start space-x-6">
                <div className="mt-1 text-[#065084] group-hover:text-[#78B9B5] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-[#065084]/60 tracking-[0.2em] mb-2 font-sora">EMAIL</div>
                  <div className="text-[#320A6B] font-inter font-medium text-sm md:text-base group-hover:text-[#065084] transition-colors">himanshuprusty931@gmail.com</div>
                </div>
              </div>
              <svg className="w-4 h-4 text-[#78B9B5] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="group flex items-center justify-between border-b border-[#065084]/20 py-6 hover:border-[#78B9B5] transition-colors">
              <div className="flex items-start space-x-6">
                <div className="mt-1 text-[#065084] group-hover:text-[#78B9B5] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-[#065084]/60 tracking-[0.2em] mb-2 font-sora">LINKEDIN</div>
                  <div className="text-[#320A6B] font-inter font-medium text-sm md:text-base group-hover:text-[#065084] transition-colors">himanshu-portfolio</div>
                </div>
              </div>
              <svg className="w-4 h-4 text-[#78B9B5] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#065084]/20 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-[9px] md:text-[10px] text-[#065084]/60 tracking-[0.2em] font-sora flex items-center gap-2">
            <span className="text-[#78B9B5] text-xs">©</span> {new Date().getFullYear()} • HIMANSHU
          </div>
          
          <div className="flex">
            {/* Social Squares */}
            {[
              { id: 'linkedin', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></> },
              { id: 'github', icon: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.32 5.32 0 0 0-1.5-3.7 4.97 4.97 0 0 0 .1-3.6s-1.18-.38-3.9 1.48a13.38 13.38 0 0 0-7 0c-2.72-1.86-3.9-1.48-3.9-1.48a4.97 4.97 0 0 0 .1 3.6 5.32 5.32 0 0 0-1.5 3.7c0 5.76 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 8 18v4" /> },
              { id: 'dribbble', icon: <><circle cx="12" cy="12" r="10" /><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" /><path d="M21.75 12.84c-6.6.14-12.14 1.83-16.22 5.08" /><path d="M14.44 21.95c-1.42-3.32-2.18-7.3-2.61-11.83" /></> },
              { id: 'twitter', icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> },
              { id: 'instagram', icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></> },
            ].map((social) => (
              <a key={social.id} href="#" aria-label={`Himanshu Prusty on ${social.id.charAt(0).toUpperCase() + social.id.slice(1)}`} className="w-12 h-12 md:w-14 md:h-14 border border-[#065084]/20 border-r-0 last:border-r flex items-center justify-center text-[#065084] hover:text-[#320A6B] hover:bg-[#065084]/5 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
