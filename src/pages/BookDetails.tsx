import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Download, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data - will be replaced with real data later
const booksData: Record<number, {
  id: number;
  cover: string;
  title: string;
  author: string;
  year: number;
  description: string;
  formats: string[];
}> = {
  1: {
    id: 1,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    title: "Dom Casmurro",
    author: "Machado de Assis",
    year: 1899,
    description: "Dom Casmurro é um romance escrito por Machado de Assis, publicado em 1899. O livro conta a história de Bentinho Santiago, que suspeita de uma traição de sua esposa Capitu com seu melhor amigo Escobar. A narrativa é feita em primeira pessoa por Bentinho, já idoso, que tenta 'atar as duas pontas da vida' relembrando seus anos de juventude. É considerada uma das obras mais importantes da literatura brasileira, com uma narrativa complexa que deixa ao leitor a interpretação sobre a veracidade dos fatos narrados.",
    formats: ["PDF", "EPUB", "MOBI"]
  },
  2: {
    id: 2,
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    title: "A Hora da Estrela",
    author: "Clarice Lispector",
    year: 1977,
    description: "A Hora da Estrela é o último romance de Clarice Lispector, publicado em 1977. A obra narra a história de Macabéa, uma jovem nordestina pobre que migra para o Rio de Janeiro em busca de uma vida melhor. A narrativa é conduzida por Rodrigo S.M., um escritor fictício que reflete sobre o ato de escrever enquanto conta a história de sua personagem. O livro explora temas como a solidão, a pobreza e a busca por identidade.",
    formats: ["PDF", "EPUB"]
  },
  3: {
    id: 3,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    title: "Grande Sertão: Veredas",
    author: "Guimarães Rosa",
    year: 1956,
    description: "Grande Sertão: Veredas é um romance do escritor brasileiro João Guimarães Rosa, publicado em 1956. É considerado uma das maiores obras da literatura brasileira e mundial. O livro narra a história de Riobaldo, um ex-jagunço que relembra sua vida, seus amores e as batalhas que travou no sertão mineiro. A obra é conhecida por sua linguagem inovadora e pela profundidade filosófica com que aborda temas como o bem e o mal, o amor e a morte.",
    formats: ["PDF", "EPUB", "MOBI", "AZW3"]
  },
  4: {
    id: 4,
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
    title: "Memórias Póstumas",
    author: "Machado de Assis",
    year: 1881,
    description: "Memórias Póstumas de Brás Cubas é um romance do escritor brasileiro Machado de Assis, publicado em 1881. É considerada uma das obras mais importantes da literatura brasileira. O livro é narrado por Brás Cubas, um defunto autor que decide escrever suas memórias do além-túmulo. Com ironia e humor negro, o narrador conta sua vida de homem rico e ocioso no Rio de Janeiro do século XIX.",
    formats: ["PDF", "EPUB"]
  },
  5: {
    id: 5,
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop",
    title: "O Cortiço",
    author: "Aluísio Azevedo",
    year: 1890,
    description: "O Cortiço é um romance naturalista do escritor brasileiro Aluísio Azevedo, publicado em 1890. A obra retrata a vida em uma habitação coletiva (cortiço) no Rio de Janeiro do final do século XIX. O livro acompanha diversos personagens que vivem nesse ambiente, mostrando as condições de vida precárias e as relações sociais complexas que se desenvolvem nesse espaço.",
    formats: ["PDF", "EPUB", "MOBI"]
  },
  6: {
    id: 6,
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    title: "Capitães da Areia",
    author: "Jorge Amado",
    year: 1937,
    description: "Capitães da Areia é um romance do escritor brasileiro Jorge Amado, publicado em 1937. A obra narra a história de um grupo de meninos de rua que vivem em um trapiche abandonado em Salvador, Bahia. Liderados por Pedro Bala, os Capitães da Areia sobrevivem de pequenos furtos e enfrentam a dura realidade da pobreza e do abandono social.",
    formats: ["PDF", "EPUB"]
  },
  7: {
    id: 7,
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    title: "Vidas Secas",
    author: "Graciliano Ramos",
    year: 1938,
    description: "Vidas Secas é um romance do escritor brasileiro Graciliano Ramos, publicado em 1938. A obra narra a história de uma família de retirantes nordestinos que foge da seca. Fabiano, Sinhá Vitória, os dois filhos e a cachorra Baleia percorrem o sertão em busca de sobrevivência. O livro é considerado uma das obras mais importantes do movimento literário conhecido como Regionalismo de 30.",
    formats: ["PDF", "EPUB", "MOBI"]
  },
  8: {
    id: 8,
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    title: "O Tempo e o Vento",
    author: "Erico Verissimo",
    year: 1949,
    description: "O Tempo e o Vento é uma trilogia épica do escritor brasileiro Erico Verissimo, iniciada em 1949. A obra narra a saga de duas famílias, os Terra e os Cambará, ao longo de 200 anos de história do Rio Grande do Sul. A trilogia é composta pelos volumes O Continente, O Retrato e O Arquipélago, e é considerada uma das maiores obras da literatura brasileira.",
    formats: ["PDF", "EPUB"]
  }
};

const BookDetails = () => {
  const { id } = useParams();
  const [showFormats, setShowFormats] = useState(false);
  
  const book = booksData[Number(id)];
  
  if (!book) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-24 container mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-foreground mb-4">Livro não encontrado</h1>
            <Link to="/">
              <Button variant="outline">Voltar para a página inicial</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Book Cover */}
            <div className="md:col-span-1">
              <div className="sticky top-28">
                <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-border">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Book Info */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-primary mb-4">{book.author}</p>
              <p className="text-muted-foreground mb-6">Publicado em {book.year}</p>
              
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-3">Sobre o livro</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {book.description}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 h-12 accent-gradient text-primary-foreground font-medium hover:opacity-90 transition-opacity gap-2">
                  <BookOpen className="w-5 h-5" />
                  Ler Online
                </Button>
                
                <div className="relative flex-1">
                  <Button 
                    variant="outline"
                    className="w-full h-12 gap-2 border-border hover:bg-secondary"
                    onClick={() => setShowFormats(!showFormats)}
                  >
                    <Download className="w-5 h-5" />
                    Download
                    <ChevronDown className={`w-4 h-4 transition-transform ${showFormats ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  {showFormats && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-card border border-border rounded-lg shadow-lg z-10 animate-fade-in">
                      <p className="text-xs text-muted-foreground px-3 py-2">Formatos disponíveis:</p>
                      {book.formats.map((format) => (
                        <button
                          key={format}
                          className="w-full text-left px-3 py-2 rounded-md hover:bg-secondary text-foreground transition-colors"
                        >
                          {format}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetails;
