import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  BuildingOfficeIcon,
  ChartBarIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  ArrowPathIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { 
  LightBulbIcon,
  Cog6ToothIcon,
  BuildingLibraryIcon 
} from '@heroicons/react/24/solid';
import TestimonialCarousel from './TestimonialCarousel';
import ProjectShowcase from './ProjectShowcase';
import './HomePage.css';
import { useTheme } from '../../hooks/useTheme';
import StatsBanner from './StatsBanner';
import FloatingChatButton from './FloatingChatButton';
import Demo from '../shared/Demo';
import useContactStore from '../../hookStores/contactStore';
import NewsSlider from '../news/NewsSlider';



const HomePage = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { contacts, loading, error, loadContacts, clearError } = useContactStore();

  const services = [
    {
      icon: <BuildingOfficeIcon width={40} className="h-12 w-12" />,
      title: t('services.structuralDesign'),
      description: t('services.structuralDesignDesc')
    },
    {
      icon: <ChartBarIcon  width={40} className="h-12 w-12" />,
      title: t('services.projectManagement'),
      description: t('services.projectManagementDesc')
    },
    {
      icon: <UserGroupIcon  width={40} className="h-12 w-12" />,
      title: t('services.constructionSupervision'),
      description: t('services.constructionSupervisionDesc')
    },
    {
      icon: <LightBulbIcon  width={40} className="h-12 w-12" />,
      title: t('services.feasibilityStudies'),
      description: t('services.feasibilityStudiesDesc')
    },
    {
      icon: <Cog6ToothIcon  width={40} className="h-12 w-12" />,
      title: t('services.quantitySurveying'),
      description: t('services.quantitySurveyingDesc')
    },
    {
      icon: <BuildingLibraryIcon  width={40} className="h-12 w-12" />,
      title: t('services.urbanPlanning'),
      description: t('services.urbanPlanningDesc')
    }
  ];

  const stats = [
    { value: 3, label: t('stats.projectsCompleted') },
    { value: 5, label: t('stats.clientsServed') },
    { value: 1, label: t('stats.yearsExperience') },
    { value: 100, label: t('stats.clientSatisfaction') }
  ];


  useEffect(()=> {
    loadContacts();
    console.log("Hello contacts", contacts);
  }, [])


  return (
    <div className={`home-page ${theme}`}>
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <video
          src="./intro.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
          style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
        opacity: 0.5, // Adjust for blending effect
        pointerEvents: 'none'
          }}
        />
        <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <h1>{t('home.heroTitle')}</h1>
          <p className="hero-subtitle"><i>{t('home.heroSubtitle')}!</i></p>
          <div className="hero-cta">
        <Link to="/contact" className="primary-button">
          {t('home.getInTouch')}
        </Link>
        <Link to="/services" className="secondary-button">
          {t('home.ourServices')}
        </Link>
          </div>
        </div>
        <div className="hero-image" style={{ position: 'relative', zIndex: 1 }}>
          {/* <img 
        src={theme === 'dark' ? "./../assets/images/engineering-services.webp" : serviceImage} 
        alt="Engineering Consultancy" 
          /> */}
        </div>
      </section>

      {/* <Demo /> */}

      
      {/* News Section (Slider) */}
      <NewsSlider />


      {/* About Section */}
      <section className="about-section">
        <div className="about-image">
          {/* <img src="../../assets/images/our-team.jfif" alt="Our Team" /> */}
          <img src="https://cdn.prod.website-files.com/62196607bf1b46c300301846/6568adc6401542df279ea6c3_bb8sa1slxdbdyjqqb5mn.webp" alt="Our Team" />
        </div>
        <div className="about-content">
          <h2 className="text-center font-bold text-sky-800">{t('home.aboutTitle')}</h2>
          <p className="text-start">{t('home.aboutText1')}</p>
          <p className='text-start'>{t('home.aboutText2')}</p>
          <p className='text-start'>{t('home.aboutText3')}</p>
          
          <ul className="about-features">
            <h3 className="text-left text-xl font-bold pb-3 text-sky-800">Features</h3>
            <li>
              <CheckBadgeIcon width={40} className="h-6 w-6" />
              {t('home.aboutFeature1')}
            </li>
            <li>
              <CheckBadgeIcon width={40} className="h-6 w-6" />
              {t('home.aboutFeature2')}
            </li>
            <li>
              <CheckBadgeIcon width={40} className="h-6 w-6" />
              {t('home.aboutFeature3')}
            </li>
          </ul>
          <Link to="/about" className="read-more-button">
            {t('home.readMore')} →
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>{t('home.ourServices')}</h2>
          <p className="section-subtitle">{t('home.servicesSubtitle')}</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="service-link">
                {t('home.readMore')} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      {/* <h2 className="text-left font-bold text-xl">Figures</h2> */}
      <StatsBanner stats={stats} />

      {/* Projects Showcase */}
      <ProjectShowcase />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2>{t('home.ourProcess')}</h2>
          <p className="section-subtitle">{t('home.processSubtitle')}</p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>{t('home.processStep1')}</h3>
            <p>{t('home.processStep1Desc')}</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>{t('home.processStep2')}</h3>
            <p>{t('home.processStep2Desc')}</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>{t('home.processStep3')}</h3>
            <p>{t('home.processStep3Desc')}</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>{t('home.processStep4')}</h3>
            <p>{t('home.processStep4Desc')}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>{t('home.readyToStart')}</h2>
          <p>{t('home.ctaSubtitle')}</p>
          <Link to="/contact" className="cta-button">
            {t('home.getFreeConsultation')}
          </Link>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="contact-info">
          <div className="contact-method">
            <PhoneIcon  width={40} className="h-8 w-8" />
            <h3>{t('home.callUs')}</h3>
            <p>{contacts.phone}</p>
          </div>
          <div className="contact-method">
            <EnvelopeIcon width={40} className="h-8 w-8" />
            <h3>{t('home.emailUs')}</h3>
            <p>info@adyamengineering.com</p>
          </div>
          <div className="contact-method">
            <MapPinIcon  width={40} className="h-8 w-8" />
            <h3>{t('home.visitUs')}</h3>
            <p>{t('home.companyAddress')}</p>
          </div>
        </div>
      </section>
      <FloatingChatButton contacts={contacts}/>
    </div>
  );
};

export default HomePage;