export const regExpresion = {
  NAME: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
  EMAIL: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
  PASSWORD: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,16}$/,
  COMMENTS: /^.{1,255}$/,
  NUMBERENTERO: /^[0-9]+$/,
  NUMBERYGUION: /^[0-9-]+$/,
  NUMBERFLOAT: /^[0-9]+([.])?([0-9]+)?$/,
};

export const routesApi = {
  REACT_APP_API: "http://localhost:8000/api/",
  REACT_APP_EXPENSE: "******EXPENSIVE*********",
  REACT_APP_EXPENSE_POST_SAVE: "expense",
  REACT_APP_EXPENSE_POST_SAVE_IMAGE: "expense/upload",
  REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE: "expense/counttotalmonth",
  REACT_APP_EXPENSE_POST_USER_DATE: "expense/idUserDate",
  REACT_APP_EXPENSE_PUT_STATE: "expense/state",
  REACT_APP_SERVIDOR_REPO_IMAGE: "http://localhost/apianillos/public/Img",
  REACT_APP_LANGUAGE: "******LANGUAGE*********",
  REACT_APP_LANGUAGE_ALL: "language/all",
  REACT_APP_USER: "******USER*********",
  REACT_APP_USER_LOGIN: "user/login",
  REACT_APP_TYPEENTRY: "******TYPE ENTRIES*********",
  REACT_APP_TYPEENTRY_COUNTRY: "typeentry/country/",
  REACT_APP_STATE: "******STATUS*********",
  REACT_APP_STATE_TABLE_IDCOUNTRY: "state/tableIdCountry",
};
