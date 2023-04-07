import React, { useEffect, useState } from 'react'
import { borderColorArray, colors } from './data'
import styled from 'styled-components'

export const StoreContext = React.createContext(null)

export default ({ children }) => {

    const [fontSize, setFontSize] = useState(24)
    const [fontFamily, setFontFamily] = useState("Roboto")
    const [bgColor, setBgColor] = useState("#282C34")
    const [brightness, setBrightness] = useState(80)
    const [color, setColor] = useState(colors[0])
    const [borderColor, setBorder] = useState(borderColorArray[0])
    const [fontWeight, setFontWeight] = useState(400)
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("Title")
    const [titleStyle, setStyle] = useState({})


    let Title = styled.h4`
    margin: 0;
    font-size: ${fontSize}px;
    color: ${color};
    opacity: ${brightness};
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    `


    const store = {
        fontSizeValue: [fontSize, setFontSize],
        fontFamilyValue: [fontFamily, setFontFamily],
        bgColorValue: [bgColor, setBgColor],
        brightnessValue: [brightness, setBrightness],
        colorValue: [color, setColor],
        borderColorValue: [borderColor, setBorder],
        fontWeightValue: [fontWeight, setFontWeight],
        imageValue: [image, setImage],
        titleValue: [title, setTitle],
        titleStyleValue: [Title, setStyle]
    }

    useEffect(() => {
        setStyle(Title);
    }, [fontSize, color, brightness, fontFamily, fontWeight])


    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}