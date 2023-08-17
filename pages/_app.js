// pages/_app.js
import '../styles/globals.css';
import { DarkModeProvider } from '../components/context/DarkModeProvider';

export default function App({ Component, pageProps }) {
    return (
        <DarkModeProvider>
            <Component {...pageProps} />
        </DarkModeProvider>
    );
}