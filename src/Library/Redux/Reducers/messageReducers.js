import { TYPES } from "../Actions/messageActions";

export const messageInitialState = {
  typeError: [
    {
      id: 1,
      type: "E",
      name: "Error",
      color: "danger",
      img: "Media/Ico/error.svg",
    },
    {
      id: 2,
      type: "A",
      name: "Advertance",
      color: "warning",
      img: "Media/Ico/warning.svg",
    },
    {
      id: 3,
      type: "S",
      name: "Succes",
      color: "success",
      img: "Media/Ico/success.svg",
    },
  ],
  show: {
    type: "E",
    title: "",
    date: "",
    hour: "",
    body: "",
    timeShow: 0,
  },
};

export function messageReducers(state = messageInitialState, action) {
  switch (action.type) {
    case TYPES.SET_MESSAGE_SHOW:
      return { ...state, show: action.payload };

    default:
      return state;
  }
}
