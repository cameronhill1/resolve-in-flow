import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0F1115]" />
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }} />
      </div>
      
      <div className="relative">
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        
        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Our Philosophy
              </h2>
              
              <div className="glass-effect rounded-3xl p-8 md:p-12 relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl -z-10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
                     }} />
                
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
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Transformative Experiences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-effect rounded-2xl p-8 relative group hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl -z-10" />
                  
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
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

        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
};

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