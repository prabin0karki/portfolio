import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useTheme } from '../hooks/useTheme';

export default function MainLayout({ children }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
