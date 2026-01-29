import { Book, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Book className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Leitura Fácil</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Termos
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary" /> © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
