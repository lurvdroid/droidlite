export const metadata = {
  title: "DroidLite",
  description: "A mini microblogging platform powered by Next.js and TailwindCSS",
  // Add this:
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
