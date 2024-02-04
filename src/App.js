import React from 'react';
import AppRouter from './Routes';
import ThemeProvider from './theme';
import ReactErrorBoundary from './components/common/ReactErrorBoundary';

function App() {
  
  return (
    <div>
      <ThemeProvider>
        <ReactErrorBoundary>
          <AppRouter />
        </ReactErrorBoundary>
     </ThemeProvider>
    </div>
  );
}

export default App;
