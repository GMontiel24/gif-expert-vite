import React from 'react';
import { Images } from '../lib';

interface GifItemProps {
    image: Images
}

export const GifItem: React.FC<GifItemProps> = ({ image }) => {

    return (
        <div className='card'>
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
        </div>
    )
}
