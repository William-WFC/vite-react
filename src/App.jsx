import './App.css'
import { RouterProvider } from 'react-router-dom';
import createBrowserRouter from './router/index';
import { Suspense } from 'react';

function App() {

  return (
    <Suspense>
        
        <RouterProvider router={createBrowserRouter}></RouterProvider>
    </Suspense>
  )
}

export default App
