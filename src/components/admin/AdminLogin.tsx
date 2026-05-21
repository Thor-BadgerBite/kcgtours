import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, AlertCircle } from 'lucide-react';

export function AdminLogin() {
    const [pin, setPin] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/admin/verify-pin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pin })
            });

            const data = await res.json();

            if (res.ok && data.ok) {
                sessionStorage.setItem('kcg_admin', 'true');
                navigate('/admin/campaigns');
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-sage/10 p-3 rounded-full mb-4">
                        <Lock className="w-8 h-8 text-[var(--color-sage)]" />
                    </div>
                    <h1 className="text-2xl font-bold text-dark">Admin Access</h1>
                    <p className="text-gray-500 mt-2 text-sm text-center">
                        Enter your PIN to access the campaign panel.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="password"
                            maxLength={8}
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            placeholder="••••"
                            className="w-full px-4 py-3 text-center text-2xl tracking-widest rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-sage)] focus:border-transparent transition-all outline-none"
                            autoFocus
                        />
                    </div>

                    {status === 'error' && (
                        <div className="flex items-center justify-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                            <AlertCircle className="w-4 h-4" />
                            Invalid PIN. Please try again.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading' || pin.length < 4}
                        className="w-full bg-[var(--color-sage)] hover:bg-[#d7393e] text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md disabled:opacity-50 flex justify-center"
                    >
                        {status === 'loading' ? (
                            <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                            'Access Panel'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
