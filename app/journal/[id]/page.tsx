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
        title: 'We packed light, but…',
        date: 'May 15, 2023',
        image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749038207/output-3_gpz3oa.png',
        excerpt:
            'A journey through mountains, friendship, and understanding the complexities of trauma and healing.',
        content: `
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        It was a good time, we were travelling together & on the mid-way it happened. We were a little cold & wanted to have some coffee, we stepped out of the bus & got ourselves hot cups of what we were craving.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        We are comfortable with silences, like those times we were working or watching/ reading/writing, sleeping in the same room many times next to each other & having absolutely no problems in that. We embrace friendships like it's god's way to communicate with us through different people. It was midnight on the highway, the wind was good & we could feel our hair waving & suddenly She said..
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        She:- Can i ask you something?<br>
        Me:- Yeah sure. (thinkin since when we started using this sentence)<br>
        She:- Why have you been acting weird lately?<br>
        Me:- umm, no. Why'd you ask? Since when you're feeling this way?<br>
        She:- idk, 4-5 days?<br>
        Me:- umm?<br>
        She:- I don't feel good when you touch me, please don't do that.<br>
        Me:- okay I don't know when did i do that? But if I made you feel that way l'm truly sorry, there are no wrong intentions here. (My brain was numb, it stayed that way for 4 days straight)
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        We went inside the bus, she sitting on my right side on the window seat, we were on the way to mountains. Every time the bus would take a right I'd hold myself so that I don't even touch a little bit, meanwhile the guy on my left is all over me, asleep with no control over his movements.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Something was damn wrong, i was shattered. I'm not the guy who'd touch someone that way. She's a bro to me. My favourite human story if i would love to write. No way, I didn't touch her that way bat we stay normal we do handshake, hug, fight, push, assist each other just like everyone else. How does a touch feel different? There has to be a gesture. I don't do such gestures on anyone who's a friend.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        This has nothing to do with gender. What the hell is wrong with us." This was all in my head giving me peak anxiety. Literally, her "can i ask you something" voice it stayed in mind.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">The Journey</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Roadways buses, that's right. They help us moving. We live those travellers explorers Who go out & have no idea of how many days we'll stay there & when we'll move to the next place. Well, just packing our bags & getting to station, took a bus the old fashioned way. That's how we reached Rishikesh.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        She has a room in an hostel here, i was to be crashing & enjoying. And we were back to talking normal. In the morning, we met her friends, ate, had good conversations, everybody welcomed me, it was so good.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Went on Ganga dips everyday, there is a way from there, ganga was quite near & obviously we know a spot. Went to a roadside swimming pool later, had pakoras & chai. All good but we weren't communicating to each other. And i never so alone while being with so many people & enjoying activities. It was like i knew no one & maybe that was even true.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Days passed, we kept exploring. Something in me was dead. I wanted to walk alone now, i went out in the evening, going through market, different looking people all over the place, got myself rudraksh bracelet that i still wear. And i sat down on the ghat, experienced ganga arti & the sunset at the same time. Never in my life i had so much pain settling for good all at once. I took no photos on that trip, 4-5 maybe. I sat alone for long, remembered my late grandfather, I could cry but it was different. Good deep breath & i was sailing through mental health.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        A call from Jaipur, my friend was meeting his ex, wanted me to be with him. She got me munchies, gave me a warm & healing hug, had me dropped at the bus station.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">Understanding</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Well, the thought of touching her disturbed me.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Well, we met again. And it was like fresh. We had our friends, she was in the city, everybody was excited. Only this time i was focusing on gestures.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        And i guessed what must have went wrong.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I remember she telling me about her past, the way it was abused was tragic, the way she survived & thriving is an absolute success story. When I'd slide my hand on her hair something must be wrong with that. Because that's not something I normally do. It's just i make fun of some situations and did this gesture to express that. Maybe this takes her back to her memories. Maybe that's how her ptsd must have been triggered. All this while i was to blame myself. I went on google & read everything about her conditions. I grew up a little more. Finally, i knew that ptsd not only triggers when they're touched violently, it all depends on the individual living with it. We should be educated to take care of the people around us. We need to be aware. All of us can do better.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Mental health can affect any relationship if one's not aware.
      </p>
      
      <p class="mb-10 text-base sm:text-lg text-gray-600 leading-relaxed">
        When i was moving to Mumbai a person wrote to me "wish you many stories" and the very first day the city introduced me to a beautiful person with a huge travelling bag & I can't thank the universe & myself enough for that. I became a better friend & we have so much to cherish for life. Healthy long lasting relationships are not found but built together.
      </p>
    `,
    },
    {
        id: '3',
        title: 'Cigarettes',
        date: 'May 15, 2023',
        image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749045727/2tt_vvcvga.jpg',
        excerpt:
            'Exploring how vulnerability creates connection in both visual and written narratives.',
        content: `
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I still wonder why I've felt so sad & did not want to get up to wash my face. To get out in public in meet those people. I need therapy? Well i think everybody in this world needs it. Did i go to therapy? Yes I did. Did i helped people in going to therapy? Yes I did. So everything was my brains fault? I don't know, you tell me!
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Do you remember the movie "Lagaan"? There's a disabled character named "Kachra" an important character no doubt. I have got multiple deformities in my body & Kachra had one wrist twisted & pointed down. I have my both hands that way! If the character was not named as "Kachra" i would not be bullied in my childhood. The movie plot would still the same, everything would be same but i would not get bullied. They just had to NAME that character anything decent. Because bullies are always looking for new ways to bully. To make people laugh & think they're cool. You make 10 people sad & 20 people laugh & 5 people to encourage that being funny can make them popular. You show the data of 20 people out of 30. It's a success.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">Well, I was bullied. How?</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Aye Kachra copy de na.
        & first time in my life i threw an iron chair at the guy & then grabbed his neck, asked him to try his joke once again.
        He was bleeding. I ran away! Didn't go to school for 3 days. A phone call from school rang and i had the phone with me so I gave it to my cousin instead of my parents. They told her that the guy i hit has an appendix surgery two days before. And his parents are looking for me!
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I had to go to school to face what i did.
        I was standing facing the principal that's when a voice came "Arey Lucky (my nickname) tu?" And saw him, it was my paying guest. And the guy that i hit was his younger brother.
        Well, everything was sorted. I was friends with the bullies. I was never bullied again. But i still saw them bullying others.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I changed nothing in this world. Absolutely nothing. But i was glad that i made way to save myself. I changed the school & with new people comes with other bullies.
        I had bullies as friends now so yeah i could atleast try defending. But the truth was my future was going into darkness. I was not proud of my violence, it broke me. Never had a decent friends for a long time. Until i did & they are still the best people i have in my life.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        There's no problem in a joke. You can throw me any type of dark joke, even i know people who send these, we laugh. But i know that they are not bullies, the jokes are not targetted.
        Jokes are beautiful. You joke about mental health bipolar disorder you educate the world about it. You joke about someone's death it's a humorous way to remember them. But when they are used to make people hurt or make some people hurt to make other people laugh.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Now I'm not saying that jokes are the reason, the reason is only the bullies because they like doing it. Maybe because they like the attention or idk what moves them. It just bad.
        & It gets difficult & there's nothing that we can do other than shut up & talk about forgiveness & forgetting & become a better person than them & have better standards. Well that's what we do.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        But wheneven i feel alone & depressed i just wish that the perticular condition of my body didn't exist. So that atleast i could get up & wash my face & go out to have fun.
        I still wonder what people who have more percentage of disability than me do & think & process. Wheelchair users who face violence and they can't even stand up to defend themselves. I am still on my way to learn alot to manage my thoughts. Education taught me nothing on this. It's just people everywhere Hey you're an insipiration, you work so hard, i pray for you everyday or people in the shoot be like at first I thought how would you this? But then I saw you doing this & was impressed. Well Okay? I am doing it because i know i can do this. That's no reason to be impressed but just know How i managed to be here. What mentalities & situations I had to go through to be here & how much I'll be facing in the future. I'm ready for it though. You can joke about it & my sarcasm will be there. But you know we're not at our emotional best all the times. And that's okay too.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">People say they want to go back</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        People say they want to go back to those school days. They miss the way they lived, classes, teachers, friends. It was horrifying for me. And it continued till i passed my graduation. Then we all grew up & now i don't see many bullies just some people who thinks they're definitely better than me. And others who are beautiful and overwhelms my heart. I'm glad i grew up, I'm glad i cannot go back to past because i still don't know how i would change it. I'm glad i can write this. I'm glad that i may have some people who is going to read everything that i write no matter long it gets.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Thank you, without you, this would feel like I'm talking to myself & honestly when i cannot write, i try to wake up, i try to wash my face but in the reality i try not to wake up, i try to stay in bed as long as possible. I think something & then i counter myself with the opposites. And i get tired without doing anything.
      </p>
      
      <p class="mb-10 text-base sm:text-lg text-gray-600 leading-relaxed">
        I am fine though, i am absolutely fine. These are just somedays or weeks when i think, why me?
        Then i look & read those people who are looking for the same answer as me. In the meanwhile we do art. And till death we'll do art.
        You're not alone. #takecareofyourself
      </p>
    `,
    },
    {
        id: '4',
        title: 'Ashes to Intention',
        date: 'June 22, 2023',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        excerpt:
            'From rejection to redemption: my journey through addiction and finding strength in art.',
        content: `
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I have written about being bullied in my young days, and I'm so proud of that note that I'll re-share it someday. But today, it's about facing rejection. And I am talking about those same days when I felt it hard hitting. Being bullied in school, building up my tribe, and getting rejected by the same people Everybody was the same in a different way.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I had quite good confidence after physical fights with the people in my class, slapping some on the roads; aggression was there, violent behavior; it was working out that "I wasn't the one to need your sympathy." This message was being cleared out loud.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        One day outside of my classroom, three of my seniors were standing, one of whom happens to be my friend because we live in the same neighbourhood. I knew they were well connected and would save me if I was in trouble. Well, I went close to them; they looked at me in the eye, denied using his gesture, and said "go away." Why? They are ashamed of a disabled person being with them in front of everybody. And I came out so broken that I took two steps back, went to my classroom, which was 10th grade, sat on my desk, and started trying to cope with utter frustration, humiliation, and falling.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        It was time for me to have my first cigarette.
        I coped up sooner than I expected.
        It was a new world that was exposed to me.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">A New Identity</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Cigarettes made me look strong, and the most important thing was networking, which used to happen on spots, inside small gullies, famous ones. I saw the shittiest people there. Everybody else knew I'm not the same anymore; bullying me or even a small inconvenience to my emotions will have rough consequences. I may kill or I might get killed.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        But I'm not living in fear and silence.
        By the time I reached grade 12, my name had been published in the newspaper for being involved in violence.
        I changed my city but was still stuck in engineering; later, I changed my life.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I did 3D visual arts, met beautiful people, shot photos, started reading and writing, and was on a complete mission to be refined as well as I could.
        be. I wrote stories in English with such bad grammar, yet i never stopped. I travelled to cities and countries and found mental strength in being on mountains. Everyday, I strive to become a better writer, a better photographer, a better listener, a better friend, and a better human. Shot so many people, strong ones, cancer survivors, people with disabilities, people with scars & disability after accidents, people with vitiligo, alopecia, tattooed people getting their moments needled to their skin, and at the same time, the feeling of something that'll stay with your body even after its death, like a book sent directly to heaven. Nothing feels more inspiring.
      </p>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        I owe my life with disability to Art.
      </p>
      
      <h3 class="text-xl font-light mb-4 mt-8">Breaking Free</h3>
      
      <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        2022: We had to make more changes.
        I'm glad to announce that, from that first cigarette to the last one I smoked, it was around 12 years.
        I am glad to announce that I don't smoke cigarettes anymore. It's been 3.5 months, and I hope to never do it again. I collapsed, had fever, nicotine withdrawals, saved myself like a hero. I will continue strengthening, I will continue healing to the max, and I hope that relapse never happens. I promise that even if it does, I'll continue healing.
      </p>
      
      <p class="mb-10 text-base sm:text-lg text-gray-600 leading-relaxed">
        I hope to survive through the hardest phases of my sorrows, and I hope one when I'm at my weakest peak of emotional health, I reject the idea of taking any substances. I hope to let it pass through easy,
        That's the goal.
        Showing up every day, taking in the good morning sunshine, and living the life with passion & acceptance.
        That's the plan.
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

                <div
                    className="aspect-[16/9] bg-gray-100 overflow-hidden mb-10 rounded-lg shadow-sm"
                    data-oid="yr2xjhs"
                >
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
