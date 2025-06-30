
import { AuthProvider } from '../components/AuthContext';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Footer/>
    </AuthProvider>
  );
}
