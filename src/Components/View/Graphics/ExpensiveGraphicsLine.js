import { Container } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { HookExpensiveGraphicsLine } from "../../Hook/HookExpensiveGraphicsLine";
import Cargando from "../share/Cargando";

const ExpensiveGraphicsLine = (props) => {
  const { datos, titleGraphics, titleGraphicsX, titleGraphicsY } =
    HookExpensiveGraphicsLine(props);

  return (
    <>
      <Container>
        {datos.length === 1 ? (
          ""
        ) : (
          <>
            <Chart
              chartType="LineChart"
              loader={<Cargando />}
              data={datos}
              options={{
                legend: { position: "none" },
                hAxis: {
                  title: "Mes",
                },
                vAxis: {
                  title: "Cantidad",
                },
              }}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default ExpensiveGraphicsLine;
