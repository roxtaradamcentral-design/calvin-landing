import { Heart, Phone, Users, MessageCircle, Crown, ShieldCheck, CreditCard, ChevronRight, Star, Mail } from "lucide-react";

// ── EDIT THESE TO GO LIVE ──────────────────────────────────────────
const CONFIG = {
  contactEmail: "calvinspro@proton.me",
  calendlyIntake: "https://cal.eu/calvins/5-minute-intake-call",
  calendly60: "https://throne.com/cccalvin/item/8387b4f6-16aa-403b-8a77-9ef458741f3b",
  calendly90: "https://throne.com/cccalvin/item/ace0eb80-f893-4390-a720-308da3870323",
  mollieCalInPocket: "https://throne.com/cccalvin/item/d93dd0cb-6f8c-414c-a7b4-d6bed58b41d0",
  mollieGroupCoaching: "https://throne.com/cccalvin/item/dd802c46-c98a-4903-837c-f729521e5ddf",
  mollieVIP: "https://throne.com/cccalvin/item/e755e1bf-f64c-48df-b21a-6680d073dd44",
  testimonials: [
    { name: "Jeannet", quote: "Wat ben jij een held. Dank je wel voor jouw goeie tips, jij geeft mij de antwoorden waar ik naar op zoek ben. Niemand zou het beter uit kunnen leggen als jij." },
    { name: "Lotte", quote: "Wilde alleen ff zeggen dat ik jouw video's echt tof vind, keep going!" },
    { name: "Fleur", quote: "Ik heb veel aan je advies dat je geeft op TikTok. Dikke love dat je dit doet en mensen er echt mee helpt." },
    { name: "Sanne", quote: "Je bent echt slim en het is knap hoe je je kennis zo goed kan overbrengen naar anderen. Dat zou ik zelf nooit zo kunnen." },
  ],
};
// ────────────────────────────────────────────────────────────────────

function redirect(url) {
  if (!url) {
    alert("Add your real link in CONFIG at the top of this file.");
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

function SectionLabel({ children }) {
  return (
    <div className="bg-gray-800 text-white text-center py-3 px-4 rounded-xl font-semibold text-sm tracking-wide mb-4">
      {children}
    </div>
  );
}

function PackageCard({ icon: Icon, title, price, priceSuffix, desc, cta, onClick, popular, premium, note }) {
  return (
    <div
      className={`relative rounded-2xl p-4 flex flex-col justify-between border ${
        (popular || premium) ? "pt-6" : ""
      } ${
        premium
          ? "bg-gradient-to-b from-purple-50 to-white border-purple-300 shadow-lg"
          : popular
          ? "bg-white border-purple-400 shadow-md ring-2 ring-purple-400"
          : "bg-white border-gray-200 shadow-sm"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
          MOST POPULAR
        </span>
      )}
      {premium && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-purple-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
          <Crown size={12} /> PREMIUM
        </span>
      )}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Icon size={18} className={premium ? "text-purple-700" : "text-gray-700"} />
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">{title}</h3>
        </div>
        <p className={`font-bold ${premium ? "text-2xl text-purple-700" : "text-xl text-gray-900"} mt-1`}>
          {price}
          {priceSuffix && <span className="text-xs font-medium text-gray-500">{priceSuffix}</span>}
        </p>
        <p className="text-xs text-gray-500 mt-1 leading-snug">{desc}</p>
        {note && <p className="text-[11px] text-purple-600 mt-1 italic">{note}</p>}
      </div>
      <button
        onClick={onClick}
        className={`mt-3 w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-1 ${
          premium ? "bg-purple-700 text-white" : "bg-gray-900 text-white"
        }`}
      >
        {cta} <ChevronRight size={14} />
      </button>
      {premium && (
        <div className="flex items-center justify-center gap-1 mt-2 text-[11px] text-gray-500">
          <CreditCard size={12} /> Klarna Pay in 3 available
        </div>
      )}
    </div>
  );
}

export default function CoachingLandingPage() {
  return (
    <div className="min-h-screen bg-purple-50 font-sans max-w-md mx-auto pb-10">
      {/* HERO */}
      <div className="bg-purple-100 pb-6 pt-8">
        <div className="px-5">
          <h1 className="text-2xl font-bold text-gray-900 leading-snug">
            Ready To Dive Deep? Let's Start.
          </h1>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Years of experience. Coached over 2,000+ women. Book your call today!
          </p>
        </div>
      </div>

      {/* FREE INTAKE CALL */}
      <div className="px-5 mt-4">
        <div className="bg-gray-900 rounded-2xl p-4 shadow-md">
          <p className="text-white font-bold text-center mb-3">Book Your FREE 5-Min Intake Call</p>
          <button
            onClick={() => redirect(CONFIG.calendlyIntake)}
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg text-sm"
          >
            Schedule my intake call
          </button>
        </div>
      </div>

      {/* ONE-ON-ONE SESSIONS */}
      <div className="px-5 mt-8">
        <SectionLabel>Choose Your Path — One-on-One Sessions</SectionLabel>
        <div className="grid grid-cols-2 gap-3">
          <PackageCard
            icon={Phone}
            title="60-Min Session"
            price="€100"
            desc="Targeted problem solving, mindset shift."
            cta="Gift on Throne"
            onClick={() => redirect(CONFIG.calendly60)}
          />
          <PackageCard
            icon={Phone}
            title="90-Min Session"
            price="€125"
            desc="Deeper dive into relationship patterns, personalized roadmap."
            cta="Gift on Throne"
            popular
            onClick={() => redirect(CONFIG.calendly90)}
          />
        </div>
      </div>

      {/* CONTINUED SUPPORT */}
      <div className="px-5 mt-8">
        <SectionLabel>Continued Support</SectionLabel>
        <div className="flex flex-col gap-3">
          <PackageCard
            icon={MessageCircle}
            title="Cal in Your Pocket"
            price="€500"
            priceSuffix="/week"
            desc="Daily accountability, text & call access (Mon–Fri)."
            cta="Gift on Throne"
            onClick={() => redirect(CONFIG.mollieCalInPocket)}
          />
          <PackageCard
            icon={Users}
            title="2-Week Group Coaching"
            price="€80"
            desc="Connect with like-minded women, shared insights, 2 group calls."
            cta="Gift on Throne"
            onClick={() => redirect(CONFIG.mollieGroupCoaching)}
          />
        </div>
      </div>

      {/* VIP TIER */}
      <div className="px-5 mt-8">
        <SectionLabel>The Ultimate Transformation</SectionLabel>
        <PackageCard
          icon={Crown}
          title="Lifetime WhatsApp VIP Access"
          price="€5,000"
          desc="Direct, personal support from Calvin, forever. Daily check-ins and strategy."
          cta="Gift on Throne"
          premium
          onClick={() => redirect(CONFIG.mollieVIP)}
        />
      </div>

      {/* TRUST BAR */}
      <div className="px-5 mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
        <ShieldCheck size={14} className="text-gray-500" />
        Secure gifting via Throne
      </div>

      {/* TESTIMONIALS */}
      <div className="px-5 mt-8">
        <SectionLabel>What Women Are Saying</SectionLabel>
        <div className="flex flex-col gap-3">
          {CONFIG.testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={12} className="fill-purple-400 text-purple-400" />
                ))}
              </div>
              <p className="text-xs text-gray-700 italic">"{t.quote}"</p>
              <p className="text-[11px] text-gray-400 mt-1">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT NOTE */}
      <div className="px-5 mt-8">
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
          <Mail size={18} className="text-gray-700 mx-auto mb-2" />
          <p className="text-xs text-gray-700 leading-relaxed">
            After gifting on Throne, add your email or WhatsApp number in the order notes or contact field so Calvin can reach you.
          </p>
          <a
            href={`mailto:${CONFIG.contactEmail}`}
            className="inline-block mt-2 text-sm font-semibold text-purple-700"
          >
            {CONFIG.contactEmail}
          </a>
          <p className="text-[11px] text-gray-400 mt-1">You'll receive a confirmation shortly after.</p>
        </div>
      </div>

      <p className="text-center text-[11px] text-gray-400 mt-8">Back to Cal's TikTok</p>
    </div>
  );
}
