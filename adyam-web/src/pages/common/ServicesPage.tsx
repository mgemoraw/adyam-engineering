import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import {
  LightBulbIcon,
  Cog6ToothIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <BuildingOfficeIcon className="h-10 w-10 text-indigo-600" />,
      title: t('services.structuralDesign'),
      description: t('services.structuralDesignDesc'),
      slug: 'structural-design',
    },
    {
      icon: <ChartBarIcon className="h-10 w-10 text-indigo-600" />,
      title: t('services.projectManagement'),
      description: t('services.projectManagementDesc'),
      slug: 'project-management',
    },
    {
      icon: <UserGroupIcon className="h-10 w-10 text-indigo-600" />,
      title: t('services.constructionSupervision'),
      description: t('services.constructionSupervisionDesc'),
      slug: 'construction-supervision',
    },
    {
      icon: <LightBulbIcon className="h-10 w-10 text-indigo-600" />,
      title: t('services.feasibilityStudies'),
      description: t('services.feasibilityStudiesDesc'),
      slug: 'feasibility-studies',
    },
    {
      icon: <Cog6ToothIcon className="h-10 w-10 text-indigo-600" />,
      title: t('services.quantitySurveying'),
      description: t('services.quantitySurveyingDesc'),
      slug: 'quantity-surveying',
    },
    {
      icon: <BuildingLibraryIcon className="h-10 w-10 text-indigo-600" />,
      title: t('services.urbanPlanning'),
      description: t('services.urbanPlanningDesc'),
      slug: 'urban-planning',
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-100 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-indigo-800 mb-4">
            {t('home.ourServices')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('home.servicesSubtitle')}
          </p>
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
                {t('home.readMore')} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            {t('home.readyToStart')}
          </h2>
          <p className="mb-6">{t('home.ctaSubtitle')}</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            {t('home.getFreeConsultation')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
