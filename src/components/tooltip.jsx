import React, { useContext } from "react";
import '.././App.css';
import { StoreContext } from "../store";
import 'reactjs-popup/dist/index.css';
import { List, ListItem } from "@mui/material";
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import { TextDecrease, TextIncrease } from "@mui/icons-material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { bgColors, borderColorArray, colors, fontWeightMarks, fonts } from "../data"
import FormatBoldIcon from '@mui/icons-material/FormatBold';





export const Tooltip = () => {

  const { fontSizeValue: [fontSize, setFontSize],
    fontFamilyValue: [fontFamily, setFontFamily],
    bgColorValue: [bgColor, setBgColor],
    brightnessValue: [brightness, setBrightness],
    colorValue: [color, setColor],
    borderColorValue: [borderColor, setBorder],
    fontWeightValue: [fontWeight, setFontWeight] } = useContext(StoreContext)

 


  return (
    <Grid borderLeft={`2px solid ${borderColor}`} padding="5px">
      <Grid container spacing={2} marginTop="5px" alignItems="center" direction="row" flexWrap='nowrap'>

        <Grid item xs={10} sx={{ cursor: "pointer" }} onClick={() => { brightness > 0.1 ? setBrightness(brightness - 0.01) : setBrightness(brightness) }}>
          <LightModeOutlinedIcon sx={{ color: `${color}`, fontSize: "small", marginBottom: "3px", marginLeft: "5px" }} />
        </Grid>

        <Grid item xs={80}>
          <Slider
            size="small"
            defaultValue={brightness}
            aria-label="Small"
            value={brightness}
            valueLabelDisplay="auto"
            className="slider"
            step={0.01}
            min={0.1}
            max={1}
            onChange={(e) => setBrightness(e.target.value)}
            sx={{ color: `${color}` }}
          />
        </Grid>

        <Grid item xs={10} sx={{ cursor: "pointer" }} onClick={() => { brightness < 1 ? setBrightness(brightness + 0.01) : setBrightness(1) }}>
          <LightModeOutlinedIcon sx={{ color: `${color}` }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} marginTop="5px" alignItems="center" direction="row" flexWrap='nowrap'>

        <Grid item xs={10} sx={{ cursor: "pointer" }} onClick={() => { fontSize > 16 ? setFontSize(fontSize - 4) : setFontSize(16) }}>
          <TextDecrease sx={{ color: `${color}` }} />
        </Grid>

        <Grid item xs={80}>
          <Slider
            size="small"
            defaultValue={fontSize}
            className="slider"
            step={4}
            marks
            value={fontSize}
            valueLabelDisplay="auto"
            min={16}
            max={32}
            sx={{ color: `${color}` }}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </Grid>

        <Grid item xs={10} sx={{ cursor: "pointer" }} onClick={() => { fontSize < 32 ? setFontSize(fontSize + 4) : setFontSize(32) }}>
          <TextIncrease sx={{ color: `${color}` }} />
        </Grid>
      </Grid>



      <Grid container spacing={2} marginTop="5px" alignItems="center" direction="row" flexWrap='nowrap'>

        <Grid item xs={10} sx={{ cursor: "pointer" }} onClick={() => { fontWeight > 100 ? setFontWeight(fontWeight - 100) : setFontWeight(100) }}>
          <FormatBoldIcon sx={{ color: `${color}` }} />
        </Grid>

        <Grid item xs={80}>
          <Slider
            aria-label="Custom marks"
            defaultValue={fontWeight}
            step={100}
            value={fontWeight}
            valueLabelDisplay="auto"
            min={100}
            max={800}
            marks
            sx={{ color: `${color}` }}
            onChange={(e) => setFontWeight(e.target.value)}
          />
        </Grid>

        <Grid item xs={10} sx={{ cursor: "pointer" }} onClick={() => { fontWeight < 800 ? setFontWeight(fontWeight + 100) : setFontWeight(800) }}>
          <FormatBoldIcon sx={{ color: `${color}` }} />
        </Grid>
      </Grid>




      <div className="popup-wrapper">
        <div className="popup__item-wrapper fonts-wrapper">
          <List sx={{ maxWidth: '360px', position: "absolute" }} disablePadding>
            {fonts.map((a, index) =>
              <ListItem onClick={() => setFontFamily(fonts[index])} sx={{ cursor: "pointer", color: `${color}`, maxWidth: "230px" }} className={`fonts__list-item ${a === fontFamily ? "fonts__list-item--active" : ""}`} key={index}>
                {a}
              </ListItem>
            )}
          </List>
        </div>

        <div className="popup__item-wrapper circles-wrapper">
          <List sx={{ width: '100%', maxWidth: 360, display: "flex", flexDirection: "row", flexWrap: "nowrap", marginTop: '240px', backgroundColor: `${bgColor === bgColors[0] ? bgColor : bgColor === bgColors[1] ? bgColor : bgColors[0]}` }} disablePadding>
            {colors.map((a, index) =>
              <ListItem onClick={() => { setColor(colors[index]); setBgColor(bgColors[index]); setBorder(borderColorArray[index]) }} sx={{ cursor: "pointer", width: "50px", margin: "5px", height: "50px", borderRadius: "50%", backgroundColor: `${a}` }} key={index}>
              </ListItem>
            )}
          </List>
        </div>
      </div>
    </Grid>
  )
}