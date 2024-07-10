import React from 'react';
import BtnSocialNetwork from '../BtnSocialNetwork';
import backgroundImageLPChat from "../../assets/images/lpchat.png";
import backgroundImageBillPy from "../../assets/images/billpy.png";
import { ArrowForward } from '@mui/icons-material';

const Project = ({ src, name, image,  secondName, description, icon1, icon2, icon3, icon4 }) => {
    return (
        <div className='container-project__lpchat'>

            <div className='container-project__lpchat--img-with-description' 
            /* style={{  backgroundImage: image === "lpchat" ? `url(${backgroundImageLPChat})` :  `url(${backgroundImageBillPy})`}} */>
                <img src={src} className='img-notebook__projects' alt='' />
                <div className="job__experience--position-with-duration">
                    <h2 className="title--h2 medium">{name}</h2>
                    <h3 className="title--h3 semiBold project">{secondName}</h3>
                    <div className='job__experience--icons'>
                        <BtnSocialNetwork >
                            {icon1} CorelDraw
                        </ BtnSocialNetwork >
                        <BtnSocialNetwork >
                            {icon2} Photoshop
                        </ BtnSocialNetwork >
                        <BtnSocialNetwork >
                            {icon3} Javascript
                        </ BtnSocialNetwork >
                        <BtnSocialNetwork >
                            {icon4} React.js
                        </ BtnSocialNetwork >
                    </div>
            <div className="job__experience--description lpchat">
                <span className="job--description">{description}</span>
            </div>
            <a href='https://www.lpsoft.com.py/' target='_blank' className='btn-search-more'>Conocer más <ArrowForward sx={{ fontSize: "15px", marginLeft: "10px" }}/> </a>
                </div>

            </div>
        </div>
    )
};

export default Project;
