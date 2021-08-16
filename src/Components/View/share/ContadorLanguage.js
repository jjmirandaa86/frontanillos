import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TYPES } from "../../../Library/Redux/Actions/contadorLanguageActions";
import {
  contadorLanguageInitialState,
  contadorLanguageReducers,
} from "../../../Library/Redux/Reducers/contadorLanguageReducers";

const ContadorLanguage = () => {
  const contador = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: TYPES.INICIALIZA, contadorLanguageInitialState });
  }, []);

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
export default ContadorLanguage;
