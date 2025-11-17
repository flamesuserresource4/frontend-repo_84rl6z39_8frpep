import { Eye, Glasses, Clock, ShieldCheck } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Eye className="h-6 w-6 text-cyan-300" />,
      title: 'Advanced eye exams',
      desc: 'Digital retinal imaging, pressure checks, and holistic vision assessments.'
    },
    {
      icon: <Glasses className="h-6 w-6 text-cyan-300" />,
      title: 'Designer & indie frames',
      desc: 'Curated selection of timeless and trend-forward eyewear.'
    },
    {
      icon: <Clock className="h-6 w-6 text-cyan-300" />,
      title: 'Same‑day lenses',
      desc: 'On‑site edging lab for rapid turnarounds and perfect fit.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyan-300" />,
      title: 'Insurance friendly',
      desc: 'We work with major plans and handle the paperwork for you.'
    }
  ]

  return (
    <section id="services" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group relative rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-white/5 p-2">
                  {it.icon}
                </div>
                <h3 className="text-white font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
