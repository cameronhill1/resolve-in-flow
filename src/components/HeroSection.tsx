import { MoveRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Animated gradients */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-flow-left" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-flow-right" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Realignment for a Life in Flow
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Advanced bodywork focused on releasing tension and enabling a pain-free, balanced life.
          </p>
          <button className="group bg-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            Book Your First Session
            <MoveRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;