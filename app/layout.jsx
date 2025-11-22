export const metadata = {
  title: "DroidLite",
  description: "A mini microblogging platform powered by Next.js and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {children}
      </body>
    </html>
  );
}
