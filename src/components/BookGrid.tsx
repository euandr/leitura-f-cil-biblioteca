import BookCard from "./BookCard";

const books = [
  {
    id: 1,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    title: "Dom Casmurro",
    author: "Machado de Assis"
  },
  {
    id: 2,
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    title: "A Hora da Estrela",
    author: "Clarice Lispector"
  },
  {
    id: 3,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    title: "Grande Sertão: Veredas",
    author: "Guimarães Rosa"
  },
  {
    id: 4,
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
    title: "Memórias Póstumas",
    author: "Machado de Assis"
  },
  {
    id: 5,
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop",
    title: "O Cortiço",
    author: "Aluísio Azevedo"
  },
  {
    id: 6,
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    title: "Capitães da Areia",
    author: "Jorge Amado"
  },
  {
    id: 7,
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    title: "Vidas Secas",
    author: "Graciliano Ramos"
  },
  {
    id: 8,
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    title: "O Tempo e o Vento",
    author: "Erico Verissimo"
  }
];

const BookGrid = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Livros em Destaque
          </h2>
          <p className="text-muted-foreground">
            Os títulos mais populares da nossa biblioteca
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
        {books.map((book, index) => (
          <div 
            key={book.id} 
            className="animate-fade-up"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <BookCard
              cover={book.cover}
              title={book.title}
              author={book.author}
              onViewMore={() => console.log(`Ver mais: ${book.title}`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookGrid;
