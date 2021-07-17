import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import axios from "axios";
/* import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../../../Library/Redux/Actions/LanguageActions";
 */
const Language = () => {
  /* const dispatch = useDispatch(); */

  const [idiomas, setIdiomas] = useState([]);
  useEffect(() => {
    const requestAxios = {
      method: "get",
      url: process.env.REACT_APP_LANGUAGE_GET_ALL,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
      },
    };

    axios(requestAxios)
      .then((response) => {
        console.log(response.data.data);
        setIdiomas(response.data.data);
        /* dispatch(setLanguage({ language: response.data })); */
      })
      .catch((e) => {
        console.log("Catch API >>" + e);
      })
      .finally(() => {
        console.log("Finalizo consulta");
      });
  }, []);

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.use(LanguageDetector).language);

  const handleLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <>
      {idiomas ? (
        <Form.Control as={"select"} value={language} onChange={handleLanguage}>
          {idiomas.map((idioma) => {
            const { idLanguage, shortName, name } = idioma;
            return (
              <option key={idLanguage} value={shortName}>
                {name}
              </option>
            );
          })}
        </Form.Control>
      ) : (
        ""
      )}
    </>
  );
};

export default Language;
