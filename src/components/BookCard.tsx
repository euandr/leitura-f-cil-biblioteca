import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  cover: string;
  title: string;
  author: string;
  onViewMore?: () => void;
}

const BookCard = ({ cover, title, author, onViewMore }: BookCardProps) => {
  return (
    <div className="group card-gradient rounded-xl overflow-hidden border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]">
      {/* Book Cover */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Book Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-1 mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {author}
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full gap-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          onClick={onViewMore}
        >
          <Eye className="w-4 h-4" />
          Ver mais
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
