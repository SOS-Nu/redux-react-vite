import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/counter/counter.slide";

function App() {
  const count = useSelector((state: RootState) => state.counter);
  console.log("count", count);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        my current count = {count.value}
        <div>
          <button onClick={() => dispatch(increment())}>increase +1</button>
        </div>
      </div>
    </>
  );
}

export default App;
