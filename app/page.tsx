import Navigation from "./components/Navigation";
import Main from "./components/Main";
export default function Home() {
  return (
    <div className="dark:bg-[#22333B]">
      <header className="md:max-w-7xl  md:m-auto dark:bg-[#22333B] p-3">
        <Navigation/>
        <Main/>
      </header>
    </div>
  );
}
