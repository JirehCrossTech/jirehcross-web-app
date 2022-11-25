import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Link, Router } from "components/Router";
import home from "./assets/img_home.jpg";
import "./app.css";

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">
          <img src={home} alt="Home" />
        </Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <div className="footer">
        <p className="email">
          Email us at <b>owner@jirehcross.com</b>
        </p>
        <p>
          Copyright © 2022 JirehCross Technologies. All Rights Reserved.&nbsp;
          <a href="https://play.google.com/store/apps/dev?id=6899625690460618036">
            Google Play Developer Page
          </a>
        </p>
      </div>
    </Root>
  );
}

export default App;
