import notificationReducer, { initialNotificationState } from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('courseReducer', function () {
  it('initial state', function () {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialNotificationState);
  });
  /*
  it('FETCH_NOTIFICATIONS_SUCCESS', function () {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };
    const expectedData = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    
    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedData);
  });
*/
  it('MARK_AS_READ', function () {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };