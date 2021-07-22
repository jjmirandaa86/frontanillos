import React, { useState, useEffect } from "react";
import axios from "axios";

export const HookNewExpensive = (initialForm, validationsForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [response, setResponse] = useState(null);

  //Cambiar los valores de lo Inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + " - " + value);
    setForm({ ...form, [name]: value });
  };

  //Pierde el foco de la pagina
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationsForm(form));
  };

  //Cuando presiono el boton de ingresar al login
  const handleSubmit = (e) => {
    alert("handleSubmit");
  };

  return {
    form,
    errors,
    loading,
    alerta,
    mensajeAlerta,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
