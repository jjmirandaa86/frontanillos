import React, { useEffect, useState } from "react";
import { Button, Form, Alert, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LoginForm({
  handleChange,
  handleSubmit,
  handleBlur,
  form,
  errors,
}) {
  const { t } = useTranslation();

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t("app.componente.login.email.titulo")}</Form.Label>
          <Form.Control
            type="email"
            placeholder={t("app.componente.login.email.placeholder")}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email}
          />
          {errors.email && (
            <Form.Text className="text-muted">
              <Alert variant={process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA}>
                {errors.email}
              </Alert>
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t("app.componente.login.contrasena.titulo")}</Form.Label>
          <Form.Control
            type="password"
            placeholder={t("app.componente.login.contrasena.placeholder")}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.password}
          />
          {errors.password && (
            <Form.Text className="text-muted">
              <Alert variant={process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA}>
                {errors.password}
              </Alert>
            </Form.Text>
          )}
          <Form.Text>
            {t("app.componente.login.contrasena.infoAdicional")}
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-end"
          controlId="formBasicBotonIngresar"
        >
          <Button
            variant={process.env.REACT_APP_CONFIGURACION_FONDO_BOTON}
            onClick={handleSubmit}
          >
            {t("app.componente.login.boton.ingresar")}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
