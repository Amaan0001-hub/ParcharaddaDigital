

"use client";

import { usePathname } from 'next/navigation';
import React from 'react';
const Aboutbanner = () => {
  const pathname = usePathname();
  
  const pageTitles = {
    '/': 'Home',
    '/about': 'About Us',
    '/pricing': 'Pricing',
    '/contact': 'Contact Us',
    '/services': 'Our Services',
    '/blog': 'Blog',
    '/faq': 'FAQ',
    '/privacy-policy': 'Privacy Policy',
    '/team-details': 'Team Details',
  };

  // Get page title with fallback
  const getPageTitle = () => {
    // Check if exact path exists in pageTitles
    if (pageTitles[pathname]) {
      return pageTitles[pathname];
    }
    
    // For dynamic routes like /blog/[slug]
    if (pathname?.startsWith('/blog/')) {
      return 'Blog Details';
    }
    
    // Generic fallback - convert path to readable format
    if (!pathname || pathname === '/') return 'Home';
    
    const path = pathname.split('/').filter(Boolean).pop();
    return path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Generate breadcrumb items
  const getBreadcrumbs = () => {
    if (!pathname || pathname === '/') return [{ name: 'Home', path: '/' }];
    
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ name: 'Home', path: '/' }];
    
    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      const name = pageTitles[currentPath] || 
                   path.split('-')
                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                     .join(' ');
      
      breadcrumbs.push({ 
        name, 
        path: currentPath,
        isLast: index === paths.length - 1
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();
  const pageTitle = getPageTitle();

  return (
    <section className="relative section-padding">
      <div className="container relative mt-4 py-[140px] bg-center bg-cover rounded-xl bg-about-bradcomb px-4 mx-auto">
        {/* Background Shapes */}
        <div className="absolute left-0 -translate-y-1/2 top-1/2">
          <img src="/img/breadcrumb-shape.png" alt="" className="animate-float-bob-y"/>
        </div>
        <div className="absolute right-0 -translate-y-1/2 top-1/2">
          <img src="/img/breadcrumb-shape-2.png" alt="" className="animate-float-bob-y"/>
        </div>
        
        {/* Page Title */}
        <h1 className="mb-6 text-4xl font-extrabold text-center capitalize">
          {pageTitle}
        </h1>
        
        {/* Breadcrumb */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-4 border-2 border-[#BF20FC] rounded-full bg-white shadow-lg">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.path} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {crumb.isLast ? (
                  <span className="font-semibold text-primary">{crumb.name}</span>
                ) : (
                  <a 
                    href={crumb.path} 
                    className="text-gray-600 transition-colors hover:text-primary"
                  >
                    {crumb.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutbanner;