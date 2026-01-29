import { Book, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Book className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">
            Leitura <span className="text-gradient">Fácil</span>
          </h1>
        </Link>
        
        <Link to="/admin">
          <Button variant="outline" className="gap-2 border-border hover:bg-primary hover:text-primary-foreground">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Usuário</span>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
