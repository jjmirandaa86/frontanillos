import { Chart } from "react-google-charts";
import { HookExpensiveGraphicsTorta } from "../../Hook/HookExpensiveGraphicsTorta";
import Cargando from "../share/Cargando";

const ExpensiveGraphicsTorta = () => {
  const { datos, titleGraphics } = HookExpensiveGraphicsTorta();

  return (
    <>
      <div className="container">
        <Chart
          width={"500"}
          height={"500"}
          chartType="PieChart"
          loader={
            <div>
              <Cargando />
            </div>
          }
          data={datos}
          options={{
            title: titleGraphics,
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </>
  );
};

export default ExpensiveGraphicsTorta;
