import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import axios from 'axios';

export default function ChartBoard() {
  const { t } = useTranslation('common');
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    axios.get('/api/charts').then((res) => setCharts(res.data));
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{t('chart_board')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {charts.map((chart) => (
          <div key={chart._id} className="border p-4 rounded shadow">
            <p><strong>{t('symbol')}:</strong> {chart.symbol}</p>
            <p><strong>{t('price')}:</strong> {chart.price}</p>
            <p><strong>Accuracy:</strong> {chart.accuracy || 'Pending'}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}