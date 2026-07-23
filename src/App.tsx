import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InsuranceSection } from './components/InsuranceSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { allCategories } from './data/insuranceData';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        {allCategories.map((category, index) => (
          <InsuranceSection key={category.id} category={category} index={index} />
        ))}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
