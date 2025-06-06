'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
        // Added new photo
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749059073/Interior_Pages_V56_1562_amqwwr.jpg',
            alt: 'Portrait photograph 10',
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
        { id: 'photography', label: 'Photography', status: 'enabled' },
        { id: 'design', label: 'Design', status: 'disabled' },
    ];

    const featuredWorks = [
        // Photography works - Fashion
        {
            id: 1,
            title: 'Fashion',
            category: 'Photography',
            subcategory: 'Fashion',
            description: 'Capturing the essence of style and expression',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792832/Fashion_France_59__ctvxex.png',
        },
        // Photography works - Portraits
        {
            id: 2,
            title: 'Portraits',
            category: 'Photography',
            subcategory: 'Portraits',
            description: 'Intimate portraits exploring vulnerability and authenticity',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065358/portraits/port-12.jpg',
        },
        // Photography works - Fine Arts
        {
            id: 3,
            title: 'Fine Arts',
            category: 'Photography',
            subcategory: 'Fine Arts',
            description: 'Artistic expressions through the photographic medium',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072544/fineart/Fine-4.jpg',
        },
        // Photography works - Editorial
        {
            id: 4,
            title: 'Editorial',
            category: 'Photography',
            subcategory: 'Editorial',
            description: 'Visual storytelling for magazines and publications',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748796319/88BC5FB3-2470-4644-BFE8-89071E4A65E3_kovmho.jpg',
        },
        // Photography works - Travel
        {
            id: 5,
            title: 'Travel',
            category: 'Photography',
            subcategory: 'Travel',
            description: 'Documenting journeys and capturing diverse cultures',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749073187/Travel/Travel-9.jpg',
        },
        // Photography works - Events
        {
            id: 6,
            title: 'Events',
            category: 'Photography',
            subcategory: 'Events',
            description: 'Preserving special moments and celebrations',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749073433/Event-Thumbnail.png',
        },
        // Design works - Only keeping one item
        {
            id: 7,
            title: 'Visual Identity',
            category: 'Design',
            description: 'Creating cohesive and impactful brand experiences',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749053305/7_ykmvwr.jpg',
        },
    ];

    return (
        <div
            className={`min-h-screen bg-white text-gray-900 font-serif transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            data-oid="dr5drkv"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200"
                data-oid="vnqq4b-"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" data-oid="7jhu-jk">
                    <div
                        className="flex justify-between items-center h-16 sm:h-20"
                        data-oid="c_rmcf:"
                    >
                        <a
                            href="#"
                            className="text-xl sm:text-2xl tracking-tighter font-light"
                            data-oid="wureke."
                        >
                            aksartiste
                        </a>
                        <div
                            className="hidden md:flex space-x-8 text-sm uppercase tracking-widest"
                            data-oid="g9huu2z"
                        >
                            <a
                                href="#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="5dhlskt"
                            >
                                Work
                            </a>
                            <a
                                href="#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="kxu51rh"
                            >
                                About
                            </a>
                            <a
                                href="#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="7cu-qzn"
                            >
                                Journal
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="g.b76ie"
                            >
                                Contact
                            </a>
                        </div>
                        <button
                            className="md:hidden p-2 -mr-2" /* Added padding for better touch target */
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            data-oid="8n_n.ow"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                data-oid="f3o.6xg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    data-oid="g6sbrxv"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence data-oid="727:b4.">
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden absolute top-16 sm:top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            data-oid="u9caghm"
                        >
                            <div
                                className="flex flex-col py-4 px-6 sm:px-8 lg:px-12 space-y-6 text-sm uppercase tracking-widest"
                                /* Increased spacing between items */ data-oid="c:2yu4c"
                            >
                                <a
                                    href="#work"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="o8u:9g8"
                                >
                                    Work
                                </a>
                                <a
                                    href="#about"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="o86u4_i"
                                >
                                    About
                                </a>
                                <a
                                    href="#journal"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="iej152d"
                                >
                                    Journal
                                </a>
                                <a
                                    href="#contact"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="j_yo1i2"
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
                /* Adjusted top padding for small screens */ data-oid=".kkek2q"
            >
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
                    data-oid="m.n::fl"
                >
                    <div className="order-2 lg:order-1" data-oid="x5q4epz">
                        <h1
                            className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight mb-6 sm:mb-8"
                            data-oid=":nk8y3v"
                        >
                            A living archive of{' '}
                            <span className="italic" data-oid="_uuy2lc">
                                craft
                            </span>{' '}
                            and{' '}
                            <span className="italic" data-oid="pttcnxv">
                                emotion
                            </span>
                        </h1>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-xl leading-relaxed"
                            data-oid="_5td:c3"
                        >
                            Photographs. Words. Offerings. All of it, a way to say: I was here.
                        </p>
                        <button
                            className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            onClick={() => {
                                document
                                    .getElementById('work')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            data-oid="knanbz2"
                        >
                            Explore Work
                        </button>
                    </div>
                    <div className="order-1 lg:order-2" data-oid="aiv_l32">
                        <div
                            className="aspect-[4/5] bg-gray-100 overflow-hidden relative cursor-pointer"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            data-oid="gvzun14"
                        >
                            <Image
                                key={currentPortrait}
                                src={portraits[currentPortrait].src}
                                alt={portraits[currentPortrait].alt}
                                className="w-full h-full object-contain hover:cursor-zoom-in transition-opacity duration-500"
                                loading="eager"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                                data-oid="xnnut2e"
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
                data-oid="m5t6lc4"
            >
                <div className="mb-12 sm:mb-16" data-oid="8els:i3">
                    <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8" data-oid="32uh3tb">
                        Featured Work
                    </h2>
                    <div className="flex flex-wrap border-b border-gray-200" data-oid="s9hawzv">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`py-3 px-2 sm:px-5 text-xs sm:text-sm uppercase tracking-wider mr-1 sm:mr-4 mb-1 ${activeSection === section.id ? 'border-b border-black' : 'text-gray-500 hover:text-black transition-colors'}`}
                                /* Adjusted spacing for very small screens */ data-oid="z7stg1n"
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 overflow-x-auto"
                    data-oid="f646wzl"
                >
                    {featuredWorks
                        .filter((work) => work.category.toLowerCase() === activeSection)
                        .map((work) => (
                            <Link
                                key={work.id}
                                href={
                                    work.category !== 'Design' && work.id !== 6
                                        ? `/work/${work.category.toLowerCase()}/${work.subcategory ? work.subcategory.toLowerCase().replace(/\s+/g, '-') : work.title.toLowerCase().replace(/\s+/g, '-')}`
                                        : ``
                                }
                                scroll={work.category !== 'Design' && work.id !== 6}
                                className={`group ${work.category === 'Design' ? 'relative' : 'cursor-pointer'}`}
                                data-oid="b4gh:i1"
                            >
                                <div
                                    className="aspect-[3/4] bg-gray-100 overflow-hidden mb-4 relative"
                                    data-oid="pmc80bf"
                                >
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${work.category === 'Design' ? 'blur-sm' : ''}`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                                        data-oid="z73y7l0"
                                    />

                                    {(work.category === 'Design' || work.id === 6) && (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                                            data-oid="g9xu2n5"
                                        >
                                            <div
                                                className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-md text-center"
                                                data-oid="leyt_da"
                                            >
                                                <p
                                                    className="text-lg font-medium text-black"
                                                    data-oid="wwhocux"
                                                >
                                                    Coming Soon
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="py-2" data-oid="cv97lqa">
                                    <h3 className="text-xl font-light mb-2" data-oid="6mi81.z">
                                        {work.subcategory || work.category}
                                    </h3>
                                    <p className="text-sm text-gray-600" data-oid="f-_qgsm">
                                        {work.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                </div>

                <div className="mt-16 text-center" data-oid="mtjv9tq">
                    <button
                        className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        onClick={() => window.open('https://forms.gle/DJhsJ47eAuFmzWbm7', '_blank')}
                        data-oid="csa4_ml"
                    >
                        Drop A Feeling
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid=".nv1sya"
            >
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center"
                    data-oid="-po-opa"
                >
                    <div
                        className="aspect-[4/5] bg-gray-100 overflow-hidden relative"
                        data-oid="pptdpdq"
                    >
                        <Image
                            src="https://res.cloudinary.com/dexibw60d/image/upload/v1749043892/Screenshot_2025-06-04_at_7.00.25_PM_rw8lnr.png"
                            alt="Creator portrait"
                            className="object-cover"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            data-oid="_dxg-s4"
                        />
                    </div>
                    <div data-oid="t4jhuei">
                        <h2
                            className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8"
                            data-oid="68xrhm9"
                        >
                            Hi, I&apos;m Akshay
                        </h2>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                            data-oid="juvr-lb"
                        >
                            This website is an extension of my mind and heart, a living archive of
                            my photography, writing, design work, and the stories I help shape for
                            others.
                        </p>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                            data-oid="zikzabi"
                        >
                            It is more than just a portfolio. It is a curated, thoughtful space
                            where emotion meets visual storytelling, a place to share the kind of
                            work that inspires me. From intimate portraits and editorial campaigns
                            to the behind the scenes rhythm of content creation, this is where it
                            all lives.
                        </p>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                            data-oid="h3k9eeq"
                        >
                            My passion lies in helping people feel seen, confident, and celebrated,
                            whether it is through the lens of my camera, the clarity of my writing,
                            or the creative direction I offer to brands and individuals alike.
                        </p>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed"
                            data-oid="6pvhs3d"
                        >
                            Take a look around, explore the stories, and if something speaks to you.
                            Let&apos;s connect. I&apos;d love to create something meaningful
                            together.
                        </p>
                        <Link href="/about" className="inline-block" data-oid="0tx2du7">
                            <button
                                className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                                /* Made full width on mobile */ data-oid="mam2z0i"
                            >
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Journal Section */}
            <section
                id="journal"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="tthy0kr"
            >
                <h2 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12" data-oid="nv1tip4">
                    Journal
                </h2>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                    data-oid="iqr06n7"
                >
                    {[1, 2, 3, 4].map((item) => (
                        <Link
                            href={`/journal/${item}`}
                            key={item}
                            className="group cursor-pointer"
                            data-oid="e5_r3:o"
                        >
                            <div
                                className="aspect-video bg-gray-100 overflow-hidden mb-4 relative"
                                data-oid="8-y26h5"
                            >
                                <Image
                                    src={
                                        item === 1
                                            ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749034991/output_clzh4q.png'
                                            : item === 2
                                              ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749038207/output-3_gpz3oa.png'
                                              : item === 3
                                                ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749045727/2tt_vvcvga.jpg'
                                                : item === 4
                                                  ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749046669/4th-journal-image_drmdrn.png'
                                                  : `https://images.unsplash.com/photo-167${1000000 + item}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`
                                    }
                                    alt={
                                        item === 1
                                            ? 'Granny Always Knew - Journal entry'
                                            : item === 4
                                              ? 'Ashes to Intention journal entry'
                                              : 'Journal entry'
                                    }
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    data-oid="d:dd90."
                                />
                            </div>
                            <div className="py-2" data-oid="l51tqsx">
                                <p
                                    className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                                    data-oid="9l.l69f"
                                >
                                    {item === 4 ? 'June 22, 2023' : 'May 15, 2023'}
                                </p>
                                <h3 className="text-xl font-light mb-2" data-oid="cvzoses">
                                    {item === 1
                                        ? 'Granny Always Knew'
                                        : item === 2
                                          ? 'We packed light, but…'
                                          : item === 4
                                            ? 'Ashes to Intention'
                                            : 'Cigarettes'}
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="ig55r5q">
                                    {item === 1
                                        ? 'Reflections on childhood wisdom and the perspective that comes with looking back.'
                                        : item === 2
                                          ? 'A journey through mountains, friendship, and understanding the complexities of trauma and healing.'
                                          : item === 4
                                            ? 'From rejection to redemption: my journey through addiction and finding strength in art.'
                                            : 'Exploring how vulnerability creates connection in both visual and written narratives.'}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-16 text-center" data-oid="4fd.4nr">
                    <Link href="/journal/1" data-oid="8fq3u:7">
                        <button
                            className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            /* Made full width on mobile */ data-oid="w17msjm"
                        >
                            View All Posts
                        </button>
                    </Link>
                </div>
            </section>

            {/* Featured In Section - Brand Logo Marquee */}
            <section className="py-16 sm:py-20 border-t border-gray-100" data-oid="q-9ftj6">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12" data-oid="zfcj_py">
                    <h2
                        className="text-2xl sm:text-3xl font-light mb-12 text-center"
                        data-oid="g5n1dd0"
                    >
                        Featured In
                    </h2>

                    <style jsx global data-oid="2i:msv:">{`
                        @keyframes marquee {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-100%);
                            }
                        }
                        .marquee-container {
                            overflow: hidden;
                            position: relative;
                            width: 100%;
                        }
                        .marquee-content {
                            display: flex;
                            animation: marquee 40s linear infinite;
                            width: max-content;
                        }
                        .marquee-reverse {
                            animation-direction: reverse;
                        }
                    `}</style>

                    {/* First row of logos */}
                    <div className="marquee-container" data-oid="nqkmxd9">
                        <div className="marquee-content" data-oid="8d7rehy">
                            {[
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-1.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-2.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-3.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-4.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-5.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-6.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-7.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-8.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-9.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-10.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-11.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-12.png',
                            ].map((logoSrc, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center mx-6 sm:mx-8"
                                    data-oid="ttedtsk"
                                >
                                    <Image
                                        src={logoSrc}
                                        alt={`Brand logo ${index + 1}`}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        width={96}
                                        height={48}
                                        sizes="(max-width: 768px) 96px, 128px"
                                        data-oid="q9k6i5q"
                                    />
                                </div>
                            ))}

                            {/* Duplicate for seamless looping */}
                            {[
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-1.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-2.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-3.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-4.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-5.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-6.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-7.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-8.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-9.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-10.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-11.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-12.png',
                            ].map((logoSrc, index) => (
                                <div
                                    key={`dup-${index}`}
                                    className="flex items-center justify-center mx-6 sm:mx-8"
                                    data-oid="8vrj179"
                                >
                                    <Image
                                        src={logoSrc}
                                        alt={`Brand logo ${index + 1}`}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        width={96}
                                        height={48}
                                        sizes="(max-width: 768px) 96px, 128px"
                                        data-oid="hgev:r-"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second row of logos (moving in opposite direction) */}
                    <div className="marquee-container mt-8" data-oid="27a_gji">
                        <div className="marquee-content marquee-reverse" data-oid="39lyzib">
                            {[
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-13.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-14.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-15.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-16.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-17.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-18.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-19.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-20.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-21.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-22.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-23.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-24.png',
                            ].map((logoSrc, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center mx-6 sm:mx-8"
                                    data-oid="5997c5v"
                                >
                                    <Image
                                        src={logoSrc}
                                        alt={`Brand logo ${index + 13}`}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        width={96}
                                        height={48}
                                        sizes="(max-width: 768px) 96px, 128px"
                                        data-oid="0m3a46x"
                                    />
                                </div>
                            ))}

                            {/* Duplicate for seamless looping */}
                            {[
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-13.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-14.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-15.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-16.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-17.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-18.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-19.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-20.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-21.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-22.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-23.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-24.png',
                            ].map((logoSrc, index) => (
                                <div
                                    key={`dup-${index}`}
                                    className="flex items-center justify-center mx-6 sm:mx-8"
                                    data-oid="-2pi2-2"
                                >
                                    <Image
                                        src={logoSrc}
                                        alt={`Brand logo ${index + 13}`}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        width={96}
                                        height={48}
                                        sizes="(max-width: 768px) 96px, 128px"
                                        data-oid="-sqfart"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="ewgccfk"
            >
                <div className="max-w-2xl mx-auto text-center" data-oid="c921_f6">
                    <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6" data-oid="1h:fw:8">
                        Let&apos;s Connect
                    </h2>
                    <p
                        className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10"
                        data-oid="l8kzstx"
                    >
                        Interested in working together or just want to say hello? I&apos;d love to
                        hear from you.
                    </p>
                    <button
                        className="w-full sm:w-auto px-12 py-4 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        onClick={() => window.open('https://wa.me/+919660773383', '_blank')}
                        data-oid="ltt7ez5"
                    >
                        Get in Touch
                    </button>
                </div>
            </section>

            {/* Contact Email */}
            <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-gray-50" data-oid="rkqpbex">
                <div className="max-w-xl mx-auto text-center" data-oid="6gq1_qf">
                    <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6" data-oid="ywfy8xi">
                        Get in Touch
                    </h3>
                    <p
                        className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8"
                        data-oid="o4dk90o"
                    >
                        For any inquiries, please reach out to us at{' '}
                        <a
                            href="mailto:aksartiste@gmail.com"
                            className="text-black hover:text-gray-600 transition-colors underline"
                            data-oid="1u4gk68"
                        >
                            aksartiste@gmail.com
                        </a>
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="py-10 sm:py-12 px-4 sm:px-8 lg:px-12 border-t border-gray-200"
                data-oid="79_wue_"
            >
                <div className="max-w-7xl mx-auto" data-oid="60yf45m">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="fianve9"
                    >
                        <div className="mb-6 md:mb-0" data-oid="4w6rkd4">
                            <a
                                href="#"
                                className="text-xl tracking-tighter font-light"
                                data-oid="v-o6234"
                            >
                                aksartiste
                            </a>
                        </div>
                        <div
                            className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm uppercase tracking-widest mb-8 md:mb-0"
                            data-oid="dbf6tvf"
                        >
                            <a
                                href="#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="9eca-yo"
                            >
                                Work
                            </a>
                            <a
                                href="#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="o7ra-as"
                            >
                                About
                            </a>
                            <a
                                href="#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="bci5q39"
                            >
                                Journal
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="pb:haj:"
                            >
                                Contact
                            </a>
                        </div>
                        <div className="flex space-x-8 sm:space-x-6" data-oid="sb-nj7r">
                            {/* Increased spacing for touch targets */}
                            <a
                                href="https://www.instagram.com/aksartiste"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="3.3_f_y"
                            >
                                <span className="sr-only" data-oid="kvb19gt">
                                    Instagram
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="n0:.-dc"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                        data-oid="_wsuwaa"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/aksartiste"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="sqsdhco"
                            >
                                <span className="sr-only" data-oid="vmbldcl">
                                    Twitter
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="n4894p1"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid="gkd_.1v"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://pin.it/1Muso2RAZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="m6wk6da"
                            >
                                <span className="sr-only" data-oid="_gueiz6">
                                    Pinterest
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="qeu:5fc"
                                >
                                    <path
                                        d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        data-oid="5zy2k7o"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.behance.net/aksartiste"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="r7-t:92"
                            >
                                <span className="sr-only" data-oid="l6hxfuw">
                                    Behance
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="jsmn3d."
                                >
                                    <path
                                        d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
                                        data-oid="7uadxip"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
                        data-oid="9zvft2w"
                    >
                        <p data-oid="45a:n3v">
                            © {new Date().getFullYear()} aksartiste. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
