import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>
      <WhatsAppButton />
    </>
  );
}