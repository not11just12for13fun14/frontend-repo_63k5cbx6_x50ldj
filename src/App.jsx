import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] } })
}

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`w-full relative ${className}`}>{children}</section>
)

function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Minimal top bar */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Zypheria</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#philosophy" className="hover:opacity-70 transition">Philosophy</a>
            <a href="#clients" className="hover:opacity-70 transition">Clients</a>
            <a href="#work" className="hover:opacity-70 transition">Work</a>
            <a href="#capabilities" className="hover:opacity-70 transition">Capabilities</a>
            <a href="#process" className="hover:opacity-70 transition">Process</a>
            <a href="#contact" className="hover:opacity-70 transition">Contact</a>
          </nav>
          <a href="#contact" className="text-sm px-4 py-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition">Enquire</a>
        </div>
      </header>

      {/* Hero */}
      <Section id="top" className="pt-28 md:pt-32 h-[90vh] md:h-screen flex items-center">
        <div className="absolute inset-0">
          {/* Spline 3D scene */}
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient overlays for cinematic depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-64 bg-gradient-to-t from-white" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-6 items-end w-full">
          <div className="md:col-span-9">
            <motion.h1
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="text-4xl md:text-7xl leading-[1.05] tracking-tight font-semibold"
            >
              Ads for Tomorrow’s Brands. Delivered Today.
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={1}
              variants={fadeUp}
              className="mt-6 text-base md:text-lg text-black/70 max-w-2xl"
            >
              Zypheria is a high-end AI creative studio crafting cinematic campaigns, brand films and launch moments at the speed of software. Minimal by design. Obsessive about detail. Engineered for impact.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              custom={2}
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#work" className="px-6 py-3 rounded-full bg-black text-white hover:bg-black/90 transition">View Work</a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition">Collaborate</a>
            </motion.div>
          </div>
          <div className="md:col-span-3 md:justify-self-end text-sm text-black/60 pb-4">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="uppercase tracking-wide text-xs">Based in</p>
              <p>London — New York — Remote</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section id="philosophy" className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-semibold tracking-tight"
          >
            Philosophy
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            variants={fadeUp}
            className="mt-6 text-black/70 max-w-3xl"
          >
            We believe restraint is a superpower. Great work is simple, intentional and unmistakably human. We pair creative direction with proprietary AI tools to move from concept to final in days—not months—without compromising craft.
          </motion.p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Clarity over noise', copy: 'Minimal interfaces. Singular ideas. Every frame has a job.' },
              { title: 'Story meets system', copy: 'Narrative structure powered by reproducible pipelines and model ops.' },
              { title: 'Speed as an edge', copy: 'Rapid iteration, on-model generation, and in-house post for precision.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="p-6 rounded-2xl border border-black/10 bg-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-black/70">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Clients */}
      <Section id="clients" className="py-20 md:py-28 bg-gradient-to-b from-white via-violet-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-sm uppercase tracking-[0.2em] text-black/60">Selected Clients</h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
              {['Aether Labs','Nova Bank','Horizon','Kepler','Monarch','Fluxwear','Orbit','Nimbus','Vela','Northwood','Helix','Arcadia'].map((c, i) => (
                <div key={i} className="py-6 px-3 rounded-xl border border-black/10 bg-white/60 backdrop-blur-sm text-sm font-medium">{c}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Work */}
      <Section id="work" className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Work</h2>
            <p className="text-sm text-black/60 max-w-sm">Cinematic campaigns and product films crafted with custom AI pipelines, 3D and realtime toolchains.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Kepler XR — Launch Film', tag: 'Generative + 3D', hue: 'from-violet-400 to-indigo-600' },
              { title: 'Nova Bank — Brand Anthem', tag: 'Voice + Diffusion', hue: 'from-fuchsia-400 to-violet-600' },
              { title: 'Fluxwear — Product Spots', tag: 'Realtime + Edit', hue: 'from-blue-400 to-purple-600' },
              { title: 'Aether Labs — R&D Sizzle', tag: 'Model Training', hue: 'from-rose-400 to-amber-500' },
              { title: 'Arcadia — Campaign Toolkit', tag: 'Design System', hue: 'from-emerald-400 to-cyan-500' },
              { title: 'Vela — Social Cutdowns', tag: 'Automation', hue: 'from-sky-400 to-blue-600' }
            ].map((w, i) => (
              <motion.a key={i} href="#contact" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 + Math.floor(i/3)*0.05, duration: 0.6 }} className="group block rounded-2xl overflow-hidden border border-black/10 bg-white">
                <div className={`aspect-[16/10] bg-gradient-to-br ${w.hue} relative`}>
                  <div className="absolute inset-0 mix-blend-multiply opacity-40 group-hover:opacity-60 transition" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{w.title}</h3>
                    <p className="text-sm text-black/60">{w.tag}</p>
                  </div>
                  <div className="text-xs px-3 py-1 rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition">View</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section id="capabilities" className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-semibold tracking-tight">Capabilities</motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { h: 'AI-Generated Commercials', p: 'From idea to master in days. Bespoke prompts, style rigs and edit systems for broadcast-grade spots.' },
              { h: 'Brand Films & Launches', p: 'Cinematic narratives that introduce products, platforms and updates with clarity and emotion.' },
              { h: '3D & Motion Design', p: 'Design-driven sequences, product visualizations and title systems—rendered or realtime.' },
              { h: 'Realtime & Interactive', p: 'Unreal/Unity, WebGL and procedural pipelines for reactive installations and sites.' },
              { h: 'Voice & Agent Systems', p: 'AI voices, dialogue and agent behaviors tuned to brand guidelines and tone.' },
              { h: 'Post & Finishing', p: 'Color, sound, conform and delivery managed end-to-end in-house for quality control.' }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i%3)*0.08, duration: 0.6 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-semibold">{c.h}</h3>
                <p className="mt-3 text-sm text-white/70">{c.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Process</h2>
          <div className="mt-10 grid md:grid-cols-6 gap-6">
            {[
              { t: 'Discover', c: 'Goals, constraints, references. We define success and the creative north star.' },
              { t: 'Design', c: 'Boards, scripts and look dev. Align on narrative, pacing and visual system.' },
              { t: 'Train', c: 'Fine-tune models and style rigs for consistency across shots and formats.' },
              { t: 'Produce', c: 'Generate, shoot, simulate, animate. Tight internal edit cycles for speed.' },
              { t: 'Deploy', c: 'Mastering, versioning and delivery across channels, markets and languages.' },
              { t: 'Measure', c: 'Performance loops inform the next iteration. Always learning, always sharper.' }
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05, duration: 0.6 }} className="p-6 rounded-2xl border border-black/10 bg-white">
                <div className="text-xs uppercase tracking-wide text-black/50">Step {i+1}</div>
                <h3 className="mt-2 font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm text-black/70">{s.c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-white to-violet-50/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Let’s build what’s next.</h2>
              <p className="mt-5 text-black/70">New business, collaborations and press. Share a brief and we’ll respond within 24 hours.</p>
              <div className="mt-6 text-lg">
                <a href="mailto:hello@zypheria.studio" className="underline underline-offset-4 decoration-violet-400 hover:opacity-80">hello@zypheria.studio</a>
              </div>
              <div className="mt-4 text-sm text-black/60">London — New York — Remote</div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="p-6 rounded-2xl border border-black/10 bg-white">
              <div className="grid grid-cols-1 gap-4">
                <label className="text-sm">Name<input className="mt-2 w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300" placeholder="Your name" /></label>
                <label className="text-sm">Email<input type="email" className="mt-2 w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300" placeholder="you@company.com" /></label>
                <label className="text-sm">Message<textarea rows={5} className="mt-2 w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300" placeholder="A few lines about the project" /></label>
                <button className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-black text-white hover:bg-black/90">Send enquiry</button>
              </div>
              <p className="mt-3 text-xs text-black/50">By submitting you agree to be contacted by Zypheria regarding your project.</p>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/60">
          <div>© {new Date().getFullYear()} Zypheria Studio</div>
          <div className="flex items-center gap-6">
            <a href="#philosophy" className="hover:opacity-80">Philosophy</a>
            <a href="#work" className="hover:opacity-80">Work</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
