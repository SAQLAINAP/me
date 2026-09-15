import { useEffect } from 'react';
import { Router, Route, Switch, useLocation } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Arena from './pages/Arena';
import NotFound from './pages/not-found';

/**
 * Base URL for the router — Vite injects this at build-time via BASE_URL
 * (`/me/` on GitHub Pages, `/` for local dev). We strip a trailing slash so
 * wouter matches routes like `/arena` without needing a trailing slash.
 */
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

/** Reset scroll on route change so long deep-dive pages start at the top. */
function ScrollToTop() {
  const [loc] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [loc]);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router base={BASE}>
          <div className="min-h-screen bg-ivory text-ink selection:bg-ink selection:text-lime">
            <ScrollToTop />
            <Header />
            <main>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/arena" component={Arena} />
                <Route path="/arena/:id" component={Arena} />
                {/* Aliases people might guess */}
                <Route path="/arcade">{() => <Arena />}</Route>
                <Route path="/arcade/:id">{() => <Arena />}</Route>
                <Route path="/projects">{() => <Arena />}</Route>
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>
          <Toaster />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
