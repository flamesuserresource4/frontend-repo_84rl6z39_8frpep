import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.15),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white"
            >
              Precision vision care in a modern, dark aesthetic
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-zinc-300 max-w-xl"
            >
              From comprehensive eye exams to handcrafted frames, we bring clarity to every detail. Book online and experience care that looks as good as it feels.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/20 transition">
                Book an exam
              </a>
              <a href="#frames" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition">
                Browse frames
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-zinc-400 text-sm">
              <Eye className="h-4 w-4" />
              <span>Trusted by 5k+ patients • Same‑day lenses • Insurance friendly</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-12 bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[conic-gradient(at_50%_50%,#0ea5e9_0deg,#7c3aed_120deg,#ec4899_240deg,#0ea5e9_360deg)] opacity-80" />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,#020617_70%)]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-10 bg-cyan-500/20 blur-2xl rounded-full" />
                  <svg viewBox="0 0 200 200" className="relative h-56 w-56 text-cyan-300/90">
                    <defs>
                      <radialGradient id="iris" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#67e8f9" />
                        <stop offset="60%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#0891b2" />
                      </radialGradient>
                    </defs>
                    <circle cx="100" cy="100" r="80" fill="url(#iris)" />
                    <circle cx="100" cy="100" r="20" fill="#0ea5e9" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
