import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReportCard } from '../components';

export const ReportPage = () => {
  const [latestReport, setLatestReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestReport = async () => {
      try {
        const response = await axios.get(
          'https://localhost:7018/api/Report/GetReport'
        );
        const reports = response.data;
        const lastReport =
          reports.length > 0 ? reports[reports.length - 1] : null;
        setLatestReport(lastReport);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Report data:', error);
        setLoading(false);
      }
    };

    fetchLatestReport();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        latestReport && <ReportCard report={latestReport} />
      )}
    </div>
  );
};
