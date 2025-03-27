import Navbar from './Components/Navbar';
import Main from './Components/Main';
import GamingPartner from './Components/GamingPartner';
import GameServer from './GameServer';
import Hosting from './Components/Hosting';
import WorldServer from './Components/WorldServer';
import WhyHosting from './Components/WhyHosting';
import Video from './Components/Video';
import Questions from './Components/Questions';
import GoGaimig from './Components/GoGaimig';
import StartHere from './Components/StartHere';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-[#020525] text-white min-h-screen">
      <Navbar />

      <main>
        <Main />
        <GamingPartner />
        <GameServer />
        <Hosting />
        <WorldServer />
        <WhyHosting />
        <Video />
        <Questions />
        <GoGaimig />
        <StartHere />
        <SignUp />
      </main>

      <Footer />
    </div>
  );
}

export default App;
