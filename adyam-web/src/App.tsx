import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from './hooks/useAuth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/manager/Login'
import i18n from './language/i18n';
import Navbar from './pages/common/navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <BrowserRouter
        basename="/"
      >
        <Navbar/>
       
        <Routes>
          
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/" element={<div>Home Page</div>} />

        </Routes>
          
      </BrowserRouter>
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