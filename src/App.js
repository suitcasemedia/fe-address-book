import React from 'react';
import AddressessAndForm  from './components/AddressessAndForm ';
//import DisplayAddressess from './components/DisplayAddesses';
import Header from './components/Header';
import styled from 'styled-components';


const AddressMod = styled.div`
margin: 0px auto 0px auto;
width: 100%;
background: #ffeded;
padding: 50px 0px;
color:#555;
h1{
 
  text-align:center
}
`

function useToggle(initialValue = true) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(v => !v);

  }, []);
  return [value, toggle];
}

export default function App() {

  const [mainView, toggleMainView] = useToggle()

  return (
    <>
      <Header mainView={mainView} toggleMainView={toggleMainView} />
      <AddressMod>
        <h1>Address Book</h1>
        <AddressessAndForm mainView={mainView} toggleMainView={toggleMainView} />
      </AddressMod>


    </>
  );
}
