
import React from 'react';
import BigBlueButton from './styled-components/Button';
import HeaderStyles from './styled-components/HeaderStyles';
import { Add, ImportContacts } from '@mui/icons-material';
import PropTypes from 'prop-types';
const Header = ({ mainView, toggleMainView }) => {


    return (
        <HeaderStyles>
            <div className="logo" />
            <nav>
                <ul>
                    {!mainView && <li><BigBlueButton onClick={toggleMainView}><ImportContacts fontSize="large" /></BigBlueButton></li>}
                    {mainView && <li><BigBlueButton onClick={toggleMainView}><Add fontSize="large" /></BigBlueButton></li>}
                </ul>
            </nav>


        </HeaderStyles>
    )
}


export default Header

Header.propTypes = {
    mainView: PropTypes.bool,
    toggleMainView: PropTypes.func
};