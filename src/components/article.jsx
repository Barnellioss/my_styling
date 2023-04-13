import React, { useContext } from "react";
import { StoreContext } from "../store";
import styled from "styled-components";
import { Grid } from "@mui/material";



export const Article = () => {


    const { fontSizeValue: [fontSize, setFontSize],
        fontFamilyValue: [fontFamily, setFontFamily],
        brightnessValue: [brightness, setBrightness],
        colorValue: [color, setColor],
        fontWeightValue: [fontWeight, setFontWeight],
        imageValue: [image, setImage],
        titleValue: [title, setTitle],
        titleStyleValue: [Title, setStyle], } = useContext(StoreContext)


    const Text = styled.p`
    font-size: ${fontSize}px;
    color: ${color};
    opacity: ${brightness};
    font-family: ${fontFamily}, sans-serif;
    font-weight: ${fontWeight};
    `

    debugger
    return (
        <Grid>
            <div>
                <img className="article-item__image" src={require('../images/' + image)} alt="image about article" />
                <Title className="article-item__title">{title}</Title>
            </div>
            <Grid>
                <div>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore quo excepturi totam laborum adipisci, aliquid ipsam laboriosam rerum vitae, maiores iusto cumque eius reiciendis. Doloribus cum impedit at harum!
                        Laboriosam corrupti, veniam commodi ratione porro rem quisquam, odio dignissimos id ipsum nemo fuga deserunt reiciendis minus praesentium recusandae a eligendi incidunt nobis, velit dolore nesciunt in vel consequuntur. Laudantium!
                        Necessitatibus dignissimos quibusdam cupiditate cum omnis ex quo beatae vitae expedita obcaecati, aperiam, ea iusto alias at. Error atque, repellendus aliquam, incidunt odio ipsa non odit ex minima tempore similique?
                        Distinctio soluta repudiandae dignissimos deleniti incidunt dicta quas ullam reiciendis natus. Quibusdam suscipit, libero explicabo, necessitatibus saepe odit, soluta dolorum aperiam debitis aliquid ea molestiae perferendis itaque ex nisi architecto.</Text>
                </div>
                <div>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore quo excepturi totam laborum adipisci, aliquid ipsam laboriosam rerum vitae, maiores iusto cumque eius reiciendis. Doloribus cum impedit at harum!
                        Laboriosam corrupti, veniam commodi ratione porro rem quisquam, odio dignissimos id ipsum nemo fuga deserunt reiciendis minus praesentium recusandae a eligendi incidunt nobis, velit dolore nesciunt in vel consequuntur. Laudantium!
                        Necessitatibus dignissimos quibusdam cupiditate cum omnis ex quo beatae vitae expedita obcaecati, aperiam, ea iusto alias at. Error atque, repellendus aliquam, incidunt odio ipsa non odit ex minima tempore similique?
                        Distinctio soluta repudiandae dignissimos deleniti incidunt dicta quas ullam reiciendis natus. Quibusdam suscipit, libero explicabo, necessitatibus saepe odit, soluta dolorum aperiam debitis aliquid ea molestiae perferendis itaque ex nisi architecto.</Text>
                </div>
                <div>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore quo excepturi totam laborum adipisci, aliquid ipsam laboriosam rerum vitae, maiores iusto cumque eius reiciendis. Doloribus cum impedit at harum!
                        Laboriosam corrupti, veniam commodi ratione porro rem quisquam, odio dignissimos id ipsum nemo fuga deserunt reiciendis minus praesentium recusandae a eligendi incidunt nobis, velit dolore nesciunt in vel consequuntur. Laudantium!
                        Necessitatibus dignissimos quibusdam cupiditate cum omnis ex quo beatae vitae expedita obcaecati, aperiam, ea iusto alias at. Error atque, repellendus aliquam, incidunt odio ipsa non odit ex minima tempore similique?
                        Distinctio soluta repudiandae dignissimos deleniti incidunt dicta quas ullam reiciendis natus. Quibusdam suscipit, libero explicabo, necessitatibus saepe odit, soluta dolorum aperiam debitis aliquid ea molestiae perferendis itaque ex nisi architecto.</Text>
                </div>
                <div>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore quo excepturi totam laborum adipisci, aliquid ipsam laboriosam rerum vitae, maiores iusto cumque eius reiciendis. Doloribus cum impedit at harum!
                        Laboriosam corrupti, veniam commodi ratione porro rem quisquam, odio dignissimos id ipsum nemo fuga deserunt reiciendis minus praesentium recusandae a eligendi incidunt nobis, velit dolore nesciunt in vel consequuntur. Laudantium!
                        Necessitatibus dignissimos quibusdam cupiditate cum omnis ex quo beatae vitae expedita obcaecati, aperiam, ea iusto alias at. Error atque, repellendus aliquam, incidunt odio ipsa non odit ex minima tempore similique?
                        Distinctio soluta repudiandae dignissimos deleniti incidunt dicta quas ullam reiciendis natus. Quibusdam suscipit, libero explicabo, necessitatibus saepe odit, soluta dolorum aperiam debitis aliquid ea molestiae perferendis itaque ex nisi architecto.</Text>
                </div>
            </Grid>
        </Grid >
    )
}
