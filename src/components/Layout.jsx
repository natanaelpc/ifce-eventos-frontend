// src/components/Layout.jsx
import Header from './Header';
import Sidebar from './Sidebar';

function Layout({ children, isOpen, toggleSidebar }) {
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="app-container">
        <Sidebar isOpen={isOpen} />
        <main className={`content ${isOpen ? "content-shift" : ""}`}>
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
