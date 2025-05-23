import {
  Header,
  Footer,
  ChooseProgram,
  Search,
  ConstructionCosts,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1140px] grow px-4 pb-[50px] sm:px-5 md:pb-[105px]">
        <ChooseProgram />
        <Search />
        <ConstructionCosts />
      </main>
      <Footer />
    </>
  );
}
