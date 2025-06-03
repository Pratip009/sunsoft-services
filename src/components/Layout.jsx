import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-grow pt-[65px] px-1 md:px-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
