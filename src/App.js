import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import Quiz from './component/Quiz/Quiz';
import Stats from './component/Stats/Stats';
import Error from './Error/Error';
import Main from './layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>,
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/stats',
          loader: () => {

          },
          element: <Stats></Stats>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]
    },
    {
      path: '/*',
      element: <Error></Error>
    }
  ])

  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
