import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/40 backdrop-blur-xl border-t border-white/50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-text-primary font-bold text-lg font-sora">
          Himanshu
        </div>
        
        <div className="text-text-secondary text-sm font-inter">
          © {new Date().getFullYear()} All rights reserved.
        </div>
        
        <div className="flex space-x-6 font-inter text-sm">
          <a href="#" className="text-text-secondary hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="#" className="text-text-secondary hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-text-secondary hover:text-primary transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
