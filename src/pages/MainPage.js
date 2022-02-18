import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GroupedSections from "../components/GroupedSections";

import "../styles.css";

function MainPage() {
  return (
    <div className="Main-page">
      <Navbar />
      <Sidebar />
      <GroupedSections />
    </div>
  );
}

export default MainPage;
