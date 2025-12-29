import React from "react";
import { useTranslation } from "react-i18next";
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  LightBulbIcon,
  Cog6ToothIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { FaProjectDiagram, FaRegBuilding, FaRoad } from "react-icons/fa";

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const services = [
    {
      icon: <BuildingOfficeIcon className="h-10 w-10 text-indigo-600" />,
      title: t("services.structuralDesign"),
      description: t("services.structuralDesignDesc"),
      slug: "structural-design",
    },
    {
      icon: <FaRoad className="h-10 w-10 text-indigo-600" />,
      title: t("services.roadAndBridgeDesign"),
      description: t("services.roadAndBridgeDesignDesc"),
      slug: "road-and-bridge-design",
    },

    {
      icon: <ChartBarIcon className="h-10 w-10 text-indigo-600" />,
      title: t("services.projectManagement"),
      description: t("services.projectManagementDesc"),
      slug: "project-management",
    },
    {
      icon: <UserGroupIcon className="h-10 w-10 text-indigo-600" />,
      title: t("services.constructionSupervision"),
      description: t("services.constructionSupervisionDesc"),
      slug: "construction-supervision",
    },
    {
      icon: <LightBulbIcon className="h-10 w-10 text-indigo-600" />,
      title: t("services.feasibilityStudies"),
      description: t("services.feasibilityStudiesDesc"),
      slug: "feasibility-studies",
    },
    {
      icon: <Cog6ToothIcon className="h-10 w-10 text-indigo-600" />,
      title: t("services.quantitySurveying"),
      description: t("services.quantitySurveyingDesc"),
      slug: "quantity-surveying",
    },
    {
      icon: <BuildingLibraryIcon className="h-10 w-10 text-indigo-600" />,
      title: t("services.urbanPlanning"),
      description: t("services.urbanPlanningDesc"),
      slug: "urban-planning",
    },
    {
      icon: <FaProjectDiagram className="h-10 w-10 text-indigo-600" />,
      title: t("services.trainingServices"),
      description: t("services.trainingServicesDesc"),
      slug: "software-training",
    },
    {
      icon: <CodeBracketIcon className="h-10 w-10 text-indigo-600" />,
      title: t("services.programmingLanguages"),
      description: t("services.programmingLanguagesDesc"),
      slug: "programming-training",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-100 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-indigo-800 mb-4">
            {t("home.ourServices")}
          </h1>
          <p className="text-lg text-gray-600">{t("home.servicesSubtitle")}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-start"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={`/services/${service.slug}`}
                className="text-indigo-600 font-medium hover:underline mt-auto"
              >
                {t("home.readMore")} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{t("home.readyToStart")}</h2>
          <p className="mb-6">{t("home.ctaSubtitle")}</p>

          <button
            onClick={() => setOpen(true)}
            className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            {t("home.requestConsultation")}
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Request Consultation
            </h3>

            <p className="text-gray-500 mb-6">
              Tell us briefly about your project and our team will contact you.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <textarea
                placeholder="Project Description"
                rows={4}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 text-purple py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
