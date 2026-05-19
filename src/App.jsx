import  { useState } from 'react';
import Dashboard from './pages/Dashboard';
import BugTracker from './pages/BugTracker';
import Docs from './pages/Docs';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderPage = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'bugs': return <BugTracker />;
      case 'docs': return <Docs />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f3f4f6', direction: 'rtl' }}>
      {/* Sidebar - الشريط الجانبي */}
      <aside style={{ width: '260px', backgroundColor: '#1e293b', color: '#fff', padding: '20px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '30px', color: '#38bdf8', fontWeight: 'bold', textAlign: 'center' }}>LuminaTask</h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button 
            onClick={() => setActiveTab('dashboard')}
            style={{ ...navButtonStyle, backgroundColor: activeTab === 'dashboard' ? '#334155' : 'transparent' }}
          >
            <span style={{ fontSize: '18px' }}>📊</span> لوحة التحكم
          </button>
          
          <button 
            onClick={() => setActiveTab('bugs')}
            style={{ ...navButtonStyle, backgroundColor: activeTab === 'bugs' ? '#334155' : 'transparent' }}
          >
            <span style={{ fontSize: '18px' }}>🪲</span> متتبع الأخطاء (QA)
          </button>
          
          <button 
            onClick={() => setActiveTab('docs')}
            style={{ ...navButtonStyle, backgroundColor: activeTab === 'docs' ? '#334155' : 'transparent' }}
          >
            <span style={{ fontSize: '18px' }}>📄</span> التوثيق والمحتوى
          </button>
        </nav>
      </aside>

      {/* المحتوى الرئيسي */}
      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        {renderPage()}
      </main>
    </div>
  );
}

const navButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
  padding: '12px 16px',
  color: '#cbd5e1',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  textAlign: 'right',
  fontSize: '16px',
  transition: 'background 0.2s',
  background: 'none'
};

export default App;