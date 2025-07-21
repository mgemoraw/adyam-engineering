import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { UserIcon } from '@heroicons/react/24/solid';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ 
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px'
    }}>
      {/* <h1>Current Theme: {theme}</h1> */}
      <button onClick={toggleTheme}>
        {theme === 'light' ? <MoonIcon width={40} color='dark'/> : <SunIcon width={40} color='dark'/>}
    </button>
    </div>
  );
};

export default ThemedComponent;