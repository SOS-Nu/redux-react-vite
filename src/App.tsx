import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { decrement, increment } from "./redux/counter/counter.slide";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Button from "react-bootstrap/Button";
import Header from "./component/header";
import TabsContent from "./component/tabs.content";
import UsersTable from "./component/users.table";

function App() {
  // const count = useSelector((state: RootState) => state.counter);
  const count = useAppSelector((state) => state.counter);
  console.log("count", count);
  const dispatch = useAppDispatch();
  return (
    <>
      {/* <div>
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
          <Button>test bootstrap</Button>
          <button
            className="btn btn-primary gap-5"
            onClick={() => dispatch(increment())}
          >
            increase +1
          </button>
          <button
            className=" btn btn-success gap-5"
            onClick={() => dispatch(decrement())}
          >
            increase -1
          </button>
        </div>
      </div> */}

      <Header />
      <TabsContent />
    </>
  );
}

export default App;
