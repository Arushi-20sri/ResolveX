import { useState } from 'react'
import './App.css'
import Header from '../Header/Header.jsx';
import Hero from '../Hero/Hero.jsx';
import Footer from '../Footer/Footer.jsx';
import IssuePanel from '../IssuePanel/IssuePanel.jsx';

function App() {
  const [isIssuePanelOpen, setIsIssuePanelOpen] = useState(false);

  const openIssuePanel = () => {
    setIsIssuePanelOpen(true);
  };

  const closeIssuePanel = () => {
    setIsIssuePanelOpen(false);
  };

  return (
    <div className="app">
      <Header />
      <Hero onGetStartedClick={openIssuePanel} />
      <Footer />
      
      {/* Floating Issue Icon */}
      <button 
        className="floating-issue-icon" 
        onClick={openIssuePanel}
        title="Report an issue"
      >
        <img src="/images/icon.png" alt="Report Issue" className="floating-icon-img" />
      </button>

      {/* Issue Panel */}
      <IssuePanel isOpen={isIssuePanelOpen} onClose={closeIssuePanel} />
    </div>
  )
}

export default App
