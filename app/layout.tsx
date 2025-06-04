import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'aksartiste | Photography & Creative Direction',
    description:
        'A living archive of craft and emotion - Photography, Writing, Design, and Strategy',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="xk32::c">
            <body className="min-h-screen w-full" data-oid="e2xp5xg">
                {children}
            </body>
        </html>
    );
}
