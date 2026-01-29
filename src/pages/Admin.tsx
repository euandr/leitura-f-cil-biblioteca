import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BookFile {
  format: string;
  file: File | null;
}

const Admin = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [bookFiles, setBookFiles] = useState<BookFile[]>([{ format: "", file: null }]);

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addFileFormat = () => {
    setBookFiles([...bookFiles, { format: "", file: null }]);
  };

  const removeFileFormat = (index: number) => {
    setBookFiles(bookFiles.filter((_, i) => i !== index));
  };

  const updateFileFormat = (index: number, format: string) => {
    const updated = [...bookFiles];
    updated[index].format = format;
    setBookFiles(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement book registration with backend
    console.log({ title, author, year, category, description, bookFiles });
    alert("Funcionalidade de cadastro será implementada com o backend!");
  };

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

          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Cadastrar Livro</h1>
            <p className="text-muted-foreground mb-8">Preencha as informações do livro para cadastrá-lo na biblioteca.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Cover Image */}
              <div className="card-gradient rounded-xl p-6 border border-border">
                <Label className="text-foreground mb-4 block">Capa do Livro</Label>
                <div className="flex items-start gap-6">
                  <div className="w-32 aspect-[2/3] rounded-lg overflow-hidden bg-secondary border border-border flex items-center justify-center">
                    {coverPreview ? (
                      <img src={coverPreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleCoverChange}
                      className="bg-secondary border-border"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Recomendado: Imagem com proporção 2:3 (ex: 400x600px)
                    </p>
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className="card-gradient rounded-xl p-6 border border-border space-y-4">
                <h2 className="text-lg font-semibold text-foreground mb-4">Informações do Livro</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title" className="text-foreground">Título</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Nome do livro"
                      className="mt-1 bg-secondary border-border"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="author" className="text-foreground">Autor</Label>
                    <Input
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Nome do autor"
                      className="mt-1 bg-secondary border-border"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="year" className="text-foreground">Ano de Publicação</Label>
                    <Input
                      id="year"
                      type="number"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="Ex: 2024"
                      className="mt-1 bg-secondary border-border"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Categoria</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="mt-1 bg-secondary border-border">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="ficcao">Ficção</SelectItem>
                        <SelectItem value="educacao">Educação</SelectItem>
                        <SelectItem value="tecnologia">Tecnologia</SelectItem>
                        <SelectItem value="romance">Romance</SelectItem>
                        <SelectItem value="historia">História</SelectItem>
                        <SelectItem value="autoajuda">Autoajuda</SelectItem>
                        <SelectItem value="musica">Música</SelectItem>
                        <SelectItem value="arte">Arte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-foreground">Resumo / Descrição</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Escreva um breve resumo sobre o livro..."
                    className="mt-1 bg-secondary border-border min-h-[120px]"
                    required
                  />
                </div>
              </div>

              {/* Download Files */}
              <div className="card-gradient rounded-xl p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-foreground">Arquivos para Download</h2>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addFileFormat}
                    className="gap-2 border-border"
                  >
                    <Plus className="w-4 h-4" />
                    Adicionar formato
                  </Button>
                </div>

                <div className="space-y-4">
                  {bookFiles.map((bookFile, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Select 
                        value={bookFile.format} 
                        onValueChange={(value) => updateFileFormat(index, value)}
                      >
                        <SelectTrigger className="w-32 bg-secondary border-border">
                          <SelectValue placeholder="Formato" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="epub">EPUB</SelectItem>
                          <SelectItem value="mobi">MOBI</SelectItem>
                          <SelectItem value="azw3">AZW3</SelectItem>
                          <SelectItem value="txt">TXT</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        type="file"
                        className="flex-1 bg-secondary border-border"
                      />
                      {bookFiles.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFileFormat(index)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                className="w-full h-12 accent-gradient text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Cadastrar Livro
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
