export interface IUserInfo {
  user: {
    avatar: string;
    name: string;
    location: string;
  };
  socialMedia: IUserAnalytics[];
}

export interface IUserAnalytics {
  name: string;
  percent: number;
  progressBar: string;
  innerProgressbar: string;
}
