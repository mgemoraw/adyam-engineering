import { useParams, Link } from "react-router-dom";
import { servicesData } from "../../utils/serviceData";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug as keyof typeof servicesData] : null;

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Service Not Found</h1>
        <Link to="/services" className="text-indigo-600 mt-4 inline-block">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-indigo-600 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-3">{service.title}</h1>
          <p className="text-indigo-100 text-lg">{service.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-600 leading-relaxed">{service.overview}</p>
          </div>

          {/* Scope */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Scope of Services</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {service.scope.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Deliverables</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {service.deliverables.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-10">
            <Link
              to="/services"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
