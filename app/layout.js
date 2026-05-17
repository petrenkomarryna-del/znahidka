export const metadata = {
  title: "Znahidka",
  description: "Brand Directory",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Znahidka" />
      </head>
      <body>{children}</body>
    </html>
  );
}
