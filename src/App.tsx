import { useState, useEffect } from "react";
import { VirtualizedList } from "./components";

function App() {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const winHeight = window.innerHeight;
    setWindowHeight(winHeight);
  }, []);

  return (
    <VirtualizedList
      rowHeight={200}
      rowsNumber={30000}
      bufferNumber={5}
      windowHeight={windowHeight}
    />
  );
}

export default App;
