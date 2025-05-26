'use client';

import { useEffect, useState } from 'react';

const sections = ['legend', 'about', 'projects', 'contact'];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let current = '';
  //     sections.forEach((id) => {
  //       const el = document.getElementById(id);
  //       console.log(el, 'el')
  //       if (el) {
  //         const rect = el.getBoundingClientRect();
  //           console.log(rect, 'rect')
  //         if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
  //           current = id;

  //         }
  //       }
  //     });
  //     setActiveSection(current);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll();

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [activeSection]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 px-6 flex justify-around z-50 opacity-70 border-t border-white/10 backdrop-blur">
      {sections.map((section: string) => (
        <a
          key={section}
          href={`#${section}`}
          className={`transition hover:text-gray-400 ${
            activeSection === section ? 'text-blue-400 font-semibold underline' : ''
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </nav>
  );
}
