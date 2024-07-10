import React from "react";
import { Circle } from '@mui/icons-material/';

const Job = ({ title, duration,company, description }) =>{
    return(
        <div className="container-job__experience">
            <div className="circle__icon">

            <Circle sx={{fontSize: "13px"}} />    
            </div>
            <div className="empty-container"></div>
            <div className="job__experience--position-with-duration">
                <h2 className="title--h2">{title}</h2>
                <h3 className="title--h3 semiBold">{company}</h3>
                <h3 className="title--h3 regular">{duration}</h3>
            </div>  
            <div className="job__experience--description">
                <span className="job--description">{description}</span>
            </div>
        </div>
    )
};

export default Job;