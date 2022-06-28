import React from 'react'
import perfume from '../images/image-product-desktop.jpg'
import perfume2 from '../images/image-product-mobile.jpg'
import './Card2.css'

export default function Card2(){
    return (
        <div>
<img  src={perfume} alt="perfume-avatar" className='image1'/>
<img  src={perfume2} alt="perfume-avatar" className='image2'/>
</div>
    );
}