import { Book } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Book className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">
            Leitura <span className="text-gradient">Fácil</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Início
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Categorias
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Novidades
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Favoritos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
