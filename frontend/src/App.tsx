import "./app.scss";
import Routers from "./Routers";
import { ProductListProvider } from "./contexts/contexts";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ProductListProvider>
        <Routers />
      </ProductListProvider>
    </Provider>
  );
}

export default App;
