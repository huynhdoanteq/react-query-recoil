import type { FC } from "react";
import BorderRounded from "../BorderRounded";
import ProgressBar from "../ProgressBar";
import UserInfoCard from "../UserInfoCard";
import type { IUserInfo } from "@src/interfaces/IUser";

interface Props {
  userInfo: IUserInfo;
}

const UserInfo: FC<Props> = ({ userInfo }) => {
  const { user, socialMedia } = userInfo;

  return (
    <BorderRounded className="bg-white-100 max-w-[28rem] p-4 my-2">
      <UserInfoCard
        userAvatar={user.avatar}
        userName={user.name}
        userLocation={user.location}
      />
      {socialMedia.map((item, index) => (
        <div key={index}>
          <ProgressBar
            percent={item.percent}
            progressBar={item.progressBar}
            innerProgressbar={item.innerProgressbar}
            socialName={item.name}
          />
        </div>
      ))}
    </BorderRounded>
  );
};

export default UserInfo;
