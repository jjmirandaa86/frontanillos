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
    dispatch({ type: TYPES.INICIALIZA, contadorInitialState });
    console.log("useEffec");
  }, []);

  const contador = useSelector((state) => state);

  console.log(contador);

  //const [contador, setContador] = useState(0);
  const aumenta = () => dispatch({ type: TYPES.INCREMENTA, payload: 1 }); //setContador(contador + 1);
  const disminuye = () => dispatch({ type: TYPES.DECREMENTA, payload: 1 }); //setContador(contador + 1

  const addlanguage = () => dispatch({ type: TYPES.ADDLANGUAGE, payload: 1 });
  const addlanguageOtro = () =>
    dispatch({ type: TYPES.ADDLANGUAGEOTHER, payload: 1 });
  return (
    <div>
      Contador: {/* contador */}
      <button onClick={aumenta}>+</button>
      <button onClick={disminuye}>-</button>
      <button onClick={addlanguage}>add Language</button>
      <button onClick={addlanguageOtro}>add otro</button>
    </div>
  );
};
export default Contador;
