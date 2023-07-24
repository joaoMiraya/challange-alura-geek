import './App.css';
import Header from './components/pages/paterns/Header';
import Footer from './components/pages/paterns/Footer';

import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const ContatoForm = lazy(() => import('./components/pages/paterns/ContatoForm'))
import LogoutButton from './components/utils/LogoutButton';
import VoltarBtn from './components/utils/VoltarBtn';

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <LogoutButton />
        <VoltarBtn />
        <Outlet>
        </Outlet>


        <ContatoForm />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
