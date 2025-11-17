import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Eye, Stars, MapPin, Phone } from 'lucide-react'
import EyeDivider from '../components/EyeDivider'

const team = [
  {
    name: 'Dr. Aisha Karim',
    title: 'Clinical Director',
    bio: 'Specialist in ocular disease and advanced contact lens fitting with over 12 years of experience.',
  },
  {
    name: 'Dr. Mateo Silva',
    title: 'Optometrist',
    bio: 'Focuses on pediatric vision and sports vision therapy with a patient-first approach.',
  },
  {
    name: 'Elena Park',
    title: 'Lead Optician',
    bio: 'Expert frame stylist and lens crafter, ensuring every pair fits and flatters perfectly.',
  },
]

export default function Opticians() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            >
              Meet your opticians
            </motion.h1>
            <p className="mt-3 text-zinc-300 max-w-2xl">A dedicated team blending medical precision with design sensibility. We listen, we measure, we perfect.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="relative overflow-hidden rounded-xl border border_white/10 bg-white/[0.03] p-6">
                <div className="absolute -inset-10 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-transparent blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-cyan-500/20 blur-md rounded-full" />
                        <div className="relative h-12 w-12 rounded-full bg-gradient-to-tr from-cyan-500/30 to-fuchsia-500/30 flex items-center justify-center">
                          <Eye className="h-6 w-6 text-cyan-200" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{t.name}</h3>
                        <p className="text-sm text-zinc-400">{t.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-cyan-300">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Stars key={i} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <EyeDivider />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-bold text-white">Visit us</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-6">
              <div className="space-y-3 text-zinc-300">
                <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-cyan-300" /> 221 Vision Ave, Suite 10, Nova City</p>
                <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-cyan-300" /> (555) 0199-2020</p>
              </div>
              <div className="h-60 rounded-lg bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-transparent" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-zinc-400 text-sm">
          © {new Date().getFullYear()} Lumen Optics. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
