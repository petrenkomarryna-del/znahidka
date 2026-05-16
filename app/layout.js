export const metadata = {
  title: "Znahidka",
  description: "Brand Directory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
