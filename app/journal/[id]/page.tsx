'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Sample journal data - in a real app, this would come from a database or API
const journalEntries = [
    {
        id: '1',
        title: 'Granny Always Knew',
        date: 'May 15, 2023',
        image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749034991/output_clzh4q.png',
        excerpt:
            'A childhood memory of injury, disappointment, and the simple act of love that meant everything.',
        content: `
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        When I was maybe 7 years old, I broke my right hand in school after falling down on ground with a heavy school bag. I came back home crying & kept my hand in same position to avoid extra pain from movement. Granny at home looked at me & said to someone that I don't know but an hour ago i felt something wrong happened & now this is what we're seeing!
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Nothing much. My hand wasn't broken hard enough, As my I'm disabled my hands have conditions under that they didn't put plaster but used crepe bandage.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        The only thing that I was excited about that whole week was of the birthday of my best friend who happens to live in front of my home! He had other best friends though. I talked to my granny if that I have to be okay before going to his birthday party. They laughed & said you need to take care.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">The Birthday Party</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Well, I went to the party with the bandage on, it was still paining while moving my hand. Other guests were lost in themselves, none of them used to like me because I wasn't as cool as them. They atleast didn't bully me so I was kind of okay with being around them.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Remember that time when we used to fill a big balloon with chocolates in it & hang it above/around the cake & the birthday boy! School shoes were apparently only shoes that we wore in parties & functions. I was there, they blew that big balloon & shower of chocolates & glitter happened. Everybody started the loot. I stood there because of my broken hand, smiled because everybody was having fun. A chocolate fell right in front of my eyes & as I tried bending down to pick it up, someone came & took it. I didn't get any chocolate in that party, but had food & came back home!
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I told granny that this happened & we were walking around a park, we went to the shop & bought myself an eclairs (🍬) Honestly I didn't think I'd get it, or I deserved it or even if we have enough money for this thing to happen.
      </p>
      
      <p class="mb-10 text-base sm:text-lg text-gray-600 leading-relaxed">
        But it happened. And it was maybe the first time I felt love, kindness & acceptance.
        I still remember everything in photographic image, I have tears just by remembering. I don't know why I wrote it, I don't know if I'll post it, all I know is I'm crying right now & it feels so good like it happened yesterday.
      </p>
    `,
    },
    {
        id: '2',
        title: 'The Art of Authentic Storytelling',
        date: 'May 15, 2023',
        image: 'https://images.unsplash.com/photo-1671000002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        excerpt:
            'Exploring how vulnerability creates connection in both visual and written narratives.',
        content: `
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        In a world saturated with content, authentic storytelling stands as a beacon of genuine connection. When I first began my journey as a photographer and writer, I was often caught in the trap of perfection—meticulously staging shots and carefully crafting words that I thought would appeal to the widest audience.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        It wasn't until I embraced vulnerability in my work that I began to see a profound shift in how people responded. There's something magnetic about raw, honest expression that cuts through the noise of our digital landscape. Whether through the unguarded gaze of a portrait subject or the candid admission in a personal essay, authenticity creates an immediate bridge between creator and audience.
      </p>
    `,
    },
    {
        id: '3',
        title: 'The Art of Authentic Storytelling',
        date: 'May 15, 2023',
        image: 'https://images.unsplash.com/photo-1673000003?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        excerpt:
            'Exploring how vulnerability creates connection in both visual and written narratives.',
        content: `
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        In a world saturated with content, authentic storytelling stands as a beacon of genuine connection. When I first began my journey as a photographer and writer, I was often caught in the trap of perfection—meticulously staging shots and carefully crafting words that I thought would appeal to the widest audience.
      </p>
    `,
    },
    {
        id: '4',
        title: 'Behind the Lens: Creative Process',
        date: 'June 22, 2023',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        excerpt:
            'A glimpse into my creative workflow and the inspiration behind recent portrait series.',
        content: `
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Every photograph tells a story, but behind each image lies another narrative—the creative process that brought it into being. Today, I want to pull back the curtain and share a glimpse into my workflow, from initial concept to final execution.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        My recent portrait series began not with a camera, but with a conversation. Over coffee with a friend who works in fashion, we discussed the intersection of personal style and identity—how the clothes we choose both express and shape our sense of self. This dialogue sparked a vision: a collection of portraits that would explore this relationship, capturing subjects in environments that reflect their aesthetic choices.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">Finding Inspiration in the Everyday</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Inspiration often arrives in unexpected moments. For this series, I found myself paying closer attention to strangers on the street, noting how their style choices seemed to telegraph aspects of their personality. I began collecting visual references—not just from fashion magazines, but from architecture, nature, and even food. The color palette for the series emerged from a particularly striking sunset I witnessed while stuck in traffic.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        In the studio, preparation is everything. Before each shoot, I create a mood board that combines visual references with written notes about the feeling I'm trying to evoke. I share this with my subjects ahead of time, inviting them into the creative process. Some of my favorite images from the series came from suggestions made by the subjects themselves.
      </p>
      
      <p class="mb-10 text-base sm:text-lg text-gray-600 leading-relaxed">
        The editing process is where the final narrative takes shape. I typically spend three times longer editing than shooting, carefully selecting images that work both individually and as part of the larger story. For this series, I found myself drawn to moments of transition—the split second where a posed expression gives way to something more authentic.
      </p>
    `,
    },
];

export default function JournalEntry({ params }: { params: { id: string } }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = params;

    // Find the journal entry that matches the ID
    const entry = journalEntries.find((entry) => entry.id === id) || journalEntries[0];

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div
            className={`min-h-screen bg-white text-gray-900 font-serif transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            data-oid="il60piu"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200"
                data-oid="3j8ba_s"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" data-oid="kp6-gs4">
                    <div
                        className="flex justify-between items-center h-16 sm:h-20"
                        data-oid="st612zb"
                    >
                        <Link
                            href="/"
                            className="text-xl sm:text-2xl tracking-tighter font-light"
                            data-oid="_-5krb_"
                        >
                            aksartiste
                        </Link>
                        <div
                            className="hidden md:flex space-x-8 text-sm uppercase tracking-widest"
                            data-oid="z5etg89"
                        >
                            <Link
                                href="/#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="e-cs6:i"
                            >
                                Work
                            </Link>
                            <Link
                                href="/#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="llukvfc"
                            >
                                About
                            </Link>
                            <Link
                                href="/#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="sm5140g"
                            >
                                Journal
                            </Link>
                            <Link
                                href="/#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="yuss6r6"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Journal Entry Content */}
            <article
                className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto"
                data-oid="m37-khw"
            >
                <Link
                    href="/#journal"
                    className="inline-flex items-center text-sm text-gray-600 mb-8 hover:text-black transition-colors"
                    data-oid="u.oueg6"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        data-oid="3bw6fin"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            data-oid="4.0pbzq"
                        />
                    </svg>
                    Back to Journal
                </Link>

                <div className="mb-10" data-oid="9n4dv:j">
                    <p
                        className="text-xs uppercase tracking-wider text-gray-500 mb-2"
                        data-oid="qwa6iit"
                    >
                        {entry.date}
                    </p>
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6"
                        data-oid="p0n.3v0"
                    >
                        {entry.title}
                    </h1>
                </div>

                <div className="aspect-[16/9] bg-gray-100 overflow-hidden mb-10" data-oid="yr2xjhs">
                    <img
                        src={entry.image}
                        alt={entry.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                        data-oid="ukls6bw"
                    />
                </div>

                <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                    data-oid="zb:98gy"
                />

                <div className="mt-16 border-t border-gray-200 pt-10" data-oid=".k9kzoq">
                    <h3 className="text-xl font-light mb-6" data-oid="891t_o3">
                        More Journal Entries
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-oid="4xmjy24">
                        {journalEntries
                            .filter((e) => e.id !== id)
                            .slice(0, 2)
                            .map((relatedEntry) => (
                                <Link
                                    href={`/journal/${relatedEntry.id}`}
                                    key={relatedEntry.id}
                                    className="group"
                                    data-oid="1a7w7bd"
                                >
                                    <div
                                        className="aspect-video bg-gray-100 overflow-hidden mb-4"
                                        data-oid="05_biuk"
                                    >
                                        <img
                                            src={relatedEntry.image}
                                            alt={relatedEntry.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            data-oid="lekx7yt"
                                        />
                                    </div>
                                    <div data-oid="945wd8q">
                                        <p
                                            className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                                            data-oid=":7m8voa"
                                        >
                                            {relatedEntry.date}
                                        </p>
                                        <h3 className="text-xl font-light mb-2" data-oid="gg4-w3b">
                                            {relatedEntry.title}
                                        </h3>
                                        <p className="text-sm text-gray-600" data-oid="d1sp9m6">
                                            {relatedEntry.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </article>

            {/* Footer */}
            <footer
                className="py-10 sm:py-12 px-4 sm:px-8 lg:px-12 border-t border-gray-200"
                data-oid="70.2-_e"
            >
                <div className="max-w-7xl mx-auto" data-oid="vx9plz:">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="zofi0rt"
                    >
                        <div className="mb-6 md:mb-0" data-oid="fmheqbl">
                            <Link
                                href="/"
                                className="text-xl tracking-tighter font-light"
                                data-oid=".335k2u"
                            >
                                aksartiste
                            </Link>
                        </div>
                        <div
                            className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm uppercase tracking-widest mb-8 md:mb-0"
                            data-oid="r7wobwh"
                        >
                            <Link
                                href="/#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="6ghsg4-"
                            >
                                Work
                            </Link>
                            <Link
                                href="/#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="hx03web"
                            >
                                About
                            </Link>
                            <Link
                                href="/#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid=":-c5tyt"
                            >
                                Journal
                            </Link>
                            <Link
                                href="/#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="l8c:ec3"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div
                        className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
                        data-oid="wiws0:l"
                    >
                        <p data-oid="5tonq6-">
                            © {new Date().getFullYear()} aksartiste. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
