import { TYPES } from "../Actions/contadorActions";

export const contadorInitialState = 1;

export function contadorReducers(state, action) {
  switch (action.type) {
    case TYPES.INICIALIZA:
      console.log("entra?");
      console.log(action.payload);
      return { ...state, settings: contadorInitialState };

    case TYPES.INCREMENTA:
      return { ...state, contador: state.contador + action.payload };

    case TYPES.DECREMENTA:
      return { ...state, contador: state.contador - action.payload };

    default:
      return { state };
  }
}
