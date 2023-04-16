import '../styles/globals.scss';
import TopBar from '../components/TopBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
    </>
  )
}
