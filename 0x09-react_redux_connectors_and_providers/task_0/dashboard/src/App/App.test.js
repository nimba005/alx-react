import { shallow, mount } from 'enzyme';
import React from 'react';
import App, { listNotificationsInitialState, mapStateToProps } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user, logOut } from './AppContext';
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import uiReducer, { initialState } from '../reducers/uiReducer';

const store = createStore(uiReducer, initialState);

describe('<App />', () => {
  it("mapStateToProps return the right object from Login", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ isUserLoggedIn: true });
  });
});