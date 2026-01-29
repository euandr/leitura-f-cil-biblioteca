import { BookOpen, GraduationCap, Laptop, Heart, Globe, Lightbulb, Music, Palette } from "lucide-react";

const categories = [
  { name: "Ficção", icon: BookOpen, color: "text-blue-400" },
  { name: "Educação", icon: GraduationCap, color: "text-green-400" },
  { name: "Tecnologia", icon: Laptop, color: "text-purple-400" },
  { name: "Romance", icon: Heart, color: "text-pink-400" },
  { name: "História", icon: Globe, color: "text-amber-400" },
  { name: "Autoajuda", icon: Lightbulb, color: "text-yellow-400" },
  { name: "Música", icon: Music, color: "text-cyan-400" },
  { name: "Arte", icon: Palette, color: "text-orange-400" },
];

const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">Categorias</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <category.icon className={`w-4 h-4 ${category.color}`} />
            <span className="text-sm text-foreground">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
