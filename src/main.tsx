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
    ignoreErrors: [
        'ia',
        'Error: ia',
        'Document is already detached',
        'iFrame requested init',
        'ResizeObserver loop limit exceeded',
        'Maximum call stack size exceeded',
        'Cannot read properties of undefined (reading \'destination\')',
    ],
    beforeSend(event, hint) {
        const exception = event.exception?.values?.[0];
        if (exception) {
            const val = String(exception.value || '');
            if (val === 'ia' || val.includes('Document is already detached') || val.includes('destination') || val.includes('call stack size exceeded')) {
                return null;
            }
        }
        return event;
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
