import './App.css';
import { Articles } from './components/articles';
import React, { useContext } from "react";
import Grid from '@mui/material/Grid';
import { StoreContext } from './store';
import { Tooltip } from './components/tooltip';
import { Header } from './components/Header';
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Article } from './components/article';



function App() {

  const { fontSizeValue: [fontSize, setFontSize],
    fontFamilyValue: [fontFamily, setFontFamily],
    bgColorValue: [bgColor, setBgColor],
    brightnessValue: [brightness, setBrightness],
    colorValue: [color, setColor],
    borderColorValue: [borderColor, setBorder],
    fontWeightValue: [fontWeight, setFontWeight] } = useContext(StoreContext)

  

  return (
    <Grid backgroundColor={`${bgColor}`} minHeight='100vh'>
      <BrowserRouter>
        <Header />
        <Grid className='App-wrapper'>
          <div className="App" >
            <Routes>
              <Route path="/" exact element={<Articles />} />
              <Route path="/Article" element={<Article />} />
            </Routes>
          </div>
          <Tooltip />
        </Grid>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
