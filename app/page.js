
"use client"
// import * as React from 'react';

// export default function HomeV2() {
//   return (
//     <main>
//       <div className="w-full h-full my-10 mx-10">
//         <h1 className="font-bold text-xl">Stock App</h1>
//         <p>Simple stock management</p>
//       </div>
//     </main>
//   );
// }



import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BoxBasic() {
  return (
    <main>
      <Box 
        component="section" 
        sx={{
          border: '2px solid #4A90E2', // Blue border color
          m: 5,
          p: 4,
          borderRadius: 2,
          backgroundColor: '#f5f5f5', // Light background color
          textAlign: 'center',
          boxShadow: 2 // Subtle shadow for depth
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, color: '#4A90E2' }}>
          Stock App 
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ mr: 2 }}
              href="/product" // Button functionality for Products
            >
              Products
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              href="/category" // Button functionality for Categories
            >
              Category
            </Button>
            <Button 
              variant="contained" 
              color="success" // Change color as needed
              sx={{ ml: 2 }} // Margin for spacing
              href="/customer" // Button functionality for Customers
            >
              Customers
            </Button>
          </li>
        </ul>
      </Box>
    </main>
  );
}
