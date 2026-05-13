import "./globals.css";

export const metadata = {
  title: "Pokédex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen w-screen flex flex-col items-center justify-start bg-pokeBg">
        {children}
      </body>
    </html>
  );
}