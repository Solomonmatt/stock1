import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-3xl font-bold mb-4">{t('home')}</h1>
      <Link href="/login">
        <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {t('login')}
        </a>
      </Link>
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