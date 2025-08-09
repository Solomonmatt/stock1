import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ChartBoard from '../components/ChartBoard';

export default function ChartBoardPage() {
  const { t } = useTranslation('common');

  return (
    <div>
      <ChartBoard />
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