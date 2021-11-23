import styled from 'styled-components';

const BigBlueButton = styled.button`
background: #009bc1;
    color: #f3f6f6;
    display: inline-block;
    vertical-align: top;
    padding: 0 1.5rem
;
    line-height: 45px;
    border-radius: 100
px
;
    text-decoration: none!important;
    border: none;
    font-weight: 700;
    outline: none!important;
    transition: all .2s ease;
    font-size: .87em;
    font-family: DM Sans,sans-serif;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
   svg{
       vertical-align:middle;
   }
   :hover{
       opacity:70%;
   }
`;

export default BigBlueButton;