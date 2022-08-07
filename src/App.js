import './App.css';
import React, {lazy, Suspense} from 'react';
import { useState } from 'react';
import Start from './routes/Start/Start';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Headers from './components/layout/Header/Header';
// Pages

function App() {
  const [isPageStart, setIsPageStart] = useState(true)
  const Home = lazy(() =>  import("./routes/HomeContent/HomeContent") )
  const Register = lazy(() =>  import("./routes/RegisterContent/RegisterContent") )
  const SocialContent = lazy(() =>  import("./routes/SocialContent/SocialContent") )
  return (
    <div className="App">
      <Headers logged={false}/>
      
      <main>
 
          <Routes>
            <Route path="/" element={<Suspense fallback={<Start/>}><Home/></Suspense>} />
            <Route path="/register" element={<Suspense fallback={<Start/>}><Register/></Suspense>} />
            <Route path="/socialcontent" element={<Suspense fallback={<Start/>}><SocialContent/></Suspense>} />
          </Routes>

      </main>

    </div>
  );
}

export default App;




// {isPageStart   &&
//   
// }