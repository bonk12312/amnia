import { useState } from 'react';
import StarField from './components/StarField';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import ActivityPage from './pages/ActivityPage';
import FAQPage from './pages/FAQPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'content':
        return <ContentPage onNavigate={setCurrentPage} />;
      case 'activity':
        return <ActivityPage onNavigate={setCurrentPage} />;
      case 'faq':
        return <FAQPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      <StarField />
      {renderPage()}
    </>
  );
}

export default App;
