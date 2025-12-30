import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServicesHeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: boolean;
  ctaLabel?: string;
  ctaLink?: string;
}

const ServicesHero = ({
  title,
  subtitle,
  breadcrumb = true,
  ctaLabel = "Request Consultation",
  ctaLink = "/contact",
}: ServicesHeroProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <header
      className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 text-white"
      aria-labelledby="services-hero-title"
    >
      {/* Background grid animation */}
      {!reduceMotion && (
        <motion.div
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "128px 128px"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-indigo-900/40" />

      <div className="mx-auto max-w-7xl px-6 py-28">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="mb-6 text-sm text-indigo-200" aria-label="Breadcrumb">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/services" className="hover:underline">
              Services
            </Link>
          </nav>
        )}

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <h1
              id="services-hero-title"
              className="text-4xl font-bold leading-tight md:text-5xl"
            >
              {title}
            </h1>

            <p className="mt-4 max-w-xl text-lg text-indigo-100">{subtitle}</p>

            <div className="mt-8">
              <Link
                to={ctaLink}
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg transition hover:scale-105 hover:bg-indigo-50"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="relative hidden lg:block">
            <motion.svg
              viewBox="0 0 600 400"
              className="w-full max-w-xl"
              role="img"
              aria-label="Engineering services illustration"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Frame */}
              <rect
                x="30"
                y="30"
                width="540"
                height="340"
                rx="18"
                fill="white"
                opacity="0.95"
              />

              {/* Animated gears */}
              <motion.g
                transform="translate(180 200)"
                animate={!reduceMotion ? { rotate: 360 } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <circle r="48" fill="#6366f1" />
                <circle r="30" fill="white" />
              </motion.g>

              <motion.g
                transform="translate(320 200)"
                animate={!reduceMotion ? { rotate: -360 } : {}}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              >
                <circle r="36" fill="#818cf8" />
                <circle r="20" fill="white" />
              </motion.g>

              {/* Lines */}
              <path
                d="M120 260 L200 200 L280 240 L360 180"
                stroke="#c7d2fe"
                strokeWidth="3"
                fill="none"
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ServicesHero;
