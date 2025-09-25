import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';


const AboutPage = () => {
const { t } = useTranslation();
// 2. Define data arrays for easy rendering of repetitive sections (Features/Process)
    const features = [
    { feature: "Expertise and Experience", description: "Our team consists of highly skilled professionals with extensive experience in the engineering field. We bring a wealth of knowledge and expertise to every project, ensuring that we deliver the best possible results for our clients.", icon: "🛠️"},
    { feature: "Innovation and Technology", description: "We are committed to staying at the forefront of engineering technology and methodologies. Our innovative approach allows us to tackle complex challenges and deliver cutting-edge solutions that meet the evolving needs of our clients.",  icon: "💡" },
    { feature: "Service Quality", description: "Quality is at the heart of everything we do. We adhere to the highest standards of quality assurance and control, ensuring that every project we undertake meets or exceeds industry standards and client expectations.", icon:"🏅"},
    { feature: "Sustainability", description: "We are dedicated to promoting sustainable practices in all our projects. Our focus on sustainability ensures that we minimize environmental impact while delivering efficient and effective engineering solutions.",  icon:"🌱"},
    { feature: "Client-Centric Approach", description: "Our clients are at the center of everything we do. We take the time to understand your unique needs and challenges, providing personalized service and support throughout the project lifecycle. Our goal is to build lasting relationships based on trust and mutual success.", icon: "🤝" }
];
    

    const processSteps = [
        { titleKey: "processStep1", descKey: "processStep1Desc", step: "01" },
        { titleKey: "processStep2", descKey: "processStep2Desc", step: "02" },
        { titleKey: "processStep3", descKey: "processStep3Desc", step: "03" },
        { titleKey: "processStep4", descKey: "processStep4Desc", step: "04" },
    ];

    return (
        <div className="bg-white text-gray-800">

            {/* ====== 1. Header Section (Hero) ====== */}
            <section className="py-20 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                        {t("home.aboutSubtitle")}
                    </p>
                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        {t("home.aboutTitle")}
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                        {t("home.aboutDescription")}
                    </p>
                </div>
            </section>

            {/* ====== 2. Our Story / Detailed Text Section ====== */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                        <div className="lg:pr-8">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Our Journey and Expertise
                            </h2>
                            <p className="mt-4 text-gray-600 text-lg">{t("home.aboutText1")}</p>
                            <p className="mt-4 text-gray-600 text-lg">{t("home.aboutText2")}</p>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:pl-8">
                            <p className="text-gray-600 text-lg">{t("home.aboutText3")}</p>
                            <p className="mt-4 text-gray-600 text-lg">{t("home.aboutText4")}</p>
                            
                            {/* Call to Action Button */}
                            <div className="mt-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
                                >
                                    {t("getFreeConsultation")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== 3. Core Values / Features Section ====== */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            {t("home.ourExpertise")} & Core Values
                        </h2>
                        <p className="mt-4 text-xl text-gray-500">
                            What drives us to deliver the highest quality.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div key={index} className="pt-6">
                                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full transition duration-300 hover:shadow-xl">
                                    <div className="-mt-6">
                                        {/* Icon Placeholder */}
                                        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-indigo-500 text-white text-2xl">
                                            {feature.icon}
                                        </div>
                                        <h3 className="mt-5 text-xl font-medium text-gray-900">
                                            {t(feature.feature)}
                                        </h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            {t(feature.description)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== 4. Our Process Section ====== */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                            {t("processSubtitle")}
                        </p>
                        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {t("ourProcess")}
                        </h2>
                    </div>

                    {/* Process Timeline Grid */}
                    <div className="mt-12 relative">
                        {/* Simplified vertical timeline line for large screens */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full hidden lg:block"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-16">
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`relative flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}
                                >
                                    {/* Step Number Circle/Marker */}
                                    <div className={`absolute top-0 w-12 h-12 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center border-4 border-white z-10 
                                            ${index % 2 === 0 ? 'lg:left-1/2 lg:-translate-x-full lg:mr-6' : 'lg:right-1/2 lg:translate-x-full lg:ml-6'}`}>
                                        {step.step}
                                    </div>

                                    {/* Step Content Card */}
                                    <div className={`w-full max-w-lg p-6 rounded-lg shadow-xl bg-white 
                                            ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                                        <h3 className="text-xl font-bold text-gray-900 mt-12 lg:mt-0">
                                            {t(step.titleKey)}
                                        </h3>
                                        <p className="mt-2 text-gray-600">
                                            {t(step.descKey)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;