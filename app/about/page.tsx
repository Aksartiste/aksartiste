'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div
            className={`min-h-screen bg-white text-gray-900 font-serif transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            data-oid="be1tnei"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200"
                data-oid="2-:wfw1"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" data-oid=".owsgt2">
                    <div
                        className="flex justify-between items-center h-16 sm:h-20"
                        data-oid="on.w886"
                    >
                        <Link
                            href="/"
                            className="text-xl sm:text-2xl tracking-tighter font-light"
                            data-oid="ul8z6_-"
                        >
                            aksartiste
                        </Link>
                        <div
                            className="hidden md:flex space-x-8 text-sm uppercase tracking-widest"
                            data-oid="fpf2vyl"
                        >
                            <Link
                                href="/#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid=".mnipp3"
                            >
                                Work
                            </Link>
                            <Link
                                href="/#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="5kbpp6f"
                            >
                                About
                            </Link>
                            <Link
                                href="/#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="3_-5i9m"
                            >
                                Journal
                            </Link>
                            <Link
                                href="/#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="ho9v04p"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* About Content */}
            <section
                className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto"
                data-oid="4_qfh_w"
            >
                <div className="mb-10" data-oid="ib_bbv:">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6"
                        data-oid="nvnk2i."
                    >
                        About Me
                    </h1>
                </div>

                <div className="aspect-[16/9] bg-gray-100 overflow-hidden mb-10" data-oid="krqhka3">
                    <img
                        src="https://res.cloudinary.com/dexibw60d/image/upload/v1749043892/Screenshot_2025-06-04_at_7.00.25_PM_rw8lnr.png"
                        alt="Akshay portrait"
                        className="object-cover h-[451px] w-[799px]"
                        loading="eager"
                        data-oid="r.8n_l9"
                    />
                </div>

                <div className="prose prose-lg max-w-none" data-oid=":j50dll">
                    <h2 className="text-2xl sm:text-3xl font-light mb-6" data-oid="jbnpxi-">
                        Hi, I'm Akshay
                    </h2>

                    <p
                        className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed"
                        data-oid="shht3fh"
                    >
                        I'm a multidisciplinary artist based in Mumbai. While portrait and fashion
                        photography are at the core of my practice, my creative work extends into
                        writing, fine arts, creative direction, and emotion-led visual storytelling
                        rooted in social awareness.
                    </p>

                    <p
                        className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed"
                        data-oid="h_h5i9a"
                    >
                        I believe in capturing people in their most authentic, unfiltered moments,
                        and I use my background in writing to explore the deeper narratives behind
                        each frame. My projects often revolve around themes such as mental health,
                        body positivity, disability representation, and LGBTQ+ visibility, giving
                        voice to stories that are too often overlooked.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-light mb-6 mt-10" data-oid="qdwmmtp">
                        My Work
                    </h2>

                    <p
                        className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed"
                        data-oid="wuezjgk"
                    >
                        Over the years, I've had the privilege of working with 100+ clients across
                        20+ cities in India, creating everything from soulful portraits to
                        high-impact product and food photography. I've also worked on brand
                        campaigns and marketing strategy for influential names like Luke Coutinho,
                        HealthSense, and Galli Wear & more.
                    </p>

                    <p
                        className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed"
                        data-oid="dxrura4"
                    >
                        My work has been featured on platforms like PhotoVogue, Google India, Mob
                        Journal, Malvie Magazine, and many others. I've also been interviewed by
                        platforms such as The Logical Indian and People of India, where I've shared
                        insights into my creative journey and purpose.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-light mb-6 mt-10" data-oid="fpc6kmx">
                        Beyond Photography
                    </h2>

                    <p
                        className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed"
                        data-oid="r64m5tr"
                    >
                        Beyond photography, I help brands and personal IPs grow their social
                        presence, blending copywriting, SEO friendly website structure, content
                        strategy, and campaign design to create both visibility and emotional
                        resonance.
                    </p>

                    <p
                        className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed"
                        data-oid="2ld9oaz"
                    >
                        As an artist, I'm driven by the need to create meaning through aesthetics,
                        whether it's shaping a visual identity or telling stories that challenge
                        perception. I aim to build spaces where art meets empathy/beauty meets
                        truth.
                    </p>

                    <p
                        className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed"
                        data-oid="z.inp-s"
                    >
                        If you resonate with art that reflects real people and real stories, chances
                        are we'll get along just fine. Well, my pronouns are hire/me.
                    </p>

                    <div className="mt-10 text-center" data-oid="yfvhrqg">
                        <Link href="/#contact" data-oid="th3qz3k">
                            <button
                                className="px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                                data-oid="t7c6d9u"
                            >
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="py-10 sm:py-12 px-4 sm:px-8 lg:px-12 border-t border-gray-200"
                data-oid="h4_iejh"
            >
                <div className="max-w-7xl mx-auto" data-oid="lxg_mfo">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="opbrq51"
                    >
                        <div className="mb-6 md:mb-0" data-oid="rbxpks8">
                            <Link
                                href="/"
                                className="text-xl tracking-tighter font-light"
                                data-oid="sccj6oa"
                            >
                                aksartiste
                            </Link>
                        </div>
                        <div
                            className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm uppercase tracking-widest mb-8 md:mb-0"
                            data-oid="vsjlmtp"
                        >
                            <Link
                                href="/#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="u1.ui8j"
                            >
                                Work
                            </Link>
                            <Link
                                href="/#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="yrgr81l"
                            >
                                About
                            </Link>
                            <Link
                                href="/#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="64qcrq1"
                            >
                                Journal
                            </Link>
                            <Link
                                href="/#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="zm2057q"
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="flex space-x-8 sm:space-x-6" data-oid="b8idk.4">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="_8oq.rc"
                            >
                                <span className="sr-only" data-oid="unl9okv">
                                    Instagram
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="uqy_:s4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                        data-oid="3lay2n."
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="j-rrtq6"
                            >
                                <span className="sr-only" data-oid="gy86q3m">
                                    Twitter
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid=".u3on-h"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid="tejae:4"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="qho3ix_"
                            >
                                <span className="sr-only" data-oid="_ogjbn5">
                                    Pinterest
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="--gflxg"
                                >
                                    <path
                                        d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        data-oid="cnl41u9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
                        data-oid="i4zjz0z"
                    >
                        <p data-oid="kf5bh:o">
                            © {new Date().getFullYear()} aksartiste. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
