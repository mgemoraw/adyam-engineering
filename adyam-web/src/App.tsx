import React from 'react';
import './App.css'
import { AuthProvider } from './hooks/useAuth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/manager/Login'
import ThemeProvider from './hooks/useTheme';
import Layout from './pages/Layout';
import i18n from './language/i18n';
import HomePage from './pages/common/HomePage';
import { FileUpload } from './components/FileUploads';


function App() {

  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter
        basename="/"
        >
       
        <Routes >
          
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<div>Dashboard Page</div>} />
            <Route path="/about" element={<div>Dashboard Page</div>} />
            <Route path="/services" element={<div>Dashboard Page</div>} />
            <Route path="/projects" element={<div>Dashboard Page</div>} />
            <Route path="/blog" element={<div>Dashboard Page</div>} />
            <Route path="/contact" element={<div>Dashboard Page</div>} />
            <Route path="/upload" element={<FileUpload/>} />
          </Route>
         

        </Routes>
          
      </BrowserRouter>
      </ThemeProvider>
      
    </AuthProvider>
  );
}

export default App


//  <div className="App">
{/*
   <a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.tsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
</div>
 */}