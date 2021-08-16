import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Menu from "./Menu/Menu";
import ExpensiveGraphicsTorta from "./Graphics/ExpensiveGraphicsTorta";
import ExpensiveGraphics from "./Graphics/ExpensiveGraphics";
import ExpensiveGraphicsLine from "./Graphics/ExpensiveGraphicsLine";
import Expensive from "./main/Expensive";
import NewExpensive from "../View/Menu/NewExpensive";
import FindParameter from "./Menu/FindParameter";
import ShowUser from "./Menu/ShowUser";
import jsonApi from "../../json/routesApi.json";

const MainMain = () => {
  const [showWindow, setShowWindow] = useState("M");

  //Parametros
  const idCountry = "EC";
  const idUser = 500857;
  const dateFirst = "2021-03-01";
  const dateEnd = "2021-08-30";
  const token =
    "WeKHSYaSd1aLTd0K4Qz77kcallnDzyPTmkKKa702SA5L9YEGTfHI8Nbz6LNEJq7Sg55OvbzxUzNHRKGwrGO8xZ2BeR8ehqMSziG8SRJ4QsLASyrBHebqlpSeP61nCNTr8arijxzFRMeRQgl14lk0McXold34LHPiBJU4a9ZWBvsCmglPnbD5MAqfAcDS3Q8cHDOMY9Mmvgpq0CEwFhwHwDPpLgPlGfO7F9S9cQ67cmcpuRNbpFKp97YHphkICll";

  return (
    <>
      <Menu setShowWindow={setShowWindow} />
      {/* Muestra el contenedor de los datos */}

      {showWindow === "M" && (
        <Container>
          <Row>
            <Col sm={12}>
              <br></br>
              <Expensive
                token={token}
                REACT_APP_EXPENSE_POST_USER_DATE={
                  jsonApi.route.REACT_APP_API +
                  jsonApi.route.REACT_APP_EXPENSE_POST_USER_DATE
                }
                REACT_APP_EXPENSE_PUT_STATE={
                  jsonApi.route.REACT_APP_API +
                  jsonApi.route.REACT_APP_EXPENSE_PUT_STATE
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <ExpensiveGraphicsTorta
                idCountry={idCountry}
                idUser={idUser}
                dateFirst={dateFirst}
                dateEnd={dateEnd}
                token={token}
                REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE={
                  jsonApi.route.REACT_APP_API +
                  jsonApi.route.REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE
                }
              />
            </Col>
            <Col sm={6}>
              <ExpensiveGraphics
                idCountry={idCountry}
                idUser={idUser}
                dateFirst={dateFirst}
                dateEnd={dateEnd}
                token={token}
                REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE={
                  jsonApi.route.REACT_APP_API +
                  jsonApi.route.REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <ExpensiveGraphicsLine
                idCountry={idCountry}
                idUser={idUser}
                dateFirst={dateFirst}
                dateEnd={dateEnd}
                token={token}
                REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE={
                  jsonApi.route.REACT_APP_API +
                  jsonApi.route.REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE
                }
              />
            </Col>
          </Row>
        </Container>
      )}

      {/* Muestra la pantalla de Nuevo Expensive */}
      {showWindow === "N" && (
        <NewExpensive
          urlRouteApi_SAVE={
            jsonApi.route.REACT_APP_API +
            jsonApi.route.REACT_APP_EXPENSE_POST_SAVE
          }
          urlRouteApi_SAVEIMG={
            jsonApi.route.REACT_APP_API +
            jsonApi.route.REACT_APP_EXPENSE_POST_SAVE_IMAGE
          }
          token={token}
          setShowWindow={setShowWindow}
        />
      )}
      {/* Muestra la pantalla de filtro */}
      {showWindow === "F" && <FindParameter setShowWindow={setShowWindow} />}
      {/* Muestra la pantalla de datos del usuario */}
      {showWindow === "U" && <ShowUser setShowWindow={setShowWindow} />}
    </>
  );
};

export default MainMain;