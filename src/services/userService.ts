import { requestHandler } from "@src/utils/axios";
import axios from "axios";

export const UserService = {
  async getUserSocialAnalytics() {
    const callApi = async () => {
      const res = await axios.get(
        "https://api.eazy-mock.teqn.asia/mock/42098e14-bf60-4654-9bc5-b6e093566055/101/user-social-analytics"
      );

      return res;
    };
    return requestHandler(callApi);
  },
  async getSocialAnalytics() {
    const callApi = async () => {
      const res = await axios.get(
        "https://api.eazy-mock.teqn.asia/mock/42098e14-bf60-4654-9bc5-b6e093566055/101/socical-chart-analytics"
      );

      return res;
    };
    return requestHandler(callApi);
  },
};
