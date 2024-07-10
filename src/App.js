import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import KPIOverview from './components/KPIOverview';
import * as XLSX from 'xlsx';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('KPI Overview');
  const [subcategories, setSubcategories] = useState({ grHr: [], customerAccounts: [] });

  useEffect(() => {
    fetch('C:\Users\m.asfour\Documents\kpi_data.xlsx')
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });

        const grHrSheet = workbook.Sheets['GR/HR'];
        const grHrData = XLSX.utils.sheet_to_json(grHrSheet).map(row => row.subcategory);

        const customerAccountsSheet = workbook.Sheets['Customer-Accounts'];
        const customerAccountsData = XLSX.utils.sheet_to_json(customerAccountsSheet).map(row => row.subcategory);

        setSubcategories({ grHr: grHrData, customerAccounts: customerAccountsData });
      });
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex">
      <Sidebar onSelectCategory={handleSelectCategory} subcategories={subcategories} />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">{selectedCategory}</h1>
        {selectedCategory === 'KPI Overview' && <KPIOverview />}
        {/* Add more conditions to render other components based on selectedCategory */}
      </div>
    </div>
  );
}

export default App;
