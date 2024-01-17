import { atom } from "recoil";

export const userState = atom({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: 3,
  // default value (aka initial value)
});

export const userInfo = atom({
  key: "userInfo",
  default: {
    completed: false,
    id: 0,
    title: "",
    userId: 0,
  },
});

export const userSocialAnalyticsState = atom({
  key: "userSocialAnalyticsState",
  default: [
    {
      user: {
        avatar: "",
        name: "",
        location: "",
      },
      socialMedia: [
        {
          name: "",
          percent: 0,
          progressBar: "",
          innerProgressbar: "",
        },
      ],
    },
  ],
});

export const socialAnalyticsState = atom({
  key: "socialAnalyticsState",
  default: [
    {
      socialName: "",
      percent: 0,
      innerColor: "",
      circleColor: "",
    },
  ],
});
