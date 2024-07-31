import TransitionPage from "@/components/transition-page";
import CoverParticles from "../components/cover-particles";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex main-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
        <CoverParticles />


      </div>



    </main>
  );
}
