import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (lng) => {
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link href="/"><a className="hover:underline">{t('home')}</a></Link>
        <Link href="/dashboard"><a className="hover:underline">{t('dashboard')}</a></Link>
        <Link href="/chart-board"><a className="hover:underline">{t('chart_board')}</a></Link>
      </div>
      <div className="flex items-center space-x-2">
        <span>{t('language')}:</span>
        <select
          value={locale}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-gray-700 text-white p-1 rounded"
        >
          <option value="en">{t('english')}</option>
          <option value="ko">{t('korean')}</option>
        </select>
      </div>
    </nav>
  );
}