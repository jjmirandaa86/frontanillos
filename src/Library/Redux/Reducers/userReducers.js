import { TYPES } from "../Actions/UserActions";

const userInitialState = {
  id: 500857,
  idCountry: "EC",
  nombre: "Jefferson Miranda",
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
