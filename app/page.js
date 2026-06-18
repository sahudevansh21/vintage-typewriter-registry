import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587829662355-4b4d5ee7b3ea?auto=format&fit=crop&w=1600&q=80')] bg-center bg-cover opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Vintage Typewriter Registry</h1>
          <p className="text-lg mb-8">Discover, verify, and restore classic typewriters with a trusted community catalog.</p>
          <Link href="/submit" className="inline-block bg-indigo-300 text-indigo-900 font-semibold px-6 py-3 rounded hover:bg-indigo-400 transition">Submit Your Typewriter</Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join the Registry?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              </div>
              <div>
                <h3 className="font-semibold text-indigo-800">Verify Authenticity</h3>
                <p className="text-gray-600 mt-2">Search by serial number, model, and photos to confirm a typewriter’s history and originality.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 10c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"></path></svg>
              </div>
              <div>
                <h3 className="font-semibold text-indigo-800">Find Rare Parts</h3>
                <p className="text-gray-600 mt-2">Browse user-submitted repair guides and locate hard-to-find components for any model.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h3m8 0v3m-4-4h3m8 0H9a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2z"></path></svg>
              </div>
              <div>
                <h3 className="font-semibold text-indigo-800">Share Your Knowledge</h3>
                <p className="text-gray-600 mt-2">Upload photos, serial numbers, and repair tutorials to help fellow enthusiasts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Contributing Today</h2>
          <p className="text-gray-600 mb-8">Your collection helps preserve typing history for generations.</p>
          <Link href="/submit" className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded hover:bg-indigo-700 transition">Add a Typewriter</Link>
        </div>
      </section>
    </>
  );
}