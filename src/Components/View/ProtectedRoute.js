import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ isAuth: isAuth, component: component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (isAuth) {
            return <component />;
          } else {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          }
        }}
      />
    </>
  );
};

export default ProtectedRoute;
