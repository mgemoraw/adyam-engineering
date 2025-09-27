import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircleIcon, LightBulbIcon, StarIcon, UserGroupIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { FaFilter } from 'react-icons/fa'

const iconMap = {
  "🛠️": <WrenchScrewdriverIcon className="h-8 w-8 text-indigo-600" />,
  "💡": <LightBulbIcon className="h-8 w-8 text-indigo-600" />,
  "🏅": <StarIcon className="h-8 w-8 text-indigo-600" />,
  "🌱": <FaFilter className="h-8 w-8 text-indigo-600" />,
  "🤝": <UserGroupIcon className="h-8 w-8 text-indigo-600" />,
};

const AboutPage = () => {
  const { t } = useTranslation();

  const features = [
    {
      feature: "Expertise and Experience",
      description: "Our team consists of highly skilled professionals...",
      icon: "🛠️",
    },
    {
      feature: "Innovation and Technology",
      description: "We are committed to staying at the forefront...",
      icon: "💡",
    },
    {
      feature: "Service Quality",
      description: "Quality is at the heart of everything we do...",
      icon: "🏅",
    },
    {
      feature: "Sustainability",
      description: "We are dedicated to promoting sustainable practices...",
      icon: "🌱",
    },
    {
      feature: "Client-Centric Approach",
      description: "Our clients are at the center of everything...",
      icon: "🤝",
    },
  ];

  const processSteps = [
    { titleKey: "processStep1", descKey: "processStep1Desc", step: "01" },
    { titleKey: "processStep2", descKey: "processStep2Desc", step: "02" },
    { titleKey: "processStep3", descKey: "processStep3Desc", step: "03" },
    { titleKey: "processStep4", descKey: "processStep4Desc", step: "04" },
  ];

  return (
    <div className="bg-white text-gray-800">

      {/* ====== Hero Section ====== */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">
            {t("home.aboutSubtitle")}
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900">
            {t("home.aboutTitle")}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            {t("home.aboutDescription")}
          </p>
        </div>
      </section>

      {/* ====== Our Story Section ====== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Our Journey and Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-700">{t("home.aboutText1")}</p>
            <p className="mt-4 text-lg text-gray-700">{t("home.aboutText2")}</p>
          </div>
          <div>
            <p className="text-lg text-gray-700">{t("home.aboutText3")}</p>
            <p className="mt-4 text-lg text-gray-700">{t("home.aboutText4")}</p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md transition"
              >
                {t("getFreeConsultation")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Features Section ====== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            {t("home.ourExpertise")} & Core Values
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            What drives us to deliver the highest quality.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4">{iconMap[item.icon]}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t(item.feature)}
                </h3>
                <p className="mt-2 text-gray-600">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Process Section ====== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">
            {t("processSubtitle")}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            {t("ourProcess")}
          </h2>

          <div className="mt-16 space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-600 text-left"
              >
                <div className="absolute -left-6 top-6 bg-indigo-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-2 text-gray-600">
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
