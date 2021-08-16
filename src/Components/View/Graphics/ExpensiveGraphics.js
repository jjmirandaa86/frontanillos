import { Container } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { HookExpensiveGraphics } from "../../Hook/HookExpensiveGraphics";
import Cargando from "../share/Cargando";

const ExpensiveGraphics = (props) => {
  const { datos, titleGraphics, titleGraphicsX, titleGraphicsY } =
    HookExpensiveGraphics(props);

  return (
    <>
      <Container>
        {datos.length === 1 ? (
          ""
        ) : (
          <>
            <Chart
              chartType="BarChart"
              loader={<Cargando />}
              data={datos}
              options={{
                title: titleGraphics,
                vAxis: { title: titleGraphicsX },
                hAxis: { title: titleGraphicsY },
                legend: { position: "none" },
              }}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default ExpensiveGraphics;
