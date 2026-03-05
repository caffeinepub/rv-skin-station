import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import {
  Activity,
  AlertCircle,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Clock,
  Droplets,
  FlaskConical,
  Heart,
  Leaf,
  Loader2,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Shield,
  Sparkles,
  Star,
  Sun,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

const WHATSAPP_URL =
  "https://wa.me/918089360482?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20RV%20Skin%20Station";
const PHONE_URL = "tel:+918089360482";
const MAPS_URL =
  "https://maps.google.com/?q=J+J+Complex+KP+Road+Adoor+Kerala+691523";

const STARS_5 = ["s1", "s2", "s3", "s4", "s5"];

// ─── Navigation ──────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Book Appointment", href: "#book-appointment" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="flex flex-col items-start cursor-pointer"
            data-ocid="nav.link"
          >
            <span className="font-display font-bold text-lg text-primary leading-tight">
              RV Skin Station
            </span>
            <span className="text-[10px] text-muted-foreground font-body tracking-wide uppercase">
              Dermatology & Skin Care
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors hover:bg-secondary hover:text-primary ${
                  link.href === "#book-appointment"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground ml-2 px-4"
                    : "text-foreground/80"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-white py-3">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            {/* Quick actions in mobile menu */}
            <div className="flex gap-2 px-4 pt-3 pb-1 border-t border-border mt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-whatsapp text-white rounded-md text-xs font-semibold"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href={PHONE_URL}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-primary text-primary-foreground rounded-md text-xs font-semibold"
              >
                <Phone size={14} /> Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <div className="absolute inset-0 hero-grain">
        <img
          src="/assets/generated/hero-clinic.dim_1200x600.jpg"
          alt="RV Skin Station clinic"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Subtle radial glow accent at top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(0.60 0.18 290 / 0.18), transparent 65%)",
        }}
      />

      {/* Content — anchored lower so photo is visible above */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center text-white pb-16 sm:pb-24">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-7 animate-fadeInUp">
          <div className="flex items-center gap-0.5">
            {STARS_5.map((k) => (
              <Star
                key={k}
                size={12}
                fill="currentColor"
                className="text-yellow-300"
              />
            ))}
          </div>
          <span className="text-xs font-bold tracking-wide">4.9</span>
          <span className="w-px h-3 bg-white/30" />
          <span className="text-xs text-white/80 font-medium">
            124+ Verified Reviews
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[2.1rem] sm:text-5xl md:text-6xl font-bold leading-[1.12] mb-5 animate-fadeInUp animate-delay-100 tracking-tight">
          Advanced Dermatology & <br className="hidden sm:block" />
          <span className="text-white/90 italic font-light">Skin Care</span>{" "}
          Treatments{" "}
          <span className="text-white/70 font-normal text-[0.85em]">
            in Adoor
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-white/70 mb-9 max-w-xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200 font-normal">
          Expert dermatology care &nbsp;·&nbsp; Modern treatments &nbsp;·&nbsp;
          Safe &amp; personalized solutions
        </p>

        {/* CTA buttons — clear hierarchy: primary > secondary > ghost */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fadeInUp animate-delay-300">
          {/* Primary: WhatsApp — largest, most prominent */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-whatsapp text-white font-bold rounded-2xl whatsapp-glow transition-all duration-200 text-base"
            data-ocid="hero.primary_button"
          >
            <MessageCircle size={20} strokeWidth={2.5} />
            Book on WhatsApp
          </a>
          {/* Secondary: Call — solid white, smaller */}
          <a
            href={PHONE_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/95 text-primary font-semibold rounded-xl hover:bg-white transition-colors text-sm"
            data-ocid="hero.secondary_button"
          >
            <Phone size={17} />
            Call Now
          </a>
          {/* Tertiary: Book form — ghost/outline, smallest */}
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("book-appointment")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-white/30 text-white/85 font-medium rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all text-sm"
            data-ocid="hero.button"
          >
            <CalendarDays size={16} />
            Book Consultation
          </button>
        </div>

        {/* Location indicator */}
        <div className="mt-8 flex items-center justify-center gap-1.5 text-white/45 text-xs animate-fadeInUp animate-delay-400">
          <MapPin size={11} />
          <span className="tracking-wide">
            J J Complex, K.P Road, Adoor, Kerala 691523
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
const ABOUT_STATS = [
  { value: "4.9★", label: "Rating" },
  { value: "124+", label: "Happy Patients" },
  { value: "Advanced", label: "Treatments" },
  { value: "Expert", label: "Specialists" },
];

function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="section-padding bg-purple-gradient relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, oklch(0.85 0.09 290), transparent 70%)",
          transform: "translate(40%, -40%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="section-eyebrow">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Trusted Dermatology Care in the Heart of Adoor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              RV Skin Station is a premier dermatology clinic dedicated to
              providing professional skin care treatments with a personal touch.
              Located conveniently in J J Complex, K.P Road, Adoor, our clinic
              offers a calming and modern environment where patients feel
              welcomed and cared for.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              Our experienced dermatologists combine advanced medical expertise
              with the latest treatment technologies to deliver safe, effective,
              and personalized solutions for all skin concerns. With a 4.9-star
              rating from over 124 happy patients, we are proud to be Adoor's
              most trusted skin care clinic.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Book a Free Consultation <ChevronRight size={16} />
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-xs border border-border text-center card-hover"
                data-ocid={`about.item.${i + 1}`}
              >
                <div className="font-display text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "acne",
    icon: <Droplets size={22} />,
    name: "Acne & Pimple Treatment",
    desc: "Effective medical-grade acne treatments to clear breakouts and prevent scarring.",
  },
  {
    id: "pigmentation",
    icon: <Sun size={22} />,
    name: "Pigmentation & Dark Spots",
    desc: "Targeted treatments to reduce uneven skin tone, dark spots, and hyperpigmentation.",
  },
  {
    id: "laser",
    icon: <Zap size={22} />,
    name: "Laser Skin Treatments",
    desc: "Advanced laser therapies for skin resurfacing, rejuvenation, and targeted correction.",
  },
  {
    id: "antiaging",
    icon: <Sparkles size={22} />,
    name: "Anti-Aging Solutions",
    desc: "Scientifically-backed treatments to reduce fine lines, wrinkles, and restore youthful skin.",
  },
  {
    id: "rejuvenation",
    icon: <Leaf size={22} />,
    name: "Skin Rejuvenation & Medi Facials",
    desc: "Professional medical facials designed to hydrate, brighten, and refresh your skin.",
  },
  {
    id: "hairloss",
    icon: <Activity size={22} />,
    name: "Hair Loss & Scalp Treatments",
    desc: "Comprehensive scalp analysis and proven therapies to reduce hair fall and promote regrowth.",
  },
  {
    id: "allergy",
    icon: <FlaskConical size={22} />,
    name: "Allergy & Skin Infection Treatment",
    desc: "Accurate diagnosis and effective treatment for rashes, allergies, and skin infections.",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      data-ocid="services.section"
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-eyebrow">Our Specialities</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Treatments & Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Comprehensive dermatology solutions using advanced technology and
            evidence-based medicine for lasting results.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <article
              key={svc.id}
              className="group bg-white border border-border rounded-2xl p-6 card-hover cursor-default"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {svc.icon}
              </div>
              <h3 className="font-semibold text-base text-foreground mb-2 leading-snug">
                {svc.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {svc.desc}
              </p>
            </article>
          ))}

          {/* CTA card */}
          <div className="sm:col-span-2 lg:col-span-3 bg-gradient-to-br from-primary to-violet-700 rounded-2xl p-6 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="font-display text-xl font-bold mb-1">
                Not sure which treatment is right for you?
              </h3>
              <p className="text-white/80 text-sm">
                Our dermatologists will assess your skin and recommend the best
                treatment plan.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold rounded-xl px-5 py-3 whitespace-nowrap hover:bg-white/90 transition-colors shrink-0"
              data-ocid="services.primary_button"
            >
              <MessageCircle size={18} />
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us Section ────────────────────────────────────────────────────
const WHY_US = [
  {
    id: "specialists",
    icon: <Users size={24} />,
    title: "Experienced Specialists",
    desc: "Board-certified dermatologists with years of specialized expertise in advanced skin care.",
  },
  {
    id: "technology",
    icon: <Zap size={24} />,
    title: "Advanced Technology",
    desc: "Latest skin treatment equipment for safe, precise, and effective results every time.",
  },
  {
    id: "personalized",
    icon: <Heart size={24} />,
    title: "Personalized Care Plans",
    desc: "Customized skincare solutions tailored to your unique skin type, concerns, and goals.",
  },
  {
    id: "hygiene",
    icon: <Shield size={24} />,
    title: "Safe & Hygienic Environment",
    desc: "Strict sterilization protocols and a clean, modern clinic that prioritizes your safety.",
  },
  {
    id: "trusted",
    icon: <Star size={24} />,
    title: "Trusted by Patients",
    desc: "4.9-star rating and 124+ positive patient reviews — a testament to our quality care.",
  },
];

function WhyUsSection() {
  return (
    <section
      id="why-us"
      data-ocid="why-us.section"
      className="section-padding"
      style={{ background: "oklch(0.16 0.08 290)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="section-eyebrow"
            style={{ color: "oklch(0.80 0.10 290)" }}
          >
            Why RV Skin Station
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Why Choose RV Skin Station?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            We combine medical expertise with patient-centered care to deliver
            outcomes you can see and feel.
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((item, i) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 border border-white/10 backdrop-blur-sm card-hover"
              style={{ background: "oklch(0.22 0.08 290 / 0.6)" }}
              data-ocid={`why-us.item.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/30 text-white flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-white text-base mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="lg:col-span-3 sm:col-span-2 rounded-2xl p-6 text-center"
            style={{
              background: "oklch(0.22 0.08 290 / 0.4)",
              border: "1px solid oklch(1 0 0 / 0.08)",
            }}
          >
            <p className="text-white/80 text-sm mb-3">
              Ready to experience expert dermatology care?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold rounded-xl px-5 py-3 whatsapp-pulse hover:opacity-90 transition-opacity"
                data-ocid="why-us.primary_button"
              >
                <MessageCircle size={18} /> Book on WhatsApp
              </a>
              <a
                href={PHONE_URL}
                className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/25 text-white font-semibold rounded-xl px-5 py-3 hover:bg-white/25 transition-colors"
                data-ocid="why-us.secondary_button"
              >
                <Phone size={18} /> Call +91 80893 60482
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Section ──────────────────────────────────────────────────────────
const REVIEWS = [
  {
    id: "priya",
    name: "Priya M.",
    initials: "PM",
    text: "Experienced doctor and staff with excellent service. My skin has improved so much! I couldn't be happier with the results.",
    rating: 5,
  },
  {
    id: "rajesh",
    name: "Rajesh K.",
    initials: "RK",
    text: "The clinic ambiance is calm and welcoming. Dr. treated my acne and I saw visible results within just a few weeks.",
    rating: 5,
  },
  {
    id: "anitha",
    name: "Anitha S.",
    initials: "AS",
    text: "Professional dermatology care with visible results. Highly recommend RV Skin Station for any skin concern.",
    rating: 5,
  },
  {
    id: "mohammed",
    name: "Mohammed F.",
    initials: "MF",
    text: "Best dermatology clinic in Adoor. The laser treatment worked perfectly for my pigmentation. Very satisfied!",
    rating: 5,
  },
  {
    id: "deepa",
    name: "Deepa R.",
    initials: "DR",
    text: "Very clean and modern clinic. The staff is friendly and the doctor is very knowledgeable and patient.",
    rating: 5,
  },
];

function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="reviews"
      data-ocid="reviews.section"
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-eyebrow">Patient Reviews</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Patients Say
          </h2>

          {/* Star rating display */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
            <div className="flex items-center gap-1">
              {STARS_5.map((k) => (
                <Star
                  key={k}
                  size={28}
                  fill="currentColor"
                  className="text-yellow-400"
                />
              ))}
            </div>
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-foreground">
                4.9
              </span>
              <span className="text-muted-foreground text-sm ml-2">
                / 5.0 &nbsp;•&nbsp; 124+ verified reviews
              </span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Real results. Real patients. Trusted care.
          </p>
        </div>

        {/* Reviews carousel — horizontal scroll on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible"
        >
          {REVIEWS.map((review, i) => (
            <article
              key={review.id}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-0 bg-white border border-border rounded-2xl p-5 shadow-xs card-hover flex-shrink-0 md:flex-shrink"
              data-ocid={`reviews.item.${i + 1}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 text-primary font-bold text-sm flex items-center justify-center">
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {review.name}
                  </div>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {STARS_5.slice(0, review.rating).map((k) => (
                      <Star
                        key={k}
                        size={11}
                        fill="currentColor"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.text}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery Section ──────────────────────────────────────────────────────────
const GALLERY = [
  {
    id: "treatment-room",
    src: "/assets/generated/gallery-treatment-room.dim_600x400.jpg",
    alt: "Modern treatment room at RV Skin Station",
    caption: "Treatment Room",
  },
  {
    id: "reception",
    src: "/assets/generated/gallery-reception.dim_600x400.jpg",
    alt: "Welcoming reception area",
    caption: "Reception Area",
  },
  {
    id: "equipment",
    src: "/assets/generated/gallery-equipment.dim_600x400.jpg",
    alt: "Advanced dermatology equipment",
    caption: "Advanced Equipment",
  },
  {
    id: "consultation",
    src: "/assets/generated/gallery-consultation.dim_600x400.jpg",
    alt: "Doctor-patient consultation",
    caption: "Consultation Room",
  },
];

function GallerySection() {
  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="section-padding bg-purple-gradient"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-eyebrow">Clinic Gallery</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Clinic
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base">
            A modern, hygienic, and welcoming environment designed for your
            comfort.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((img, i) => (
            <div
              key={img.id}
              className="gallery-img relative rounded-2xl overflow-hidden shadow-xs group"
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Appointment Booking Section ──────────────────────────────────────────────
function BookingSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !concern || !date) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!actor) {
      toast.error("Not connected to the backend. Please try again.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      await actor.submitAppointmentRequest(name, phone, concern, date);
      setStatus("success");
      toast.success("Appointment request submitted! We'll contact you soon.");
      setName("");
      setPhone("");
      setConcern("");
      setDate("");
    } catch (_err) {
      setStatus("error");
      setErrorMsg(
        "Something went wrong. Please try WhatsApp or call us directly.",
      );
      toast.error("Submission failed. Please try again.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="book-appointment"
      data-ocid="booking.section"
      className="section-padding bg-booking-gradient relative overflow-hidden"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-eyebrow">Appointments</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground text-base">
            Fill the form below or book instantly via WhatsApp
          </p>
        </div>

        {/* Form card */}
        <div
          className="bg-white border border-border/60 rounded-3xl p-6 sm:p-8"
          style={{
            boxShadow:
              "0 4px 6px oklch(0.50 0.18 290 / 0.06), 0 20px 60px oklch(0.50 0.18 290 / 0.12), 0 1px 2px oklch(0 0 0 / 0.05)",
          }}
        >
          {status === "success" ? (
            <div data-ocid="booking.success_state" className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Request Submitted!
              </h3>
              <p className="text-muted-foreground mb-6">
                We've received your appointment request. Our team will call you
                to confirm your slot.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold rounded-xl px-5 py-3"
                >
                  <MessageCircle size={18} /> Follow up on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold rounded-xl px-5 py-3 hover:bg-secondary/80 transition-colors"
                >
                  Book Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="booking-name" className="text-sm font-medium">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="booking-name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 rounded-xl"
                  required
                  autoComplete="name"
                  data-ocid="booking.name.input"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="booking-phone" className="text-sm font-medium">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="booking-phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-11 rounded-xl"
                  required
                  autoComplete="tel"
                  data-ocid="booking.phone.input"
                />
              </div>

              {/* Skin concern */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">
                  Skin Concern <span className="text-destructive">*</span>
                </Label>
                <Select value={concern} onValueChange={setConcern} required>
                  <SelectTrigger
                    className="h-11 rounded-xl"
                    data-ocid="booking.concern.select"
                  >
                    <SelectValue placeholder="Select your skin concern" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Acne & Pimples">
                      Acne & Pimples
                    </SelectItem>
                    <SelectItem value="Pigmentation">Pigmentation</SelectItem>
                    <SelectItem value="Laser Treatment">
                      Laser Treatment
                    </SelectItem>
                    <SelectItem value="Anti-Aging">Anti-Aging</SelectItem>
                    <SelectItem value="Skin Rejuvenation">
                      Skin Rejuvenation
                    </SelectItem>
                    <SelectItem value="Hair Loss">Hair Loss</SelectItem>
                    <SelectItem value="Allergy / Infection">
                      Allergy / Infection
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-1.5">
                <Label htmlFor="booking-date" className="text-sm font-medium">
                  Preferred Date <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="booking-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={today}
                  className="h-11 rounded-xl"
                  required
                  data-ocid="booking.date.input"
                />
              </div>

              {/* Error state */}
              {status === "error" && (
                <div
                  data-ocid="booking.error_state"
                  className="flex items-start gap-2 p-3 rounded-xl bg-destructive/10 text-destructive text-sm"
                >
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-12 rounded-xl text-base font-semibold"
                data-ocid="booking.submit_button"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    <span data-ocid="booking.loading_state">Submitting...</span>
                  </>
                ) : (
                  <>
                    <CalendarDays size={18} className="mr-2" />
                    Submit Appointment Request
                  </>
                )}
              </Button>
            </form>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground text-sm font-medium">
            or book instantly
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* WhatsApp CTA — dominant primary action */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 w-full py-5 bg-whatsapp text-white rounded-2xl whatsapp-glow transition-all duration-200"
          data-ocid="booking.whatsapp.primary_button"
        >
          <span className="flex items-center gap-2.5 font-bold text-lg leading-snug">
            <MessageCircle size={22} strokeWidth={2.5} />
            Book Instantly on WhatsApp
          </span>
          <span className="text-white/65 text-xs font-normal tracking-wide">
            No login required &nbsp;·&nbsp; Instant confirmation
          </span>
        </a>
        <p className="text-center text-muted-foreground text-xs mt-3">
          Available Mon–Sat 9 AM – 7 PM &nbsp;|&nbsp; +91 80893 60482
        </p>
      </div>
    </section>
  );
}

// ─── Contact & Location Section ───────────────────────────────────────────────
function ContactSection() {
  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="section-padding bg-purple-gradient"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-eyebrow">Location</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Find Us
          </h2>
          <p className="text-muted-foreground text-base">
            Conveniently located in the heart of Adoor, Kerala
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-5 border border-border shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Address
                  </h3>
                  <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                    J J Complex, K.P Road,
                    <br />
                    near Edimannical Edge Opticals,
                    <br />
                    Adoor, Kerala 691523, India
                  </address>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-5 border border-border shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href={PHONE_URL}
                    className="text-primary font-medium hover:underline"
                  >
                    +91 80893 60482
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-5 border border-border shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Clinic Hours
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between gap-6">
                      <span>Mon – Sat</span>
                      <span className="font-medium text-foreground">
                        9:00 AM – 7:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Sunday</span>
                      <span className="font-medium text-foreground">
                        10:00 AM – 2:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm"
                data-ocid="contact.directions.button"
              >
                <Navigation size={16} /> Get Directions
              </a>
              <a
                href={PHONE_URL}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-white border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-colors text-sm"
                data-ocid="contact.call.button"
              >
                <Phone size={16} /> Call Clinic
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-whatsapp text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
                data-ocid="contact.whatsapp.button"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div className="rounded-2xl overflow-hidden shadow-brand border border-border">
            <iframe
              src="https://maps.google.com/maps?q=Adoor,Kerala,India&z=15&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="RV Skin Station location on Google Maps"
              data-ocid="contact.map_marker"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-ocid="footer.panel"
      className="pb-24 md:pb-0"
      style={{ background: "oklch(0.12 0.06 290)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display font-bold text-xl text-white mb-1">
              RV Skin Station
            </div>
            <div className="text-white/50 text-xs tracking-wide uppercase mb-3">
              Dermatology & Advanced Skin Care
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-xs">
              Trusted dermatology and advanced skin care clinic in Adoor,
              Kerala. Personalized care with proven results.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {STARS_5.map((k) => (
                  <Star
                    key={k}
                    size={14}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-white/60 text-sm font-medium">
                4.9 · 124+ Reviews
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleClick(link.href)}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/55">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>J J Complex, K.P Road, Adoor, Kerala 691523</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" />
                <a
                  href={PHONE_URL}
                  className="hover:text-white transition-colors"
                >
                  +91 80893 60482
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="shrink-0" />
                <span>Mon–Sat: 9 AM – 7 PM</span>
              </div>
            </div>

            <div className="flex gap-2 mt-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-whatsapp text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={PHONE_URL}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors"
                aria-label="Call"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/35">
          <span>© {year} RV Skin Station. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Sticky Mobile CTA Bar ────────────────────────────────────────────────────
function MobileCTABar() {
  const handleBookClick = () => {
    document
      .getElementById("book-appointment")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg">
      <div className="flex items-stretch divide-x divide-border">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 text-xs font-semibold bg-whatsapp text-white hover:opacity-90 transition-opacity"
          data-ocid="mobile-cta.whatsapp.button"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
        <a
          href={PHONE_URL}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 text-xs font-semibold text-primary hover:bg-secondary transition-colors"
          data-ocid="mobile-cta.call.button"
        >
          <Phone size={20} />
          <span>Call Now</span>
        </a>
        <button
          type="button"
          onClick={handleBookClick}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          data-ocid="mobile-cta.book.button"
        >
          <CalendarDays size={20} />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Toaster position="top-center" />
      <div className="font-body">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyUsSection />
          <ReviewsSection />
          <GallerySection />
          <BookingSection />
          <ContactSection />
        </main>
        <Footer />
        <MobileCTABar />
      </div>
    </>
  );
}
