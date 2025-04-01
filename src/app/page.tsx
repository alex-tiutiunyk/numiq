import { ChooseProgram, Header, Search, ConstructionCosts } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1140px] px-[15px]">
        <ChooseProgram />
        <Search />
        <ConstructionCosts />
      </main>
      <div className="h-[1500px]"></div>
    </>
  );
}
