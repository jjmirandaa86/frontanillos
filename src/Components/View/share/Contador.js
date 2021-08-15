import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TYPES } from "../../../Library/Redux/Actions/contadorActions";
import {
  contadorInitialState,
  contadorReducers,
} from "../../../Library/Redux/Reducers/contadorReducers";

const Contador = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffec");
    //dispatch({ type: TYPES.INICIALIZA, contadorInitialState });
    dispatch({ type: TYPES.INICIALIZA, contadorInitialState });
    console.log("useEffec");
  }, []);

  const contador = useSelector((state) => state);

  console.log(contador);

  //const [contador, setContador] = useState(0);
  const aumenta = () => dispatch({ type: TYPES.INCREMENTA, payload: 1 }); //setContador(contador + 1);
  const disminuye = () => dispatch({ type: TYPES.DECREMENTA, payload: 1 }); //setContador(contador + 1
  return (
    <div>
      Contador: {/* contador */}
      <button onClick={aumenta}>+</button>
      <button onClick={disminuye}>-</button>
    </div>
  );
};
export default Contador;
