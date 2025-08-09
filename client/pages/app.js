import { appWithTranslation } from 'next-i18next';
import Navbar from '../components/Navbar';


function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);