import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

if (window.derealize && window.derealize.injectScript) {
  const script = document.createElement("script");
  script.setAttribute("src", window.derealize.injectScript);
  document.body.appendChild(script);
}
