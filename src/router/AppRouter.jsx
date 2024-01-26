import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import { FormPage, ReportPage } from '../pages';

export const AppRouter = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-1'>
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
      </div>

      <Footer />
    </div>
  );
};
