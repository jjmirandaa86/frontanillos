import Login from "./Login";
import { HookInit } from "../Hook/HookInit";
import { InitLoading } from "./share/InitLoading";

export const Init = () => {
  const { login } = HookInit();

  return (
    <>
      {login && <Login />}
      {/* {!login && <InitLoading />} */}
    </>
  );
};
