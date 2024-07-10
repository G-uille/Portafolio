import React from 'react';
import ProfileDos from '../../assets/images/fotocvDos.png';

const UserAvatar = () => {
    return (
        <div>
             <img src={ProfileDos} className='img-avatar'/>
        </div>
    )
};

export default UserAvatar;