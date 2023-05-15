import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow justify-center mx-4 md:mx-8 lg:mx-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
