const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-flow-left" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-flow-right" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-effect rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl -z-10" />
          
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to Transform Your Life?</h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards a life of greater ease and authenticity. Experience the power of professional bodywork that addresses not just symptoms, but the root causes of tension and discomfort.
          </p>
          
          <p className="text-lg text-primary italic mb-8">
            Feel freer, lighter, and more in tune with your body than ever before.
          </p>
          
          <button className="bg-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors group relative overflow-hidden">
            <span className="relative z-10">Schedule Your Session</span>
            <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;