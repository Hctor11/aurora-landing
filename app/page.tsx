import Navigation from "./components/Navigation";
import Main from "./components/Main";
export default function Home() {
  return (
    <>
      <header className="dark:bg-[#22333B] p-3">
        <Navigation/>
        <Main/>
      </header>
    </>
  );
}
