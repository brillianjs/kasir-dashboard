import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import SalesPage from "./pages/Penjualan";
import BaseLayout from "./components/Baselayout";
import InventoryPage from "./pages/StokBarang";
import TransactionHistoryPage from "./pages/RiwayatTransaksi";
import FinancialReportPage from "./pages/FinancialReport";
import CustomerManagementPage from "./pages/CustomerManagement";
import SettingsDashboardPage from "./pages/Settings";
import AnalyticalReportPage from "./pages/AnalyticalReport";
import NotificationsPage from "./pages/Notifications";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/financial-report" element={<FinancialReportPage />} />
        <Route path="/settings" element={<SettingsDashboardPage />} />
        <Route path="/analytical-report" element={<AnalyticalReportPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route
          path="/customer-management"
          element={<CustomerManagementPage />}
        />
        <Route
          path="/transaction-history"
          element={<TransactionHistoryPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
