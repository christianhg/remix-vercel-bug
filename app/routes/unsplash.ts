import { LoaderFunction } from 'remix';

export const loader: LoaderFunction = () => {
  return fetch(
    'https://images.unsplash.com/photo-1640703932573-901de6acf4b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80'
  );
};
