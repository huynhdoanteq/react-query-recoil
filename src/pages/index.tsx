/* eslint-disable @typescript-eslint/no-explicit-any */
import MainLayout from "@src/layouts/MainLayout";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { userInfo, userState } from "@src/state/atom";
import { useEffect } from "react";

const Home = () => {
  const userId = useRecoilValue(userState);
  const [loadUserInfo, setLoadUserInfo] = useRecoilState(userInfo);
  const useUserInfo = useRecoilValue(userInfo);

  const getTodo = async () => {
    const wait = () => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    };
    await wait();
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["todo"],
    queryFn: getTodo,
  });

  useEffect(() => {
    setLoadUserInfo(data);
  }, [data, setLoadUserInfo]);

  if (isLoading) {
    return (
      <div className="todo">
        <h2>Todos</h2>
        loading...
      </div>
    );
  }
  if (isError) {
    return <div>Error...</div>;
  }

  console.log(loadUserInfo);

  return (
    <MainLayout>
      <div className="todo">
        <h2>Todos</h2>
        <div className="todosWrapper">
          {useUserInfo?.map((todo: any) => (
            <div key={todo.id} className="todoCard">
              <p>user:{todo.userId}</p>
              <p>id:{todo.id}</p>
              <p>{todo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
