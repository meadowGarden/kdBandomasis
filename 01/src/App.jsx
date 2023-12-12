import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import PageNotFound from "./components/PageNotFound";
import EmployeeForm from "./components/EmployeeForm";
import Feedback from "./components/Feedback";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newemployee" element={<EmployeeForm />} />
        <Route path="/feedback" element={<Feedback />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
