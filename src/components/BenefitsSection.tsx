import { Sparkles, Orbit, Target } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Our Approach to Resolution
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-2xl p-8 relative group hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl -z-10" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
                   }} />
              
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
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
  );
};

const benefits = [
  {
    title: "Root-Cause Resolution",
    description: "We approach each tension as a puzzle to be solved, investigating and addressing the underlying causes of your discomfort rather than just treating symptoms.",
    keyPoint: "Your body holds the answers. Let's find them together.",
    icon: <Target className="w-8 h-8 text-primary" />,
  },
  {
    title: "Holistic Alignment",
    description: "Experience transformation that goes beyond physical relief—where releasing bodily tension creates space for emotional clarity and renewed purpose.",
    keyPoint: "Sometimes, the solution isn't fighting harder—it's letting go.",
    icon: <Orbit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Lasting Transformation",
    description: "Our approach doesn't just provide temporary relief—it empowers you with understanding and techniques for maintaining long-term well-being and performance.",
    keyPoint: "This is where release leads to renewal.",
    icon: <Sparkles className="w-8 h-8 text-primary" />,
  },
];

export default BenefitsSection;