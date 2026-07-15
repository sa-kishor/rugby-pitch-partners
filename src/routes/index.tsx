import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Users,
  MapPin,
  Trophy,
  HeartHandshake,
  Megaphone,
  Building2,
  Sparkles,
  Check,
  ArrowRight,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Quote,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import heroImg from "@/assets/rugby-hero.jpg";
import teamImg from "@/assets/rugby-team.jpg";
import girlsTeamImg from "@/assets/rugby-girls-team.jpg";
import sgLogo from "@/assets/partners/societe-generale.jpg";
import intersportLogo from "@/assets/partners/intersport.png";
import jamespotLogo from "@/assets/partners/jamespot.png";
import clubeeeLogo from "@/assets/partners/clubeee.png";
import laFleurLogo from "@/assets/partners/la-fleur.jpg";
import boogieLogo from "@/assets/partners/boogie.jpg";
import onairLogo from "@/assets/partners/onair.jpg";

const PARTNERS = [
  { name: "Société Générale", logo: sgLogo },
  { name: "Intersport", logo: intersportLogo },
  { name: "Jamespot", logo: jamespotLogo },
  { name: "Clubeeee", logo: clubeeeLogo },
  { name: "La Fleur Boulangerie", logo: laFleurLogo },
  { name: "Boogie Unlimited", logo: boogieLogo },
  { name: "On Air Fitness Montreuil", logo: onairLogo },
];

function TrustedPartners() {
  return (
    <div className="mt-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Nos partenaires
        </span>
        <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Our Trusted Partners
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Rugby Club Montreuillois is proud to collaborate with companies and
          organisations that actively support local sport, youth development
          and community engagement.
        </p>
      </div>

      <ul
        role="list"
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {PARTNERS.map((p) => (
          <li key={p.name}>
            <div className="group flex h-40 items-center justify-center rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
              <img
                src={p.logo}
                alt={`Logo ${p.name}`}
                loading="lazy"
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-14 rounded-2xl border border-border bg-surface-muted p-8 text-center sm:p-10">
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
          Join a growing network of businesses committed to supporting rugby
          and the local community.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated"
          >
            Become Our Next Partner <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://rugbyclubmontreuillois.clubeo.com/page/nos-partenaires.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
          >
            View All Partners
          </a>
        </div>
      </div>
    </div>
  );
}


export const Route = createFileRoute("/")({
  component: PartnersPage,
});

const NAV = [
  { label: "Accueil", href: "#" },
  { label: "Le Club", href: "#club" },
  { label: "Équipes", href: "#equipes" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "420+", label: "Licenciés toutes catégories" },
  { value: "18", label: "Équipes en compétition" },
  { value: "1 200", label: "Spectateurs par match à domicile" },
  { value: "45 ans", label: "D'histoire à Montreuil" },
];

const BENEFITS = [
  {
    icon: Megaphone,
    title: "Visibilité locale forte",
    text: "Votre marque exposée sur nos maillots, panneaux de terrain, site web et réseaux sociaux, devant une audience engagée toute la saison.",
  },
  {
    icon: HeartHandshake,
    title: "Ancrage territorial",
    text: "Associez votre entreprise à un club emblématique de Montreuil et renforcez votre image auprès des habitants et des commerces locaux.",
  },
  {
    icon: Users,
    title: "Réseau d'affaires",
    text: "Rejoignez le Club des Partenaires : soirées, petits-déjeuners networking et rencontres privilégiées avec les dirigeants locaux.",
  },
  {
    icon: Trophy,
    title: "Valeurs partagées",
    text: "Engagement, respect, esprit d'équipe. Le rugby véhicule des valeurs qui rejaillissent naturellement sur les entreprises partenaires.",
  },
  {
    icon: Building2,
    title: "Événements privatisés",
    text: "Bénéficiez d'espaces au club-house pour vos réunions clients, séminaires d'équipe et opérations de relations publiques.",
  },
  {
    icon: ShieldCheck,
    title: "Défiscalisation",
    text: "Le mécénat sportif ouvre droit à une réduction d'impôt de 60 %. Nous vous accompagnons dans toutes vos démarches administratives.",
  },
];

const TIERS = [
  {
    name: "Supporter",
    price: "à partir de 500 €",
    tag: "Idéal TPE & commerces",
    features: [
      "Logo sur la page partenaires du site",
      "Mention sur nos réseaux sociaux",
      "2 invitations aux matchs à domicile",
      "Attestation de mécénat",
    ],
  },
  {
    name: "Partenaire",
    price: "à partir de 2 500 €",
    tag: "Le plus choisi",
    highlighted: true,
    features: [
      "Panneau publicitaire en bord de terrain",
      "Logo sur les maillots d'entraînement",
      "Présence dans le programme de match",
      "10 invitations + accès espace VIP",
      "1 soirée networking / trimestre",
      "Reçu fiscal & accompagnement mécénat",
    ],
  },
  {
    name: "Partenaire Officiel",
    price: "sur devis",
    tag: "Engagement premium",
    features: [
      "Logo sur maillot officiel équipe première",
      "Naming d'une équipe ou d'un tournoi",
      "Espace privatisé au club-house",
      "Campagne dédiée sur nos médias",
      "Invitations VIP illimitées",
      "Accompagnement communication sur-mesure",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Notre partenariat avec le Rugby Club Montreuillois nous a permis de renforcer notre notoriété locale et de créer des liens durables avec d'autres dirigeants du territoire.",
    author: "Directeur régional",
    role: "Enseigne de distribution nationale",
  },
  {
    quote:
      "Une équipe dirigeante professionnelle, des contreparties concrètes et une vraie ambiance de club. Nous renouvelons chaque saison depuis 6 ans.",
    author: "Gérante",
    role: "PME du bâtiment, Montreuil",
  },
];

function PartnersPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main id="main">
        <Hero />
        <StatsBand />
        <Benefits />
        <Showcase />
        <GirlsTeam />
        <Tiers />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Rugby Club Montreuillois - Accueil">
          <LogoMark />
          <div className="hidden sm:block leading-tight">
            <div className="text-[15px] font-extrabold tracking-tight">Rugby Club</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Montreuillois
            </div>
          </div>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:bg-rugby-red-dark hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Devenir Partenaire
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Navigation mobile" className="mx-auto flex max-w-7xl flex-col p-4">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Devenir Partenaire <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <div
      aria-hidden="true"
      className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-card"
    >
      <span className="text-lg font-black tracking-tight">RCM</span>
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1200}
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Saison 2025 / 2026
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Devenez partenaire d'un club qui{" "}
            <span className="text-primary">porte les couleurs</span> de votre
            territoire.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Associez votre entreprise à un club engagé, à ses 420 licenciés et
            à une communauté fidèle. Une visibilité locale forte, des valeurs
            fortes, un partenariat sur-mesure.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-all hover:bg-rugby-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Devenir Partenaire
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#offres"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Découvrir nos offres
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">Fondé en</dt>
              <dd className="mt-1 text-2xl font-extrabold">1981</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">Licenciés</dt>
              <dd className="mt-1 text-2xl font-extrabold">420+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">Équipes</dt>
              <dd className="mt-1 text-2xl font-extrabold">18</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats band ---------------- */

function StatsBand() {
  return (
    <section aria-labelledby="stats-heading" className="border-b border-border bg-background">
      <h2 id="stats-heading" className="sr-only">
        Le club en chiffres
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-background px-6 py-8 text-center sm:py-10">
            <div className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */

function Benefits() {
  return (
    <section id="club" className="bg-surface-muted py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Pourquoi nous rejoindre
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Un partenariat concret, mesurable et humain.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Au-delà d'un simple logo sur un maillot, nous construisons avec vous
            un partenariat qui sert vos objectifs de communication, de
            recrutement et de notoriété.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <article
              key={b.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rugby-red-soft text-primary">
                <b.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Showcase ---------------- */

function Showcase() {
  return (
    <section id="equipes" className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={teamImg}
              alt="Joueurs du Rugby Club Montreuillois en cercle sur le terrain"
              width={1280}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-2xl border border-border bg-card p-5 shadow-elevated sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold">30+ matchs par saison</div>
                <div className="text-xs text-muted-foreground">Chaque week-end au stade</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Le Rugby Club Montreuillois
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Un club structuré, ancré, et tourné vers l'avenir.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Créé en 1981, le RCM rassemble aujourd'hui plus de 420 licenciés,
            de l'école de rugby à l'équipe fanion. Nous formons, encadrons et
            fédérons une communauté sportive qui rayonne bien au-delà de nos
            terrains.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "École de rugby labellisée FFR",
              "Équipes féminines, jeunes et seniors",
              "Section loisir, touch et rugby à 5",
              "Actions solidaires et éducatives sur le territoire",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 inline-flex items-center gap-2 rounded-lg border border-border bg-surface-muted px-4 py-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            Stade des Grands Pêchers — 93100 Montreuil
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Girls Team ---------------- */

function GirlsTeam() {
  return (
    <section className="bg-surface-muted py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Rugby au féminin
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Une section féminine en pleine essor.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Le Rugby Club Montreuillois investit dans le développement du rugby
            féminin à tous les âges. De l'école de rugby aux équipes seniors,
            nous offrons un environnement d'entraînement structuré, encadré par
            des éducatrices diplômées et porté par des valeurs de respect et
            d'engagement.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Équipes filles, junior et senior",
              "Entraînements adaptés à chaque niveau",
              "Ambiance solidaire et bienveillante",
              "Compétitions régionales et tournois",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:bg-rugby-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Soutenir la section féminine
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={girlsTeamImg}
              alt="Joueuses du Rugby Club Montreuillois en action sur le terrain"
              width={1920}
              height={1080}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-2xl border border-border bg-card p-5 shadow-elevated sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold">+30 % de licenciées</div>
                <div className="text-xs text-muted-foreground">Ces trois dernières saisons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tiers ---------------- */

function Tiers() {
  return (
    <section
      id="offres"
      aria-labelledby="tiers-heading"
      className="bg-surface-muted py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Nos offres de partenariat
          </span>
          <h2 id="tiers-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Trois formules, une infinité de possibilités.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nos offres sont modulables et adaptables à vos objectifs. Nous
            construisons ensemble le partenariat qui vous ressemble.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={
                "flex flex-col rounded-2xl border p-8 transition-all " +
                (t.highlighted
                  ? "relative border-primary bg-ink text-white shadow-elevated md:-translate-y-4"
                  : "border-border bg-card shadow-card hover:shadow-elevated")
              }
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                  Recommandé
                </span>
              )}
              <div>
                <div
                  className={
                    "text-xs font-semibold uppercase tracking-wider " +
                    (t.highlighted ? "text-white/60" : "text-muted-foreground")
                  }
                >
                  {t.tag}
                </div>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{t.name}</h3>
                <div
                  className={
                    "mt-4 text-sm font-medium " +
                    (t.highlighted ? "text-white/80" : "text-muted-foreground")
                  }
                >
                  {t.price}
                </div>
              </div>

              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={
                        "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full " +
                        (t.highlighted
                          ? "bg-primary text-primary-foreground"
                          : "bg-rugby-red-soft text-primary")
                      }
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={t.highlighted ? "text-white/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
                  (t.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-rugby-red-dark"
                    : "border border-border bg-background text-foreground hover:border-primary hover:text-primary")
                }
              >
                Demander un rendez-vous
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Toutes nos offres sont éligibles au mécénat sportif —{" "}
          <span className="font-semibold text-foreground">60 % de réduction d'impôt</span>{" "}
          (art. 238 bis du CGI).
        </p>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  return (
    <section
      id="partenaires"
      aria-labelledby="testimonials-heading"
      className="bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Ils nous font confiance
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            La parole à nos partenaires.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="text-sm font-bold">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <TrustedPartners />

      </div>
    </section>
  );
}

/* ---------------- Contact CTA ---------------- */

function ContactCTA() {
  return (
    <section id="contact" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Parlons de votre projet
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Construisons ensemble le partenariat qui vous ressemble.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              Notre commission partenariats vous rencontre gratuitement et sans
              engagement pour comprendre vos objectifs et vous proposer une
              offre sur-mesure. Réponse sous 48 h ouvrées.
            </p>

            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <a
                  href="mailto:partenariats@rcmontreuil.fr"
                  className="text-base font-semibold hover:text-primary"
                >
                  partenariats@rcmontreuil.fr
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <a href="tel:+33100000000" className="text-base font-semibold hover:text-primary">
                  01 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <span className="text-base font-semibold">
                  Stade des Grands Pêchers, 93100 Montreuil
                </span>
              </li>
            </ul>
          </div>

          <form
            className="rounded-2xl bg-white p-6 text-foreground shadow-elevated sm:p-8 lg:col-span-2"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Formulaire de contact partenariat"
          >
            <div className="text-sm font-bold uppercase tracking-wider text-primary">
              Demande de contact
            </div>
            <h3 className="mt-1 text-xl font-extrabold tracking-tight">
              Recevez notre dossier partenariat
            </h3>

            <div className="mt-6 space-y-4">
              <Field label="Entreprise" id="company" placeholder="Nom de votre société" />
              <Field label="Nom & prénom" id="name" placeholder="Marie Dupont" />
              <Field label="Email professionnel" id="email" type="email" placeholder="marie@entreprise.fr" />
              <Field label="Téléphone" id="phone" type="tel" placeholder="06 00 00 00 00" required={false} />
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                  Votre message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Parlez-nous de votre projet…"
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-rugby-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Envoyer ma demande
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Vos données sont utilisées uniquement pour vous recontacter.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div className="leading-tight">
                <div className="text-base font-extrabold tracking-tight">Rugby Club</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Montreuillois
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Club de rugby historique de Montreuil, fondé en 1981. Formation,
              compétition, esprit d'équipe et engagement local depuis plus de
              40 ans.
            </p>
            <div className="mt-5 text-sm text-muted-foreground">
              Stade des Grands Pêchers
              <br />
              42 rue des Grands Pêchers, 93100 Montreuil
            </div>

            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Le Club"
            links={[
              { label: "Accueil", href: "#" },
              { label: "Le Club", href: "#club" },
              { label: "Équipes", href: "#equipes" },
              { label: "Partenaires", href: "#partenaires" },
              { label: "Contact", href: "#contact" },
            ]}
          />
          <FooterCol
            title="Informations"
            links={[
              { label: "Mentions légales", href: "#" },
              { label: "Politique de confidentialité", href: "#" },
              { label: "Devenir Partenaire", href: "#contact" },
              { label: "Nous contacter", href: "#contact" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Rugby Club Montreuillois. Tous droits réservés.</div>
          <div>Association loi 1901 — Affiliée FFR</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-sm font-bold tracking-tight">{title}</div>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
