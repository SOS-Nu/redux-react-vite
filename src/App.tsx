import Header from "./component/header";
import TabsContent from "./component/tabs.content";

function App() {
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
