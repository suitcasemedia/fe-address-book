import React from 'react'
import PropTypes from 'prop-types';
import Tile from '../tile/tile'

import styles from './tile-grid.module.scss'

const TileGrid = ({
    items,
    heading,
    showDate = false,
    showSummary = false
})=> {
    const containerClass = styles['tile-grid']
    const tilesContainerClass = styles['tile-grid__container']
    const tilesHeadingClass = styles['tile-grid__heading']

    const renderDefaultTile = ({ author, displayDate, title, link, image, summary }) => (
        <Tile
            author={ author}
            date={showDate && displayDate}
            heading={title}
            key={link}
            image={image}
            link={link}
            summary={showSummary && summary}
        />
    )

    const renderTiles = (items) =>
        items.map((item) =>  renderDefaultTile(item))

    return (
        <div className={containerClass}>
            {heading && (
                <div className={tilesHeadingClass}>
                    {heading}
                </div>
            )}
            <div className={tilesContainerClass}>
                {renderTiles(items)}
            </div>
        </div>
    )
}
TileGrid.propTypes = {
    showDate: PropTypes.bool,
    items: PropTypes.function,
    heading: PropTypes.string,
    showSummary: PropTypes.boolean
};

export default TileGrid
