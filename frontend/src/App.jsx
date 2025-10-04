import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            {/* User Routes */}
            <Route index element={<Home />} />
          </Route>
          <Route>{/* Admin Routes */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
