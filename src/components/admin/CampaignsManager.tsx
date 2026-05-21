import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';
import { UploadCloud, Send, CheckCircle, AlertTriangle, FileText, ChevronRight } from 'lucide-react';

interface CSVRow {
    email: string;
    first_name: string;
    last_name: string;
    excursion_name: string;
    tour_date: string;
}

interface ParsedContact extends CSVRow {
    isValid: boolean;
    errorReason?: string;
}

export function CampaignsManager() {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState<ParsedContact[]>([]);
    const [fileName, setFileName] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'parsing' | 'ready' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const isAdmin = sessionStorage.getItem('kcg_admin');
        if (isAdmin !== 'true') {
            navigate('/admin');
        }
    }, [navigate]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        setStatus('parsing');
        setErrorMessage(null);

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                const parsedData = results.data as Record<string, string>[];
                
                // Validate schema
                const processed: ParsedContact[] = parsedData.map((row, index) => {
                    const email = (row.email || '').trim();
                    const first_name = (row.first_name || '').trim();
                    const last_name = (row.last_name || '').trim();
                    const excursion_name = (row.excursion_name || '').trim();
                    const tour_date = (row.tour_date || '').trim();

                    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                    const isMissingRequired = !email || !first_name || !excursion_name || !tour_date;
                    
                    let errorReason = undefined;
                    if (isMissingRequired) errorReason = 'Missing required field';
                    else if (!isValidEmail) errorReason = 'Invalid email';

                    return {
                        email,
                        first_name,
                        last_name,
                        excursion_name,
                        tour_date,
                        isValid: !isMissingRequired && isValidEmail,
                        errorReason
                    };
                });

                if (processed.length === 0) {
                    setStatus('error');
                    setErrorMessage('No valid rows found in CSV.');
                    return;
                }

                setContacts(processed);
                setStatus('ready');
            },
            error: (err) => {
                setStatus('error');
                setErrorMessage('Failed to parse CSV file: ' + err.message);
            }
        });
    };

    const handleSend = async () => {
        const validContacts = contacts.filter(c => c.isValid);
        if (validContacts.length === 0) return;

        setStatus('sending');
        try {
            const payload = validContacts.map(c => ({
                email: c.email,
                first_name: c.first_name,
                last_name: c.last_name,
                excursion_name: c.excursion_name,
                tour_date: c.tour_date
            }));

            const res = await fetch('/api/admin/send-campaign', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contacts: payload })
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Server error while sending emails');
            }
        } catch (err: any) {
            setStatus('error');
            setErrorMessage('Network error. Failed to reach server.');
        }
    };

    const validCount = contacts.filter(c => c.isValid).length;
    const invalidCount = contacts.length - validCount;
    
    // Grouping by excursion
    const excursionPreview = contacts.length > 0 && contacts[0].isValid 
        ? `${contacts[0].excursion_name} — ${contacts[0].tour_date}`
        : 'Unknown Excursion';

    const handleLogout = () => {
        sessionStorage.removeItem('kcg_admin');
        navigate('/admin');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src="/images/logo-new.png" alt="KCG Tours" className="h-10" />
                        <span className="text-gray-400">|</span>
                        <h1 className="text-lg font-bold text-dark">Campaign Admin</h1>
                    </div>
                    <button onClick={handleLogout} className="text-sm font-medium text-gray-500 hover:text-dark">
                        Logout
                    </button>
                </div>
            </header>

            <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Left Col: Upload & Preview */}
                <div className="md:col-span-2 space-y-6">
                    
                    {/* SECTION A: UPLOAD */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-dark flex items-center gap-2 mb-4">
                            <UploadCloud className="w-5 h-5 text-primary" />
                            Upload Contact List
                        </h2>
                        
                        <div 
                            className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input 
                                type="file" 
                                accept=".csv" 
                                className="hidden" 
                                ref={fileInputRef} 
                                onChange={handleFileUpload} 
                            />
                            <FileText className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                            <p className="text-dark font-medium mb-1">
                                {fileName ? fileName : 'Click to upload or drag & drop'}
                            </p>
                            <p className="text-sm text-gray-500">CSV files only</p>
                        </div>

                        {status === 'error' && (
                            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg flex gap-2 text-sm">
                                <AlertTriangle className="w-5 h-5 shrink-0" />
                                {errorMessage}
                            </div>
                        )}
                    </div>

                    {/* SECTION B: PREVIEW & SEND */}
                    {contacts.length > 0 && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-dark">{excursionPreview}</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        <span className="font-semibold text-[var(--color-sage)]">{validCount} contacts ready</span>
                                        {invalidCount > 0 && <span className="text-red-500 ml-2">· {invalidCount} invalid</span>}
                                    </p>
                                </div>
                                {status !== 'success' && (
                                    <button 
                                        onClick={handleSend}
                                        disabled={status === 'sending' || validCount === 0}
                                        className="bg-[var(--color-sage)] hover:bg-[#d7393e] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm transition-colors flex items-center gap-2 disabled:opacity-50"
                                    >
                                        {status === 'sending' ? 'Sending...' : 'Send Thank-You Emails'}
                                        {!status && <Send className="w-4 h-4" />}
                                    </button>
                                )}
                            </div>

                            {status === 'success' ? (
                                <div className="bg-green-50 border border-green-100 rounded-xl p-8 text-center my-6">
                                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                                    <h4 className="text-lg font-bold text-dark">Campaign Sent Successfully!</h4>
                                    <p className="text-gray-600">Emails have been dispatched to {validCount} contacts.</p>
                                </div>
                            ) : (
                                <div className="border border-gray-200 rounded-lg overflow-hidden overflow-x-auto">
                                    <table className="w-full text-left text-sm text-gray-600">
                                        <thead className="bg-gray-50 border-b border-gray-200 text-gray-700">
                                            <tr>
                                                <th className="px-4 py-3 font-medium">Email</th>
                                                <th className="px-4 py-3 font-medium">First Name</th>
                                                <th className="px-4 py-3 font-medium">Last Name</th>
                                                <th className="px-4 py-3 font-medium">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contacts.slice(0, 50).map((c, i) => (
                                                <tr key={i} className="border-b border-gray-100 last:border-0">
                                                    <td className="px-4 py-3 font-medium text-dark">{c.email}</td>
                                                    <td className="px-4 py-3">{c.first_name}</td>
                                                    <td className="px-4 py-3">{c.last_name}</td>
                                                    <td className="px-4 py-3">
                                                        {c.isValid ? (
                                                            <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-medium">
                                                                Ready
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center gap-1 text-red-600 bg-red-50 px-2 py-0.5 rounded text-xs font-medium" title={c.errorReason}>
                                                                <AlertTriangle className="w-3 h-3" /> Invalid
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {contacts.length > 50 && (
                                        <div className="bg-gray-50 text-center py-2 text-xs text-gray-500 border-t border-gray-200">
                                            Showing first 50 of {contacts.length} rows.
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Right Col: History (Placeholder for Phase 2, but visually present) */}
                <div className="md:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-6">
                        <h2 className="text-lg font-bold text-dark flex items-center gap-2 mb-4">
                            <CheckCircle className="w-5 h-5 text-gray-400" />
                            Previous Campaigns
                        </h2>
                        
                        <div className="text-sm text-gray-500 italic mb-4">
                            Recent campaign history will appear here. History is logged in your Supabase database.
                        </div>

                        <div className="space-y-3">
                            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex justify-between items-center group cursor-pointer hover:bg-gray-100">
                                <div>
                                    <p className="font-semibold text-dark text-sm">Example Excursion</p>
                                    <p className="text-xs text-gray-500">12/05/2026</p>
                                </div>
                                <div className="text-right flex items-center gap-2">
                                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">24 sent</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
