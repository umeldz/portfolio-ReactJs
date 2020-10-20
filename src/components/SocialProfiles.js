import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';


const SocialProfile = props =>{
        const {icon, link} = props.socialProfile;

        return(
            <div style={{display:'inline-block'}}>
                <a href={link}><img style={{width:35, height:35, margin:10}}  src={icon} alt='profile'/></a>
            </div>
        )
}


const SocialProfiles = () =>(
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE=>{
                    return(
                        <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
                    );
                })
            }
        </div>
    </div>
)


export default SocialProfiles;