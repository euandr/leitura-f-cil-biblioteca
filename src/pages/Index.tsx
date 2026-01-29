import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import BookGrid from "@/components/BookGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <SearchBar />
        <Categories />
        <BookGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
