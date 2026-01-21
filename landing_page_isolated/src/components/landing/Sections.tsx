"use client";

import { motion } from "framer-motion";

const PARTNERS = [
    { name: "Partner 1", logo: "/partners/partner-1.png" },
    { name: "Partner 2", logo: "/partners/partner-2.png" },
    { name: "Partner 3", logo: "/partners/partner-3.png" },
    { name: "Partner 4", logo: "/partners/partner-4.png" },
    { name: "Partner 5", logo: "/partners/partner-5.png" },
    { name: "Partner 6", logo: "/partners/partner-6.png" },
    { name: "Partner 7", logo: "/partners/partner-7.png" },
];

export function PartnerTrack() {
    return (
        <div className="w-full bg-black py-16 overflow-hidden border-y border-white/5">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex shrink-0 items-center justify-around gap-20 px-10"
                >
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                        <img
                            key={i}
                            src={partner.logo}
                            alt={partner.name}
                            className="h-10 md:h-16 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export function AboutVirtualLaunch() {
    return (
        <section className="bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(8,8,8,1)_100%)] py-24 md:py-48 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start"
                    >
                        <div className="lg:w-1/2">
                            <span className="text-[#C5A059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">The Inaugural Event</span>
                            <h2 className="text-4xl md:text-7xl text-white font-serif leading-[1.1] mb-8">
                                What is the Faith Nexus Global Virtual Launch?
                            </h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="w-full aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/10 shadow-3xl mt-12"
                            >
                                <img
                                    src="/vii_launch_virtual_activation_ui_1768775852201.png"
                                    alt="Virtual Launch Experience"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 space-y-10 group">
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                The Faith Nexus 2026 Global Virtual Launch is a live online broadcast hosted on {" "}
                                <span className="text-white font-medium italic underline decoration-[#C5A059]/40 underline-offset-8">TalkWorld</span> {" "}
                                and relayed across key social platforms. It is the official global introduction to:
                            </p>

                            <ul className="space-y-6">
                                {[
                                    { label: "Faith Nexus 2026", sub: "A four-day summit in Pretoria (20–23 October 2026)" },
                                    { label: "Our identity", sub: "Kingdom Voices Global Reach." },
                                    { label: "Our 2026 Theme", sub: "Roots Revelation Renaissance" },
                                    { label: "The 7 Pillars Framework", sub: "That shapes the entire movement" }
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6 items-start"
                                    >
                                        <div className="mt-2 w-2 h-2 rounded-full bg-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.8)] shrink-0" />
                                        <div>
                                            <span className="text-white font-bold tracking-wide block mb-1 uppercase text-sm">{item.label}</span>
                                            <span className="text-white/50 text-lg md:text-xl font-light">{item.sub}</span>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="pt-10 space-y-12">
                                <p className="text-xl text-white/60 font-light leading-relaxed">
                                    You will hear the vision, see the structure, and discover how you and your team can become
                                    part of Faith Nexus 2026.
                                </p>

                                <div className="space-y-10">
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                        <span className="text-white font-serif italic text-2xl">Secure your free place now –</span>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-10 py-5 bg-[#C5A059] text-black rounded-full font-sans font-black text-lg tracking-tight hover:shadow-[0_0_40px_rgba(197,160,89,0.3)] transition-all"
                                        >
                                            Register for the Virtual Launch
                                        </motion.button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const VISION_CARDS = [
    {
        title: "Grow & Sustain",
        desc: "Learn how to grow, fund and sustain your content mission with sustainable and scalable content growth plans.",
        image: "/grow-sustain-v2.png",
    },
    {
        title: "Kingdom Funding",
        desc: "Discover funding and monetisation pathways intentionally aligned with Kingdom values and ethics.",
        image: "/kingdom-funding.png",
    },
    {
        title: "Network & Partner",
        desc: "Connect with platform partners, publishers, broadcasters, funders and world-class mentors.",
        image: "/network-partner.png",
    },
    {
        title: "Practical Systems",
        desc: "Walk away with tangible frameworks, systems and contacts, not just inspiration and notes.",
        image: "/practical-systems.png",
    },
];

export function TheVision() {
    return (
        <section className="bg-[radial-gradient(circle_at_top_left,rgba(15,15,15,1)_0%,rgba(8,8,8,1)_100%)] py-24 md:py-48 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <header className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#C5A059] uppercase tracking-[0.3em] font-bold text-sm mb-4 block"
                    >
                        The Nexus Advantage
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl text-white font-serif mb-8"
                    >
                        Why Faith Nexus?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-white/60 font-light leading-relaxed"
                    >
                        At Faith Nexus 2026, you won’t just sit in sessions—you’ll be equipped as a creator and leader. We move from inspiration to application.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {VISION_CARDS.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-[#111] border border-white/10 p-10 rounded-[2rem] hover:border-[#C5A059]/40 transition-all duration-700 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <h3 className="text-2xl text-white font-serif mb-4 relative z-10">{card.title}</h3>
                            <p className="text-white/50 text-base leading-relaxed relative z-10">{card.desc}</p>

                            {/* Subtle Icon/Image Placeholder */}
                            <div className="mt-8 h-32 w-full bg-white/5 rounded-2xl overflow-hidden relative z-10 border border-white/5">
                                <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const LAUNCH_AUDIENCE = [
    {
        title: "Christian Content Creators & Influencers",
        desc: "YouTubers, podcasters, short-form creators, bloggers, filmmakers, digital evangelists and storytellers who want to grow, fund and sustain their content mission without compromising their message.",
        image: "/Content_Creators.png",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l5 5-5 5" /><path d="M4 4v7a4 4 0 0 0 4 4h12" /></svg>
        )
    },
    {
        title: "Pastors, Church & Ministry Leaders",
        desc: "Senior leaders, communications pastors, media and worship teams seeking a clearer, more strategic approach to church media and discipleship in a digital world.",
        image: "/Church_Leaders2.png",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
        )
    },
    {
        title: "Media & Broadcasting Professionals",
        desc: "Those serving in Christian or mainstream media—TV, radio, online platforms—who want to anchor their work in Kingdom values while engaging real-world audiences.",
        image: "/Media_Teams.png",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></svg>
        )
    },
    {
        title: "Educators, Trainers & Theological Leaders",
        desc: "Principals, lecturers, curriculum designers, Bible school and discipleship leaders working at the intersection of education, theology and media.",
        image: "/Creative_Artists.png",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
        )
    },
    {
        title: "Technologists & Platform Builders",
        desc: "Developers, product managers, innovation leads and tech founders designing platforms, apps and tools for faith, discipleship and social impact.",
        image: "/Tech_Innovators.png",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
        )
    },
    {
        title: "Mission, NGO & Marketplace Leaders",
        desc: "Those using storytelling, campaigns and digital tools to serve the poor, fight injustice, support governance reforms, and disciple nations.",
        image: "/Kingdom_Professionals.png",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
        )
    },
    {
        title: "Youth & Emerging Leaders (18–35)",
        desc: "Young voices sensing a call to speak, write, create and lead – in church, online, in business or public life.",
        image: "/Global_Storytellers.png",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
        )
    },
];

export function WhoShouldJoin() {
    return (
        <section className="bg-[radial-gradient(circle_at_bottom_left,rgba(25,25,25,1)_0%,rgba(8,8,8,1)_100%)] py-24 md:py-48 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <header className="mb-24 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#C5A059] uppercase tracking-[0.3em] font-bold text-sm mb-4 block"
                    >
                        Community Alignment
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl text-white font-serif mb-8"
                    >
                        Who Should Join the <br className="hidden md:block" />Virtual Launch?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-[#C5A059] font-light"
                    >
                        The event is <span className="text-white font-bold italic">FREE</span> and ideal for:
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                    {LAUNCH_AUDIENCE.map((item, i) => (
                        <div key={i} className="group h-[480px] [perspective:1500px]">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                                className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                            >
                                {/* Front Face */}
                                <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-[#1a1a1a] border border-white/20 overflow-hidden [backface-visibility:hidden] shadow-2xl">
                                    <div className="h-1/2 w-full relative overflow-hidden">
                                        <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                                        <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/30 shadow-xl">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <h3 className="text-2xl md:text-3xl text-white font-serif mb-6 tracking-tight leading-tight group-hover:text-[#C5A059] transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="w-16 h-1.5 bg-[#C5A059] rounded-full group-hover:w-32 transition-all duration-500" />
                                    </div>
                                    <div className="absolute bottom-10 left-10 flex items-center gap-3 text-white/40 text-xs font-black uppercase tracking-[0.4em] group-hover:text-[#C5A059] transition-colors">
                                        <span>Hover to Pop Mission</span>
                                        <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                                    </div>
                                </div>

                                {/* Back Face (Flip Reveal) */}
                                <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-white p-12 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_40px_100px_rgba(197,160,89,0.3)] border-4 border-[#C5A059]">
                                    <div className="mb-10 text-[#C5A059]">
                                        <div className="w-16 h-16 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <p className="text-2xl md:text-3xl text-black font-serif italic font-semibold leading-[1.3] mb-12">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] bg-[#F9F6EF] text-[#866D3C] self-start px-8 py-4 rounded-full border border-[#C5A059]/20 shadow-sm">
                                        Kingdom Mission
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-32 pt-16 border-t border-white/10 text-center"
                >
                    <p className="text-white/80 text-xl md:text-3xl font-light italic max-w-5xl mx-auto leading-relaxed">
                        "Whether you are just starting out or already leading at scale, the Virtual Launch will help you
                        locate yourself within the <span className="text-[#C5A059] font-bold underline decoration-white/20 underline-offset-8">Faith Nexus</span> ecosystem."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}


export function WhatYouWillExperience() {
    const experiences = [
        {
            title: "Vision & Theme Unveiled",
            items: [
                "Hear the Faith Nexus story and why God is highlighting Kingdom voices in this generation.",
                "Understand the 2026 theme “Roots. Revelation. Renaissance.” – how it will shape the four days in Pretoria and the content we create going forward."
            ],
            image: "/vii_launch_roots_renaissance_light_1768776595138.png"
        },
        {
            title: "The 7 Pillars Framework",
            items: [
                "A clear, visual introduction to the 7 Pillars of Faith Nexus: Faith & Spiritual Life · Media & Communication · Technology & Innovation · Governance & Public Life · Education & Discipleship · Economy & Enterprise · Arts & Culture.",
                "See how your own calling and content fits into one or more of these pillars."
            ],
            image: "/vii_launch_7pillars_visual_1768775807681.png"
        },
        {
            title: "Covenant Conversations Spotlight",
            items: [
                "Meet Jewish and Christian leaders introducing Covenant Conversations – a permanent platform that explores the Jewish roots of the Christian faith and why “Roots” matters for preaching, teaching, worship and content."
            ],
            image: "/vii_launch_covenant_conversations_1768775836493.png"
        },
        {
            title: "Creator & Industry Focus",
            items: [
                "Hear from practitioners in the creator economy—YouTubers, podcasters, media leaders and tech founders.",
                "Gain a short, high-impact mini-masterclass on digital content, growth and monetisation from a Kingdom perspective."
            ],
            image: "/vii_launch_v3_tech_gold_editorial_1768777167060.png"
        },
        {
            title: "FaithNexus100 & Next Steps",
            items: [
                "Discover FaithNexus100 – 100 Most Influential Christians Impacting Africa – and how nominations will work.",
                "See how to Register for the Faith Nexus 2026 Summit, Engage with Nexus Pitches, and Participate in the Global Short-Form Challenge."
            ],
            image: "/vii_launch_v3_community_editorial_1768777150976.png"
        }
    ];

    return (
        <section className="bg-[#080808] py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <header className="mb-32 text-center max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#C5A059] uppercase tracking-[0.4em] font-bold text-sm mb-6 block"
                    >
                        Program Itinerary
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-8xl text-white font-serif mb-12 tracking-tight leading-[1.1]"
                    >
                        What You Will Experience <br /> on 28 March 2026
                    </motion.h2>
                    <div className="w-24 h-1 bg-[#C5A059] mx-auto opacity-30" />
                </header>

                <div className="space-y-48">
                    {experiences.map((exp, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-3/5 aspect-square md:aspect-[16/10] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl group relative"
                            >
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-2/5 space-y-10"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6">
                                        <span className="text-7xl font-serif text-[#C5A059]/10">0{i + 1}</span>
                                        <h3 className="text-3xl md:text-5xl text-white font-serif tracking-tight leading-tight">
                                            {exp.title}
                                        </h3>
                                    </div>
                                    <div className="w-20 h-1.5 bg-[#C5A059]" />
                                </div>

                                <ul className="space-y-10">
                                    {exp.items.map((item, idx) => (
                                        <li key={idx} className="flex gap-6 group">
                                            <div className="mt-2.5 w-3 h-3 rounded-full bg-[#C5A059] shrink-0 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
                                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-64 p-12 md:p-32 rounded-[5rem] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1)_0%,rgba(0,0,0,0)_70%)] border border-[#C5A059]/20 text-center relative overflow-hidden group shadow-3xl"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
                    <div className="max-w-5xl mx-auto space-y-16">
                        <p className="text-3xl md:text-5xl text-white font-serif italic leading-[1.3] text-white/90">
                            "You’ll leave the Virtual Launch with <span className="text-[#C5A059] not-italic font-bold">clarity, inspiration,</span> and concrete ways to participate in Faith Nexus 2026."
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-14 py-7 bg-[#C5A059] text-black rounded-full font-serif text-2xl font-black shadow-[0_0_50px_rgba(197,160,89,0.2)] hover:shadow-[0_0_80px_rgba(197,160,89,0.5)] transition-all"
                            >
                                Secure Your Experience
                            </motion.button>
                            <div className="flex flex-col items-center md:items-start">
                                <span className="text-white/60 uppercase tracking-[0.3em] text-xs font-black">Limited Digital Capacity</span>
                                <span className="text-[#C5A059] text-xs font-bold">Register for Free Access</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const MOMENTS = [
    {
        type: "Online Event",
        title: "1. Global Virtual Activation",
        date: "27 March 2026 – Free Online Access",
        desc: "A free, one-day global online event on TalkWorld, giving a first look at the Faith Nexus 2026 vision and theme: Roots Revelation Renaissance.",
        points: [
            "The 7 Pillars Framework",
            "Covenant Conversations (Jewish–Christian platform)",
            "FaithNexus100 Honours Gala Preview",
            "Industry Exhibition, Nexus Creators Lounge & Studio",
            "Global Reels Short-Form Challenge featured entries"
        ],
        image: "/virtual-slide-1.jpg",
        reverse: false
    },
    {
        type: "In-Person Experience",
        title: "2. Faith Nexus 2026 Summit",
        date: "20–23 October 2026 – Pretoria, SA",
        desc: "Four days in a 10,000-seat auditorium featuring morning & evening plenary sessions, pillar labs, and creator masterclasses.",
        points: [
            "Integrated Creator Masterclass Moments",
            "Covenant Conversations cultural expressions",
            "FaithNexus100 Honours Gala Night",
            "Industry Exhibition & Nexus Studio",
            "Live recordings of NexTalks and worship moments"
        ],
        image: "/summit-slide-1.jpg",
        reverse: true
    }
];

export function MajorMoments() {
    return (
        <section className="bg-[radial-gradient(circle_at_bottom_right,rgba(18,18,18,1)_0%,rgba(8,8,8,1)_100%)] py-24 md:py-48">
            <div className="container mx-auto px-6">
                <header className="text-center mb-32">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#C5A059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block"
                    >
                        Join the Movement
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-8xl text-white font-serif"
                    >
                        Two Major Moments
                    </motion.h2>
                </header>

                <div className="space-y-32">
                    {MOMENTS.map((moment, i) => (
                        <div key={i} className={`flex flex-col ${moment.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 md:gap-24`}>
                            <motion.div
                                initial={{ opacity: 0, x: moment.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="w-full lg:w-1/2 aspect-[4/5] md:aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group"
                            >
                                <img src={moment.image} alt={moment.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="w-full lg:w-1/2 space-y-8"
                            >
                                <div>
                                    <span className="text-white/40 uppercase tracking-widest text-sm mb-4 block font-bold">{moment.type}</span>
                                    <h3 className="text-4xl md:text-6xl text-white font-serif mb-4">{moment.title}</h3>
                                    <p className="text-[#C5A059] text-xl md:text-2xl font-semibold tracking-wide italic">{moment.date}</p>
                                </div>

                                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                                    {moment.desc}
                                </p>

                                <ul className="grid grid-cols-1 gap-4">
                                    {moment.points.map((point, j) => (
                                        <li key={j} className="flex items-start gap-4 text-white/50 text-base md:text-lg">
                                            <span className="text-[#C5A059] mt-1.5 shrink-0">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const STATS = [
    { value: "10,000+", label: "Delegates" },
    { value: "300,000+", label: "Digital Reach" },
    { value: "20+", label: "Kingdom Voices" },
    { value: "5M+", label: "Network Influence" },
];

export function ImpactMetrics() {
    return (
        <section className="bg-[#050505] py-24 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 text-center">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h2 className="text-4xl md:text-7xl text-white font-serif mb-4 font-black">{stat.value}</h2>
                            <p className="text-[#C5A059] uppercase tracking-[0.2em] text-xs md:text-sm font-bold opacity-80">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const AUDIENCE = [
    { label: "Media Professionals & Broadcasters", icon: "Mic" },
    { label: "YouTubers, Podcasters & Influencers", icon: "Camera" },
    { label: "Worship Leaders, Artists & Filmmakers", icon: "Palette" },
    { label: "Educators, Theologians & Leaders", icon: "BookOpen" },
    { label: "Technologists & Entrepreneurs", icon: "Cpu" },
    { label: "Pastors & Ministry Leaders", icon: "Home" },
    { label: "Governance, Policy & Civic Leaders", icon: "Shield" },
    { label: "Mission & NGO Leaders", icon: "Heart" },
    { label: "Youth & Young Adults Shaping Culture", icon: "Zap" },
];

export function WhoShouldAttend() {
    return (
        <section className="bg-[radial-gradient(circle_at_center,rgba(15,15,15,1)_0%,rgba(8,8,8,1)_100%)] py-24 md:py-48">
            <div className="container mx-auto px-6">
                <header className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#C5A059] uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
                    >
                        Core Community
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl text-white font-serif mb-8"
                    >
                        Who Should Attend?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-lg md:text-xl text-white/40 font-light max-w-2xl mx-auto"
                    >
                        Faith Nexus is for anyone called to communicate, create, lead or build with Kingdom impact.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {AUDIENCE.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.02, borderColor: "rgba(197, 160, 89, 0.4)" }}
                            className="bg-[#080808] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center gap-6 group transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500">
                                {/* Simplified Icon mapping - would use Lucide in real app */}
                                <div className="w-6 h-6 border-2 border-currentColor rounded-sm" />
                            </div>
                            <span className="text-white/80 text-lg font-semibold tracking-wide group-hover:text-white transition-colors">{item.label}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(197, 160, 89, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-6 bg-[#C5A059] text-black rounded-full font-sans font-black text-xl tracking-tighter transition-all"
                    >
                        View Tickets & Registration Options
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="bg-black pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_bottom,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <img src="/nexus-globe-v3.png" alt="Nexus Logo" className="w-16 h-16 mx-auto mb-12 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-pointer" />

                <h2 className="text-4xl md:text-6xl text-white font-serif mb-16 tracking-tight">Faith Nexus 2026</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm text-white/40 uppercase tracking-[0.2em] font-bold mb-24 max-w-4xl mx-auto">
                    <a href="#" className="hover:text-white transition-colors">Vision</a>
                    <a href="#" className="hover:text-white transition-colors">Summit</a>
                    <a href="#" className="hover:text-white transition-colors">Launch</a>
                    <a href="#" className="hover:text-white transition-colors">Connect</a>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-white/20 uppercase tracking-[0.3em]">
                    <p>© 2026 Faith Nexus. Roots Revelation Renaissance.</p>
                    <div className="flex gap-12">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export function EventDetails() {
    return (
        <section className="bg-[#0a0a0a] py-32 border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <header className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#C5A059] uppercase tracking-[0.4em] font-bold text-sm mb-4 block"
                    >
                        Save the Date
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl text-white font-serif"
                    >
                        Event Details
                    </motion.h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    {/* Left Column - Essentials */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-[#C5A059] uppercase tracking-[0.2em] font-bold text-sm mb-6 pb-2 border-b border-[#C5A059]/20 w-fit">Essentials</h3>
                            <div className="space-y-8">
                                <div>
                                    <p className="text-white text-3xl md:text-4xl font-serif leading-tight mb-2">Faith Nexus 2026 Global Virtual Launch</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-white/40 font-bold uppercase text-xs tracking-widest w-24">Date:</span>
                                        <span className="text-white text-xl">Saturday, 28 March 2026</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-white/40 font-bold uppercase text-xs tracking-widest w-24">Time:</span>
                                        <span className="text-white text-xl">17:00–19:30 (GMT+2 / South Africa time)</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-white/40 font-bold uppercase text-xs tracking-widest w-24">Access:</span>
                                        <span className="text-[#C5A059] text-xl font-bold italic">Free Registration</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* User Journey */}
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h4 className="text-white/40 uppercase tracking-widest text-[10px] font-black mb-6">User Journey</h4>
                            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm font-medium">
                                <span>You register online</span>
                                <span className="text-[#C5A059]">→</span>
                                <span>Receive TalkWorld link</span>
                                <span className="text-[#C5A059]">→</span>
                                <span>Log in on the day</span>
                                <span className="text-[#C5A059]">→</span>
                                <span>Live experience</span>
                                <span className="text-[#C5A059]">→</span>
                                <span>Replay & next steps</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - How It’s Delivered */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-[#C5A059] uppercase tracking-[0.2em] font-bold text-sm mb-6 pb-2 border-b border-[#C5A059]/20 w-fit">How It’s Delivered</h3>
                            <ul className="space-y-8">
                                <li className="flex gap-6">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#C5A059] shrink-0" />
                                    <div>
                                        <span className="text-white font-bold block mb-1">Primary Platform</span>
                                        <span className="text-white/60 text-lg">TalkWorld (faith-focused digital events and content platform)</span>
                                    </div>
                                </li>
                                <li className="flex gap-6">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#C5A059] shrink-0" />
                                    <div>
                                        <span className="text-white font-bold block mb-1">Relayed On</span>
                                        <span className="text-white/60 text-lg">YouTube, Facebook and selected social channels</span>
                                    </div>
                                </li>
                                <li className="flex gap-6">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#C5A059] shrink-0" />
                                    <div className="space-y-4">
                                        <span className="text-white font-bold block">Format</span>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-white/50 text-sm">
                                            <li>• Live worship & hosting</li>
                                            <li>• Vision & theme segments</li>
                                            <li>• Short teachings and interviews</li>
                                            <li>• Creator & industry spotlight</li>
                                            <li>• Chat engagement, polls and live Q&A</li>
                                            <li>• Clear calls to action</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <motion.button
                            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-6 bg-white/5 border border-white/10 hover:border-[#C5A059]/40 rounded-2xl text-white font-bold tracking-tight transition-all flex items-center justify-center gap-4 group"
                        >
                            <span>Register Free Now – Join the Global Virtual Launch</span>
                            <svg className="group-hover:translate-x-2 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function RegistrationSection() {
    return (
        <section id="register" className="bg-black py-32 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#C5A059 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl text-white font-serif mb-8"
                        >
                            Register for the <br /> Virtual Launch
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-2xl text-white/60 font-light leading-relaxed mb-4"
                        >
                            Complete the short form below to receive your TalkWorld access link, calendar invite and post-event resources. Registration is free, but required.
                        </motion.p>
                        <div className="w-20 h-1 bg-[#C5A059] mx-auto opacity-40" />
                    </header>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-[#111] border border-white/10 p-8 md:p-16 rounded-[3.5rem] shadow-4xl relative"
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-white/40 uppercase tracking-widest text-[10px] font-black ml-4">First Name *</label>
                                    <input type="text" required placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C5A059]/50 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white/40 uppercase tracking-widest text-[10px] font-black ml-4">Last Name *</label>
                                    <input type="text" required placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C5A059]/50 transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/40 uppercase tracking-widest text-[10px] font-black ml-4">Email Address *</label>
                                <input type="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C5A059]/50 transition-colors" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-white/40 uppercase tracking-widest text-[10px] font-black ml-4">Country *</label>
                                    <select required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C5A059]/50 transition-colors appearance-none scrollbar-hide">
                                        <option value="" disabled selected>Select Country</option>
                                        <option value="ZA" className="bg-[#111]">South Africa</option>
                                        <option value="US" className="bg-[#111]">United States</option>
                                        <option value="UK" className="bg-[#111]">United Kingdom</option>
                                        <option value="NG" className="bg-[#111]">Nigeria</option>
                                        <option value="KE" className="bg-[#111]">Kenya</option>
                                        <option value="GH" className="bg-[#111]">Ghana</option>
                                        <option value="OTHER" className="bg-[#111]">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white/40 uppercase tracking-widest text-[10px] font-black ml-4">Primary Role *</label>
                                    <select required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C5A059]/50 transition-colors appearance-none">
                                        <option value="" disabled selected>Select Role</option>
                                        <option className="bg-[#111]">Pastor / Church Leader</option>
                                        <option className="bg-[#111]">Creator / Influencer</option>
                                        <option className="bg-[#111]">Media Professional</option>
                                        <option className="bg-[#111]">Educator / Theologian</option>
                                        <option className="bg-[#111]">Technologist / Innovator</option>
                                        <option className="bg-[#111]">NGO / Missions</option>
                                        <option className="bg-[#111]">Student / Youth</option>
                                        <option className="bg-[#111]">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/40 uppercase tracking-widest text-[10px] font-black ml-4">Organisation / Church / Platform (Optional)</label>
                                <input type="text" placeholder="e.g. Grace Ministry" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C5A059]/50 transition-colors" />
                            </div>

                            <div className="flex items-start gap-4 p-4">
                                <input type="checkbox" required className="mt-1.5 w-5 h-5 rounded border-white/20 bg-white/5 accent-[#C5A059]" />
                                <p className="text-white/40 text-sm leading-relaxed">
                                    I agree to receive event-related emails from Faith Nexus and WCCCS and understand I can unsubscribe at any time.
                                </p>
                            </div>

                            <div className="pt-8">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-6 bg-[#C5A059] text-black font-black text-2xl rounded-2xl shadow-[0_20px_40px_rgba(197,160,89,0.2)] hover:shadow-[0_20px_60px_rgba(197,160,89,0.4)] transition-all"
                                >
                                    Get My Free Access Link
                                </motion.button>
                            </div>

                            <p className="text-center text-white/30 text-xs mt-8 max-w-lg mx-auto leading-relaxed">
                                You will receive a confirmation email within a few minutes. If you do not see it, please check your spam/junk folder or contact <a href="mailto:info@faithnexus.digital" className="text-[#C5A059]/60 hover:text-[#C5A059] transition-colors underline">info@faithnexus.digital</a>.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
