import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-bg-color">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="resources" element={<Resources />} />
          <Route path="userInfo" element={<UserInfo />} />
          <Route path="quizApp" element={<QuizApp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
