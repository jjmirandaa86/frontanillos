import { Container } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { HookExpensiveGraphicsTorta } from "../../Hook/HookExpensiveGraphicsTorta";
import Cargando from "../share/Cargando";

const ExpensiveGraphicsTorta = (props) => {
  const { datos, titleGraphics } = HookExpensiveGraphicsTorta(props);

  return (
    <>
      <Container>
        {datos.length === 1 ? (
          ""
        ) : (
          <Chart
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
        )}
      </Container>
    </>
  );
};

export default ExpensiveGraphicsTorta;
