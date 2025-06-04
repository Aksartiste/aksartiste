'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState('photography');
    const [currentPortrait, setCurrentPortrait] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const portraits = [
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/c_fit/v1748793219/aks-vogue2_emlhkt.jpg',
            alt: 'Portrait photograph 1',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/c_fit/v1748793219/aks-vogue2_emlhkt.jpg',
            alt: 'Portrait photograph 1',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792833/aks-vogue_vvp1yr.png',
            alt: 'Portrait photograph 2',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792832/Fashion_France_59__ctvxex.png',
            alt: 'Portrait photograph 3',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792828/EB8B5455-5183-40D5-9E9B-E9C91EAACA0D_t6wvgg.jpg',
            alt: 'Portrait photograph 4',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748796319/88BC5FB3-2470-4644-BFE8-89071E4A65E3_kovmho.jpg',
            alt: 'Portrait photograph 5',
        },
        // Added 4 new photos
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749035067/DSC01716_u4oxcs.jpg',
            alt: 'Portrait photograph 6',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749035550/Meher_fgpetp.jpg',
            alt: 'Portrait photograph 7',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792834/73_zhllvh.jpg',
            alt: 'Portrait photograph 8',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749035550/Abmol_iwxrya.jpg',
            alt: 'Portrait photograph 9',
        },
    ];

    // Auto-rotate portraits
    useEffect(() => {
        // Only set up the interval if not paused
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentPortrait((prev) => (prev + 1) % portraits.length);
            }, 2500); // Change portrait every 3 seconds

            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [portraits.length, isPaused]);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const sections = [
        { id: 'photography', label: 'Photography' },
        { id: 'writing', label: 'Writing' },
        { id: 'design', label: 'Design' },
        { id: 'strategy', label: 'Strategy' },
    ];

    const featuredWorks = [
        {
            id: 1,
            title: 'Intimate Portraits',
            category: 'Photography',
            description: 'A series exploring vulnerability and authenticity',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        },
        {
            id: 2,
            title: 'Editorial Narratives',
            category: 'Writing',
            description: 'Stories that connect and resonate with readers',
            image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        },
        {
            id: 3,
            title: 'Brand Evolution',
            category: 'Strategy',
            description: 'Guiding authentic brand transformations',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        },
    ];

    return (
        <div
            className={`min-h-screen bg-white text-gray-900 font-serif transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            data-oid="frk24cu"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200"
                data-oid="mxcm05m"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" data-oid="vv.daiw">
                    <div
                        className="flex justify-between items-center h-16 sm:h-20"
                        data-oid="rx.27n6"
                    >
                        <a
                            href="#"
                            className="text-xl sm:text-2xl tracking-tighter font-light"
                            data-oid="uhs4xd0"
                        >
                            aksartiste
                        </a>
                        <div
                            className="hidden md:flex space-x-8 text-sm uppercase tracking-widest"
                            data-oid="e.e107m"
                        >
                            <a
                                href="#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="az5e3b9"
                            >
                                Work
                            </a>
                            <a
                                href="#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="35kfcxr"
                            >
                                About
                            </a>
                            <a
                                href="#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="vuud8mc"
                            >
                                Journal
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="s08wd88"
                            >
                                Contact
                            </a>
                        </div>
                        <button
                            className="md:hidden p-2 -mr-2" /* Added padding for better touch target */
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            data-oid="1m_334m"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                data-oid="bbdiprq"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    data-oid="9qg03tz"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence data-oid="v48ulaq">
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden absolute top-16 sm:top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            data-oid=":rx9.26"
                        >
                            <div
                                className="flex flex-col py-4 px-6 sm:px-8 lg:px-12 space-y-6 text-sm uppercase tracking-widest"
                                /* Increased spacing between items */ data-oid="apkuvu1"
                            >
                                <a
                                    href="#work"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="n6c4ftg"
                                >
                                    Work
                                </a>
                                <a
                                    href="#about"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid=".er48n3"
                                >
                                    About
                                </a>
                                <a
                                    href="#journal"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="19gqkj-"
                                >
                                    Journal
                                </a>
                                <a
                                    href="#contact"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="bry-5cw"
                                >
                                    Contact
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section
                className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                /* Adjusted top padding for small screens */ data-oid="99k79ht"
            >
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
                    data-oid="zg:2_ch"
                >
                    <div className="order-2 lg:order-1" data-oid="6aq.0d5">
                        <h1
                            className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight mb-6 sm:mb-8"
                            data-oid="xm_-g7d"
                        >
                            A living archive of{' '}
                            <span className="italic" data-oid="euutyar">
                                craft
                            </span>{' '}
                            and{' '}
                            <span className="italic" data-oid="kng0:o_">
                                emotion
                            </span>
                        </h1>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-xl leading-relaxed"
                            data-oid="n2-ypru"
                        >
                            Where photography, writing, design, and strategy converge to tell
                            stories that resonate and connect on a deeper level.
                        </p>
                        <button
                            className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            /* Made full width on mobile */ data-oid="l99q2rk"
                        >
                            Explore Work
                        </button>
                    </div>
                    <div className="order-1 lg:order-2" data-oid="v3z48ns">
                        <div
                            className="aspect-[4/5] bg-gray-100 overflow-hidden relative cursor-pointer"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            data-oid="7-jvzab"
                        >
                            <img
                                key={currentPortrait}
                                src={portraits[currentPortrait].src}
                                alt={portraits[currentPortrait].alt}
                                className="w-full h-full object-contain hover:cursor-zoom-in transition-opacity duration-500"
                                loading="eager"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                /* Added sizes attribute for responsive images */ data-oid="hdpv1p:"
                            />

                            {/* Navigation controls removed */}

                            {/* Indicators removed */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section
                id="work"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="f6z2s4-"
            >
                <div className="mb-12 sm:mb-16" data-oid=":j0itap">
                    <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8" data-oid="m6jze7h">
                        Featured Work
                    </h2>
                    <div className="flex flex-wrap border-b border-gray-200" data-oid="yzkp0f-">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`py-3 px-2 sm:px-5 text-xs sm:text-sm uppercase tracking-wider mr-1 sm:mr-4 mb-1 ${activeSection === section.id ? 'border-b border-black' : 'text-gray-500 hover:text-black transition-colors'}`}
                                /* Adjusted spacing for very small screens */ data-oid="a4_14vs"
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    data-oid="2.dyz-w"
                >
                    {featuredWorks.map((work) => (
                        <div key={work.id} className="group cursor-pointer" data-oid="6b3wna7">
                            <div
                                className="aspect-[3/4] bg-gray-100 overflow-hidden mb-4"
                                data-oid="wg79:r:"
                            >
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    data-oid="hqz:-l_"
                                />
                            </div>
                            <div className="py-2" data-oid="klth0l2">
                                <p
                                    className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                                    data-oid="33i-isl"
                                >
                                    {work.category}
                                </p>
                                <h3 className="text-xl font-light mb-2" data-oid="ygsnsgm">
                                    portraits
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="lufq5xw">
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center" data-oid="kzz3umy">
                    <button
                        className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        /* Made full width on mobile */ data-oid="o5yv3m:"
                    >
                        View All Work
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="js3kxrr"
            >
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center"
                    data-oid="a5fcvi:"
                >
                    <div className="aspect-[4/5] bg-gray-100 overflow-hidden" data-oid="hid8f52">
                        <img
                            src="https://images.unsplash.com/photo-1551292831-023188e78222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                            alt="Creator portrait"
                            className="w-full h-full object-cover"
                            data-oid="ps7o6td"
                        />
                    </div>
                    <div data-oid=".pc9urk">
                        <h2
                            className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8"
                            data-oid="gkq5jd5"
                        >
                            About
                        </h2>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                            data-oid=":a99zyq"
                        >
                            This space is an extension of my mind and heart — a living archive of my
                            photographs, words, designs, and the stories I help shape for others.
                        </p>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                            data-oid="h6gocz0"
                        >
                            It's not just a portfolio; it's a quiet, thoughtful corner of the
                            internet where emotion meets visual craft. A place where I can share the
                            kind of work that moves me — from intimate portraits and editorial
                            shoots to the behind-the-scenes chaos of content creation.
                        </p>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed"
                            data-oid="d:8i3zr"
                        >
                            My passion is helping people feel seen and confident — whether through
                            the lens of my camera, the honesty of my writing, or the brands I
                            creatively guide.
                        </p>
                        <button
                            className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            /* Made full width on mobile */ data-oid="lxkmoss"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </section>

            {/* Journal Section */}
            <section
                id="journal"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="_ae2i82"
            >
                <h2 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12" data-oid="jgh:qd-">
                    Journal
                </h2>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                    data-oid="e6iaauj"
                >
                    {[1, 3, 2, 4].map((item) => (
                        <Link
                            href={`/journal/${item}`}
                            key={item}
                            className="group cursor-pointer"
                            data-oid="k:xsiqg"
                        >
                            <div
                                className="aspect-video bg-gray-100 overflow-hidden mb-4"
                                data-oid="bbhjqw4"
                            >
                                <img
                                    src={
                                        item === 1
                                            ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749034991/output_clzh4q.png'
                                            : item === 2
                                              ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749037809/artcover_ddojin.jpg'
                                              : item === 3
                                                ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749038207/output-3_gpz3oa.png'
                                                : item === 4
                                                  ? 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                                                  : `https://images.unsplash.com/photo-167${1000000 + item}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`
                                    }
                                    alt={
                                        item === 1
                                            ? 'Granny Always Knew - Journal entry'
                                            : item === 2
                                              ? 'Art Cover - Journal entry'
                                              : item === 4
                                                ? 'Behind the Lens journal entry'
                                                : 'Journal entry'
                                    }
                                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                                    data-oid="8_e1y9y"
                                />
                            </div>
                            <div className="py-2" data-oid="x3so7:j">
                                <p
                                    className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                                    data-oid="mz4lb7."
                                >
                                    {item === 4
                                        ? 'June 22, 2023'
                                        : item === 2
                                          ? 'June 10, 2023'
                                          : 'May 15, 2023'}
                                </p>
                                <h3 className="text-xl font-light mb-2" data-oid="wbp721k">
                                    {item === 1
                                        ? 'Granny Always Knew'
                                        : item === 2
                                          ? 'We packed light, but…'
                                          : item === 4
                                            ? 'Behind the Lens: Creative Process'
                                            : 'The Art of Authentic Storytelling'}
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="vswlye7">
                                    {item === 1
                                        ? 'Reflections on childhood wisdom and the perspective that comes with looking back.'
                                        : item === 2
                                          ? 'A journey through mountains, friendship, and understanding the complexities of trauma and healing.'
                                          : item === 4
                                            ? 'A glimpse into my creative workflow and the inspiration behind recent portrait series.'
                                            : 'Exploring how vulnerability creates connection in both visual and written narratives.'}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-16 text-center" data-oid="we2icle">
                    <Link href="/journal/1" data-oid="ngum1g_">
                        <button
                            className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            /* Made full width on mobile */ data-oid="snu96kh"
                        >
                            View All Posts
                        </button>
                    </Link>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="fx8zgdx"
            >
                <div className="max-w-2xl mx-auto text-center" data-oid="wwf_b1.">
                    <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6" data-oid="bxilnuv">
                        Let's Connect
                    </h2>
                    <p
                        className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10"
                        data-oid="6ye:5vi"
                    >
                        Interested in working together or just want to say hello? I'd love to hear
                        from you.
                    </p>
                    <button
                        className="w-full sm:w-auto px-12 py-4 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        /* Made full width on mobile */ data-oid="ab2xwu9"
                    >
                        Get in Touch
                    </button>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-gray-50" data-oid="m:m.980">
                <div className="max-w-xl mx-auto text-center" data-oid="q.9lbex">
                    <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6" data-oid="ifrbalw">
                        Join the Journey
                    </h3>
                    <p
                        className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8"
                        data-oid="_4dg:th"
                    >
                        Subscribe to receive updates on new work, journal entries, and occasional
                        musings.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4" data-oid="c98vymg">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                            data-oid="rb:b7-e"
                        />

                        <button
                            className="w-full sm:w-auto px-6 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/80 transition-colors"
                            data-oid="ngzywg4"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="py-10 sm:py-12 px-4 sm:px-8 lg:px-12 border-t border-gray-200"
                data-oid="u62x8_o"
            >
                <div className="max-w-7xl mx-auto" data-oid="ng1aa:6">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="q7d9iuc"
                    >
                        <div className="mb-6 md:mb-0" data-oid="g78-r21">
                            <a
                                href="#"
                                className="text-xl tracking-tighter font-light"
                                data-oid="c843e8t"
                            >
                                aksartiste
                            </a>
                        </div>
                        <div
                            className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm uppercase tracking-widest mb-8 md:mb-0"
                            data-oid="5o6k:62"
                        >
                            <a
                                href="#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="o5azecc"
                            >
                                Work
                            </a>
                            <a
                                href="#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="7ovj8ho"
                            >
                                About
                            </a>
                            <a
                                href="#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="gj8:fif"
                            >
                                Journal
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="xaqt85t"
                            >
                                Contact
                            </a>
                        </div>
                        <div className="flex space-x-8 sm:space-x-6" data-oid="8hetz5f">
                            {/* Increased spacing for touch targets */}
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="hc4k.t3"
                            >
                                <span className="sr-only" data-oid="xe1zr6z">
                                    Instagram
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5" /* Larger icons on mobile */
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="l3frugk"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                        data-oid="x5sumlr"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="0ys4mot"
                            >
                                <span className="sr-only" data-oid="1cyohrp">
                                    Twitter
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5" /* Larger icons on mobile */
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="q8:jnwv"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid="lw7wuot"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="ngtsgxy"
                            >
                                <span className="sr-only" data-oid="bfnyinc">
                                    Pinterest
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5" /* Larger icons on mobile */
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="qimulw_"
                                >
                                    <path
                                        d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        data-oid="4rq.jm8"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
                        data-oid="9bxdmqs"
                    >
                        <p data-oid="za8kdug">
                            © {new Date().getFullYear()} aksartiste. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
