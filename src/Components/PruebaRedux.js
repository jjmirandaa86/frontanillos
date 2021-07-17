import { useDispatch } from "react-redux";
import axios from "axios";
import {
  setApiLanguageSaveStore,
  setApiConfigurationSaveStore,
} from "../Library/Redux/Actions/ConfigurationActions";

const PruebaRedux = () => {
  const dispatch = useDispatch();

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
      console.log(response);
      dispatch(setApiLanguageSaveStore(response.data.data));
      dispatch(setApiConfigurationSaveStore({ currency: "USD", simbol: "$" }));
    })
    .catch((e) => {
      console.log("Catch API >>" + e);
    })
    .finally(() => {
      console.log("Finalizo consulta");
    });

  return <div>Idiomas</div>;
};

export default PruebaRedux;
