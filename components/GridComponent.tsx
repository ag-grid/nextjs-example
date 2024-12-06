// components/GridComponent.tsx
'use client';

import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme 


import 'ag-grid-enterprise'; // Import the Enterprise features
// import { LicenseManager } from "ag-grid-enterprise";

// LicenseManager.setLicenseKey(process.env.NEXT_PUBLIC_AG_GRID_LICENSE_KEY || '');

const GridComponent = () => {

    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        { field: "athlete", filter: "agTextColumnFilter" },
        { field: "age", filter: "agNumberColumnFilter" },
        { field: "date", filter: "agDateColumnFilter" },
        { field: "country", sortable: false},
        { field: "sport"},
        { field: "gold"},
        { field: "silver"},
        { field: "bronze"},
        { field: "total"},
    ]);

    const [rowData, setRowData] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://www.ag-grid.com/example-assets/olympic-winners.json") // Fetch data from server
          .then(result => result.json()) // Convert to JSON
          .then(rowData => setRowData(rowData)); // Update state of `rowData`
    }, []);
    
    return (
        <div
          className="ag-theme-quartz-dark" // applying the Data Grid theme
          style={{ height: 750 }} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            enableCharts={true}  // Enable the Charting features
            rowSelection="multiple" // Enable multiple row selection
            cellSelection={true} // Enable cell selection
          />
        </div>
      );

}

export default GridComponent;