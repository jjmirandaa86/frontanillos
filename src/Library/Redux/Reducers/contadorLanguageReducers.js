import { TYPES } from "../Actions/contadorLanguageActions";

export const contadorLanguageInitialState = [
  {
    id: 1,
    name: "español",
  },
  {
    id: 2,
    name: "english",
  },
];

export function contadorLanguageReducers(state, action) {
  switch (action.type) {
    case TYPES.INICIALIZA:
      return { ...state, contador: contadorLanguageInitialState };

    case TYPES.INCREMENTA:
      return { ...state, contador: state.contador + action.payload };

    case TYPES.DECREMENTA:
      return { ...state, contador: state.contador - action.payload };

    default:
      return { state };
  }
}
