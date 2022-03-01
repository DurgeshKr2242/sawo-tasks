import { ToastContainer, toast } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "../AuthContext";
import Navbar from "../components/Navbar/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastContainer />
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
