import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

export const rootLoader = async () => {
  const results = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!results.ok) throw new Error('Something went wrong!');

  const data = await results.json();

  return { data };
};

export const page1Loader = async () => {
  const results = await fetch('https://jsonplaceholder.typicode.com/todos');

  if (!results.ok) throw new Error('Something went wrong!');

  const data = await results.json();

  return { data };
};

const routes = [
  {
    path: '/',
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: 'page1',
        element: <Page1 />,
        loader: page1Loader,
        children: [
          {
            path: '',
            element: <Child1 />,
          },
          {
            path: 'child2',
            element: <Child2 />,
          },
        ],
      },
      {
        path: 'page2',
        element: <Page2 />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
