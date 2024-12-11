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

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">Our Philosophy</h2>
            
            <div className="glass-effect rounded-3xl p-8 md:p-12 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl -z-10" />
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif mb-4 text-primary">The Power of Resolution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    At Resolve Bodywork, we understand that true healing comes from addressing both physical tension and emotional holding patterns. Our name carries a dual meaning that reflects our comprehensive approach: to resolve (loosen and release) physical restrictions, while helping you find your inner resolve (strength and clarity) for lasting transformation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif mb-4 text-primary">Beyond Symptom Relief</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We don't just treat symptoms—we investigate and address root causes. Each session is an opportunity to decode the story your body tells through its patterns of tension and restriction. Through skilled touch and mindful awareness, we help you release not just physical discomfort, but the deeper patterns that may be holding you back.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif mb-4 text-primary">Your Journey to Freedom</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our goal is to guide you toward a life of greater ease and authenticity. Whether you're seeking relief from chronic pain, looking to improve performance, or ready for deep personal transformation, we're here to support your journey. Through our work together, you'll discover that sometimes the path forward isn't about pushing harder—it's about learning to let go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-flow-right" />
          <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-flow-left" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Transformative Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 relative group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl -z-10" />
                
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <blockquote className="text-gray-300 text-center mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="text-center">
                  <cite className="text-primary font-medium block not-italic">
                    {testimonial.name}
                  </cite>
                  <span className="text-sm text-gray-400">
                    {testimonial.location}
                  </span>
                </div>
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

const testimonials = [
  {
    quote: "After years of chronic back pain and countless treatments, Resolve Bodywork helped me understand and release patterns I didn't even know I was holding. The relief isn't just physical—I feel mentally clearer and more present in my daily life.",
    name: "Sarah Mitchell",
    location: "Bay Area Professional",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&h=300",
  },
  {
    quote: "The holistic approach at Resolve Bodywork transformed not just my posture but my entire relationship with stress. I've learned to let go instead of pushing through, and the results speak for themselves.",
    name: "Michael Chen",
    location: "Tech Executive",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300",
  },
  {
    quote: "As an athlete, I thought pain was just part of the game. Resolve Bodywork showed me how releasing deep tension patterns could actually improve my performance. Now I move with more freedom and power than ever.",
    name: "Alex Rodriguez",
    location: "Professional Athlete",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=300",
  },
];

export default Index;
