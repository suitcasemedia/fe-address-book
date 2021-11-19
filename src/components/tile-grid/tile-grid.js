import React from 'react'
import PropTypes from 'prop-types';
import Tile from '../tile/tile'

import styles from './tile-grid.module.scss'

const TileGrid = ({
     errorMsg,
     isBusy,
     items ,
     heading,
     showDate = false,
     showSummary = false
}) => {
    const containerClass = styles['tile-grid']
    const tilesContainerClass = styles['tile-grid__container']
    const tilesHeadingClass = styles['tile-grid__heading']

    if (errorMsg){
        return(
            <h2>{errorMsg}</h2>
        )
    }

   
        const renderDefaultTile = ({ author, displayDate, title, link, image, summary }) => (
            <Tile 
                author={author}
                date={showDate && displayDate}
                heading={title}
                key={link}
                image={image}
                link={link}
                summary={showSummary && summary}
            />
        )
    
        const renderTiles = (items) =>
            items.map((item) => renderDefaultTile(item))
    
        return (
            <div className={containerClass}>
                {heading && (
                    <div className={tilesHeadingClass}>
                        {heading}
                    </div>
                )}
               
                    {
                        isBusy
                            ? <h2> loading data...</h2>
                            :  <div className={tilesContainerClass}>{renderTiles(items)}</div>
                    }
                
    
            </div>
        )

    
    
}
TileGrid.propTypes = {
    showDate: PropTypes.bool,
    items: PropTypes.array,
    heading: PropTypes.string,
    showSummary: PropTypes.bool,
    isBusy: PropTypes.bool,
    errorMsg: PropTypes.string,
   
};

export default TileGrid