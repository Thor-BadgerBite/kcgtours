import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';
import './index.css';
import App from './App.tsx';

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN || "https://e2ea31f43d2e7eb80c8fd16f6b7c0515@o4511433067003904.ingest.de.sentry.io/4511433509437525",
    integrations: [
        Sentry.browserTracingIntegration(),
    ],
    tracesSampleRate: 1.0, 
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
