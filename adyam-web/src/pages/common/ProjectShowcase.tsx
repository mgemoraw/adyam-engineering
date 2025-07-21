import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import './ProjectShowcase.css';

import commercialBuilding from "./../../assets/images/commercial-center.webp";
import highwayConstruction from "./../../assets/images/highway_construction.jpg";
import residentialComplex from "../../assets/images/residential-complex.webp";


const ProjectShowcase = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: t('showcases.project1.title'),
      description: t('showcases.project1.description'),
      image: commercialBuilding,
      category: t('showcases.project1.category'),
      year: '2023',
      link: '/projects/commercial-tower'
    },
    {
      id: 2,
      title: t('showcases.project2.title'),
      description: t('showcases.project2.description'),
      image: highwayConstruction,
      category: t('showcases.project2.category'),
      year: '2022',
      link: '/projects/highway-construction'
    },
    {
      id: 3,
      title: t('showcases.project3.title'),
      description: t('showcases.project3.description'),
      image: residentialComplex,
      category: t('showcases.project3.category'),
      year: '2021',
      link: '/projects/residential-complex'
    }
  ];

  return (
    <section className={`project-showcase ${theme}`}>
      <div className="section-header">
        <h2>{t('showcases.title')}</h2>
        <p className="section-subtitle">{t('showcases.subtitle')}</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              <div className="project-badge">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <Link to={project.link} className="project-link">
                {t('showcases.viewProject')}
                <ArrowRightIcon width={40} className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all-projects">
        <Link to="/projects" className="view-all-button">
          {t('showcases.viewAllProjects')}
        </Link>
      </div>
    </section>
  );
};

export default ProjectShowcase;