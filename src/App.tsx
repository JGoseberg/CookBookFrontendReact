import React from 'react';
import './App.css';
import CustomButton from "./Button";
import DataFetcher from "./DataFetcher";
import {Box, Typography} from "@mui/material";

const App: React.FC = () => {
  const handleClick = () =>{
    alert("Button Clicked!");
  }

  return (
      <div>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography variant="h4" gutterBottom>
          Welcome to my App
        </Typography>
        <CustomButton label="Click Me" onClick={handleClick}></CustomButton>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <DataFetcher />
      </Box>
      </div>
  )
}



export default App;
