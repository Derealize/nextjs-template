import { useEffect } from "react";
import { useRouter } from "next/router";
import resolveConfig from "tailwindcss/resolveConfig";
import config from "../tailwind.config";
import "../styles/globals.css";

console.log(resolveConfig(config));
console.log(JSON.stringify(resolveConfig(config)));

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined" || !window.derealize) return;

    const handleRouteChange = (url, { shallow }) => {
      window.derealize.listen();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
