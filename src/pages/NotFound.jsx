import Navbar from '../components/Navbar'

export default function NotFound(){
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="pt-28 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-black">Page not found</h1>
        <p className="mt-2 text-zinc-300">The page you’re looking for doesn’t exist. Head back home.</p>
        <a href="/" className="inline-block mt-6 px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200">Go home</a>
      </main>
    </div>
  )
}
