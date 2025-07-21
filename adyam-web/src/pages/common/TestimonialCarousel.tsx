import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import './TestimonialCarousel.css';
import { UserCircleIcon, UserIcon } from '@heroicons/react/24/outline';


const TestimonialCarousel = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.client1.name'),
      position: t('testimonials.client1.position'),
      company: t('testimonials.client1.company'),
      content: t('testimonials.client1.content'),
      avatar: './../../icons/users.png'
    },
    {
      id: 2,
      name: t('testimonials.client2.name'),
      position: t('testimonials.client2.position'),
      company: t('testimonials.client2.company'),
      content: t('testimonials.client2.content'),
      avatar: './../../icons/users.png'
    },
    {
      id: 3,
      name: t('testimonials.client3.name'),
      position: t('testimonials.client3.position'),
      company: t('testimonials.client3.company'),
      content: t('testimonials.client3.content'),
      avatar: './../../icons/users.png'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 10000); // Change testimonial every 10 seconds

    // Cleanup interval when component unmounts or currentIndex changes
    return () => clearInterval(intervalId);
  }, [currentIndex, testimonials.length]);

  return (
    <section className={`testimonial-section ${theme}`}>
      <div className="section-header">
        <h2>{t('testimonials.title')}</h2>
        <p className="section-subtitle">{t('testimonials.subtitle')}</p>
      </div>
      
      <div className="testimonial-carousel">
        <button 
          onClick={prevTestimonial}
          className="carousel-button prev"
          aria-label={t('testimonials.previous')}
        >
          <ChevronLeftIcon width={40} className="bg-transparent h-6 w-6" />
          
        </button>
        
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.content}</p>
                <div className="testimonial-author">
                  {/* <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="author-avatar"
                  /> */}
                  <UserIcon className=" author-avatar text-blue-600"/>

                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={nextTestimonial}
          className="carousel-button next"
          aria-label={t('testimonials.next')}
        >
          <ChevronRightIcon width={40} className="bg-transparent h-6 w-6" />
        </button>
      </div>
      
      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            aria-label={t('testimonials.goToTestimonial', { number: index + 1 })}
          >
            <span className="sr-only">{t('testimonials.testimonial', { number: index + 1 })}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;