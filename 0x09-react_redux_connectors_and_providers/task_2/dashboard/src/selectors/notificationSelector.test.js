import { Map, fromJS } from 'immutable';

import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

import notificationReducer, {
  initialNotificationState,
} from "../reducers/notificationReducer";

import notificationsNormalizer from "../schema/notifications";

describe("Selectors tests", function () {
  it("test that filterTypeSelected returns the correct value", function () {
    const state = notificationReducer(undefined, {});
    const selected = filterTypeSelected(state);
    expect(selected).toEqual(initialNotificationState.get("filter"));
  });

  it("test that getNotifications returns the correct value", function () {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialNotificationState), {});

    const selected = getNotifications(state);

    expect(state instanceof Map).toEqual(true);
    expect(selected.toJs()).toEqual(
      notificationsNormalizer(initialState.notifications).notifications
    );
  });
  it("test that getUnreadNotifications returns the correct value", function () {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialNotificationState), {});

    const selected = getUnreadNotifications(state);

    expect(state instanceof Map).toEqual(true);
    expect(selected.toJs()).toEqual(
      notificationsNormalizer(initialState.notifications).notifications
    );
  });
});