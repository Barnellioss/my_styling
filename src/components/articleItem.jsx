import React, { useContext } from "react";
import ".././App.css";
import Grid from '@mui/material/Grid';
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../store";





export const ArticleItem = ({ props}) => {
    const { imageValue: [image, setImage],
        titleValue: [title, setTitle],
        titleStyleValue: [Title, setStyle], } = useContext(StoreContext)

    return (
        <Grid>
            <Link onClick={() => { setImage(props.image); setTitle(props.smallTitle)}} to='/Article'>
                <div>
                    <img className="article-item__image" src={require('../images/' + props.image)} alt="image about article" />
                    <Title className="article-item__title">{props.smallTitle}</Title>
                </div>
            </Link>
        </Grid >
    )
}
