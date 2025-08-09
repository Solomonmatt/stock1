import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import axios from 'axios';

export default function ChartEditor({ symbol }) {
  const { t } = useTranslation('common');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = async () => {
    try {
      const response = await axios.post('/api/predictions', { symbol, date, price });
      alert('Prediction saved!');
    } catch (error) {
      alert('Error saving prediction');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">{t('predict')} {symbol}</h2>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          value={symbol}
          disabled
          className="border p-2 rounded"
          placeholder={t('symbol')}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder={t('price')}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {t('save')}
        </button>
      </div>
    </div>
  );
}