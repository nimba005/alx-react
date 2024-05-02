import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe("tests for UI notification action creators", () => {
  it("should reate proper action for login", () => {
    const email = "nimbaoyugi@gmail.com";
    const password = "password";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "nimbaoyugi@gmail.com", password: "password" },
    });
  });

  it("should create proper action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("should create proper action for display notification Drawer", () => {
    expect(displayNotificationDrawer()).toEqual({ 
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("should create proper action for hide notification Drawer", () => {
    expect(hideNotificationDrawer()).toEqual({ 
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});