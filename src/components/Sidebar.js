import React, { useState, useEffect } from 'react';

const Sidebar = ({ onSelectCategory, subcategories }) => {
  const [grHrOpen, setGrHrOpen] = useState(false);
  const [customerAccountsOpen, setCustomerAccountsOpen] = useState(false);

  return (
    <div className="w-64 h-full bg-gray-800 text-white">
      <div className="p-4 font-bold">Menu</div>
      <button className="p-4 w-full text-left" onClick={() => onSelectCategory('KPI Overview')}>
        KPI Overview
      </button>
      <div className="p-4 w-full text-left cursor-pointer" onClick={() => setGrHrOpen(!grHrOpen)}>
        GR/HR
      </div>
      {grHrOpen && (
        <div className="pl-8">
          {subcategories.grHr.map((item) => (
            <button key={item} className="p-2 w-full text-left" onClick={() => onSelectCategory(`GR/HR-${item}`)}>
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="p-4 w-full text-left cursor-pointer" onClick={() => setCustomerAccountsOpen(!customerAccountsOpen)}>
        Customer-Accounts
      </div>
      {customerAccountsOpen && (
        <div className="pl-8">
          {subcategories.customerAccounts.map((item) => (
            <button key={item} className="p-2 w-full text-left" onClick={() => onSelectCategory(`Customer-Accounts-${item}`)}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
