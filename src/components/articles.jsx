import React from "react";
import { data } from "../data";
import {ArticleItem } from "./articleItem";
import '.././App.css';



export let Articles = ({ Title }) => {
    return (
        <ul className="article__items-list">
            {data.map((a, index) => <li className="article__item" key={index}><ArticleItem props={a} /></li>)}
        </ul>
    )
}