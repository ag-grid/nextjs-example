// components/ChartComponent.tsx
'use client';

import { useEffect, useState } from 'react';
import { AgCharts } from 'ag-charts-react'; // React Chart Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid


const ChartComponent = () => {
    const [rowData, setRowData] = useState([]);
    
    const [chartOptions, setChartOptions] = useState({
        data: [rowData],
        series: [
          { type: 'bar', xKey: 'country', yKey: 'total' },
          { type: "scatter", xKey: "country", yKey: "gold" },
        ]
    });

    useEffect(() => {
        fetch("https://www.ag-grid.com/example-assets/olympic-winners.json") // Fetch data from server
            .then(result => result.json()) // Convert to JSON
            .then(rowData => {
                setRowData(rowData); // Update state of `rowData`
            }); // Update state of `rowData`
    }, []);

    useEffect(() => {
        if (rowData.length > 0) { // Only update if data is available
          setChartOptions((prevOptions) => ({
            ...prevOptions,
            data: rowData, // Update the data in chartOptions
          }));
        }
    }, [rowData]); // Re-run this effect when `rowData` changes

    return (
        <div className="ag-theme-quartz-dark" style={{ height: 750 }}>
            <AgCharts options={chartOptions} />
        </div>
    )
};

export default ChartComponent;