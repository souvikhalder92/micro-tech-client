import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto'>
      <RouterProvider router={router}>
        

      </RouterProvider>
    </div>
  );
}

export default App;
