/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TileGrid from '../components/tile-grid/tile-grid';
import TileGridDefaultPropsInit from './TileGridDefaultProps';



configure({ adapter: new Adapter() });

describe('The tile grid displays loading message when loading', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...TileGridDefaultPropsInit,
      isBusy:true,
    };
    wrapper = shallow(<TileGrid  {...defaultProps} />);

    console.log(wrapper.debug());
  });
 
  it('it displays the loading message', () => {
    const loadingMessage = '<h2>loading data...</h2>';
    expect(wrapper.find('h2').contains(loadingMessage)).toBe(true);
  });

});

describe('The tile grid displays the tile container when there is no error and it is not loading', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...TileGridDefaultPropsInit,
     
    };
    wrapper = shallow(<TileGrid  {...defaultProps} />);

    console.log(wrapper.debug());
  });
 
  it('it displays the tile grid container', () => {
    expect(wrapper.find('.tile-grid__container')).toHaveLength(1);
  });

});

describe('Error message is displayed when there is an error from the server', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...TileGridDefaultPropsInit,
      errorMsg: 'something has gone wrong...',
     
    };
    wrapper = shallow(<TileGrid  {...defaultProps} />);

    console.log(wrapper.debug());
  });
 
  it('it displays the error message', () => {
    let errorMessage = "something has gone wrong..."
    expect(wrapper.find('h2').contains(errorMessage)).toBe(true);
  });

});


