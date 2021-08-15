import { TYPES } from "../Actions/userActions";

const userInitialState = {
  id: 500857,
  idCountry: "EC",
  nombre: "Jefferson",
};

export function userReducers(state, action) {
  switch (action.type) {
    case TYPES.INICIALIZA: {
      return { ...state, settings: userInitialState };
    }

    default:
      return { state };
  }
}
