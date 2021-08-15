export const REGEXNAME = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
export const REGEXEMAIL = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
export const REGEXPASSWORD =
  /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,16}$/;
export const REGEXCOMMENTS = /^.{1,255}$/;
export const REGEXNUMBERENTERO = /^[0-9]+$/;
export const REGEXNUMBERYGUION = /^[0-9-]+$/;
export const REGEXNUMBERFLOAT = /^[0-9]+([.])?([0-9]+)?$/;
