import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import Test from "./Test";
import Todo from "./Todo";
function App() {
  return (
    <>
      <Provider store={store}>
        <Test />
        {/* <Todo /> */}
      </Provider>
    </>
  );
}

export default App;
