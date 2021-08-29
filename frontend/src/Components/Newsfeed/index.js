import React from "react";
import "./styles.scss";

const News = ({user, title, date, description}) => {
    return(
        <>
            <div className="news-handle">
                @{user}
            </div>
            <div className="news-achievement-title">
                {title}
            </div>
            <div className="news-date">
                {date}
            </div>
            <div className="news-card-description">
               {description}
            </div> 
        </>
       
    )
}

export default News;