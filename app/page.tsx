'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState('photography');
    const [currentPortrait, setCurrentPortrait] = useState(0);

    const portraits = [
        {
            src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'Portrait photograph 1',
        },
        {
            src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'Portrait photograph 2',
        },
        {
            src: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'Portrait photograph 3',
        },
        {
            src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'Portrait photograph 4',
        },
    ];

    // Auto-rotate portraits
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPortrait((prev) => (prev + 1) % portraits.length);
        }, 3000); // Change portrait every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [portraits.length]);

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
            data-oid="uv:k_xs"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200"
                data-oid="0cnjrpt"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" data-oid="2s70b63">
                    <div
                        className="flex justify-between items-center h-16 sm:h-20"
                        data-oid="mm7fmkb"
                    >
                        <a
                            href="#"
                            className="text-xl sm:text-2xl tracking-tighter font-light"
                            data-oid="ceeec2q"
                        >
                            aksartiste
                        </a>
                        <div
                            className="hidden md:flex space-x-8 text-sm uppercase tracking-widest"
                            data-oid="haop9g4"
                        >
                            <a
                                href="#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="35omh2d"
                            >
                                Work
                            </a>
                            <a
                                href="#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid=".kw1b5d"
                            >
                                About
                            </a>
                            <a
                                href="#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="f1lhlvd"
                            >
                                Journal
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="t909h4j"
                            >
                                Contact
                            </a>
                        </div>
                        <button className="md:hidden" data-oid="v9wtwy8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                data-oid="r01a:8e"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    data-oid="pcqstg4"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="zkuju4q"
            >
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    data-oid="fko2ahb"
                >
                    <div className="order-2 lg:order-1" data-oid="enldfiv">
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-8"
                            data-oid="qd:3mrh"
                        >
                            A living archive of{' '}
                            <span className="italic" data-oid="3tq:k6v">
                                craft
                            </span>{' '}
                            and{' '}
                            <span className="italic" data-oid="4oiim57">
                                emotion
                            </span>
                        </h1>
                        <p
                            className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed"
                            data-oid="kl8jsy4"
                        >
                            Where photography, writing, design, and strategy converge to tell
                            stories that resonate and connect on a deeper level.
                        </p>
                        <button
                            className="px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            data-oid="83w5zjm"
                        >
                            Explore Work
                        </button>
                    </div>
                    <div className="order-1 lg:order-2" data-oid="6r39aot">
                        <div
                            className="aspect-[4/5] bg-gray-100 overflow-hidden relative"
                            data-oid="7lh8oj3"
                        >
                            <AnimatePresence mode="wait" data-oid="jp:j-1i">
                                <motion.img
                                    key={currentPortrait}
                                    src={portraits[currentPortrait].src}
                                    alt={portraits[currentPortrait].alt}
                                    className="w-full h-full object-cover"
                                    data-oid="b5a-ny6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>

                            {/* Navigation controls removed */}

                            {/* Indicators removed */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section
                id="work"
                className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="b:vs1fs"
            >
                <div className="mb-16" data-oid="0fwa_5d">
                    <h2 className="text-3xl font-light mb-8" data-oid="0l5dusn">
                        Featured Work
                    </h2>
                    <div className="flex border-b border-gray-200" data-oid="vftolq0">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`py-3 px-5 text-sm uppercase tracking-wider mr-4 ${activeSection === section.id ? 'border-b border-black' : 'text-gray-500 hover:text-black transition-colors'}`}
                                data-oid=":wacf.k"
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-oid=".k:jjqn"
                >
                    {featuredWorks.map((work) => (
                        <div key={work.id} className="group cursor-pointer" data-oid="o-gzlo9">
                            <div
                                className="aspect-[3/4] bg-gray-100 overflow-hidden mb-4"
                                data-oid="555n_xw"
                            >
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    data-oid="ceiwgkm"
                                />
                            </div>
                            <div className="py-2" data-oid="xg3vwaf">
                                <p
                                    className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                                    data-oid="4elk4n9"
                                >
                                    {work.category}
                                </p>
                                <h3 className="text-xl font-light mb-2" data-oid="zshwpd0">
                                    portraits
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="ig0p4rg">
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center" data-oid="q649:g1">
                    <button
                        className="px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        data-oid="6kn5qt7"
                    >
                        View All Work
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="4s:t7-o"
            >
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    data-oid="uz8d5l_"
                >
                    <div className="aspect-[4/5] bg-gray-100 overflow-hidden" data-oid="utusnxv">
                        <img
                            src="https://images.unsplash.com/photo-1551292831-023188e78222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                            alt="Creator portrait"
                            className="w-full h-full object-cover"
                            data-oid="9fycmeg"
                        />
                    </div>
                    <div data-oid="p8gj4o:">
                        <h2 className="text-3xl font-light mb-8" data-oid="u408.3k">
                            About
                        </h2>
                        <p
                            className="text-lg text-gray-600 mb-6 leading-relaxed"
                            data-oid="e:c.gxn"
                        >
                            This space is an extension of my mind and heart — a living archive of my
                            photographs, words, designs, and the stories I help shape for others.
                        </p>
                        <p
                            className="text-lg text-gray-600 mb-6 leading-relaxed"
                            data-oid="9tus8qo"
                        >
                            It's not just a portfolio; it's a quiet, thoughtful corner of the
                            internet where emotion meets visual craft. A place where I can share the
                            kind of work that moves me — from intimate portraits and editorial
                            shoots to the behind-the-scenes chaos of content creation.
                        </p>
                        <p
                            className="text-lg text-gray-600 mb-10 leading-relaxed"
                            data-oid=".bert5e"
                        >
                            My passion is helping people feel seen and confident — whether through
                            the lens of my camera, the honesty of my writing, or the brands I
                            creatively guide.
                        </p>
                        <button
                            className="px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            data-oid="ns7jb-2"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </section>

            {/* Journal Section */}
            <section
                id="journal"
                className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="znwdrdr"
            >
                <h2 className="text-3xl font-light mb-12" data-oid="r9kbon8">
                    Journal
                </h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-oid="08w54jf"
                >
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="group cursor-pointer" data-oid="9n5q9cw">
                            <div
                                className="aspect-video bg-gray-100 overflow-hidden mb-4"
                                data-oid="960qz8-"
                            >
                                <img
                                    src={`https://images.unsplash.com/photo-167${1000000 + item}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                                    alt="Journal entry"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    data-oid="rr8655s"
                                />
                            </div>
                            <div className="py-2" data-oid="ax24ftm">
                                <p
                                    className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                                    data-oid="yqx4:ci"
                                >
                                    May 15, 2023
                                </p>
                                <h3 className="text-xl font-light mb-2" data-oid="akh65.b">
                                    The Art of Authentic Storytelling
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="i3i.i6j">
                                    Exploring how vulnerability creates connection in both visual
                                    and written narratives.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center" data-oid="ko72dfj">
                    <button
                        className="px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        data-oid="u2hg.9q"
                    >
                        View All Posts
                    </button>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="a610lti"
            >
                <div className="max-w-2xl mx-auto text-center" data-oid="9-esi0h">
                    <h2 className="text-3xl font-light mb-6" data-oid="_g0v4-j">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-gray-600 mb-10" data-oid="b-pl8el">
                        Interested in working together or just want to say hello? I'd love to hear
                        from you.
                    </p>
                    <button
                        className="px-12 py-4 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        data-oid="e-6e92f"
                    >
                        Get in Touch
                    </button>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50" data-oid="mfg:aut">
                <div className="max-w-xl mx-auto text-center" data-oid="n652pb-">
                    <h3 className="text-2xl font-light mb-6" data-oid="9vcgtbj">
                        Join the Journey
                    </h3>
                    <p className="text-gray-600 mb-8" data-oid="0287pi8">
                        Subscribe to receive updates on new work, journal entries, and occasional
                        musings.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4" data-oid="kw_f6t6">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                            data-oid=":fx61it"
                        />

                        <button
                            className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/80 transition-colors"
                            data-oid="gwff.xl"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="py-12 px-6 sm:px-8 lg:px-12 border-t border-gray-200"
                data-oid="joq2qu5"
            >
                <div className="max-w-7xl mx-auto" data-oid="439xgf_">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="4856udt"
                    >
                        <div className="mb-6 md:mb-0" data-oid="fy6v03s">
                            <a
                                href="#"
                                className="text-xl tracking-tighter font-light"
                                data-oid="k7teh9d"
                            >
                                aksartiste
                            </a>
                        </div>
                        <div
                            className="flex space-x-8 text-sm uppercase tracking-widest mb-8 md:mb-0"
                            data-oid="d125i8."
                        >
                            <a
                                href="#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="u9-culh"
                            >
                                Work
                            </a>
                            <a
                                href="#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="qzz26ey"
                            >
                                About
                            </a>
                            <a
                                href="#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="3n99.ei"
                            >
                                Journal
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="7nm:jqh"
                            >
                                Contact
                            </a>
                        </div>
                        <div className="flex space-x-6" data-oid="wz1.c5.">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="z22pbs6"
                            >
                                <span className="sr-only" data-oid="mi9na9s">
                                    Instagram
                                </span>
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="olk5hun"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                        data-oid="4lwzu18"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="aovyzkn"
                            >
                                <span className="sr-only" data-oid="reajdti">
                                    Twitter
                                </span>
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="2:wxfm."
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid=".5m8sli"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="8fwf-fo"
                            >
                                <span className="sr-only" data-oid="6zlzs4t">
                                    Pinterest
                                </span>
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="i-5e0.2"
                                >
                                    <path
                                        d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        data-oid="8ybone1"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
                        data-oid="ye14uv9"
                    >
                        <p data-oid="5o5g_f6">
                            © {new Date().getFullYear()} aksartiste. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
