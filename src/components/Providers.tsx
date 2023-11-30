import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Suspense } from 'react';

interface AllProvidersProps {
  children?: React.ReactNode;
}

const Router = import.meta.env.MODE === 'test' ? MemoryRouter : BrowserRouter;

const Providers = (props: AllProvidersProps) => (
  <Router>
    <Suspense>{props.children}</Suspense>
  </Router>
);

export default Providers;
