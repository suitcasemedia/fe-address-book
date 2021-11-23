/* eslint-disable no-undef */
import React from 'react';
import { mount,shallow, render} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';

configure({ adapter: new Adapter() });

describe('I displays the button for switching to addresses view', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      mainView : false,
      toggleMainView : ()=>{},
       
    };
    wrapper = mount(<Header  {...defaultProps} />);
    console.log("should show contacts icon", wrapper.debug());
   
  });
 
  it('it displays the + button', () => {
    const contactsIcon = '<ImportContacts />';
    expect(wrapper.containsMatchingElement(contactsIcon)).toEqual(true);
    
  })

});

describe('The button displays the plus icon', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      mainView : true,
      toggleMainView : ()=>{},
       
    };
    wrapper = shallow(<Header {...defaultProps} />);

    console.log( wrapper.debug());
  });
 
  // it('it displays the plus icon', () => {
  //   const addIcon = '<Add/>';
  //   expect(wrapper.containsMatchingElement(addIcon)).toEqual(true);
  // });


  it('it displays the plus icon', () => {
    //const Child = <Add/>;
    expect(wrapper.find(<Add/>)).toHaveLength(1);
  });

});
