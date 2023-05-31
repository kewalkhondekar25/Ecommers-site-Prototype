import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const SocialMedia = () => {
    return (
        <article className='sm'>

            <div className='ig' >
                <InstagramIcon />
                <span>Share</span>
            </div>

            <div className='fb'>
                <FacebookIcon />
                <span>Like</span>
            </div>

            <div className='twt'>
                <TwitterIcon/>
                <span>Tweet</span>
            </div>

            <div className='em'>
            <EmailIcon/>
            <span>Mail</span>
            </div>
        </article>
    )
}

export default SocialMedia
