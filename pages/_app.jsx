import '../styles/globals.scss';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
