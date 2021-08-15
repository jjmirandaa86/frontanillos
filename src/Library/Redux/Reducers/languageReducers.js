import { TYPES } from "../Actions/languageActions";

export const languageInitialState = [
  {
    id: 1,
    name: "español",
  },
  {
    id: 2,
    name: "english",
  },
];

export function languageReducers(state, action) {
  switch (action.type) {
    case TYPES.INICIALIZA:
      return { ...state, language: languageInitialState };

    case TYPES.API_GET_ALL_LANGUAGES:
      return { state };

    case TYPES.API_SET_ALL_LANGUAGES:
      return { state };

    default:
      return { state };
  }
}
