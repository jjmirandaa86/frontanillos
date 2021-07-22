import React, { Suspense, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./Library/Redux/Actions/UserActions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cargando from "./Components/View/share/Cargando";
import MainMain from "./Components/View/main/MainMain";
import TypeExpensive from "./Components/View/Expensive/TypeExpensive";
import NewExpensive from "./Components/View/Expensive/NewExpensive";

function App() {
  const [isAuth, setIsAuth] = useState(null);
  const datosUsuario = useSelector((state) => state.user);

  useEffect(() => {
    if (Object.keys(datosUsuario).length != 0) {
      //data.api_token
      console.log("entro 1");
      setIsAuth(true);
    } else {
      console.log("entro 2");
      setIsAuth(false);
    }
  }, [isAuth]);

  return (
    <div className="App">
      <Suspense fallback={<Cargando />}>
        <Router>
          <Switch>
            <Route exact path="/new" children={<NewExpensive />} />
            <Route exact path="/main" children={<MainMain />} />

            {/* <Route exact path="/barras" children={<Barras />} />
            <Route exact path="/prueba" children={<PruebaRedux />} />

            <Route exact path="/login" children={<Login />} />
            <Route exact path="/" children={<Login />} />
            <Route exact path="/main" children={<Main />} />
            <Route path="*" component={Error404} /> */}
          </Switch>

          {/* <ProtectedRoute path="/mapa" component={Mapa} isAuth={isAuth} /> */}
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
