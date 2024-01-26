import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import { FormPage, ReportPage } from '../pages';

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path='/*'
          element={<FormPage />}
        />
        <Route
          path='/reportes'
          element={<ReportPage />}
        />
      </Routes>

      <Footer />
    </>
  );
};
