import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-flow-right" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-flow-left" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Common Questions</h2>
        
        <div className="glass-effect rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl -z-10" />
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-b border-primary/20">
              <AccordionTrigger className="text-xl font-serif text-left hover:text-primary transition-colors">
                What should I expect during my first session?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                Your first session begins with a thorough consultation to understand your needs and goals. During the bodywork, you'll experience gentle yet effective techniques focused on releasing tension patterns. We'll communicate throughout to ensure your comfort and optimal results. Sessions typically last 75-90 minutes, allowing time for both treatment and discussion of self-care strategies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-primary/20">
              <AccordionTrigger className="text-xl font-serif text-left hover:text-primary transition-colors">
                How many sessions will I need?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                The number of sessions varies based on your individual needs and goals. Many clients experience significant improvement within 3-5 sessions. We'll develop a personalized treatment plan during your first visit, with regular progress assessments to adjust the approach as needed. Some clients choose to continue with monthly maintenance sessions after achieving their initial goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-primary/20">
              <AccordionTrigger className="text-xl font-serif text-left hover:text-primary transition-colors">
                What makes your approach different from regular massage?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                Our approach goes beyond traditional massage by focusing on root causes rather than just symptoms. We combine advanced bodywork techniques with movement education and mindful awareness to address both physical and emotional holding patterns. This integrated method helps create lasting changes in your body's alignment and movement patterns, rather than just temporary relief.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;