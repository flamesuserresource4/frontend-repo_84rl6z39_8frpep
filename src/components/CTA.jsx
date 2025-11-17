export default function CTA() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10 p-8">
          <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.25),transparent_60%)] blur-2xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to see things clearly?</h2>
              <p className="mt-2 text-zinc-300">Schedule your comprehensive eye exam in minutes. We’ll handle the rest.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition">
              Book now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
