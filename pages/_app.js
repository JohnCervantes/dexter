import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
