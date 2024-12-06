import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="dark:bg-[#22333B]">
      <header className="md:max-w-7xl  md:m-auto dark:bg-[#22333B] p-3">
        <Navigation />
        <Main />
      </header>
      <main className="md:m-auto"> 
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
