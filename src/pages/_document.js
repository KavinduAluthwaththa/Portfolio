import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en-AU" className="dark">
      <Head />
      <body className="bg-dark" style={{ backgroundColor: '#1b1b1b' }}>
        <Script id="force-dark-mode" strategy="beforeInteractive">
          {`
            // Force dark mode permanently
            if (typeof document !== 'undefined') {
              document.documentElement.classList.add('dark');
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
