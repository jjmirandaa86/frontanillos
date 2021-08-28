import { ActionTypes } from "../Constants/ActionTypes";

export const setApiLanguageSaveStore = (language) => {
  console.log("setApiLanguageSaveStore");
  return {
    type: ActionTypes.SET_API_LANGUAGE_SET_STATE,
    payload: language,
  };
};

export const setApiConfigurationSaveStore = (configuration) => {
  console.log("setApiConfigurationSaveStore");
  return {
    type: ActionTypes.SET_API_CONFIGURATION_SET_STATE,
    payload: configuration,
  };
};
