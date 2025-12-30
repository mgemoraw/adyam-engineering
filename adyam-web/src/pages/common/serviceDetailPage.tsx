import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import MetaHead from "../../components/MetaHead";
import { servicesData } from "../../utils/serviceData";
import { AnimatedBridge } from "../../components/hero/AnimatedBridge";
import AnimatedHero from "../../components/hero/AnimatedHero";
import ServicesHero from "../../components/hero/ServicesHero";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const reduceMotion = useReducedMotion();

  if (!slug || !servicesData[slug as keyof typeof servicesData]) {
    return <Navigate to="/services" replace />;
  }

  const service = servicesData[slug as keyof typeof servicesData];

  return (
    <>
      {/* SEO */}
      <MetaHead
        title={`${service.title} | MiCon Engineering Consultants`}
        description={service.overview}
      />

      <div className="bg-white text-gray-800">
        {/* ================= HERO ================= */}

        <ServicesHero
          title="Road & Bridge Design"
          subtitle="Sustainable transport infrastructure solutions"
          ctaLabel="Talk to Our Engineers"
        />

        {/* ================= CONTENT ================= */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-20">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed max-w-4xl">
                {service.overview}
              </p>
            </div>

            {/* Scope */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Scope of Services</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-600">
                {service.scope.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Deliverables</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-600">
                {service.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-10 text-center">
              <h3 className="text-2xl font-bold mb-3">
                Need Expert Support for Your Project?
              </h3>

              <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                Contact our engineering team for tailored solutions, technical
                advice, and professional consultancy services.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-10 py-4 font-semibold text-white transition hover:bg-indigo-700 hover:scale-105"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetailPage;
