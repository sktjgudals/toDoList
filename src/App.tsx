import React, { Suspense } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import List from "./pages/daylist/index";
import Date from "./pages/daylist/date/index";
import Loading from "./components/Loading";
const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading width={50} />}>
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
