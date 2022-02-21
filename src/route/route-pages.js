import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { SnackbarProvider } from "react-notistack";
import Sidebar from "../components/layout/Sidebar";
import Organisation from "../components/organisationsetup/Organisation";
import TaxScreen from "../components/TaxScreen/index";
import Payschedule from "../components/payschedule/Payschedule";
import Homepage from "../components/home-page/home-page";

export function RoutePage() {
  // const token = localStorage.getItem('token')
  // const role = localStorage.getItem('role')
  return (
    <>
      <Router>
        <Sidebar />
        {/* <SnackbarProvider> */}
        <Routes>
          <Route path="/home-page" element={<Homepage />} />
          <Route path="/organisation-setup" element={<Organisation />} />
          <Route path="tax-information" element={<TaxScreen />} />
          <Route path="pay-schedule" element={<Payschedule />} />
        </Routes>
        {/* </SnackbarProvider> */}
      </Router>
    </>
  );
}
