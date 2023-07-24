import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import App from '../App.jsx';
import Home from '../components/pages/Home.jsx';
import Login from '../components/pages/Login.jsx';
import Cadastro from '../components/pages/Cadastro.jsx';
import Loading from '../components/pages/Loading.jsx';
import ItemComponent from '../components/utils/ItemComponent.jsx';
import TodosProdutos from '../components/pages/TodosProdutos.jsx';
import Dashboard from '../components/pages/Dashboard.jsx';
import DashboardItem from '../components/pages/DashboardItem.jsx';

import { PrivateRoute } from './privateRoute.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>

        <Route path='/' element={<App />} >
          <Route path='/' element={<Home />} />
          <Route path='/item/:id' element={<ItemComponent />} />
          <Route path='/produtos' element={<TodosProdutos />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/dashboard/item/:id' element={<PrivateRoute><DashboardItem /></PrivateRoute>} />

        </Route>
      </Routes>
    </Suspense>

  </BrowserRouter>
)
