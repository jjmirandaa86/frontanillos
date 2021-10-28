import React, { Suspense, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
/* import { getUser } from "./Library/Redux/Actions/UserActions"; */

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cargando from "./Components/View/share/Cargando";
import Main from "./Components/View/Main";
import NewExpensive from "./Components/View/Menu/NewExpensive";
import Login from "./Components/View/Login";
import Language from "./Components/View/share/Language";
import { Init } from "./Components/View/Init";
import AlertaInformativa from "./Components/View/share/AlertaInformativa";
import FindParameter from "./Components/View/Menu/FindParameter";

function App() {
  /*  const [isAuth, setIsAuth] = useState(null);
  const datosUsuario = useSelector((state) => state.user);

  useEffect(() => {
    if (Object.keys(datosUsuario).length != 0) {
      //data.api_token
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth]); */

  return (
    <>
      <div className="App">
        <Suspense fallback={<Cargando />}>
          <Router>
            <Switch>
              <Route exact path="/main" children={<Main />} />
              <Route exact path="/login" children={<Login />} />
              <Route exact path="/filtro" children={<FindParameter />} />
              <Route exact path="/alerta" children={<AlertaInformativa />} />
              <Route exact path="/" children={<Init />} />
              {/*
            <Route exact path="/1" children={<ContadorLanguage />} />
             
            <Route exact path="/new" children={<NewExpensive />} />
            

             <Route exact path="/barras" children={<Barras />} />
            <Route exact path="/prueba" children={<PruebaRedux />} />

            <Route exact path="/login" children={<Login />} />
            <Route exact path="/main" children={<Main />} />
            <Route path="*" component={Error404} /> */}
            </Switch>
            {/* <ProtectedRoute path="/mapa" component={Mapa} isAuth={isAuth} /> */}
          </Router>
        </Suspense>
      </div>
    </>
  );
}

export default App;
