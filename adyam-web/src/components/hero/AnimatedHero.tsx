import React from "react";

interface AnimatedHeroProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  title = "Engineering Services",
  subtitle = "Design • Build • Scale — End-to-end engineering solutions",
  className,
}) => {
  return (
    <section
      className={`animated-hero ${className || ""}`}
      aria-label="Engineering hero illustration"
    >
      <style>{`
                .animated-hero {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    padding: 3rem 2rem;
                    background: linear-gradient(180deg, #f7fbff 0%, #ffffff 100%);
                    color: #0f172a;
                    overflow: hidden;
                }
                .hero-content {
                    flex: 1 1 420px;
                    max-width: 640px;
                }
                .hero-title {
                    font-size: 2.1rem;
                    margin: 0 0 0.6rem 0;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                }
                .hero-sub {
                    margin: 0;
                    color: #334155;
                    font-size: 1rem;
                    line-height: 1.5;
                }
                .hero-visual {
                    flex: 1 1 420px;
                    min-width: 320px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                /* SVG animations */
                svg { max-width: 560px; width: 100%; height: auto; display:block; }
                .gear { transform-box: fill-box; transform-origin: 50% 50%; }
                .gear-1 { animation: spin 8s linear infinite; }
                .gear-2 { animation: spin 10s linear reverse infinite; }
                .gear-3 { animation: spin 12s linear infinite; }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .rocket { animation: float 3.6s ease-in-out infinite; transform-origin: 50% 50%; }
                @keyframes float {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                }

                .circuit .trace {
                    stroke-dasharray: 240;
                    stroke-dashoffset: 240;
                    animation: draw 4s ease-in-out infinite;
                }
                .circuit .trace.delay { animation-delay: 0.6s; }
                @keyframes draw {
                    0% { stroke-dashoffset: 240; opacity: 0.2; }
                    50% { stroke-dashoffset: 0; opacity: 1; }
                    100% { stroke-dashoffset: -240; opacity: 0.2; }
                }

                .node { fill: #06b6d4; transform-origin: center; }
                .node.pulse { animation: pulse 2s ease-out infinite; }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    70% { transform: scale(1.6); opacity: 0.3; }
                    100% { transform: scale(1); opacity: 1; }
                }

                /* Responsive tweaks */
                @media (max-width: 880px) {
                    .animated-hero { flex-direction: column; text-align: center; gap: 1.25rem; padding: 2rem 1rem; }
                    .hero-visual { min-width: 260px; }
                }
            `}</style>

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-sub">{subtitle}</p>
      </div>

      <div className="hero-visual" aria-hidden>
        <svg
          viewBox="0 0 900 520"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#06b6d4" />
              <stop offset="1" stopColor="#0ea5a4" />
            </linearGradient>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="10"
                stdDeviation="14"
                floodColor="#0f172a"
                floodOpacity="0.08"
              />
            </filter>
          </defs>

          {/* <!-- Background plate --> */}
          <rect
            x="40"
            y="40"
            width="820"
            height="440"
            rx="18"
            fill="white"
            stroke="#e6eef8"
            strokeWidth="2"
            filter="url(#shadow)"
          />

          {/* <!-- Circuit traces --> */}
          <g
            className="circuit"
            stroke="#94a3b8"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              className="trace"
              d="M160 380 L260 300 L360 340 L460 260 L560 300 L660 230"
            />
            <path
              className="trace delay"
              d="M220 320 L320 260 L420 300 L520 220 L620 270"
            />
            {/* Nodes */}
            <circle className="node pulse" cx="160" cy="380" r="8" />
            <circle className="node" cx="260" cy="300" r="6" />
            <circle className="node pulse" cx="360" cy="340" r="9" />
            <circle className="node" cx="460" cy="260" r="6" />
            <circle className="node pulse" cx="560" cy="300" r="8" />
            <circle className="node" cx="660" cy="230" r="6" />
          </g>

          {/* <!-- Gears --> */}
          <g transform="translate(160,140)" className="gear gear-1">
            <g>
              <circle cx="0" cy="0" r="46" fill="url(#g1)" opacity="0.95" />
              <g transform="scale(0.62)" fill="#083344">
                <path d="M0-74 L12-64 L28-62 L36-50 L52-45 L56-28 L70-16 L66 0 L70 16 L56 28 L52 45 L36 50 L28 62 L12 64 L0 74 L-12 64 L-28 62 L-36 50 L-52 45 L-56 28 L-70 16 L-66 0 L-70 -16 L-56 -28 L-52 -45 L-36 -50 L-28 -62 L-12 -64 Z" />
              </g>
              <circle cx="0" cy="0" r="18" fill="white" />
              <circle cx="0" cy="0" r="10" fill="#083344" />
            </g>
          </g>

          <g transform="translate(320,200)" className="gear gear-2">
            <g>
              <circle cx="0" cy="0" r="34" fill="url(#g2)" opacity="0.9" />
              <circle cx="0" cy="0" r="12" fill="white" />
              <circle cx="0" cy="0" r="6" fill="#0f172a" />
            </g>
          </g>

          <g transform="translate(500,120)" className="gear gear-3">
            <g>
              <circle cx="0" cy="0" r="24" fill="#e2f8ff" />
              <circle cx="0" cy="0" r="8" fill="#0369a1" />
            </g>
          </g>

          {/* <!-- Rocket / product --> */}
          <g transform="translate(700,360) scale(0.9)" className="rocket">
            <g>
              <path
                d="M0 -72 C10 -58 24 -58 36 -52 L52 -36 C58 -28 58 -10 52 -2 L12 38 C6 44 -6 44 -12 38 L-52 -2 C-58 -10 -58 -28 -52 -36 L-36 -52 C-24 -58 -10 -58 0 -72 Z"
                fill="#f97316"
                stroke="#fb923c"
                strokeWidth="2"
              />
              <rect
                x="-12"
                y="-34"
                width="24"
                height="28"
                rx="6"
                fill="#fff"
                opacity="0.9"
              />
              <path
                d="M-30 6 C-18 20 18 20 30 6"
                fill="#ffd7b5"
                opacity="0.9"
              />
            </g>

            {/* <!-- flame --> */}
            <g transform="translate(0,46)" opacity="0.95">
              <ellipse
                rx="10"
                ry="26"
                fill="url(#g1)"
                style={{ mixBlendMode: "screen" } as React.CSSProperties}
              />
              <ellipse rx="6" ry="16" fill="#fff3" />
            </g>
          </g>

          {/* <!-- Small tech icons (simple panels) --> */}
          <g transform="translate(540,320)">
            <rect
              x="-60"
              y="-44"
              width="120"
              height="88"
              rx="10"
              fill="#eef2ff"
              stroke="#c7d2fe"
              strokeWidth="2"
            />
            <rect x="-44" y="-28" width="40" height="18" rx="4" fill="#fff" />
            <rect x="4" y="-28" width="40" height="18" rx="4" fill="#fff" />
            <rect
              x="-36"
              y="-2"
              width="72"
              height="26"
              rx="6"
              fill="#fff"
              opacity="0.9"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default AnimatedHero;
