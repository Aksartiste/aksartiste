'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState('photography');
    const [currentPortrait, setCurrentPortrait] = useState(0);

    const portraits = [
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
            data-oid="-1w0qss"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200"
                data-oid="hijw3n7"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" data-oid="90ops4_">
                    <div
                        className="flex justify-between items-center h-16 sm:h-20"
                        data-oid="-n58zjo"
                    >
                        <a
                            href="#"
                            className="text-xl sm:text-2xl tracking-tighter font-light"
                            data-oid="ltdls3p"
                        >
                            aksartiste
                        </a>
                        <div
                            className="hidden md:flex space-x-8 text-sm uppercase tracking-widest"
                            data-oid="udtw8oy"
                        >
                            <a
                                href="#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid=":evwomh"
                            >
                                Work
                            </a>
                            <a
                                href="#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="h475_5o"
                            >
                                About
                            </a>
                            <a
                                href="#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="uow9nu6"
                            >
                                Journal
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="no8wub2"
                            >
                                Contact
                            </a>
                        </div>
                        <button className="md:hidden" data-oid=":0hpyu5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                data-oid="t-89zl1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    data-oid="h6_5_7_"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid=":cvygz:"
            >
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    data-oid="aq4zvfl"
                >
                    <div className="order-2 lg:order-1" data-oid="zz2aiy1">
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-8"
                            data-oid="ipd5lou"
                        >
                            A living archive of{' '}
                            <span className="italic" data-oid="m-894w.">
                                craft
                            </span>{' '}
                            and{' '}
                            <span className="italic" data-oid="a1jw3j3">
                                emotion
                            </span>
                        </h1>
                        <p
                            className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed"
                            data-oid="uea4:nm"
                        >
                            Where photography, writing, design, and strategy converge to tell
                            stories that resonate and connect on a deeper level.
                        </p>
                        <button
                            className="px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            data-oid="-52fn4g"
                        >
                            Explore Work
                        </button>
                    </div>
                    <div className="order-1 lg:order-2" data-oid=":8khqwx">
                        <div
                            className="aspect-[4/5] bg-gray-100 overflow-hidden relative"
                            data-oid="9u62h4y"
                        >
                            <AnimatePresence mode="wait" data-oid="yk3draa">
                                <motion.img
                                    key={currentPortrait}
                                    src={portraits[currentPortrait].src}
                                    alt={portraits[currentPortrait].alt}
                                    className="w-full h-full object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    data-oid="l0y8spw"
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
                data-oid="5e:h68v"
            >
                <div className="mb-16" data-oid="53k7qqv">
                    <h2 className="text-3xl font-light mb-8" data-oid="1fo:gxz">
                        Featured Work
                    </h2>
                    <div className="flex border-b border-gray-200" data-oid="2..9o3l">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`py-3 px-5 text-sm uppercase tracking-wider mr-4 ${activeSection === section.id ? 'border-b border-black' : 'text-gray-500 hover:text-black transition-colors'}`}
                                data-oid="uabzdf7"
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-oid="n55jgnr"
                >
                    {featuredWorks.map((work) => (
                        <div key={work.id} className="group cursor-pointer" data-oid="j5kc1s3">
                            <div
                                className="aspect-[3/4] bg-gray-100 overflow-hidden mb-4"
                                data-oid="1bm4xk_"
                            >
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    data-oid="pcab5lh"
                                />
                            </div>
                            <div className="py-2" data-oid="ywqh1uc">
                                <p
                                    className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                                    data-oid="o_clkju"
                                >
                                    {work.category}
                                </p>
                                <h3 className="text-xl font-light mb-2" data-oid="lujgaju">
                                    portraits
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="8w86m.b">
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center" data-oid="vaeyo8m">
                    <button
                        className="px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        data-oid="-hh:ib3"
                    >
                        View All Work
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="6v0q.l4"
            >
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    data-oid="pipl.9:"
                >
                    <div className="aspect-[4/5] bg-gray-100 overflow-hidden" data-oid="ihl_s.f">
                        <img
                            src="https://images.unsplash.com/photo-1551292831-023188e78222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                            alt="Creator portrait"
                            className="w-full h-full object-cover"
                            data-oid="s:ka-7h"
                        />
                    </div>
                    <div data-oid="dvuqu-f">
                        <h2 className="text-3xl font-light mb-8" data-oid="3578z24">
                            About
                        </h2>
                        <p
                            className="text-lg text-gray-600 mb-6 leading-relaxed"
                            data-oid="9zihlx_"
                        >
                            This space is an extension of my mind and heart — a living archive of my
                            photographs, words, designs, and the stories I help shape for others.
                        </p>
                        <p
                            className="text-lg text-gray-600 mb-6 leading-relaxed"
                            data-oid="tj9hprr"
                        >
                            It's not just a portfolio; it's a quiet, thoughtful corner of the
                            internet where emotion meets visual craft. A place where I can share the
                            kind of work that moves me — from intimate portraits and editorial
                            shoots to the behind-the-scenes chaos of content creation.
                        </p>
                        <p
                            className="text-lg text-gray-600 mb-10 leading-relaxed"
                            data-oid="61d6t6m"
                        >
                            My passion is helping people feel seen and confident — whether through
                            the lens of my camera, the honesty of my writing, or the brands I
                            creatively guide.
                        </p>
                        <button
                            className="px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            data-oid=".fq6i:n"
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
                data-oid="8nn-:bk"
            >
                <h2 className="text-3xl font-light mb-12" data-oid="zap2mx2">
                    Journal
                </h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-oid="74o6wcl"
                >
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="group cursor-pointer" data-oid="y2l:0i9">
                            <div
                                className="aspect-video bg-gray-100 overflow-hidden mb-4"
                                data-oid="dhbhci5"
                            >
                                <img
                                    src={`https://images.unsplash.com/photo-167${1000000 + item}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                                    alt="Journal entry"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    data-oid="at20x1_"
                                />
                            </div>
                            <div className="py-2" data-oid="3te9ejn">
                                <p
                                    className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                                    data-oid="_xa88p_"
                                >
                                    May 15, 2023
                                </p>
                                <h3 className="text-xl font-light mb-2" data-oid="ehruwku">
                                    The Art of Authentic Storytelling
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="uqi2lye">
                                    Exploring how vulnerability creates connection in both visual
                                    and written narratives.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center" data-oid="w4tpmmr">
                    <button
                        className="px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        data-oid="toqwno3"
                    >
                        View All Posts
                    </button>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="g.ypk:."
            >
                <div className="max-w-2xl mx-auto text-center" data-oid="osns7t7">
                    <h2 className="text-3xl font-light mb-6" data-oid="_-_al.f">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-gray-600 mb-10" data-oid="q_fh89o">
                        Interested in working together or just want to say hello? I'd love to hear
                        from you.
                    </p>
                    <button
                        className="px-12 py-4 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        data-oid="iuqeltn"
                    >
                        Get in Touch
                    </button>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50" data-oid="f_ldmnp">
                <div className="max-w-xl mx-auto text-center" data-oid=".9_tii3">
                    <h3 className="text-2xl font-light mb-6" data-oid="7o:.94b">
                        Join the Journey
                    </h3>
                    <p className="text-gray-600 mb-8" data-oid="l3a61ii">
                        Subscribe to receive updates on new work, journal entries, and occasional
                        musings.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4" data-oid="lfijfch">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                            data-oid="msy4.z5"
                        />

                        <button
                            className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/80 transition-colors"
                            data-oid="pn65yh9"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="py-12 px-6 sm:px-8 lg:px-12 border-t border-gray-200"
                data-oid="_lb5l.n"
            >
                <div className="max-w-7xl mx-auto" data-oid="4tq9v_p">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="6yy.m32"
                    >
                        <div className="mb-6 md:mb-0" data-oid="7jmwa4t">
                            <a
                                href="#"
                                className="text-xl tracking-tighter font-light"
                                data-oid="slj._-v"
                            >
                                aksartiste
                            </a>
                        </div>
                        <div
                            className="flex space-x-8 text-sm uppercase tracking-widest mb-8 md:mb-0"
                            data-oid="vgn-1xl"
                        >
                            <a
                                href="#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="mtbacfe"
                            >
                                Work
                            </a>
                            <a
                                href="#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="ytkkfon"
                            >
                                About
                            </a>
                            <a
                                href="#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="hj7akt:"
                            >
                                Journal
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="1p6w7zl"
                            >
                                Contact
                            </a>
                        </div>
                        <div className="flex space-x-6" data-oid="v8unn9k">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="ct0as3c"
                            >
                                <span className="sr-only" data-oid="p27j.1i">
                                    Instagram
                                </span>
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="xp2qgkt"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                        data-oid="2oeb5y5"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="mehm6vo"
                            >
                                <span className="sr-only" data-oid="29vtrpn">
                                    Twitter
                                </span>
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="ba5sv7:"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid="pzoad57"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="9mmgmgv"
                            >
                                <span className="sr-only" data-oid="tsyvnvb">
                                    Pinterest
                                </span>
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="cd6jrqm"
                                >
                                    <path
                                        d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        data-oid="nbi6t__"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
                        data-oid="7-8_h4n"
                    >
                        <p data-oid="uriy_z.">
                            © {new Date().getFullYear()} aksartiste. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
