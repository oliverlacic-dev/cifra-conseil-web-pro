import { useEffect, useRef, useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BarChart3, BriefcaseBusiness, Check, ClipboardCheck, FileCheck2, Megaphone, Menu, MonitorCog, ShieldCheck, Sparkles, X } from 'lucide-react'
import { toast } from 'sonner'

const heroImage = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85'
const services = [
  { icon: ClipboardCheck, title: 'Comptabilité à temps partiel', text: 'Des livres clairs, à jour et utiles pour prendre vos décisions avec confiance.' },
  { icon: BarChart3, title: 'Direction financière fractionnelle', text: 'Une vision de CFO expérimenté, quelques heures par semaine ou selon votre rythme.' },
  { icon: BarChart3, title: 'Gestion de croissance', text: 'Structurez vos finances, votre trésorerie et vos processus pour grandir de façon contrôlée et rentable.' },
  { icon: Megaphone, title: 'Marketing fractionnel', text: 'Une direction marketing selon vos besoins : stratégie, priorités, suivi des résultats et accompagnement de votre croissance.' },
  { icon: MonitorCog, title: 'Direction et gestion des TI', text: 'Une gouvernance technologique adaptée à votre PME : stratégie TI, suivi des projets, sécurité et gestion de vos partenaires.' },
  { icon: ShieldCheck, title: 'Fiscalité, avec nos partenaires', text: 'Une coordination simple avec des spécialistes de confiance lorsque votre dossier le demande.' },
  { icon: FileCheck2, title: 'Fin d’année, audit et examen', text: 'Une préparation rigoureuse et une communication fluide jusqu’à la livraison.' },
]

const plans = [
  { name: 'Essentiel', label: 'Pour remettre de l’ordre', points: ['Tenue de livres mensuelle', 'Rapports financiers de base', 'Suivi des encaissements'] },
  { name: 'Standard', label: 'Pour piloter sereinement', points: ['Tout Essentiel', 'Budget et prévisions', 'Rencontre mensuelle de direction'], featured: true },
  { name: 'Croissance', label: 'Pour accélérer avec méthode', points: ['Tout Standard', 'Tableau de bord personnalisé', 'Accompagnement des décisions'] },
  { name: 'Transformation', label: 'Pour franchir un cap', points: ['Direction financière intégrée', 'Optimisation des processus', 'Planification stratégique'] },
]

const chapters = [
  { eyebrow: '01 / Comprendre', title: 'Des chiffres qui parlent enfin le langage de votre entreprise.', text: 'On commence par écouter votre réalité : vos opérations, vos enjeux et les décisions qui vous attendent.', icon: BriefcaseBusiness },
  { eyebrow: '02 / Structurer', title: 'Une fonction financière calibrée à votre taille.', text: 'Pas de poste à temps plein à justifier. Un forfait clair, ajusté à vos besoins actuels et à votre croissance.', icon: ClipboardCheck },
  { eyebrow: '03 / Décider', title: 'Plus de visibilité. Moins de surprises.', text: 'Vous obtenez des repères fiables pour investir, embaucher, négocier et avancer avec calme.', icon: BarChart3 },
]

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Cifra Conseils | Direction financière pour PME québécoises' },
    { name: 'description', content: 'Cifra Conseils accompagne les PME québécoises avec une direction financière et une comptabilité à temps partiel, adaptées à leur réalité.' },
    { property: 'og:title', content: 'Cifra Conseils — Votre direction financière, à la bonne mesure' },
    { property: 'og:description', content: 'Une expertise financière de haut niveau, sans l’engagement d’un poste à temps plein.' },
    { property: 'og:locale', content: 'fr_CA' },
  ] }),
  component: Home,
})

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeChapter, setActiveChapter] = useState(0)
  const [formSent, setFormSent] = useState(false)
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = chapterRefs.current.map((node, index) => {
      if (!node) return null
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveChapter(index)
      }, { threshold: 0.55 })
      observer.observe(node)
      return observer
    })
    return () => observers.forEach(observer => observer?.disconnect())
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormSent(true)
    toast.success('Merci pour votre message.', { description: 'Nous vous reviendrons rapidement.' })
  }

  return (
    <div className="min-h-dvh overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#0D1F2D]/90 text-white backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#accueil" className="flex items-center gap-3" aria-label="Cifra Conseils, accueil">
            <img src="/cifra-conseil-logo.png" alt="Cifra Conseils" className="h-12 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex" aria-label="Navigation principale">
            <Link className="transition-colors hover:text-[#02C39A]" to="/services">Services</Link>
            <a className="transition-colors hover:text-[#02C39A]" href="#approche">Notre approche</a>
            <Link className="transition-colors hover:text-[#02C39A]" to="/a-propos">À propos</Link>
            <Link className="transition-colors hover:text-[#02C39A]" to="/contact">Contact</Link>
          </nav>
          <a href="#contact" className="hidden rounded-[8px] bg-[#02C39A] px-5 py-3 text-sm font-semibold text-[#0D1F2D] transition-transform hover:scale-[1.03] active:scale-95 md:block">Réserver une consultation <ArrowRight className="ml-2 inline h-4 w-4" /></a>
          <button className="rounded-[8px] p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-white/15 bg-[#0D1F2D] px-5 py-5 md:hidden"><div className="flex flex-col gap-5 text-sm"><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link><a href="#approche" onClick={() => setMenuOpen(false)}>Notre approche</a><Link to="/a-propos" onClick={() => setMenuOpen(false)}>À propos</Link><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></div></nav>}
      </header>

      <main id="accueil">
        <section className="relative min-h-[760px] overflow-hidden bg-[#0D1F2D] pt-[76px] text-white lg:min-h-[850px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F2D] via-[#0D1F2D]/95 to-[#0D1F2D]/35" />
          <img src={heroImage} alt="Dirigeants de PME en réunion autour de données financières" className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-[#028090]/30 blur-3xl" />
          <div className="relative mx-auto grid min-h-[684px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1fr_0.7fr] lg:px-8">
            <div className="max-w-3xl animate-fade-in">
              <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#02C39A]"><span className="h-px w-8 bg-[#02C39A]" /> Pour les PME qui veulent voir clair</p>
              <h1 className="max-w-3xl font-serif text-5xl leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]">Votre direction financière, <em className="text-[#02C39A]">à la bonne mesure.</em></h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/72 sm:text-xl">L’expertise d’un CFO expérimenté et une comptabilité solide, sans l’engagement d’un poste à temps plein.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row"><a href="#contact" className="rounded-[8px] bg-[#02C39A] px-6 py-4 text-center font-semibold text-[#0D1F2D] transition-transform hover:scale-[1.03] active:scale-95">Discutons de vos besoins <ArrowRight className="ml-2 inline h-4 w-4" /></a><a href="#services" className="rounded-[8px] border border-white/30 px-6 py-4 text-center font-semibold text-white transition-colors hover:border-[#02C39A] hover:text-[#02C39A]">Découvrir nos services</a></div>
              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55"><span><strong className="text-[#C8923A]">20+</strong> ans d’expérience</span><span><strong className="text-[#C8923A]">1M$–50M$</strong> de revenus</span><span><strong className="text-[#C8923A]">Québec</strong> · Lévis · Rive-Sud</span></div>
            </div>
            <div className="hidden justify-end lg:flex"><div className="w-72 translate-y-10 rotate-2 overflow-hidden rounded-[20px] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-sm"><div className="flex h-96 items-center justify-center rounded-[12px] bg-[#F8F7F0] p-8"><img src="/cifra-conseil-logo.png" alt="Logo Cifra Conseils" className="w-full object-contain" /></div><div className="p-4"><p className="font-serif text-xl">La rigueur, avec une approche humaine.</p><p className="mt-2 text-xs uppercase tracking-widest text-[#02C39A]">Lévis · Québec</p></div></div></div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="grid gap-12 lg:grid-cols-[0.7fr_1fr]"><div><p className="label-kicker">Nos expertises</p><h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-tight sm:text-5xl">Les expertises qui font avancer votre réalité.</h2><p className="mt-6 max-w-sm leading-7 text-muted-foreground">De la finance au marketing et aux TI, nous vous aidons à structurer les fonctions clés de votre PME et à faire avancer vos priorités.</p></div><div className="grid gap-4 sm:grid-cols-2">{services.map(({ icon: Icon, title, text }, index) => <article key={title} className={`service-card group ${index === 1 ? 'sm:translate-y-8' : ''}`}><div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#E2F5F0] text-[#028090] transition-colors group-hover:bg-[#02C39A] group-hover:text-[#0D1F2D]"><Icon className="h-5 w-5" /></div><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p><span className="mt-7 inline-flex items-center text-sm font-semibold text-[#028090]">En savoir plus <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span></article>)}</div></div></section>

        <section id="approche" className="bg-[#0D1F2D] py-24 text-white lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="label-kicker text-[#02C39A]">Le dossier Cifra</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">Une présence financière qui change la façon de décider.</h2></div><p className="max-w-sm text-sm leading-6 text-white/55">Une méthode claire, une relation de proximité et une expertise qui s’adapte à votre stade de croissance.</p></div><div className="grid gap-5 lg:grid-cols-[0.45fr_1fr]"><div className="flex gap-2 lg:flex-col">{chapters.map((chapter, index) => <button key={chapter.eyebrow} onClick={() => { setActiveChapter(index); chapterRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }} className={`border-l-2 px-4 py-3 text-left text-xs font-mono uppercase tracking-widest transition-colors ${activeChapter === index ? 'border-[#02C39A] text-[#02C39A]' : 'border-white/15 text-white/45 hover:text-white/80'}`}>{chapter.eyebrow}</button>)}</div><div className="space-y-3">{chapters.map(({ eyebrow, title, text, icon: Icon }, index) => <div ref={node => { chapterRefs.current[index] = node }} key={eyebrow} className={`min-h-[230px] rounded-[12px] border p-7 transition-all duration-500 sm:p-10 ${activeChapter === index ? 'border-[#028090] bg-[#122d3c]' : 'border-white/10 bg-white/[0.03]'}`}><Icon className="h-7 w-7 text-[#C8923A]" /><p className="mt-8 font-mono text-xs uppercase tracking-widest text-white/40">{eyebrow}</p><h3 className="mt-3 max-w-2xl font-serif text-3xl leading-tight">{title}</h3><p className="mt-4 max-w-xl leading-7 text-white/60">{text}</p></div>)}</div></div></div></section>

        <section id="forfaits" className="bg-[#E2F5F0] px-5 py-24 lg:py-32"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="label-kicker">Des forfaits qui évoluent</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">L’accompagnement qu’il vous faut, au moment où il vous faut.</h2></div><div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{plans.map(plan => <article key={plan.name} className={`rounded-[12px] border bg-background p-7 transition-transform hover:-translate-y-1 ${plan.featured ? 'border-[#028090] shadow-[0_15px_35px_rgba(2,128,144,0.16)]' : 'border-[#b8ddd5]'}`}><div className="flex items-center justify-between"><h3 className="text-xl font-semibold">{plan.name}</h3>{plan.featured && <span className="rounded-full bg-[#C8923A] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0D1F2D]">Populaire</span>}</div><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{plan.label}</p><div className="my-6 h-px bg-border" /><ul className="space-y-3">{plan.points.map(point => <li key={point} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#028090]" />{point}</li>)}</ul><a href="#contact" className="mt-8 block border-b border-[#028090] pb-2 text-sm font-semibold text-[#028090]">Parlons de votre situation <ArrowRight className="ml-1 inline h-4 w-4" /></a></article>)}</div></div></section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32"><div><p className="label-kicker">Une expertise solide, une présence locale</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Les bons conseils sont ceux qui tiennent compte du terrain.</h2><p className="mt-6 leading-7 text-muted-foreground">Cifra Conseils apporte une perspective structurée, toujours traduite en actions concrètes pour les PME d’ici. Une expertise accessible, une compréhension réelle de vos opérations et des décisions plus sereines.</p><Link to="/a-propos" className="mt-8 inline-flex items-center font-semibold text-[#028090]">Découvrir notre approche <ArrowRight className="ml-2 h-4 w-4" /></Link></div><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-[12px] bg-[#0D1F2D] p-8 text-white"><Sparkles className="h-6 w-6 text-[#C8923A]" /><p className="mt-12 font-serif text-3xl">20+</p><p className="mt-2 text-sm text-white/55">années d’expérience financière</p></div><div className="rounded-[12px] border border-[#b8ddd5] p-8"><p className="font-serif text-3xl text-[#028090]">1 à 250</p><p className="mt-2 text-sm leading-6 text-muted-foreground">employés accompagnés, selon la réalité de votre PME</p></div></div></section>

        <section className="bg-[#E2F5F0] px-5 py-24 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><div><p className="label-kicker">Pourquoi le fractionnel?</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">L’expertise dont vous avez besoin, sans le poids d’une structure trop grande.</h2></div><p className="max-w-xl leading-7 text-muted-foreground">Une équipe financière à la bonne mesure de votre entreprise : assez présente pour faire avancer les choses, assez flexible pour évoluer avec vous.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4"><article className="rounded-[12px] bg-background p-7"><p className="font-mono text-sm text-[#C8923A]">01</p><h3 className="mt-10 text-xl font-semibold">Plus de visibilité</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Des rapports clairs et des indicateurs utiles pour décider sans attendre.</p></article><article className="rounded-[12px] bg-background p-7"><p className="font-mono text-sm text-[#C8923A]">02</p><h3 className="mt-10 text-xl font-semibold">Moins de risques</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Des processus mieux structurés et des suivis réguliers qui réduisent les surprises.</p></article><article className="rounded-[12px] bg-background p-7"><p className="font-mono text-sm text-[#C8923A]">03</p><h3 className="mt-10 text-xl font-semibold">Une équipe qui s’adapte</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Un accompagnement qui augmente ou diminue selon vos priorités et votre rythme.</p></article><article className="rounded-[12px] bg-background p-7"><p className="font-mono text-sm text-[#C8923A]">04</p><h3 className="mt-10 text-xl font-semibold">Des décisions plus solides</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Une perspective externe, concrète et indépendante pour soutenir votre croissance.</p></article></div></div></section>

        <section id="contact" className="bg-[#028090] px-5 py-24 text-white lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="label-kicker text-[#CFF9EC]">Premier échange</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Parlons de ce que vos chiffres pourraient vous permettre.</h2><p className="mt-6 max-w-md leading-7 text-white/75">Une conversation de 30 minutes, sans jargon et sans obligation. Dites-nous où vous en êtes.</p><div className="mt-10 space-y-4 text-sm text-white/80"><a href="mailto:info@cifraconseils.ca" className="block hover:text-[#CFF9EC]">info@cifraconseils.ca</a><a href="tel:+14185550192" className="block hover:text-[#CFF9EC]">418 555-0192</a><p>Lévis · Québec · Chaudière-Appalaches</p></div></div><form onSubmit={handleSubmit} className="rounded-[12px] bg-[#0D1F2D] p-6 sm:p-9">{formSent ? <div className="py-12 text-center"><Check className="mx-auto h-10 w-10 text-[#02C39A]" /><h3 className="mt-5 font-serif text-3xl">Message reçu.</h3><p className="mt-3 text-white/60">Merci. Nous vous répondrons dans les plus brefs délais.</p></div> : <><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Nom<input required name="nom" placeholder="Votre nom" /></label><label className="field-label">Entreprise<input required name="entreprise" placeholder="Nom de votre entreprise" /></label><label className="field-label">Courriel<input required type="email" name="email" placeholder="vous@entreprise.ca" /></label><label className="field-label">Téléphone<input name="telephone" placeholder="418 555-0000" /></label></div><label className="field-label mt-5 block">Parlez-nous de votre situation<textarea required name="message" rows={5} placeholder="Ce que vous aimeriez améliorer ou clarifier..."></textarea></label><button className="mt-6 w-full rounded-[8px] bg-[#02C39A] px-6 py-4 font-semibold text-[#0D1F2D] transition-transform hover:scale-[1.02] active:scale-95" type="submit">Envoyer ma demande <ArrowRight className="ml-2 inline h-4 w-4" /></button></>}</form></div></section>
      </main>

      <footer className="bg-[#0D1F2D] px-5 py-10 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 border-t border-white/15 pt-8 text-sm text-white/55 sm:flex-row"><p>© 2026 Cifra Conseils Inc. Tous droits réservés.</p><div className="flex gap-5"><Link to="/services" className="hover:text-[#02C39A]">Services</Link><Link to="/a-propos" className="hover:text-[#02C39A]">À propos</Link><Link to="/contact" className="hover:text-[#02C39A]">Contact</Link></div></div></footer>
    </div>
  )
}
