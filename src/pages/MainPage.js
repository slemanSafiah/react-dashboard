import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainPage() {
  return (
    <div className="Main-page">
      <Navbar />
      <Sidebar />
      <div className="sections"></div>
    </div>
  );
}

export default MainPage;
