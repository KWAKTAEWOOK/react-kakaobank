import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main1 from "./component/Main1";
import Main2 from "./component/Main2";
import Main3 from "./component/Main3";
import Topbar from "./component/Topbar";
import Main4 from "./component/Main4";
import Main5 from "./component/Main5";
import Bottombar from "./component/Bottombar";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Map1 from "./component/Map1";
import News from "./component/News";
import Edit from "./component/Edit";
import Newstext from "./component/Newstext";
import NewPost from "./component/NewPost";
import Brand from "./component/Brand";
function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route path={"/"} exact>
            <Main1 />
            <Main2 />
            <Main3 />
            <Main4 />
            <Main5 />
          </Route>
          <Route path={"/map"}>
            <Map1 />
          </Route>
          <Route path={"/News"} exact>
            <News />
          </Route>
          <Route path={"/News/:id"} exact>
            <Newstext />
          </Route>
          <Route path={"/News/:id/edit"}>
            <Edit />
          </Route>
          <Route path={"/NewPost"} exact>
            <NewPost />
          </Route>
          <Route path={"/brand"} exact>
            <Brand />
          </Route>
        </Switch>
        <Bottombar />
      </BrowserRouter>
    </>
  );
}

export default App;
