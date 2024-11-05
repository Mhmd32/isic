import React from 'react';

export const Header = () => {
  return (
    <div className="text-center mb-8">
      <img 
        src="https://raw.githubusercontent.com/moci-qatar/assets/main/logo.png"
        alt="وزارة التجارة والصناعة" 
        className="mx-auto h-32 mb-4"
      />
      <h1 className="text-4xl font-bold text-primary mb-2">البحث المتقدم</h1>
    </div>
  );
};