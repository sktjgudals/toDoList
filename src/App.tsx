import React, { Suspense } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import List from "./pages/daylist/index";
import Date from "./pages/daylist/date/index";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>hi</div>}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daylist" element={<List />} />
          <Route path="/daylist/:date" element={<Date />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
