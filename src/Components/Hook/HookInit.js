import { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export const HookInit = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState();

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setLogin(true);
    // }, 3000);
    setLogin(true);
  }, []);

  return {
    login,
  };
};
