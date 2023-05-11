import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SharedLayout from "./SharedLayout";

function App() {
  return (
    <div className="min-h-screen bg-dark p-6 sm:p-8 relative">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/*<Route path="resources" element={<Resources />} />*/}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
