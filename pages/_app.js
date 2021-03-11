import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === "undefined" || !window.derealize) return;

    let script = document.querySelector("#derealize");
    if (!script) {
      script = document.createElement("script");
      script.id = "derealize";
      script.setAttribute("src", window.derealize.injectScript);
      document.body.appendChild(script);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

// note:
// process.browser is deprecated and the recommended approach is 'typeof window === "undefined"'
// A custom _document.js is not rendered client-side. componentDidMount (or any lifecycle method) will never trigger for client-side.
