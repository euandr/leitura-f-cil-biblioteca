import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <img 
          src={heroBanner} 
          alt="Banner biblioteca" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
          Descubra seu próximo<br />
          <span className="text-gradient">livro favorito</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Explore milhares de títulos e encontre histórias que vão transformar sua imaginação.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
