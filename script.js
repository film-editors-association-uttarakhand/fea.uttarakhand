// 1. Smooth Scrolling ONLY for same-page hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
        }
    });
});

// 2. Advanced Unified Event Generation (Past & Upcoming)
const upcomingEvents = [];
const pastEvents = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const annualAwardEvent = { 
    name: "Annual FEA Creative Awards & Gala", desc: "Flagship event celebrating post-production talent.",
    time: "6:00 PM - 11:00 PM", location: "LP Vilas Luxury Hotel, Dehradun",
    fullDesc: "The Annual FEA Creative Awards is our most prestigious night of the year. Awards are distributed across 15 categories including Best Feature Edit, Best Visual Effects, and Best Color Grade.",
    speakers: "Narendra Negi (President), Sumit (Secretary)",
    agenda: ["6:00 PM - Red Carpet & Networking", "7:30 PM - President's Address", "8:00 PM - Award Distribution", "10:00 PM - Gala Dinner"]
};

const eventTemplates = [
    { name: "Monthly Portfolio Review", desc: "1-on-1 critiques on recent member projects.", fullDesc: "Senior editors sat down with junior members for dedicated 1-on-1 sessions focusing on pacing and narrative structure.", time: "1:00 PM - 4:00 PM", location: "Graphic Era University Auditorium, Dehradun", speakers: "Core Committee Members", agenda: ["1:00 PM - Check-in", "1:30 PM - 1-on-1 Sessions", "3:30 PM - Group Feedback"] },
    { name: "Workflow Seminar & Asset Drop", desc: "Breakdown on timeline optimization.", fullDesc: "Breakdown on optimizing timeline performance for 4K/8K footage, proxy workflows, and efficient media management. Free asset drives distributed.", time: "10:00 AM - 2:00 PM", location: "IT Park, Sahastradhara Road, Dehradun", speakers: "Pranit Bisht", agenda: ["10:00 AM - Plugins", "11:00 AM - Timeline Optimization", "1:00 PM - Asset Drop"] },
    { name: "Graphic Designers Networking", desc: "Meetup for the graphic design wing.", fullDesc: "A relaxed evening dedicated to the graphic design and concept art wings. Discussions revolved around typography trends and freelance client management.", time: "5:00 PM - 8:00 PM", location: "Cafe De Piccolo, Rajpur Road, Dehradun", speakers: "Shivani Joshi", agenda: ["5:00 PM - Drinks", "5:30 PM - Typography Trends", "6:30 PM - Open Mic"] },
    { name: "Guest Lecture: Cinematic Storytelling", desc: "Director breaks down the editing process.", fullDesc: "A renowned regional film director gave a detailed breakdown of the collaborative process between the editing room and the director's chair.", time: "4:00 PM - 7:00 PM", location: "IRDT Auditorium, Dehradun", speakers: "Guest Director", agenda: ["4:00 PM - Intro", "4:30 PM - Scene Breakdown", "6:00 PM - Q&A"] },
    { name: "Short Film Competition Judging", desc: "Judging and sponsorship for regional filmmakers.", fullDesc: "FEA sponsored and judged the post-production categories for regional short films, awarding cash prizes.", time: "10:00 AM - 5:00 PM", location: "The Chalet, Nainital", speakers: "Sarvesh Kushwaha", agenda: ["10:00 AM - Screening", "1:00 PM - Panel", "4:30 PM - Results"] },
    { name: "VFX & Compositing Breakdown", desc: "Deep dive into green screen and tracking.", fullDesc: "An advanced session on tracking, rotoscoping, and seamless green screen compositing using After Effects and Nuke.", time: "11:00 AM - 3:00 PM", location: "STPI, Dehradun", speakers: "Sunita Dandriyal", agenda: ["11:00 AM - Tracking Basics", "12:30 PM - Advanced Roto", "2:00 PM - Compositing"] },
    { name: "Sound Design & Audio Mixing", desc: "Cleaning up dialogue and mixing Foley.", fullDesc: "A masterclass on the importance of audio in video editing, covering dialogue cleanup, EQ, and building immersive soundscapes.", time: "2:00 PM - 6:00 PM", location: "Doon University Senate Hall, Dehradun", speakers: "Mallika Arora", agenda: ["2:00 PM - Audio Cleanup", "3:30 PM - Foley Basics", "5:00 PM - Final Mixdown"] },
    { name: "Freelance Client Management", desc: "Business seminar for independent artists.", fullDesc: "Learn how to price your work, draft foolproof contracts, and manage difficult client feedback loops.", time: "3:00 PM - 6:00 PM", location: "The Solitaire Hotel, Dehradun", speakers: "Ronish (VP)", agenda: ["3:00 PM - Pricing Strategies", "4:00 PM - Contract Drafting", "5:00 PM - Handling Revisions"] },
    { name: "Advanced Typography for Posters", desc: "Design masterclass for film posters.", fullDesc: "A deep dive into font selection, visual hierarchy, and creating impactful titles for cinematic posters.", time: "1:00 PM - 4:00 PM", location: "WIC India, Dehradun", speakers: "Sachin & Devika", agenda: ["1:00 PM - Visual Hierarchy", "2:30 PM - Font Pairing", "3:30 PM - Review"] },
    { name: "Editing Psychology & Pacing", desc: "Why we cut when we cut.", fullDesc: "An analytical session looking at award-winning films to understand the psychological impact of holding a frame versus a quick cut.", time: "4:00 PM - 7:00 PM", location: "AMN Ghosh Auditorium, ONGC, Dehradun", speakers: "Nandini Nautiyal", agenda: ["4:00 PM - Theory of the Cut", "5:30 PM - Case Studies", "6:30 PM - Open Discussion"] },
    { name: "Advanced Color Grading (DI) Workshop", desc: "Masterclass on advanced nodes and HDR workflows.", fullDesc: "Intensive one-day workshop diving deep into DaVinci Resolve. Topics include advanced node tree structures, HDR workflow management, and cinematic look development.", time: "10:00 AM - 4:00 PM", location: "Doon Business School Auditorium, Dehradun", speakers: "Prerna (DI Specialist)", agenda: ["10:00 AM - Intro to HDR Standards", "11:30 AM - Advanced Node Trees", "2:00 PM - Live Project Breakdown", "3:30 PM - Q&A Session"]}
];

let recentEventIndices = [];

for (let year = 2023; year <= 2027; year++) {
    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
        let day = (year * 6 + monthIndex * 13) % 28 + 1;
        let fullDate = `${months[monthIndex]} ${day}, ${year}`;
        let eventObj;

        if (monthIndex === 9) {
            eventObj = { date: fullDate, ...annualAwardEvent };
        } else {
            let availableIndices = [];
            for (let i = 0; i < eventTemplates.length; i++) {
                if (!recentEventIndices.includes(i)) availableIndices.push(i);
            }

            let pickIndex = (year * 12 + monthIndex * 7) % availableIndices.length;
            let chosenTemplateIndex = availableIndices[pickIndex];

            recentEventIndices.push(chosenTemplateIndex);
            if (recentEventIndices.length > 7) recentEventIndices.shift();

            eventObj = { date: fullDate, ...eventTemplates[chosenTemplateIndex] };
        }

        if (year < 2026 || (year === 2026 && monthIndex <= 8)) {
            pastEvents.unshift(eventObj);
        } else {
            upcomingEvents.push(eventObj);
        }
    }
}

// 3. Member Profiles Data (Updated with New Members)
const memberProfiles = {
    "Narendra Negi": {
        role: "President",
        skills: ["Leadership", "Strategy", "Directing"],
        awards: "🏆 Best Leadership 2025, 🏆 Best Leadership 2024, 🏆 Creative Mindset 2023",
        experience: "15+ years",
        bio: "With over 15 years of relentless dedication to regional and national cinema, Narendra has been the ultimate guiding force behind the Uttarakhand film industry. Recognizing the fractured nature of post-production work in the state, he founded the FEA with a singular vision: to unite isolated artists, secure their fundamental workplace rights, and establish a thriving creative ecosystem. His expertise lies deeply in narrative structure and documentary filmmaking, having personally mentored dozens of young, aspiring editors across the state. Under his leadership, the association has grown from a handful of creators to a massive network of thousands. He continues to lobby for state-level recognition of post-production artists."
    },
    "Ronish": {
        role: "Vice President",
        skills: ["Studio Management", "Operations", "Client Relations"],
        awards: "🏆 Operational Excellence 2025, 🏆 Excellence in Management 2024",
        experience: "10+ years",
        bio: "Ronish is a strategic powerhouse with a comprehensive background in commercial video production, agency relations, and studio management. He oversees the complex operational framework of FEA, ensuring that our massive freelance community has access to fair, standardized contracts and baseline pay scales. He frequently hosts state-wide business seminars focusing on client management, freelance growth, and avoiding industry burnout. His ability to negotiate with large production houses has resulted in numerous exclusive partnerships that benefit all FEA members. He is the crucial bridge connecting the creative side of the association with the business realities of the film industry."
    },
    "Sumit": {
        role: "Secretary",
        skills: ["Administration", "Coordination", "Policy"],
        awards: "🏆 Outstanding Contribution 2025, 🏆 Administrative Pillar 2024",
        experience: "8+ years",
        bio: "Sumit is the administrative pillar of the association, managing all core member communications, internal policy drafting, and large-scale event coordination. Acting as the primary bridge between the executive committee and the 8,000+ general members, he ensures that every voice, from novice to veteran, is heard. He single-handedly organized the transition of our physical workshops to a hybrid cloud model, allowing members from remote Himalayan districts to access top-tier training. His meticulous record-keeping and dedication to dispute redressal have saved countless freelancers from unfair studio practices. He continues to streamline the onboarding process for new talent."
    },
    "Hemchand Pandey": {
        role: "Joint Secretary",
        skills: ["Coordination", "Outreach", "Member Relations"],
        awards: "🏆 Regional Leadership 2025, 🏆 Community Outreach 2024",
        experience: "7+ years",
        bio: "Hemchand operates as the vital right hand to the Secretary, ensuring that the FEA’s rapidly expanding network functions seamlessly across all districts of Uttarakhand. With the association now boasting over 8,000 members, he directly manages state-wide communications, fast-tracks membership approvals, and oversees the establishment of regional creative hubs in Kumaon and Garhwal. His grassroots approach ensures that freelance artists in remote Himalayan towns receive the exact same educational and legal resources as those in Dehradun. By actively touring the state and conducting local grievance meetings, Hemchand bridges the gap between the executive board and independent creators, building a truly unified industry front."
    },
    "Inder Singh": {
        role: "Treasurer",
        skills: ["Finance", "Budgeting", "Logistics"],
        awards: "🏆 Financial Excellence 2025, 🏆 Transparency Award 2024",
        experience: "7+ years",
        bio: "Inder handles all complex financial logistics for the association with absolute precision and transparency. From managing the internal funding required for state-wide technical workshops to allocating the massive budgets needed for the annual FEA awards gala, his financial acumen keeps the association thriving. He successfully secured bulk licensing deals for expensive software plugins and cloud storage, passing those savings directly down to the members. His transparent reporting style and strict auditing practices have built immense trust among both the committee and the external sponsors who fund our educational initiatives. He is the financial bedrock of the FEA."
    },
    "Pankaj Sharma": {
        role: "CTO / IT Head",
        skills: ["Cloud Architecture", "Server Pipelines", "IT Security"],
        awards: "🏆 Tech Innovator 2025, 🏆 Digital Excellence 2024",
        bio: "Pankaj is the mastermind behind the FEA’s robust digital infrastructure, transforming how post-production resources are distributed across the state. As the Chief Technical Officer, he oversees the association's massive cloud storage archives, securing petabytes of raw footage, digital assets, and high-end plugins for member access. He single-handedly designed the secure server pipelines that allow remote editors to collaborate in real-time with Dehradun-based studios without latency issues. Pankaj also spearheads cybersecurity for the association, ensuring that unreleased films and member portfolios remain strictly confidential and protected from piracy."
    },
    "Sarvesh Kushwaha": {
        role: "Executive Director / Senior Editor",
        skills: ["Film Editing", "VFX Supervision", "Cinematics"],
        awards: "🏆 Best Video Editor 2025, 🏆 Master of VFX 2025, 🏆 Best Video Editor 2024",
        experience: "5+ years",
        bio: "Sarvesh stands as the senior-most video editor of the Film Editor's Association, bringing unparalleled expertise and creative vision to the post-production industry of Uttarakhand. With an extensive and celebrated background in editing high-end feature films, his command over the editing suite has set the benchmark for regional cinematic storytelling. Beyond raw editing, Sarvesh is a master of VFX supervision and complex cinematics, seamlessly blending visual effects with live-action footage to create breathtaking visual narratives. As the Executive Director of the Video Editing wing, he oversees the technical curriculum, mentors the next generation of editors, and ensures that every major project meets global industry standards. His profound understanding of pacing, rhythm, and structural storytelling makes him a cornerstone of the FEA."
    },
    "Deepak": {
        role: "Post-Production Supervisor",
        skills: ["Workflow Design", "Troubleshooting", "Data Management"],
        awards: "🏆 Best Supervisor 2025, 🏆 Workflow Master 2024",
        experience: "4+ years",
        bio: "Deepak is the ultimate technical troubleshooter, ensuring flawless workflows between the editing, VFX, and audio mixing departments. His deep understanding of data management, proxy generation, and server-side rendering prevents massive bottlenecks in complex, multi-timeline studio projects. He built the FEA's standardized folder structures and server protocols that are now used by major production houses across Dehradun. When a project faces a catastrophic technical failure or corrupted media, Deepak is the one called in to salvage the timeline. His ability to optimize hardware for massive 8K raw files has saved studios hundreds of hours in rendering."
    },
    "Niharika": {
        role: "Associate Editor / Directorate",
        skills: ["Commercials", "Assembly", "Detail Oriented"],
        awards: "🏆 Rising Star Editor 2025, 🏆 Best Assistant Edit 2024",
        experience: "4+ years",
        bio: "Niharika represents the brightest emerging talent in the directorate, bringing incredibly fresh, modern pacing styles to both commercial edits and narrative films. Working directly under senior leadership, she assists in core curriculum planning for the association's younger members, bridging the gap between classic cinematic rules and modern, fast-paced digital retention strategies. Her meticulous attention to detail during the crucial assembly phase allows directors to see the skeleton of their film faster than ever. She is also a vocal advocate for increasing the presence of female editors in top-tier regional cinema."
    },
    "Payal Rawat": {
        role: "Post-Producer",
        skills: ["Scheduling", "Budgeting", "Producing"],
        awards: "🏆 Schedule Master 2025, 🏆 Outstanding Producer 2024",
        experience: "4+ years",
        bio: "Payal is the master of timelines, client deliverables, and post-production budgets. Acting as the crucial, high-stress link between the directors, the clients, and the editing suite, she shields the creative artists from external pressures so they can focus entirely on their craft. She is known for her airtight scheduling, ensuring that massive feature projects hit their distribution deadlines without forcing the editing team into extreme burnout. Her ability to break down a script and accurately project the required post-production hours and budget is unmatched in the state."
    },
    "Varun": {
        role: "Project Coordinator",
        skills: ["Timeline Versioning", "Logistics", "Client Logs"],
        awards: "🏆 Timeline Manager 2025, 🏆 Workflow Coordination 2024",
        experience: "4+ years",
        bio: "Operating at the chaotic intersection of production and post-production, Varun ensures that every massive studio timeline remains perfectly organized. Working directly under the Post-Producer, he handles daily timeline versioning, complex handoffs between the editing and VFX departments, and meticulous client review logs. His strict adherence to naming conventions and folder structures prevents critical media offline errors during crunch times. Varun acts as the crucial communication node, translating the director's abstract feedback into actionable technical tasks for the editing suite. His proactive approach keeps projects on schedule and within budget."
    },
    "Pranit Bisht": {
        role: "Resource Person",
        skills: ["Asset Management", "Tech Support", "Plugins"],
        awards: "🏆 Resourcefulness Award 2025, 🏆 Tech Guru 2024",
        experience: "3+ years",
        bio: "Pranit is the association's primary technological scout and resource manager. He is responsible for acquiring, testing, and distributing high-quality digital assets, industry-standard plugins, and secure cloud storage resources to the FEA's massive member base. He spends hours benchmarking the latest AI editing tools and hardware setups, eventually distilling this knowledge into easily digestible seminars for the community. If there is a new, faster way to mask a subject or clear up noisy audio, Pranit is the first to document the workflow and share it with the state's editors."
    },
    "Prerna": {
        role: "Colorist / DI",
        skills: ["DaVinci Resolve", "HDR", "Look Development"],
        awards: "🏆 Best Color Grade 2025, 🏆 DI Specialist of the Year 2024",
        experience: "3+ years",
        bio: "An absolute master of DaVinci Resolve, Prerna is responsible for crafting the final visual mood and emotional tone of the region's top films. She possesses a painter's eye for light and shadow, specializing in advanced node-tree structures, HDR workflows, and seamless camera-matching techniques. She regularly hosts the association's most sought-after masterclasses, teaching editors how to move beyond basic LUTs and truly understand color science. Her signature cinematic grades have elevated numerous low-budget regional films to look like high-end, international studio productions."
    },
    "Sarthak": {
        role: "Cinematics Supervisor",
        skills: ["Composition", "Cinematography", "Visual Flow"],
        awards: "🏆 Visual Storyteller 2025, 🏆 Best Cinematic Eye 2024",
        experience: "3+ years",
        bio: "Sarthak ensures that the visual framing, shot composition, and overall cinematic language remain perfectly consistent from the camera to the final render. Working closely with the color and VFX teams, acts as the guardian of the director's visual intent during the chaotic post-production phase. He has a profound understanding of lens distortion, aspect ratios, and spatial continuity, easily identifying and correcting framing errors before they reach the final cut. His deep knowledge of film theory makes him a vital consultant for indie filmmakers in Uttarakhand."
    },
    "Aryan": {
        role: "GFX Supervisor",
        skills: ["After Effects", "Title Sequences", "Motion Design"],
        awards: "🏆 Best Motion Graphics 2025, 🏆 Creative Tech Award 2024",
        experience: "3+ years",
        bio: "Aryan oversees all dynamic motion graphics, complex title sequences, and digital overlays, constantly pushing the boundaries of 2D animation within regional cinema. Using After Effects as his primary canvas, he transforms static data and plain text into gripping visual experiences. He is heavily involved in the commercial side of the industry, designing high-retention motion graphics for major brands and state-level advertising campaigns. His workshops on easing, graph editors, and kinetic typography are mandatory viewing for the younger FEA members."
    },
    "Mallika Arora": {
        role: "SFX Supervisor",
        skills: ["Audio Mixing", "Foley", "Sound Design"],
        awards: "🏆 Best Sound Design 2025, 🏆 Audio Excellence 2024",
        experience: "3+ years",
        bio: "Mallika builds the invisible, immersive soundscapes that breathe life into the editing timeline. She handles everything from meticulous dialogue cleanup to Foley recording and the final spatial audio mixdown. Understanding that sound is 50% of the cinematic experience, she works tirelessly to ensure that every footstep, wind howl, and musical swell hits with maximum emotional impact. She has established the FEA's standardized audio-level protocols for broadcasting and web delivery, ensuring Uttarakhand's content sounds perfect on any device."
    },
    "Sunita Dandriyal": {
        role: "VFX Supervisor",
        skills: ["Nuke", "Compositing", "Tracking"],
        awards: "🏆 Best Visual Effects 2025, 🏆 VFX Pioneer 2024",
        experience: "3+ years",
        bio: "Sunita leads the highly technical visual effects team, specializing in seamless green screen compositing, complex wire-removals, and integrating CGI into live-action footage. Operating primarily in Nuke, her node-based workflow allows for incredibly efficient rendering on massive studio projects. She has pioneered the use of AI-assisted rotoscoping and 3D camera tracking within the local industry, drastically cutting down post-production times for regional directors. Her ability to execute invisible VFX—where the audience doesn't even know effects were used—is legendary."
    },
    "Nandini Nautiyal": {
        role: "Supervising Editor",
        skills: ["Continuity", "Narrative Structure", "Supervision"],
        awards: "🏆 Top Supervising Editor 2025, 🏆 Continuity Award 2024",
        experience: "4+ years",
        bio: "Nandini oversees the macro-level editorial timeline, ensuring that narrative continuity and emotional pacing are perfectly maintained across sprawling, feature-length projects. She acts as the ultimate quality control checkpoint before a film goes to picture lock. By managing teams of assistant editors, she ensures that every scene flows logically into the next without jarring cuts or spatial errors. Her deep understanding of script structure allows her to restructure entire acts in the editing room to save pacing issues."
    },
    "Neha Sharma": {
        role: "Assistant Editor",
        skills: ["Media Management", "Proxies", "Assembly Cuts"],
        awards: "🏆 Fast Pacer Award 2024",
        experience: "2+ years",
        bio: "Neha forms the crucial, highly organized foundation for the senior editing team. She handles the daunting tasks of project ingestion, massive metadata organization, proxy generation, and syncing audio for multi-cam shoots. Her ability to quickly build clean, logical rough assemblies allows the senior editors and directors to immediately jump into the creative process without fighting through raw footage. Her speed, dedication, and mastery of timeline management software make her one of the most reliable post-production artists in the state."
    },
    "Shivani Joshi": {
        role: "Creative Director",
        skills: ["Brand Identity", "Typography", "Creative Direction"],
        awards: "🏆 Creative Design Excellence 2025, 🏆 Best Brand Identity 2024",
        experience: "5+ years",
        bio: "Shivani leads the massive design wing of the FEA, setting the ultimate standard for cinematic posters, digital campaigns, and full-scale brand identities. She possesses a razor-sharp, modern aesthetic that has redefined how Uttarakhand films are marketed to the public. Passionate about the psychology of color and typography, she frequently hosts masterclasses pushing her team to blend traditional fine art concepts with cutting-edge digital visualization. Her creative direction ensures that every piece of marketing material resonates deeply with the film's core narrative. She is a true visionary in the digital canvas space."
    },
    "Prashant": {
        role: "Motion Graphic Designer",
        skills: ["Animation", "Keyframing", "Dynamic Motion"],
        awards: "🏆 Best Keyframing 2025, 🏆 Smooth Transitions 2024",
        experience: "5+ years",
        bio: "Prashant brings static designs to explosive life through advanced keyframing, dynamic motion, and fluid transitions. He specializes in creating highly engaging promotional materials, kinetic typography for social media, and immersive digital billboards for film releases. By perfectly syncing his motion graphics with audio cues, he creates marketing assets that demand audience retention. He is currently spearheading the association's push into 3D motion design using Cinema 4D and Unreal Engine."
    },
    "Arjun Bisht": {
        role: "3D Motion Artist",
        skills: ["Cinema 4D", "Blender", "3D Motion Graphics"],
        awards: "🏆 3D Innovator 2025, 🏆 Motion Excellence 2024",
        experience: "5+ years",
        bio: "Arjun brilliantly bridges the gap between traditional 2D graphic design and immersive 3D virtual production environments. Utilizing Cinema 4D, Blender, and Unreal Engine, he creates stunning custom 3D title cards, dynamic broadcast graphics, and holographic HUD elements for high-end cinematic projects. He is a pioneer in integrating 3D motion tracking with live-action footage, allowing regional filmmakers to achieve Hollywood-level visual flair on indie budgets. Arjun regularly conducts masterclasses for the FEA, teaching junior members how to transition from static layouts into full-scale 3D environment design and kinetic typography."
    },
    "Sachin": {
        role: "Production Artist",
        skills: ["Print Optimization", "Vector Art", "Layouts"],
        awards: "🏆 Print Excellence 2025, 🏆 Best Output Art 2024",
        experience: "5+ years",
        bio: "Sachin is the vital link between the digital concept screen and the final physical print. He ensures that all digital designs—from massive highway billboards to intricate DVD packaging—are perfectly optimized in CMYK, completely free of vector errors, and ready for flawless physical output. His deep understanding of print bleeds, resolution scaling, and color profiles saves studios from expensive printing disasters. He is a master of Adobe Illustrator and precise layout architecture."
    },
    "Devika Bora": {
        role: "Resource Person / Post-Production",
        skills: ["Asset Curation", "Final Polish", "Tool Mastery"],
        awards: "🏆 Design Educator 2025, 🏆 Tool Master 2024",
        experience: "5+ years",
        bio: "Devika manages the vast design asset library for the FEA, curating thousands of high-res textures, fonts, and vector packs for member use. Beyond asset management, she applies the absolute final polish to major post-production designs, ensuring a flawless cinematic finish before public release. She is also a passionate educator, conducting regular deep-dive sessions on hidden Photoshop techniques and non-destructive workflow practices for junior members."
    },
    "Priyanshi Joshi": {
        role: "Concept Artist",
        skills: ["Digital Painting", "Character Design", "Storyboarding"],
        awards: "🏆 Original Concept 2025, 🏆 Digital Canvas Award 2024",
        experience: "4+ years",
        bio: "Priyanshi creates the breathtaking initial visual blueprints for projects, seamlessly turning raw script pages into vivid digital sketches and character concepts. Her ability to capture lighting, mood, and anatomy in the very early stages of pre-production helps directors lock in their visual style before the cameras even start rolling. She is heavily involved in the growing animation and game design sectors of the state, bringing fantastical ideas into brilliant digital reality."
    },
    "Udit Sharma": {
        role: "Concept Artist",
        skills: ["Environment Art", "World Building", "Matte Painting"],
        awards: "🏆 Best Environment Art 2025, 🏆 Concept Visionary 2024",
        experience: "4+ years",
        bio: "Udit specializes in building expansive, highly detailed environments and world designs. Using advanced matte painting techniques, he establishes the epic scale and visual tone of a film's universe. From historical recreations to futuristic sci-fi cityscapes, his concept art acts as the direct reference for both the set-designers and the VFX compositors. His meticulous attention to architectural detail and atmospheric perspective is widely celebrated."
    },
    "Divyansh": {
        role: "Visualizer",
        skills: ["Pre-Viz", "Animatics", "3D Mockups"],
        awards: "🏆 Best Pre-Viz 2025, 🏆 Idea Generator 2024",
        experience: "3+ years",
        bio: "Divyansh works closely with directors and cinematographers to generate dynamic pre-visualization animatics. By mapping out complex VFX scenes, stunt choreography, and elaborate camera movements in a 3D space, he saves the production massive amounts of time and money on set. His rapid 3D mockups and spatial problem-solving skills allow filmmakers to experiment with daring shots without the risk of physical failure."
    },
    "Sanyam": {
        role: "Associate Graphic Designer",
        skills: ["Social Media Assets", "Layouts", "Typography"],
        awards: "🏆 Promising Designer 2025, 🏆 Best Typography 2024",
        experience: "3+ years",
        bio: "Sanyam creates the rapid, high-impact supporting graphics, social media assets, and unique typography treatments required for modern digital marketing. Assisting the Creative Director on major state-wide campaigns, he ensures that the core brand identity translates perfectly to the small screen of a smartphone. His understanding of social media algorithms and visual retention hooks makes his designs incredibly effective."
    },
    "Shailendra Singh": {
        role: "Assistant Graphic Designer",
        skills: ["Retouching", "Masking", "Vector Cleanup"],
        awards: "🏆 Outstanding Support 2025, 🏆 Vector Art Award 2024",
        experience: "3+ years",
        bio: "Shailendra handles the meticulous foundational tasks of the design wing, including high-end photo retouching, complex subject masking, and vector cleanups. By providing this essential, detail-oriented support, he frees up the senior design team to focus entirely on creative conceptualization. His speed in isolating subjects from difficult backgrounds is renowned throughout the directorate."
    }
};

// 4. General Application Logic & Modals
document.addEventListener('DOMContentLoaded', () => {
    
    // --- EVENT PAGE LOGIC ---
    const upcomingContainer = document.getElementById('upcoming-events-list');
    const pastContainer = document.getElementById('past-events-list');
    
    if(upcomingContainer && pastContainer) {
        const modal = document.getElementById('event-modal');
        
        function renderEvents(container, eventsArray) {
            eventsArray.forEach(event => {
                const div = document.createElement('div');
                div.className = 'event-item';
                div.innerHTML = `<span class="event-date">${event.date}</span><span class="event-name">${event.name}</span><p class="event-desc">${event.desc}</p>`;
                
                div.addEventListener('click', () => {
                    document.getElementById('modal-date').innerText = event.date;
                    document.getElementById('modal-title').innerText = event.name;
                    document.getElementById('modal-time').innerText = `🕒 ${event.time}`;
                    document.getElementById('modal-location').innerText = `📍 ${event.location}`;
                    document.getElementById('modal-desc').innerText = event.fullDesc;
                    document.getElementById('modal-speakers').innerText = event.speakers;
                    
                    const agendaList = document.getElementById('modal-agenda');
                    agendaList.innerHTML = '';
                    event.agenda.forEach(item => { agendaList.innerHTML += `<li>${item}</li>`; });
                    
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; 
                });
                container.appendChild(div);
            });
        }
        
        renderEvents(upcomingContainer, upcomingEvents.slice(0, 12));
        renderEvents(pastContainer, pastEvents);

        document.getElementById('close-modal').addEventListener('click', () => { modal.classList.remove('active'); document.body.style.overflow = 'auto'; });
        modal.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.remove('active'); document.body.style.overflow = 'auto'; } });
    }

    // --- HOME PAGE (ABOUT POPUPS) LOGIC ---
    const aboutTriggers = document.querySelectorAll('.about-trigger');
    const aboutModal = document.getElementById('about-modal');
    
    if(aboutTriggers.length > 0 && aboutModal) {
        const aboutData = {
            'intro': {
                title: 'History & Introduction',
                desc: 'Formed in 2021, the Film Editor\'s Association (FEA) of Uttarakhand stands as the premier collective representing the true backbone of the state\'s post-production industry. Born out of the critical necessity to unite isolated creative talents, the FEA serves as the unified voice for visual storytelling professionals, encompassing video editors, graphic designers, VFX artists, concept artists, and colorists. From its humble beginnings, the association has experienced explosive growth and now proudly boasts a robust network of over 8,000 members, ranging from emerging independent creators to top-tier working professionals.\n\nBefore the inception of the FEA, the post-production landscape in Uttarakhand was highly fragmented. Freelancers and studio artists often faced uneven pay scales, uncredited work, extended working hours without overtime, and a general lack of standardized workflows. Recognizing these systemic issues, the FEA was established to actively secure the fundamental workplace rights of these artists, enforce standard baseline pay scales, and aggressively defend their creative freedom in the fast-growing digital and regional film landscape.\n\nThe FEA is structured around dedicated directorates, primarily focusing on Video Editing and Graphic Design. Each wing is led by seasoned industry veterans who guide the creative and operational direction of the association. Through this structured leadership, the FEA acts not just as a union, but as an educational and developmental powerhouse.\n\nTo continually elevate the craft of its massive member base, the FEA hosts advanced software workshops on industry-standard tools like DaVinci Resolve, Adobe After Effects, and Nuke. The association conducts rigorous portfolio reviews, offering one-on-one mentorship from senior committee members. Furthermore, the FEA manages professional dispute resolutions, offering legal backing for contract disputes to ensure members are never exploited.\n\nBeyond advocacy and education, the FEA is committed to honoring exceptional talent. They organize the highly anticipated regional FEA Creative Awards, an annual gala that recognizes the pinnacle of post-production excellence across multiple categories. The association also provides members with secure cloud storage resources, high-quality digital asset drives, and maintains a comprehensive state-wide directory to seamlessly connect local freelancers with top production houses.\n\nUltimately, the Film Editor\'s Association is driven by a singular, ambitious vision: to establish Uttarakhand as a self-sustaining, premier hub for world-class post-production and digital art. By nurturing local talent, setting rigorous industry benchmarks, and fostering a supportive community, the FEA is ensuring that every cut, color grade, and visual effect produced in the state meets the highest global cinematic standards.'
            },
            'mission': {
                title: 'Our Mission',
                desc: 'To empower post-production artists through unity, ensuring fair compensation, credit protection, and safe, professional working environments. We believe that behind every great film is an editor or designer who sculpted its final form. We ensure their rights, contracts, and working hours are respected across the state of Uttarakhand.'
            },
            'vision': {
                title: 'Our Vision',
                desc: 'To establish Uttarakhand as a premier hub for world-class post-production and digital art by nurturing local talent and setting industry benchmarks. We aim to build state-of-the-art post-production facilities, bring national-level projects to our regional artists, and make Uttarakhand synonymous with cinematic excellence by the year 2030.'
            },
            'activities': {
                title: 'Core Activities',
                desc: 'We host advanced software workshops, conduct portfolio reviews, manage professional dispute resolutions, and organize the regional FEA Creative Awards. Additionally, we offer legal support for contract disputes, provide cloud storage resources, and maintain a state-wide directory to connect local freelancers with top production houses.'
            }
        };

        aboutTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const type = trigger.getAttribute('data-type');
                document.getElementById('about-modal-title').innerText = aboutData[type].title;
                document.getElementById('about-modal-desc').innerHTML = aboutData[type].desc.replace(/\n\n/g, '<br><br>');
                
                aboutModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        document.getElementById('close-about-modal').addEventListener('click', () => { aboutModal.classList.remove('active'); document.body.style.overflow = 'auto'; });
        aboutModal.addEventListener('click', (e) => { if (e.target === aboutModal) { aboutModal.classList.remove('active'); document.body.style.overflow = 'auto'; } });
    }

    // --- HOME PAGE (PROFILE CLOUDY MODAL) LOGIC ---
    const profileTriggers = document.querySelectorAll('.profile-trigger');
    const profileModal = document.getElementById('profile-modal');

    if(profileTriggers.length > 0 && profileModal) {
        profileTriggers.forEach(card => {
            card.addEventListener('click', () => {
                const memberName = card.getAttribute('data-member');
                const data = memberProfiles[memberName];

                if(data) {
                    document.getElementById('profile-modal-name').innerText = memberName;
                    document.getElementById('profile-modal-role').innerText = data.role;
                    document.getElementById('profile-modal-bio').innerText = data.bio;
                    document.getElementById('profile-modal-awards').innerText = data.awards;
                    
                    // Display experience if it exists, otherwise hide it
                    const expElement = document.getElementById('profile-modal-exp');
                    if (data.experience) {
                        expElement.innerText = "Experience: " + data.experience;
                        expElement.style.display = "block";
                    } else {
                        expElement.style.display = "none";
                    }

                    const skillsContainer = document.getElementById('profile-modal-skills');
                    skillsContainer.innerHTML = '';
                    data.skills.forEach(skill => {
                        skillsContainer.innerHTML += `<span>${skill}</span>`;
                    });

                    profileModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        document.getElementById('close-profile-modal').addEventListener('click', () => { profileModal.classList.remove('active'); document.body.style.overflow = 'auto'; });
        profileModal.addEventListener('click', (e) => { if (e.target === profileModal) { profileModal.classList.remove('active'); document.body.style.overflow = 'auto'; } });
    }
});
// --- MASTERMINDS CARD EXPANSION LOGIC ---
const mastermindCards = document.querySelectorAll('.mastermind-card');

mastermindCards.forEach(card => {
    card.addEventListener('click', () => {
        // Closes other expanded cards automatically (optional, remove if you want multiple open)
        mastermindCards.forEach(c => {
            if (c !== card) c.classList.remove('expanded');
        });
        
        // Toggles the clicked card
        card.classList.toggle('expanded');
    });
});