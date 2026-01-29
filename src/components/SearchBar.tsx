import { Search, Filter, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container mx-auto px-4 -mt-8 relative z-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <div className="card-gradient rounded-2xl p-6 shadow-lg border border-border">
        {/* Main Search */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Buscar por título, autor ou palavra-chave..."
              className="pl-12 h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button 
            variant="outline" 
            className="h-12 gap-2 border-border hover:bg-secondary"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4" />
            Filtros
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </Button>
          <Button className="h-12 px-8 accent-gradient text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Buscar
          </Button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border animate-fade-in">
            <Select>
              <SelectTrigger className="h-11 bg-secondary border-border">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="fiction">Ficção</SelectItem>
                <SelectItem value="romance">Romance</SelectItem>
                <SelectItem value="mystery">Mistério</SelectItem>
                <SelectItem value="scifi">Ficção Científica</SelectItem>
                <SelectItem value="biography">Biografia</SelectItem>
                <SelectItem value="history">História</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-11 bg-secondary border-border">
                <SelectValue placeholder="Autor" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="machado">Machado de Assis</SelectItem>
                <SelectItem value="clarice">Clarice Lispector</SelectItem>
                <SelectItem value="guimaraes">Guimarães Rosa</SelectItem>
                <SelectItem value="drummond">Carlos Drummond</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-11 bg-secondary border-border">
                <SelectValue placeholder="Título" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="az">A-Z</SelectItem>
                <SelectItem value="za">Z-A</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-11 bg-secondary border-border">
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="older">Anteriores</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
