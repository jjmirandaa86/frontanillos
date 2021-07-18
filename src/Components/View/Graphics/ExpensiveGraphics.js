import { Chart } from "react-google-charts";
import { HookExpensiveGraphics } from "../../Hook/HookExpensiveGraphics";
import Cargando from "../share/Cargando";

const ExpensiveGraphics = () => {
  const { datos, titleGraphics, titleGraphicsX, titleGraphicsY } =
    HookExpensiveGraphics();

  return (
    <>
      <div className="container">
        <Chart
          width={"500"}
          height={"500"}
          chartType="Bar"
          loader={
            <div>
              <Cargando />
            </div>
          }
          data={datos}
          options={{
            title: titleGraphics,
            vAxis: { title: titleGraphicsX },
            hAxis: { title: titleGraphicsY },
            seriesType: "bars",
            series: { 2: { type: "line" } },
          }}
        />
      </div>
    </>
  );
};

export default ExpensiveGraphics;
