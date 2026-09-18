import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, BarChart3, Check, ClipboardCheck, FileCheck2, Gauge, Settings, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Comptabilité à temps partiel',
    intro: 'Une information financière fiable, régulière et adaptée à votre rythme de gestion.',
    deliverables: ['Tenue de livres', 'Suivi mensuel', 'Conciliations', 'Rapports financiers réguliers'],
  },
  {
    icon: BarChart3,
    number: '02',
    title: 'Direction financière fractionnelle',
    intro: 'Une perspective de CFO expérimenté pour soutenir vos décisions sans créer un poste à temps plein.',
    deliverables: ['Planification stratégique', 'Gestion de trésorerie', 'Structure de capital', 'Indicateurs de performance (KPIs)', 'Analyse de rentabilité'],
  },
  {
    icon: Gauge,
    number: '03',
    title: 'Gestion de croissance',
    intro: 'Accompagner votre PME en croissance pour structurer ses finances et ses opérations, afin de soutenir une expansion saine, contrôlée et rentable.',
    deliverables: ['Structuration financière : comptabilité, contrôles internes et reporting', 'Planification de trésorerie et de capital', 'Accompagnement au financement : banques, subventions et investisseurs', 'Mise à l’échelle des processus, outils et automatisation', 'Tableaux de bord et KPIs de suivi de croissance'],
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Services de fiscalité',
    intro: 'Une coordination simple avec des partenaires spécialisés lorsque votre situation le demande.',
    deliverables: ['Préparation et coordination des déclarations', 'Planification fiscale', 'Suivi des échéances', 'Transmission des informations aux partenaires'],
  },
  {
    icon: FileCheck2,
    number: '05',
    title: 'Fin d’année, audit et mission d’examen',
    intro: 'Un dossier préparé avec méthode et une communication fluide jusqu’à la livraison des états financiers.',
    deliverables: ['Préparation des états financiers', 'Préparation du dossier de fin d’année', 'Coordination avec les auditeurs externes', 'Suivi des demandes et des ajustements'],
  },
  {
    icon: Settings,
    number: '06',
    title: 'Sélection et implantation d’ERP',
    intro: 'Un accompagnement neutre pour choisir, migrer et implanter le bon système ERP — avec une expertise reconnue en implantation Odoo.',
    deliverables: [
      'Diagnostic des besoins et des processus actuels',
      'Sélection objective de l’ERP adapté (Odoo, QuickBooks, Sage, NetSuite, etc.)',
      'Migration et transfert sécurisé des données',
      'Implantation, configuration et paramétrage',
      'Formation et accompagnement post-implantation',
    ],
    expertise: 'Expertise reconnue en implantation Odoo',
  },
]

const plans = [
  { name: 'Essentiel', label: 'Pour remettre de l’ordre', points: ['Tenue de livres mensuelle', 'Rapports financiers de base', 'Suivi des encaissements'] },
  { name: 'Standard', label: 'Pour piloter sereinement', points: ['Tout Essentiel', 'Budget et prévisions', 'Rencontre mensuelle de direction'], featured: true },
  { name: 'Croissance', label: 'Pour accélérer avec méthode', points: ['Tout Standard', 'Tableau de bord personnalisé', 'Accompagnement des décisions'] },
  { name: 'Transformation', label: 'Pour franchir un cap', points: ['Direction financière intégrée', 'Optimisation des processus', 'Planification stratégique'] },
]

export const Route = createFileRoute('/services')({
  head: () => ({ meta: [
    { title: 'Services | Cifra Conseils' },
    { name: 'description', content: 'Découvrez les services de comptabilité, de direction financière fractionnelle, de gestion de croissance, de fiscalité et de fin d’année de Cifra Conseils.' },
    { property: 'og:title', content: 'Services | Cifra Conseils' },
    { property: 'og:description', content: 'Des expertises financières et opérationnelles à la bonne mesure des PME québécoises, de la structuration à la croissance.' },
  ] }),
  component: Services,
})

function Services() {
  return <main suppressHydrationWarning className="min-h-dvh bg-background text-foreground"><header className="bg-[#0D1F2D] text-[#F8F7F0]"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8"><Link to="/" className="flex items-center gap-2 text-sm text-[#F8F7F0]/70 transition-colors hover:text-[#02C39A]"><ArrowLeft className="h-4 w-4" /> Retour à l’accueil</Link><img src="/cifra-conseil-logo.png" alt="Cifra Conseils" className="h-14 w-auto object-contain" /><Link to="/contact" className="text-sm text-[#02C39A] transition-colors hover:text-[#CFF9EC]">Nous parler <ArrowRight className="ml-1 inline h-4 w-4" /></Link></div></header><section className="bg-[#0D1F2D] px-5 pb-24 pt-12 text-[#F8F7F0] lg:pb-32 lg:pt-20"><div className="mx-auto max-w-7xl"><p className="label-kicker text-[#02C39A]">Nos expertises</p><h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-7xl">Les fonctions clés de votre PME, à la bonne mesure.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-[#F8F7F0]/65">Une équipe expérimentée pour clarifier vos chiffres, structurer vos décisions et vous accompagner là où votre entreprise en a le plus besoin.</p></div></section><section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-5 lg:grid-cols-2">{services.map(({ icon: Icon, number, title, intro, deliverables, expertise }) => <article key={title} className="rounded-[12px] border border-[#b8ddd5] bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#028090] hover:shadow-[0_12px_30px_rgba(2,128,144,0.12)] sm:p-9"><div className="flex items-start justify-between gap-5"><div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#E2F5F0] text-[#028090]"><Icon className="h-5 w-5" /></div><span className="font-mono text-sm font-semibold text-[#C8923A]">{number}</span></div><h2 className="mt-8 max-w-md text-2xl font-semibold leading-tight">{title}</h2><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{intro}</p><div className="mt-7 border-t border-border pt-6"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#028090]">Livrables possibles</p><ul className="mt-4 grid gap-3 sm:grid-cols-2">{deliverables.map(item => <li key={item} className="flex gap-2 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-[#02C39A]" />{item}</li>)}</ul>{expertise && <p className="mt-6 border-l-2 border-[#C8923A] pl-3 text-sm font-semibold text-[#C8923A]">{expertise}</p>}</div></article>)}</div></section><section className="rounded-[20px] bg-[#E2F5F0] px-5 py-20 lg:mx-5 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><p className="label-kicker">Des forfaits qui évoluent</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">L’accompagnement qu’il vous faut, au moment où il vous faut.</h2><p className="mt-6 max-w-2xl leading-7 text-muted-foreground">Les forfaits sont ajustés à votre stade, à vos priorités et au niveau de présence dont votre équipe a besoin. Parlons de votre réalité pour définir la bonne combinaison.</p><div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{plans.map(plan => <article key={plan.name} className={`rounded-[12px] border bg-background p-7 transition-transform hover:-translate-y-1 ${plan.featured ? 'border-[#028090] shadow-[0_15px_35px_rgba(2,128,144,0.16)]' : 'border-[#b8ddd5]'}`}><div className="flex items-center justify-between gap-3"><h3 className="text-xl font-semibold">{plan.name}</h3>{plan.featured && <span className="rounded-[8px] bg-[#C8923A] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0D1F2D]">Populaire</span>}</div><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{plan.label}</p><div className="my-6 h-px bg-border" /><ul className="space-y-3">{plan.points.map(point => <li key={point} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#028090]" />{point}</li>)}</ul></article>)}</div></div></section><section className="bg-[#028090] px-5 py-20 text-[#F8F7F0] lg:py-28"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"><div><p className="label-kicker text-[#CFF9EC]">Un premier échange</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">Votre entreprise mérite une structure financière qui suit son rythme.</h2></div><Link to="/contact" className="inline-flex items-center rounded-[8px] bg-[#02C39A] px-6 py-4 font-semibold text-[#0D1F2D] transition-transform hover:scale-[1.03] active:scale-95">Parlons de vos besoins <ArrowRight className="ml-2 h-4 w-4" /></Link></div></section><footer className="bg-[#0D1F2D] px-5 py-10 text-[#F8F7F0] lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 border-t border-white/15 pt-8 text-sm text-[#F8F7F0]/55 sm:flex-row"><p>© 2026 Cifra Conseils Inc. Tous droits réservés.</p><div className="flex gap-5"><Link to="/" className="transition-colors hover:text-[#02C39A]">Accueil</Link><Link to="/a-propos" className="transition-colors hover:text-[#02C39A]">À propos</Link><Link to="/contact" className="transition-colors hover:text-[#02C39A]">Contact</Link></div></div></footer></main>
}
