/**
 * Tests for App Container
 */

import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../index';
import Calculator from '../../Calculator';
import Graph from '../../Graph';

import { changeUsername } from '../actions';
import { loadRepos } from '../../App/actions';

describe('<HomePage />', () => {
  const renderedComponent = shallow(<App />);

  it('should render the calculator container', () => {
    expect(
      renderedComponent.contains(<Calculator />)
    ).toEqual(true);
  });

  it('should render the graph container', () => {
    expect(
      renderedComponent.contains(<Graph data={} />)
    ).toEqual(true);
  });
});