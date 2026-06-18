import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Vintage Typewriter Registry</title>
      </head>
      <body className="antialiased bg-gray-50 text-gray-900">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex-shrink-0 text-2xl font-bold text-indigo-600">
                  Vintage Typewriter Registry
                </Link>
              </div>
              <div className="hidden md:flex md:space-x-8">
                <Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link>
                <Link href="/browse" className="text-gray-500 hover:text-gray-900">Browse</Link>
                <Link href="/submit" className="text-gray-500 hover:text-gray-900">Submit</Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="mt-12 bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Vintage Typewriter Registry. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}