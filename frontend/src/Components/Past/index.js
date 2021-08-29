import React from "react";
import "./styles.scss";

const Past = ({title, date, description}) => {
    return(
        <>
           <div className="home-title">
                {title}
            </div>
            <div className="home-date">
                {date}
            </div>
            <div className="home-card-description">
                {description}
            </div>
        </>
       
    )
}

export default Past;