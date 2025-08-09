import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ChartEditor from '../components/ChartEditor';

export default function Dashboard() {
  const { t } = useTranslation('common');

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{t('dashboard')}</h2>
      <ChartEditor symbol="AAPL" />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}