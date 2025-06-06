import type { Metadata, Viewport } from 'next';
import './globals.css';
import Script from 'next/script';
export const metadata: Metadata = {
    title: 'aksartiste | Photography & Creative Direction',
    description:
        'A living archive of craft and emotion - Photography, Writing, Design, and Strategy',
    keywords: [
        'photography',
        'creative direction',
        'portrait photography',
        'fashion photography',
        'fine arts',
    ],
    authors: [
        {
            name: 'Akshay',
        },
    ],
    creator: 'Akshay',
    publisher: 'aksartiste',
    openGraph: {
        title: 'aksartiste | Photography & Creative Direction',
        description:
            'A living archive of craft and emotion - Photography, Writing, Design, and Strategy',
        url: 'https://aksartiste.com',
        siteName: 'aksartiste',
        images: [
            {
                url: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749043892/Screenshot_2025-06-04_at_7.00.25_PM_rw8lnr.png',
                width: 1200,
                height: 630,
                alt: 'aksartiste',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'aksartiste | Photography & Creative Direction',
        description:
            'A living archive of craft and emotion - Photography, Writing, Design, and Strategy',
        images: [
            'https://res.cloudinary.com/dexibw60d/image/upload/v1749043892/Screenshot_2025-06-04_at_7.00.25_PM_rw8lnr.png',
        ],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/favicon.ico',
    },
};
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="sibtbh-">
            <body className="min-h-screen w-full" data-oid="sxrds7l">
                {children}
                <Script src="/builtwith.js" strategy="afterInteractive" data-oid="0jkog9d" />
            </body>
        </html>
    );
}
