import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { SnackbarProvider } from "react-notistack";

export function RoutePage() {
  // const token = localStorage.getItem('token')
  // const role = localStorage.getItem('role')
  return (
    <Router>
      <SnackbarProvider>
        <Routes>
          <Route />
        </Routes>
      </SnackbarProvider>
    </Router>
  );
}
