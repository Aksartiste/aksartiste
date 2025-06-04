import type { Metadata, Viewport } from 'next';
import './globals.css';
import Script from 'next/script';
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
        <html lang="en" data-oid="d2pg5u4">
            <body className="min-h-screen w-full" data-oid="0cqkull">
                {children}

                <Script src="/builtwith.js" strategy="afterInteractive" data-oid="9ejn7wt" />
            </body>
        </html>
    );
}
