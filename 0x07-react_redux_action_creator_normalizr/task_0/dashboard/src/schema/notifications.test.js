import { getAllNotificationsByUser } from './notifications';

describe("Test for Notifications.js", () => {
  it("verify that the function returns the correct data", () => {
    const result = [
        {
          guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
          isRead: true,
          type: "urgent",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
          isRead: false,
          type: "urgent",
          value:
            "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed enim ut sem viverra.",
        },
        {
          guid: "dcb7b61d-3a40-4c86-9f3e-9b9c4e6e4f07",
          isRead: true,
          type: "urgent",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
      context = getAllNotificationsByUser("5debd764a7c57c7839d722e9");

    expect(context).toEqual(expect.arrayContaining(result));
  });
});