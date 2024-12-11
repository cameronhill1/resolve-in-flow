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

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Our Approach to Resolution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 relative group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl -z-10" />
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-center">{benefit.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{benefit.description}</p>
                <p className="text-primary mt-4 text-center italic">{benefit.keyPoint}</p>
              </div>
            ))}
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

const benefits = [
  {
    title: "Root-Cause Resolution",
    description: "We approach each tension as a puzzle to be solved, investigating and addressing the underlying causes of your discomfort rather than just treating symptoms.",
    keyPoint: "Your body holds the answers. Let's find them together.",
    icon: <div className="w-8 h-8 bg-primary rounded-full" />,
  },
  {
    title: "Holistic Alignment",
    description: "Experience transformation that goes beyond physical relief—where releasing bodily tension creates space for emotional clarity and renewed purpose.",
    keyPoint: "Sometimes, the solution isn't fighting harder—it's letting go.",
    icon: <div className="w-8 h-8 bg-primary rounded-full" />,
  },
  {
    title: "Lasting Transformation",
    description: "Our approach doesn't just provide temporary relief—it empowers you with understanding and techniques for maintaining long-term well-being and performance.",
    keyPoint: "This is where release leads to renewal.",
    icon: <div className="w-8 h-8 bg-primary rounded-full" />,
  },
];

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