import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss'
import images from '~/assets/images';

const Image = forwardRef(({ src, alt,className, ...props}, ref) => {
    const [fallBack, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(images.noImage)
    }
    return (
        <img  
            className={classNames(styles.wrapper, className)}
            src={fallBack||src} 
            ref={ref} 
            alt={alt} 
            {...props}
            onError = {handleError}
        />
    )
});

export default Image;
