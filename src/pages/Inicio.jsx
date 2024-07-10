import React from 'react'
import Description from '../components/local/Description';
import UserImage from '../components/local/UserImage.jsx';
import SocialNetworksLink from '../components/local/SocialNetworksLink.jsx';
import WorkExperience from '../components/local/WorkExperience.jsx';
import Projects from '../components/local/Projects.jsx';
import DesingSection from '../components/local/DesingSection.jsx';
import UserAvatar from '../components/local/UserAvatar.jsx';

const Inicio = () => {
    return (
        <div className='inicio__layout'>
            <div className='container-inicio__description'>
                <UserAvatar />
                <div className='container-inicio__description-with-icon'>
                    <Description />
                    <SocialNetworksLink />
                </div>
                <UserImage />
            </div>
            <WorkExperience />
            <Projects />
            <DesingSection />
        </div>
    )
};

export default Inicio;
