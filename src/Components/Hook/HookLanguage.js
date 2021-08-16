import { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ROUTES } from "../../RoutesFront/RoutesApi";
import { TYPES } from "../../Library/Redux/Actions/languageActions";
import {
  languageInitialState,
  languageReducers,
} from "../../Library/Redux/Reducers/languageReducers";

export const HookLanguage = () => {
  const { i18n } = useTranslation();
  //const language = useSelector((state) => state.language);
  //const dispatch = useDispatch();
  //const [state, dispatch] = useReducer(languageReducers, languageInitialState);

  const urlApi = ROUTES.API_APP_LANGUAGE_GET_ALL;

  useEffect(() => {
    const requestAxios = {
      method: "get",
      url: urlApi,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
      },
    };

    axios(requestAxios)
      .then((response) => {
        console.log(response);
        /* dispatch({
          type: TYPES.API_SET_ALL_LANGUAGES,
          payload: response.data.data,
        }); */
      })
      .catch((e) => {
        console.log("Catch API >>" + e);
      })
      .finally(() => {
        console.log("Finalizo consulta");
      });
  }, []);

  const [languages, setLanguages] = useState(languageInitialState);
  const [selectedLenguage, setSelectedLenguage] = useState(
    i18n.use(LanguageDetector).language
  );

  const handleLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setSelectedLenguage(event.target.value);
  };

  return {
    languages,
    selectedLenguage,
    handleLanguage,
  };
};
