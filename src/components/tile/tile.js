import React from 'react'
import PropTypes from 'prop-types';

import styles from './tile.module.scss'


const Tile = ({ author, date, heading, image, link, summary }) => {
    const containerClass = styles['tile']
    const dateClass = styles['tile__date']
    const headingContainerClass = styles['tile__heading-container']
    const headingClass = styles['tile__heading']
    const imageContainerClass = styles['tile__image-container']
    const imageClass = styles['tile__image']
    const summaryClass = styles['tile__summary']
    const wrapperClass = styles['tile__wrapper']

    return (
        <div className={containerClass}>
            <div  className={wrapperClass}>
                <div className={imageContainerClass}>
                    <picture>
                        <img src={image.url} className={imageClass} alt={image.description}/>
                    </picture>
                </div>
                <div className={headingContainerClass}>
                    <a className={styles['tile__heading-link']} href={link} >
                        <h1 className={headingClass}>{heading}</h1>
                    </a>
                    {!!date && <time className={dateClass} dateTime={date} />}
                    {!!summary && <p className={summaryClass}>{summary}</p>}
                    {!!author && author.name}
                </div>
            </div>
        </div>
    )
}

Tile.propTypes = {
    author: PropTypes.string,
    date: PropTypes.string,
    heading: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    summary: PropTypes.string,
};

export default Tile
