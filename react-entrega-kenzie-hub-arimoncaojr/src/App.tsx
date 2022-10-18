import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer
        autoClose={1000}
        toastStyle={{
          background: "var(--grey2)",
          color: "var(--grey0)",
        }}
      />
    </>
  );
}

export default App;
