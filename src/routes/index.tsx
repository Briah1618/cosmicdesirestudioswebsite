import { createFileRoute } from '@tanstack/react-router'
import {
  Box,
  Github,
  Guitar,
  Instagram,
  Mail,
  Music2,
  Palette,
  Rocket,
  Swords,
  TrainFront,
  Youtube,
} from 'lucide-react'
import type { ComponentType, CSSProperties, PointerEvent, ReactNode } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

type Category = 'Applications' | 'Games' | '3D' | 'Music' | 'Experiments'

const NAV_LINKS = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#apps', label: 'Applications' },
  { href: '#games', label: 'Games' },
  { href: '#contact', label: 'Contact' },
]

const PROJECTS: Array<{
  title: string
  category: Category
  description: string
  image: 'vienna' | 'rail' | 'fortress' | 'atelier' | 'audio' | 'lab'
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
}> = [
  {
    title: 'WASIST',
    category: 'Applications',
    description:
      'A mobile-first event discovery app for Vienna, designed for nightlife, concerts and spontaneous city movement.',
    image: 'vienna',
    icon: Rocket,
  },
  {
    title: 'Lokführer Österreich',
    category: 'Applications',
    description:
      'An independent learning and orientation tool for aspiring train drivers in Austria.',
    image: 'rail',
    icon: TrainFront,
  },
  {
    title: 'Roadside Stories / The Last Fortress',
    category: 'Games',
    description:
      'A Unity action RPG prototype with hack-and-slash combat, loot, quests and a growing hub.',
    image: 'fortress',
    icon: Swords,
  },
  {
    title: 'Blender Worlds',
    category: '3D',
    description:
      'Models, props, environments and visual concepts shaped for interactive worlds.',
    image: 'atelier',
    icon: Box,
  },
  {
    title: 'Atmospheric Audio',
    category: 'Music',
    description:
      'Metal, rock and indie influenced music, sound design and cinematic audio sketches.',
    image: 'audio',
    icon: Guitar,
  },
  {
    title: 'Interface Studies',
    category: 'Experiments',
    description:
      'Small explorations in interaction, visual systems, motion and digital craftsmanship.',
    image: 'lab',
    icon: Palette,
  },
]

const CATEGORY_LINKS: Array<{ id: string; label: Category }> = [
  { id: 'apps', label: 'Applications' },
  { id: 'games', label: 'Games' },
  { id: '3d', label: '3D' },
  { id: 'music', label: 'Music' },
  { id: 'experiments', label: 'Experiments' },
]

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:contact@blackflamearchives.store', icon: Mail },
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'SoundCloud', href: 'https://soundcloud.com', icon: Music2 },
]

function Home() {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const x = (event.clientX / window.innerWidth - 0.5).toFixed(3)
    const y = (event.clientY / window.innerHeight - 0.5).toFixed(3)

    event.currentTarget.style.setProperty('--parallax-x', x)
    event.currentTarget.style.setProperty('--parallax-y', y)
  }

  return (
    <div
      className="min-h-screen overflow-hidden bg-ink font-sans text-cream selection:bg-bronze selection:text-ink"
      style={{ '--parallax-x': '0', '--parallax-y': '0' } as CSSProperties}
      onPointerMove={handlePointerMove}
    >
      <Atmosphere />
      <Nav />
      <Hero />
      <Portfolio />
      <About />
      <CategorySection
        id="apps"
        eyebrow="Applications"
        title="Precise Digital Tools"
        text="Mobile-first products shaped with focused interaction, polished flow and careful visual rhythm."
        projects={PROJECTS.filter((project) => project.category === 'Applications')}
      />
      <CategorySection
        id="games"
        eyebrow="Games"
        title="Playable Worlds"
        text="Unity prototypes where combat, progression and atmosphere work together as one authored space."
        projects={PROJECTS.filter((project) => project.category === 'Games')}
        featured
      />
      <CategorySection
        id="3d"
        eyebrow="3D"
        title="Objects and Environments"
        text="Blender models, props, environments and visual concepts for games, applications and cinematic studies."
        projects={PROJECTS.filter((project) => project.category === '3D')}
      />
      <CategorySection
        id="music"
        eyebrow="Music"
        title="Sound and Texture"
        text="Original music, atmospheric audio ideas and sound design influenced by metal, rock and indie sensibilities."
        projects={PROJECTS.filter((project) => project.category === 'Music')}
      />
      <CategorySection
        id="experiments"
        eyebrow="Experiments"
        title="Interface Studies"
        text="Small explorations in motion, composition and interactive ideas that inform the larger body of work."
        projects={PROJECTS.filter((project) => project.category === 'Experiments')}
      />
      <Contact />
      <Footer />
    </div>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-bronze/15 bg-ink/58 shadow-[0_1px_45px_rgba(0,0,0,0.42)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3 text-cream">
          <PleiadesMark className="h-8 w-8" />
          <span className="font-label text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm">
            Cosmic Desire Studios
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-label text-xs uppercase tracking-[0.18em] text-muted lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-bronze/25 bg-surface/55 px-4 py-2 font-label text-xs uppercase tracking-[0.16em] text-gold transition-all hover:border-gold/50 hover:shadow-[0_0_28px_rgba(200,156,106,0.13)]"
        >
          Contact
        </a>
      </div>
    </header>
  )
}

function PleiadesMark({ className = '' }: { className?: string }) {
  const points = [
    [21, 17, 1.8],
    [35, 13, 1.35],
    [45, 24, 1.55],
    [31, 30, 2.2],
    [18, 34, 1.45],
    [41, 42, 1.75],
    [26, 47, 1.25],
  ]

  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <filter id="pleiades-glow">
        <feGaussianBlur stdDeviation="2.4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <g filter="url(#pleiades-glow)">
        {points.map(([cx, cy, r]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="currentColor" className="text-bronze" />
        ))}
      </g>
    </svg>
  )
}

function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#2B1B12_0%,#22160F_18%,#151311_48%,#080808_100%)]" />
      <div className="absolute inset-x-[-10%] top-[-18%] h-[42rem] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(230,207,167,0.12),rgba(200,156,106,0.04)_42%,transparent_70%)] blur-3xl [transform:translate3d(calc(var(--parallax-x)*18px),calc(var(--parallax-y)*18px),0)]" />
      <div className="absolute left-[6%] top-[28rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(200,156,106,0.07),transparent_66%)] blur-3xl [transform:translate3d(calc(var(--parallax-x)*-22px),calc(var(--parallax-y)*-12px),0)]" />
      <div className="absolute right-[-8rem] top-[42rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(230,207,167,0.06),transparent_62%)] blur-3xl [transform:translate3d(calc(var(--parallax-x)*16px),calc(var(--parallax-y)*-20px),0)]" />
      <div className="absolute left-1/2 top-1/4 h-px w-[58rem] -translate-x-1/2 rotate-[8deg] bg-gradient-to-r from-transparent via-bronze/16 to-transparent" />
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative z-10 min-h-[92vh] px-5 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 pt-24 lg:grid-cols-[0.9fr_1.1fr] lg:pb-28 lg:pt-28">
        <div className="hero-rise text-center lg:text-left">
          <p className="mb-7 font-label text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            Apps • Games • 3D • Music
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[0.03em] text-cream drop-shadow-[0_18px_70px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
            Design Beyond Reality.
          </h1>
          <p className="mt-7 max-w-2xl text-balance text-xl leading-relaxed text-gold/90 lg:text-2xl">
            Crafted through symbol, imagination and precision.
          </p>
          <p className="mt-5 max-w-2xl text-balance leading-8 text-muted">
            A personal portfolio exploring apps, games, interactive experiences,
            3D creations and original music.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a className="premium-button primary" href="#portfolio">
              View Portfolio
            </a>
            <a className="premium-button secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <CelestialComposition />
      </div>
    </section>
  )
}

function CelestialComposition() {
  return (
    <div className="hero-rise relative mx-auto aspect-square w-full max-w-[42rem] [animation-delay:140ms]">
      <div className="absolute inset-3 rounded-full border border-bronze/10" />
      <div className="absolute inset-[13%] rounded-full border border-gold/10" />
      <div className="absolute inset-[27%] rounded-full border border-bronze/12" />
      <svg className="absolute inset-0 h-full w-full text-bronze/50" viewBox="0 0 640 640" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <ellipse cx="320" cy="320" rx="268" ry="92" />
          <ellipse cx="320" cy="320" rx="214" ry="214" />
          <path d="M90 320h460" />
          <path d="M320 74v492" />
        </g>
      </svg>
      <Saturn className="saturn-motion absolute left-1/2 top-[11%] h-[11rem] w-[18rem] -translate-x-1/2 text-bronze sm:h-[13rem] sm:w-[21rem]" />
      <Earth className="earth-motion absolute bottom-[11%] left-1/2 h-[10rem] w-[10rem] -translate-x-1/2 text-gold sm:h-[12rem] sm:w-[12rem]" />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bronze/45 bg-bronze/20 shadow-[0_0_34px_rgba(200,156,106,0.22)]" />
    </div>
  )
}

function Saturn({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 360 220" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <ellipse cx="180" cy="112" rx="64" ry="64" strokeWidth="1.4" opacity="0.78" />
        <ellipse cx="180" cy="112" rx="144" ry="30" strokeWidth="1.2" opacity="0.72" />
        <ellipse cx="180" cy="112" rx="116" ry="23" strokeWidth="0.8" opacity="0.4" />
        <path d="M128 75c23 14 72 14 104 1" strokeWidth="0.8" opacity="0.42" />
        <path d="M121 122c28 19 88 21 120 1" strokeWidth="0.8" opacity="0.42" />
        <path d="M148 55c22-8 47-8 68 0" strokeWidth="0.8" opacity="0.34" />
      </g>
    </svg>
  )
}

function Earth({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 220" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <circle cx="110" cy="110" r="74" strokeWidth="1.2" opacity="0.75" />
        <ellipse cx="110" cy="110" rx="34" ry="74" strokeWidth="0.8" opacity="0.42" />
        <ellipse cx="110" cy="110" rx="74" ry="24" strokeWidth="0.8" opacity="0.38" />
        <path d="M53 82c25 8 42-13 64-5 15 5 21 20 50 15" strokeWidth="0.9" opacity="0.52" />
        <path d="M65 135c24-10 37 12 59 5 19-6 22-24 44-16" strokeWidth="0.9" opacity="0.48" />
      </g>
    </svg>
  )
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="relative mb-12">
      <div aria-hidden className="absolute -left-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-bronze/10" />
      <p className="font-label text-xs font-semibold uppercase tracking-[0.3em] text-bronze">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-[0.03em] text-cream sm:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 max-w-2xl leading-8 text-muted">{text}</p> : null}
    </div>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Work Across Digital Craft"
        text="A showcase of applications, games, visual systems, 3D studies, audio ideas and experiments."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        {CATEGORY_LINKS.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="rounded-full border border-bronze/18 bg-surface/55 px-4 py-2 font-label text-xs uppercase tracking-[0.16em] text-muted transition-all hover:-translate-y-0.5 hover:border-bronze/50 hover:text-gold"
          >
            {category.label}
          </a>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="grid gap-10 border-y border-bronze/12 py-16 lg:grid-cols-[0.65fr_1fr] lg:items-start">
        <SectionHeading eyebrow="About" title="About" />
        <div className="space-y-6 text-lg leading-9 text-muted">
          <p>Cosmic Desire Studios is my personal creative portfolio.</p>
          <p>
            Here I explore software, games, visual design, 3D worlds and music
            through thoughtful digital craftsmanship.
          </p>
          <p>
            Every project reflects curiosity, precision and a fascination with
            timeless aesthetics.
          </p>
        </div>
      </div>
    </section>
  )
}

function CategorySection({
  id,
  eyebrow,
  title,
  text,
  projects,
  featured = false,
}: {
  id: string
  eyebrow: string
  title: string
  text: string
  projects: typeof PROJECTS
  featured?: boolean
}) {
  return (
    <section id={id} className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} text={text} />
      <div className={`grid gap-5 ${featured ? '' : 'md:grid-cols-2'}`}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} wide={featured} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  category,
  description,
  image,
  icon: Icon,
  wide = false,
}: {
  title: string
  category: Category
  description: string
  image: 'vienna' | 'rail' | 'fortress' | 'atelier' | 'audio' | 'lab'
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  wide?: boolean
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.6rem] border border-bronze/18 bg-surface/82 shadow-[0_30px_90px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-1 hover:border-bronze/44 hover:shadow-[0_32px_100px_rgba(200,156,106,0.1)] ${
        wide ? 'lg:grid lg:grid-cols-[1.1fr_0.9fr]' : ''
      }`}
    >
      <ProjectImage variant={image} className={wide ? 'min-h-[22rem] lg:h-full' : 'h-64'} />
      <div className="relative p-7 sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-bronze">
            {category}
          </p>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-bronze/18 bg-ink/45 text-bronze">
            <Icon className="h-4 w-4" strokeWidth={1.3} />
          </span>
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-[0.03em] text-cream">{title}</h3>
        <p className="mt-4 leading-8 text-muted">{description}</p>
      </div>
    </article>
  )
}

function ProjectImage({
  variant,
  className = '',
}: {
  variant: 'vienna' | 'rail' | 'fortress' | 'atelier' | 'audio' | 'lab'
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      <div className={`project-visual project-visual-${variant}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(230,207,167,0.16),transparent_44%)] opacity-80 transition-transform duration-700 group-hover:scale-105" />
      <svg className="absolute inset-0 h-full w-full text-bronze/28" viewBox="0 0 420 260" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="210" cy="130" r="72" />
          <ellipse cx="210" cy="130" rx="154" ry="48" />
          <path d="M56 130h308" />
          <path d="M210 34v192" />
        </g>
      </svg>
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative z-10 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.3em] text-bronze">Contact</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-[0.03em] text-cream sm:text-5xl">
          Begin a Conversation
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
          For collaborations, project inquiries or creative exchange, reach out
          directly.
        </p>
        <a className="mt-6 inline-block text-gold transition-colors hover:text-cream" href="mailto:contact@blackflamearchives.store">
          contact@blackflamearchives.store
        </a>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
            <ContactButton key={label} href={href} external={label !== 'Email'}>
              <Icon className="h-4 w-4" strokeWidth={1.3} />
              {label}
            </ContactButton>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactButton({
  href,
  external,
  children,
}: {
  href: string
  external?: boolean
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="flex items-center gap-2 rounded-full border border-bronze/18 bg-surface/70 px-5 py-2.5 font-label text-xs uppercase tracking-[0.15em] text-muted transition-all hover:-translate-y-0.5 hover:border-bronze/50 hover:text-gold hover:shadow-[0_0_28px_rgba(200,156,106,0.11)]"
    >
      {children}
    </a>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-bronze/18 px-5 py-10 text-center sm:px-8">
      <p className="font-display text-lg tracking-[0.08em] text-cream">Cosmic Desire Studios</p>
      <p className="mt-3 font-label text-xs uppercase tracking-[0.22em] text-muted">Design Beyond Reality.</p>
      <p className="mt-4 text-sm text-muted/70">© 2025 Cosmic Desire Studios</p>
    </footer>
  )
}
