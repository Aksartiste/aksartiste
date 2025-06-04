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
        title: 'Capturing Light and Shadow',
        date: 'June 5, 2023',
        image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749037809/artcover_ddojin.jpg',
        excerpt:
            'Exploring the interplay of light and shadow in portrait photography and how it shapes emotion.',
        content: `
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Light and shadow are the fundamental elements of photography, creating depth, dimension, and mood in every image. As a portrait photographer, I've come to see these elements as my primary tools for storytelling—more important than any camera or lens.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        When I first began shooting portraits, I was obsessed with even, flattering light that minimized shadows. I wanted my subjects to look their "best" according to conventional standards—smooth skin, bright eyes, no harsh shadows. But over time, I realized that this approach often resulted in images that felt flat and lifeless, devoid of the character and emotion that make a portrait compelling.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">Embracing the Shadows</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        It was during a particularly challenging shoot in an old building with limited natural light that I had my breakthrough. Instead of fighting against the dramatic shadows cast by the narrow windows, I decided to embrace them. The resulting portraits captured something raw and honest about my subject—the interplay of light and shadow across their face revealed contours and expressions that might otherwise have been lost.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Since then, I've approached light and shadow as equal partners in the creative process. I look for ways to use shadow not just as the absence of light, but as a positive element that shapes and defines the image. Sometimes this means positioning a subject half in shadow to create a sense of mystery or duality. Other times it means using a single, strong directional light to create dramatic shadows that emphasize the structure of a face.
      </p>
      
      <p class="mb-10 text-base sm:text-lg text-gray-600 leading-relaxed">
        What I've found most fascinating is how the quality of light affects the emotional tone of a portrait. Soft, diffused light often creates a sense of gentleness and intimacy, while hard, direct light can convey intensity and drama. By consciously choosing the quality, direction, and intensity of light, I can help shape the story the portrait tells—before I even press the shutter.
      </p>
    `,
    },
    {
        id: '3',
        title: 'The Power of Candid Moments',
        date: 'July 12, 2023',
        image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749038207/output-3_gpz3oa.png',
        excerpt:
            'Finding authenticity in unposed photography and the beauty of capturing life as it happens.',
        content: `
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        There's a special magic in the unplanned moment—that split second when someone forgets they're being photographed and their true self shines through. As a photographer who started in the highly controlled environment of studio portraiture, discovering the power of candid photography was like finding a new language to express what I see in the world.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I remember the exact moment this shift happened for me. I was shooting a formal portrait session with a family, carefully arranging everyone in a composition I had planned in advance. The session was going well, but the images felt stiff and formal. Then, as we were taking a break, the youngest child spotted a butterfly and ran after it with pure delight. I instinctively raised my camera and captured a series of images that had more life and emotion than anything we'd shot in the previous hour.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">The Art of Observation</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Since that day, I've developed what I call "active observation"—a state of heightened awareness where I'm constantly watching for those fleeting expressions and interactions that tell a deeper story. It's about being present enough to notice the subtle glance between lovers, the unguarded laugh of a child, or the quiet moment of reflection when someone thinks no one is watching.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        This approach requires a different technical skill set as well. I've learned to work quickly, to anticipate moments before they happen, and to be technically prepared so that when the perfect moment arrives, I'm ready to capture it without fumbling with settings. It means being comfortable with imperfection—sometimes the most emotionally powerful image isn't the most technically perfect one.
      </p>
      
      <p class="mb-10 text-base sm:text-lg text-gray-600 leading-relaxed">
        What I love most about candid photography is how it democratizes beauty. In posed portraits, we often try to present an idealized version of ourselves. But in candid moments, we see that genuine emotion—joy, contemplation, connection—is beautiful in everyone. These unguarded moments reveal our shared humanity in a way that carefully constructed images rarely can.
      </p>
    `,
    },
    {
        id: '4',
        title: 'Finding Your Visual Voice',
        date: 'August 18, 2023',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        excerpt:
            'The journey to developing a distinctive photographic style and the importance of authentic self-expression.',
        content: `
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        One of the most common questions I receive from emerging photographers is "How do I develop my own style?" It's a question that used to frustrate me because I didn't have a simple answer. My own visual voice emerged gradually over years of practice, influence, and self-reflection. But looking back, I can now identify the key turning points and practices that helped me find my distinctive approach to photography.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        When I first picked up a camera, I did what most beginners do—I imitated the work I admired. I studied the compositions of classic portrait photographers, tried to recreate lighting setups I saw in magazines, and followed tutorials meticulously. This imitation phase was crucial for building technical skills, but it didn't lead to work that felt uniquely mine.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">The Turning Point</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        The shift began when I started photographing subjects that had deep personal meaning to me. I embarked on a project documenting the changing neighborhood where I grew up—capturing the places, people, and details that resonated with my own history. Because I had an emotional connection to the subject matter, I made different choices about what to include in the frame, how to approach people, and even the time of day I chose to shoot.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Another breakthrough came when I stopped trying to make "perfect" images and started making honest ones. I had been editing out elements I thought were flaws—grain in low light, slight motion blur, unconventional compositions. When I began embracing these qualities instead of fighting them, my work started to feel more authentic and distinctive.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I also found that constraints often led to greater creativity. For six months, I limited myself to a single prime lens and black and white film. This forced me to solve creative problems differently than I would have with a full range of equipment. Many of the approaches I developed during this period of constraint have become signature elements of my style, even though I now work primarily with digital color.
      </p>
      
      <p class="mb-10 text-base sm:text-lg text-gray-600 leading-relaxed">
        Perhaps most importantly, I learned to listen to my own instinctive responses to images. When reviewing my work, I started paying attention to which photos made me feel something, regardless of whether they followed the "rules" or matched what I thought my style should be. Over time, patterns emerged in these images that I responded to, and I began consciously developing these elements into a cohesive approach.
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
            data-oid="sf.76dz"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200"
                data-oid="60i4fgu"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" data-oid="_tmf:0v">
                    <div
                        className="flex justify-between items-center h-16 sm:h-20"
                        data-oid="0.c7:jk"
                    >
                        <Link
                            href="/"
                            className="text-xl sm:text-2xl tracking-tighter font-light"
                            data-oid="8-.zo5f"
                        >
                            aksartiste
                        </Link>
                        <div
                            className="hidden md:flex space-x-8 text-sm uppercase tracking-widest"
                            data-oid="jcsq-kk"
                        >
                            <Link
                                href="/#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="m46ziva"
                            >
                                Work
                            </Link>
                            <Link
                                href="/#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="ja-e8q3"
                            >
                                About
                            </Link>
                            <Link
                                href="/#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="m6e_7gt"
                            >
                                Journal
                            </Link>
                            <Link
                                href="/#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="lrnoabu"
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
                data-oid="h0oi5l1"
            >
                <Link
                    href="/#journal"
                    className="inline-flex items-center text-sm text-gray-600 mb-8 hover:text-black transition-colors"
                    data-oid="225uy_8"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        data-oid="vo87per"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            data-oid="ev:w10g"
                        />
                    </svg>
                    Back to Journal
                </Link>

                <div className="mb-10" data-oid="m60imc-">
                    <p
                        className="text-xs uppercase tracking-wider text-gray-500 mb-2"
                        data-oid="4188d9_"
                    >
                        {entry.date}
                    </p>
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6"
                        data-oid="p0gpkc6"
                    >
                        {entry.title}
                    </h1>
                </div>

                <div className="aspect-[16/9] bg-gray-100 overflow-hidden mb-10" data-oid="vo2rhxz">
                    <img
                        src={entry.image}
                        alt={entry.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                        data-oid="rfe3umu"
                    />
                </div>

                <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                    data-oid=".wkjv30"
                />

                <div className="mt-16 border-t border-gray-200 pt-10" data-oid="648x5:_">
                    <h3 className="text-xl font-light mb-6" data-oid="2-sfh3m">
                        More Journal Entries
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-oid="r0gq6n4">
                        {journalEntries
                            .filter((e) => e.id !== id)
                            .slice(0, 2)
                            .map((relatedEntry) => (
                                <Link
                                    href={`/journal/${relatedEntry.id}`}
                                    key={relatedEntry.id}
                                    className="group"
                                    data-oid="6ovj8m1"
                                >
                                    <div
                                        className="aspect-video bg-gray-100 overflow-hidden mb-4"
                                        data-oid="5wq88h5"
                                    >
                                        <img
                                            src={relatedEntry.image}
                                            alt={relatedEntry.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            data-oid="t2tpga6"
                                        />
                                    </div>
                                    <div data-oid="nflciwj">
                                        <p
                                            className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                                            data-oid="1ij57xf"
                                        >
                                            {relatedEntry.date}
                                        </p>
                                        <h3 className="text-xl font-light mb-2" data-oid="scr3i0w">
                                            {relatedEntry.title}
                                        </h3>
                                        <p className="text-sm text-gray-600" data-oid="8u1vwv7">
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
                data-oid="l29lrte"
            >
                <div className="max-w-7xl mx-auto" data-oid="x0sl.sh">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="ezuwwoj"
                    >
                        <div className="mb-6 md:mb-0" data-oid="w5p2l2q">
                            <Link
                                href="/"
                                className="text-xl tracking-tighter font-light"
                                data-oid="5vuite2"
                            >
                                aksartiste
                            </Link>
                        </div>
                        <div
                            className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm uppercase tracking-widest mb-8 md:mb-0"
                            data-oid="-_n421w"
                        >
                            <Link
                                href="/#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="hc7rc4w"
                            >
                                Work
                            </Link>
                            <Link
                                href="/#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="6ph91eq"
                            >
                                About
                            </Link>
                            <Link
                                href="/#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="j_58exk"
                            >
                                Journal
                            </Link>
                            <Link
                                href="/#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="k76scju"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div
                        className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
                        data-oid="5q_u79-"
                    >
                        <p data-oid="gr2x2qz">
                            © {new Date().getFullYear()} aksartiste. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
