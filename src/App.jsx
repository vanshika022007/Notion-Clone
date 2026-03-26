import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function App() {
  return (
    <div className="flex bg-[#191919] text-white min-h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <Section />
      </div>
    </div>
  );
}
