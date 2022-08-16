import { isContentEditable } from "@testing-library/user-event/dist/utils";

import './App.css';
import Main1 from "./component/Main1";
import Main2 from "./component/Main2";
import Topbar from "./component/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Main1 />
      <Main2 />
    </>
  );
}

export default App;
