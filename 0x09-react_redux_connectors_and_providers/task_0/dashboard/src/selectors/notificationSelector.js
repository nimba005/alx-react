export const filterTypeSelected = (state) => {
  return state.get("filter");
};
export const getNotifications = (state) => {
  return state.get("notifications");
};
export const getUnreadNotifications = (state) => {
  const notifications = state.get("notifications");
  const filtered = notification.filter(
    (value, key) => value.get("isRead") === true
  );
  return filtered;
};