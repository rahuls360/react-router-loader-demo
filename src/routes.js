import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const routes = [
  {
    path: '/',
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: 'page1',
        element: <Page1 />,
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
        // loader: teamLoader,
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
