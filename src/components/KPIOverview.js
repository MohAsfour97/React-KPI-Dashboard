import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import KPIChart from './KPIChart';

const KPIOverview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('C:\Users\m.asfour\Documents\kpi_data.xlsx')
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setData(jsonData);
      });
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <div>
          <KPIChart data={data} />
          {data.map((row, index) => (
             <div key={index} className="mt-4">
             <p>Actual KPI Value: {row.actual}</p>
             <p>Target KPI Value: {row.target}</p>
             {row.actual === row.target && <p className="text-green-500">Actual value equals target value!</p>}
           </div>
         ))}
       </div>
     ) : (
       <p>Loading...</p>
     )}
   </div>
 );
};

export default KPIOverview;