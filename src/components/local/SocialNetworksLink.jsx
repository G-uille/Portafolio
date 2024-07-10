import React from 'react'
import { LinkedIn, Facebook } from '@mui/icons-material/';
import BtnSocialNetwork from '../BtnSocialNetwork';
const SocialNetworksLink = () => {
  return (
    <div className='container-network-links'>

      <BtnSocialNetwork link="https://www.linkedin.com/in/guillermo-benítez-5b509a281/">
        <LinkedIn className='network-link__icon' sx={{fontSize: '15px'}}/>
        Contáctame
      </BtnSocialNetwork>

{/*       <BtnSocialNetwork >
        <Facebook className='network-link__icon' sx={{fontSize: '15px'}}/>
        Facebook
      </BtnSocialNetwork> */}

    </div>
  )
};

export default SocialNetworksLink;
