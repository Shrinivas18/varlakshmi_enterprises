import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Content (empty for now) */}
      <main className="flex-grow">
        {/* your content will go here */}
      </main>

      <Footer />
    </div>
  );
}

export default App;