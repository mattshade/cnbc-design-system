import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight, 
  Layers, 
  Layout, 
  Activity, 
  BookOpen, 
  Search,
  ZoomIn
} from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// --- Components ---

const Navbar = ({ presentationMode, setPresentationMode }: { presentationMode: boolean, setPresentationMode: (val: boolean) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Problem', href: '#problem' },
    { name: 'Process', href: '#process' },
    { name: 'System', href: '#system' },
    { name: 'Implementation', href: '#implementation' },
  ]

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      presentationMode ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
      isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path 
              fill="currentColor" 
              className="text-accent"
              d="M 12 1 L 20 14 L 23 21 L 16 16 L 12 23 L 8 16 L 1 21 L 4 14 Z"
            />
            <circle cx="12" cy="10.5" r="3.2" fill="#ffffff" />
            <circle cx="12" cy="10.5" r="1.3" fill="#0a0a0b" />
          </svg>
          <span className="text-[16px] font-semibold text-[#F3F4F6] tracking-tight whitespace-nowrap">
            Matt Shade
          </span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setPresentationMode(true)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-white/10 transition-colors"
          >
            Presentation Mode
          </motion.button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const ImageZoom = ({ src, alt, caption }: { src: string, alt: string, caption?: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group relative">
      <div 
        className="relative overflow-hidden rounded-xl border border-border cursor-zoom-in bg-surface"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <ZoomIn className="w-6 h-6" />
          </div>
        </div>
      </div>
      {caption && <p className="mt-4 text-sm text-muted italic font-mono uppercase tracking-widest">{caption}</p>}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12"
            onClick={() => setIsOpen(false)}
          >
            <motion.button 
              className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const SectionHeader = ({ tag, title, description }: { tag: string, title: string, description?: string }) => (
  <div className="mb-12">
    <motion.span 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="inline-block text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4"
    >
      // {tag}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-muted max-w-2xl leading-relaxed"
      >
        {description}
      </motion.p>
    )}
  </div>
)

// --- Main App ---

export default function App() {
  const [presentationMode, setPresentationMode] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={cn(
      "min-h-screen bg-background text-foreground selection:bg-accent/30 transition-all duration-700",
      presentationMode ? "p-0" : ""
    )}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX: presentationMode ? 0 : scaleX }}
      />
      
      <Navbar presentationMode={presentationMode} setPresentationMode={setPresentationMode} />

      {/* Presentation Controls (Sticky/Float) */}
      <AnimatePresence>
        {presentationMode && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-6 shadow-2xl"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-accent">Presentation Mode</span>
            <div className="w-px h-4 bg-white/10" />
            <button 
              onClick={() => setPresentationMode(false)}
              className="text-xs font-bold hover:text-accent transition-colors"
            >
              Exit
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && !presentationMode && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-4 bg-surface border border-border rounded-full shadow-2xl hover:bg-accent hover:text-background transition-all"
          >
            <ChevronRight className="w-6 h-6 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold tracking-wider uppercase mb-6 border border-accent/20">
                  Design Systems Engineering
                </span>
                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.95] tracking-tighter">
                  CNBC <br/>
                  <span className="text-muted/40">Design System</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-xl mb-10">
                  A centralized architectural framework for media scalability, unifying design principles and production engineering.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-border">
                  {[
                    { label: 'Company', value: 'CNBC' },
                    { label: 'Role', value: 'Lead Product Designer' },
                    { label: 'Status', value: 'Production' },
                    { label: 'Dev Partner', value: 'Matt Shade' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[10px] uppercase tracking-widest text-muted mb-1">{stat.label}</p>
                      <p className="font-medium text-sm">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-transparent blur-md opacity-30" />
                <img 
                  src="/images/hero.webp" 
                  alt="CNBC Design System Hero" 
                  className="rounded-2xl border border-border shadow-2xl relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="section-padding bg-surface/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeader 
                tag="Overview" 
                title="Scaling the CNBC Experience"
                description="I led the construction of the Design System for CNBC.com. This work consists of a Figma based Pattern Library with Storybook integration that functioned as our style guide."
              />
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  Our Pattern Library is intended to be a centralized place where designers shape and evolve our design language over time. This designer focused document integrates with Storybook, our UI component explorer that brings our patterns to life.
                </p>
                <p>
                  Storybook also houses foundational principles and overarching rulesets through a simple platform, accessible for all internal teams.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ImageZoom 
                src="/images/lede-card.webp" 
                alt="Lede Card Component" 
                caption="Lede card component showcasing the unified design language"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            tag="The Challenge" 
            title="Design Debt & Fragmentation"
            description="From a lack of foundations, CNBC.com was redesigned and had a series of dependencies from an older platform, resulting in unscalable patterns."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Design Debt', 
                desc: 'A mix of new & old resulted in an almost never-ending accruement of design debt because the language wasn’t built off of it’s own solid foundation.',
                icon: <Layers className="w-6 h-6 text-accent" />
              },
              { 
                title: 'Unscalable Patterns', 
                desc: 'Many existing components did not scale well for old and new use cases, leading to single-use patterns and poor, inconsistent UX.',
                icon: <Layout className="w-6 h-6 text-accent" />
              },
              { 
                title: 'No Source of Truth', 
                desc: 'Designs were dispersed throughout many different files (Sketch, Illustrator, Figma) with no clear documentation or versioning.',
                icon: <Search className="w-6 h-6 text-accent" />
              }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-surface border border-border rounded-2xl hover:border-accent/30 transition-colors"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-surface/30 overflow-hidden">
        <div className="container-custom">
          <SectionHeader 
            tag="Asset Discovery" 
            title="Auditing the Landscape"
            description="We first needed to assess the design debt. I led the UI audit, collaborating with agile teams, QA, product, and engineering."
          />

          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0 text-accent font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">UI Audit & Inventory</h4>
                  <p className="text-muted leading-relaxed">Flagging UI inconsistencies by running component cutout sessions of all known pieces of the site.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0 text-accent font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Short-term Improvements</h4>
                  <p className="text-muted leading-relaxed">Finding immediate opportunities to bridge the gap between legacy and modern components.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0 text-accent font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Taxonomy Definition</h4>
                  <p className="text-muted leading-relaxed">Structured a cutout process to categorize all components working down to the smallest element level.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageZoom src="/images/taxonomy-inventory.webp" alt="Taxonomy Inventory" caption="Google sheets taxonomy tracking" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-32">
            <ImageZoom src="/images/cutout-1.webp" alt="Cutout session 1" />
            <ImageZoom src="/images/cutout-2.webp" alt="Cutout session 2" />
            <ImageZoom src="/images/cutout-3.webp" alt="Cutout session 3" />
          </div>

          <SectionHeader 
            tag="Atomic Structure" 
            title="Building Blocks"
            description="We settled on a hierarchical approach classifying functional patterns based on their complexity, adopting Atomic Design principles."
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <ImageZoom src="/images/atomic-structure.webp" alt="Atomic Structure" caption="CNBC Atomic Taxonomy: Elements -> Components -> Modules" />
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div className="p-6 border border-border bg-surface rounded-xl">
                  <h5 className="text-accent font-mono text-xs uppercase mb-3">Atoms = Elements</h5>
                  <p className="text-sm text-muted">The smallest functional units: buttons, inputs, typography styles.</p>
                </div>
                <div className="p-6 border border-border bg-surface rounded-xl">
                  <h5 className="text-accent font-mono text-xs uppercase mb-3">Molecules = Components</h5>
                  <p className="text-sm text-muted">Groups of elements working together: search bars, navigation items.</p>
                </div>
                <div className="p-6 border border-border bg-surface rounded-xl">
                  <h5 className="text-accent font-mono text-xs uppercase mb-3">Organisms = Modules</h5>
                  <p className="text-sm text-muted">Complex UI sections: global headers, financial quote widgets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Section */}
      <section id="system" className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            tag="System Guidelines" 
            title="The Design Language"
            description="Defining the core foundations of typography, color, and spatial relationships to ensure a cohesive experience across all breakpoints."
          />

          <div className="grid lg:grid-cols-2 gap-24 mb-32">
            <div>
              <h3 className="text-3xl font-bold mb-6">Typography</h3>
              <p className="text-muted mb-8 leading-relaxed">
                I decided on a modular scale of Major Second (1.125), rounded to the nearest whole number. This approach ensured flexibility while maintaining visual harmony and vertical rhythm across our four breakpoints.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Scale: Major Second (1.125)
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Line-height: 1.125x font size
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Dynamic breakpoints for responsive vertical rhythm
                </li>
              </ul>
              <ImageZoom src="/images/figma-drilldown.webp" alt="Typography Drilldown" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Color Palette</h3>
              <p className="text-muted mb-8 leading-relaxed">
                We use a tonal range number system for balanced progression, from 0 (lightest) to 100 (darkest). "System 10" is easier for teams to remember than arbitrary names.
              </p>
              <div className="grid grid-cols-5 gap-2 mb-8">
                {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map(val => (
                  <div key={val} className="flex flex-col gap-2">
                    <div 
                      className="aspect-square rounded-md border border-white/5" 
                      style={{ backgroundColor: `rgba(255, 255, 255, ${1 - val/100})` }} 
                    />
                    <span className="text-[10px] font-mono text-muted text-center">{val}</span>
                  </div>
                ))}
              </div>
              <ImageZoom src="/images/color-palette.webp" alt="Color Palette" />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h3 className="text-3xl font-bold mb-6">Spatial & Grids</h3>
              <p className="text-muted mb-8 leading-relaxed">
                Utilizing a 4pt grid system allowed for consistent scaling across the massive variety of screen sizes. We initially tried an 8pt grid but found it too rigid for tight proximity elements.
              </p>
              <div className="p-6 bg-surface rounded-2xl border border-border">
                <div className="grid grid-cols-6 gap-4">
                  {[4, 8, 12, 16, 24, 32].map(px => (
                    <div key={px} className="flex flex-col items-center gap-3">
                      <div className="bg-accent/20 border border-accent/40 rounded-sm" style={{ width: px, height: px }} />
                      <span className="font-mono text-[10px] text-muted">{px}pt</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ImageZoom src="/images/grid-system.webp" alt="Grid System" caption="4pt grid implementation on web layout" />
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id="implementation" className="section-padding bg-surface/30">
        <div className="container-custom">
          <SectionHeader 
            tag="Implementation" 
            title="The Living Style Guide"
            description="Bridging the gap between Figma and production through Storybook integration."
          />

          <div className="grid lg:grid-cols-12 gap-16 mb-32">
            <div className="lg:col-span-7">
              <ImageZoom src="/images/storybook.webp" alt="Storybook" caption="Live Storybook instance with Figma node-view plugin" />
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-background border border-border rounded-2xl">
                <BookOpen className="w-10 h-10 text-accent mb-6" />
                <h4 className="text-xl font-bold mb-4">Storybook Integration</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Storybook served as our UI component explorer, enabling engineers to build in isolation while designers embedded specific style guide notes and real-time Figma specs.
                </p>
              </div>
              <div className="p-8 bg-background border border-border rounded-2xl">
                <Activity className="w-10 h-10 text-accent mb-6" />
                <h4 className="text-xl font-bold mb-4">Design Analytics</h4>
                <p className="text-sm text-muted leading-relaxed">
                  We monitored library and component usage via Figma's internal analytics to identify refinement areas and demonstrate effectiveness to stakeholders.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ImageZoom src="/images/figma-stats.webp" alt="Figma Stats" caption="Figma library usage analytics" />
            <ImageZoom src="/images/usecase-flows.webp" alt="UseCase Flows" caption="Scenario mapping for design system consumption" />
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-mono text-xs uppercase tracking-widest mb-6 block"
            >
              // Outcomes & Impact
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">40% Faster Start-up Time</h2>
            <p className="text-xl text-muted leading-relaxed mb-16">
              The efficiency gain was significant across all Agile teams within the company. Since its adoption, the system has grown to over 1,000 unique elements, components, and modules.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { label: 'Growth', value: '1,000+', sub: 'Unique UI Elements' },
                { label: 'Velocity', value: '40%', sub: 'Efficiency Gain' },
                { label: 'Adoption', value: '100%', sub: 'Across Agile Teams' },
              ].map((stat) => (
                <div key={stat.label} className="p-10 bg-surface border border-border rounded-3xl">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm font-medium uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-xs text-muted font-mono">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-border bg-surface/20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's build together</h3>
              <p className="text-muted">CNBC Design System Case Study</p>
            </div>
            <div className="flex gap-4">
              <button className="btn-primary">
                View on GitHub <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10 text-sm font-medium">
                Back to Portfolio
              </button>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-border flex justify-between items-center text-[10px] uppercase tracking-widest text-muted">
            <span>© Matt Shade</span>
            <span>Architected for Scale</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
