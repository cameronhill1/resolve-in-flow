import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-flow-left" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-flow-right" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Realignment for a Life in Flow
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Advanced bodywork focused on releasing tension and enabling a pain-free, balanced life.
            </p>
            <button className="bg-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors">
              Book Your First Session
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-accent p-8 rounded-lg hover:bg-accent/80 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-8">Ready to Transform Your Life?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards a pain-free, balanced life. Book your session today and experience the power of professional bodywork.
          </p>
          <button className="bg-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Deep Tissue Release",
    description: "Advanced techniques to release chronic tension and restore natural movement patterns.",
    icon: <div className="w-8 h-8 bg-primary rounded-full" />,
  },
  {
    title: "Postural Alignment",
    description: "Comprehensive assessment and correction of postural imbalances.",
    icon: <div className="w-8 h-8 bg-primary rounded-full" />,
  },
  {
    title: "Movement Education",
    description: "Learn how to maintain alignment and prevent future tension through mindful movement.",
    icon: <div className="w-8 h-8 bg-primary rounded-full" />,
  },
];

export default Index;