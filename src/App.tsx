import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="text-lg py-5">
        <ul className="flex justify-center ">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-3">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className="mx-3">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <main className="h-96 bg-yellow-300 text-3xl font-bold ">
              <ul className="flex align-middle justify-center">
                <Link to="/jobs" className="text-3xl ">
                  Find a job
                </Link>
                <Link to="/postjob">Post a job</Link>
              </ul>
            </main>
          }
        />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/jobs" element={<h1>Jobs</h1>} />
        <Route path="/postjob" element={<h1>Create Jobs</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <footer className="h-32 bg-black text-white text-3xl">
        Copyright 2023
      </footer>
    </>
  );
}

export default App;
