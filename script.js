// script.js
document.addEventListener('DOMContentLoaded', () => {

    // 1. Safe Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
            }
        });
    });

    // 2. Dedicated Member ID Registry (Core: CC, Editorial: ED, Graphic Design: GD)
    const memberRegistry = [
        // Core Committee (FEA-CC001 to FEA-CC012)
        { id: "FEA-CC001", name: "Narendra Negi", role: "President", directorate: "Core Committee", exp: "15+ Years" },
        { id: "FEA-CC002", name: "Ronish", role: "Vice President", directorate: "Core Committee", exp: "10+ Years" },
        { id: "FEA-CC003", name: "Sarvesh Kushwaha", role: "Secretary & Executive Director", directorate: "Core Committee / Editorial", exp: "5+ Years" },
        { id: "FEA-CC004", name: "Hemchand Pandey", role: "Joint Secretary", directorate: "Core Committee", exp: "7+ Years" },
        { id: "FEA-CC005", name: "Sumit", role: "General Secretary", directorate: "Core Committee", exp: "8+ Years" },
        { id: "FEA-CC006", name: "Inder Singh", role: "Treasurer", directorate: "Core Committee", exp: "7+ Years" },
        { id: "FEA-CC007", name: "Pankaj Sharma", role: "CTO / IT Head", directorate: "Core Committee", exp: "8+ Years" },
        { id: "FEA-CC008", name: "Manish Tiwari", role: "Joint Treasurer", directorate: "Core Committee", exp: "4 Years" },
        { id: "FEA-CC009", name: "Priya Rawat", role: "Chief Legal Advisor", directorate: "Core Committee", exp: "3.5 Years" },
        { id: "FEA-CC010", name: "Rohit Chauhan", role: "Membership Director", directorate: "Core Committee", exp: "3 Years" },
        { id: "FEA-CC011", name: "Vivek Singh", role: "Event Logistics Head", directorate: "Core Committee", exp: "4 Years" },
        { id: "FEA-CC012", name: "Neha Karki", role: "PR & Communications Head", directorate: "Core Committee", exp: "3 Years" },

        // Editorial Directorate (FEA-ED001 to FEA-ED019)
        { id: "FEA-ED001", name: "Sarvesh Kushwaha", role: "Executive Director & Secretary", directorate: "Editorial Directorate", exp: "5+ Years" },
        { id: "FEA-ED002", name: "Deepak", role: "Post-Production Supervisor", directorate: "Editorial Directorate", exp: "4+ Years" },
        { id: "FEA-ED003", name: "Ankit Khanduri", role: "Lead Narrative Assembly Editor", directorate: "Editorial Directorate", exp: "4 Years" },
        { id: "FEA-ED004", name: "Anurag Shukla", role: "Trailer & Promo Editorial Supervisor", directorate: "Editorial Directorate", exp: "4 Years" },
        { id: "FEA-ED005", name: "Meenakshi Bhatt", role: "Archival & Documentary Lead Editor", directorate: "Editorial Directorate", exp: "4 Years" },
        { id: "FEA-ED006", name: "Abhishek Yadav", role: "Master Conform & Finishing Supervisor", directorate: "Editorial Directorate", exp: "3 Years" },
        { id: "FEA-ED007", name: "Saurabh Panwar", role: "Multi-Cam Editorial Lead", directorate: "Editorial Directorate", exp: "3.5 Years" },
        { id: "FEA-ED008", name: "Ritu Srivastava", role: "QC & Delivery Supervisor", directorate: "Editorial Directorate", exp: "4 Years" },
        { id: "FEA-ED009", name: "Niharika", role: "Associate Editor", directorate: "Editorial Directorate", exp: "4+ Years" },
        { id: "FEA-ED010", name: "Payal Rawat", role: "Post-Producer", directorate: "Editorial Directorate", exp: "4+ Years" },
        { id: "FEA-ED011", name: "Varun", role: "Project Coordinator", directorate: "Editorial Directorate", exp: "4+ Years" },
        { id: "FEA-ED012", name: "Pranit Bisht", role: "Resource Person", directorate: "Editorial Directorate", exp: "3+ Years" },
        { id: "FEA-ED013", name: "Prerna", role: "Colorist / DI", directorate: "Editorial Directorate", exp: "3+ Years" },
        { id: "FEA-ED014", name: "Sarthak", role: "Cinematics Supervisor", directorate: "Editorial Directorate", exp: "3+ Years" },
        { id: "FEA-ED015", name: "Aryan", role: "GFX Supervisor", directorate: "Editorial Directorate", exp: "3+ Years" },
        { id: "FEA-ED016", name: "Mallika Arora", role: "SFX Supervisor", directorate: "Editorial Directorate", exp: "3+ Years" },
        { id: "FEA-ED017", name: "Sunita Dandriyal", role: "VFX Supervisor", directorate: "Editorial Directorate", exp: "3+ Years" },
        { id: "FEA-ED018", name: "Nandini Nautiyal", role: "Supervising Editor", directorate: "Editorial Directorate", exp: "4+ Years" },
        { id: "FEA-ED019", name: "Neha Sharma", role: "Assistant Editor", directorate: "Editorial Directorate", exp: "2+ Years" },

        // Graphic Design Directorate (FEA-GD001 to FEA-GD015)
        { id: "FEA-GD001", name: "Sneha Rana", role: "Creative Director", directorate: "Creative Directorate", exp: "5+ Years" },
        { id: "FEA-GD002", name: "Prashant", role: "Motion Graphic Designer", directorate: "Creative Directorate", exp: "5+ Years" },
        { id: "FEA-GD003", name: "Sachin", role: "Production Artist", directorate: "Creative Directorate", exp: "5+ Years" },
        { id: "FEA-GD004", name: "Devika Bora", role: "Post-Production Designer", directorate: "Creative Directorate", exp: "5+ Years" },
        { id: "FEA-GD005", name: "Arjun Bisht", role: "3D Motion Artist", directorate: "Creative Directorate", exp: "5+ Years" },
        { id: "FEA-GD006", name: "Priyanshi Joshi", role: "Concept Artist", directorate: "Creative Directorate", exp: "4+ Years" },
        { id: "FEA-GD007", name: "Udit Sharma", role: "Post-Concept Artist", directorate: "Creative Directorate", exp: "4+ Years" },
        { id: "FEA-GD008", name: "Divyansh", role: "Visualizer", directorate: "Creative Directorate", exp: "3+ Years" },
        { id: "FEA-GD009", name: "Sanyam", role: "Associate Graphic Designer", directorate: "Creative Directorate", exp: "3+ Years" },
        { id: "FEA-GD010", name: "Shailendra Singh", role: "Assistant Graphic Designer", directorate: "Creative Directorate", exp: "3+ Years" },
        { id: "FEA-GD011", name: "Rohan Mishra", role: "Lead Matte Painter", directorate: "Creative Directorate", exp: "4 Years" },
        { id: "FEA-GD012", name: "Simran Bisht", role: "UI/UX Screen Designer", directorate: "Creative Directorate", exp: "3 Years" },
        { id: "FEA-GD013", name: "Kunal Pandey", role: "Cinematic Calligrapher", directorate: "Creative Directorate", exp: "3.5 Years" },
        { id: "FEA-GD014", name: "Kavita Rautela", role: "Storyboard Illustrator", directorate: "Creative Directorate", exp: "4 Years" },
        { id: "FEA-GD015", name: "Amit Rajput", role: "Texture & LookDev Artist", directorate: "Creative Directorate", exp: "3 Years" }
    ];

    function findMemberId(memberName, sectionId = "") {
        let prefix = "";
        if (sectionId === "committee") prefix = "FEA-CC";
        else if (sectionId === "video-editing") prefix = "FEA-ED";
        else if (sectionId === "graphic-design") prefix = "FEA-GD";

        if (prefix) {
            const exact = memberRegistry.find(m => m.name === memberName && m.id.startsWith(prefix));
            if (exact) return exact.id;
        }
        const fallback = memberRegistry.find(m => m.name === memberName);
        return fallback ? fallback.id : "FEA-MEMBER";
    }

    // 3. Member Profiles Data
    const memberProfiles = {
        "Narendra Negi": { 
            role: "President", 
            skills: ["Leadership", "Strategy", "Directing"], 
            awards: "🏆 Best Leadership 2025, 🏆 Best Leadership 2024, 🏆 Creative Mindset 2023, 🏆 Visionary Founder 2022, 🏆 State Cinema Guardian 2021, 🏆 Lifetime Achievement in Cinema 2020, 🏆 Master Director of the Decade 2019, 🏆 Excellence in Regional Filmmaking 2016", 
            experience: "15+ years", 
            bio: "With over 15 years of relentless dedication to regional and national cinema, Narendra has been the ultimate guiding force behind the Uttarakhand film industry. Recognizing the fractured nature of post-production work in the state, he founded the FEA with a singular vision: to unite isolated artists, secure their fundamental workplace rights, and establish a thriving creative ecosystem. His expertise lies deeply in narrative structure and documentary filmmaking, having personally mentored dozens of young, aspiring editors across the state. Under his leadership, the association has grown from a handful of creators to a massive network of thousands. He continues to lobby for state-level recognition of post-production artists." 
        },
        "Ronish": { 
            role: "Vice President", 
            skills: ["Studio Management", "Operations", "Client Relations"], 
            awards: "🏆 Operational Excellence 2025, 🏆 Excellence in Management 2024, 🏆 Studio Strategist 2023, 🏆 Master of Operations 2022, 🏆 Commercial Producer of the Year 2020, 🏆 Regional Production Pioneer 2018, 🏆 Breakthrough Studio Manager 2015", 
            experience: "10+ years", 
            bio: "Ronish is a strategic powerhouse with a comprehensive background in commercial video production, agency relations, and studio management. He oversees the complex operational framework of FEA, ensuring that our massive freelance community has access to fair, standardized contracts and baseline pay scales. He frequently hosts state-wide business seminars focusing on client management, freelance growth, and avoiding industry burnout. His ability to negotiate with large production houses has resulted in numerous exclusive partnerships that benefit all FEA members. He is the crucial bridge connecting the creative side of the association with the business realities of the film industry." 
        },
        "Sumit": { 
            role: "General Secretary", 
            skills: ["Administration", "Coordination", "Policy"], 
            awards: "🏆 Outstanding Contribution 2025, 🏆 Administrative Pillar 2024, 🏆 Master Administrator 2023, 🏆 Core Framework Builder 2022, 🏆 Best Production Coordinator 2020, 🏆 Independent Cinema Advocate 2019", 
            experience: "8+ years", 
            bio: "Sumit is the administrative pillar of the association, managing all core member communications, internal policy drafting, and large-scale event coordination. Acting as the primary bridge between the executive committee and the 15,000+ general members, he ensures that every voice, from novice to veteran, is heard. He single-handedly organized the transition of our physical workshops to a hybrid cloud model, allowing members from remote Himalayan districts to access top-tier training. His meticulous record-keeping and dedication to dispute redressal have saved countless freelancers from unfair studio practices. He continues to streamline the onboarding process for new talent." 
        },
        "Hemchand Pandey": { 
            role: "Joint Secretary", 
            skills: ["Coordination", "Outreach", "Member Relations"], 
            awards: "🏆 Regional Leadership 2025, 🏆 Community Outreach 2024, 🏆 Grassroots Networker 2023, 🏆 Regional Pioneer 2022, 🏆 Kumaon Arts Catalyst 2020, 🏆 Emerging Cultural Leader 2018", 
            experience: "7+ years", 
            bio: "Hemchand operates as the vital right hand to the Secretary, ensuring that the FEA’s rapidly expanding network functions seamlessly across all districts of Uttarakhand. With the association now boasting over 15,000+ members, he directly manages state-wide communications, fast-tracks membership approvals, and oversees the establishment of regional creative hubs in Kumaon and Garhwal. His grassroots approach ensures that freelance artists in remote Himalayan towns receive the exact same educational and legal resources as those in Dehradun. By actively touring the state and conducting local grievance meetings, Hemchand bridges the gap between the executive board and independent creators, building a truly unified industry front." 
        },
        "Inder Singh": { 
            role: "Treasurer", 
            skills: ["Finance", "Budgeting", "Logistics"], 
            awards: "🏆 Financial Excellence 2025, 🏆 Transparency Award 2024, 🏆 Budget Architect 2023, 🏆 Financial Strategist 2022, 🏆 Best Production Accountant 2021, 🏆 Logistics Master 2019", 
            experience: "7+ years", 
            bio: "Inder handles all complex financial logistics for the association with absolute precision and transparency. From managing the internal funding required for state-wide technical workshops to allocating the massive budgets needed for the annual FEA awards gala, his financial acumen keeps the association thriving. He successfully secured bulk licensing deals for expensive software plugins and cloud storage, passing those savings directly down to the members. His transparent reporting style and strict auditing practices have built immense trust among both the committee and the external sponsors who fund our educational initiatives. He is the financial bedrock of the FEA." 
        },
        "Pankaj Sharma": { 
            role: "CTO / IT Head", 
            skills: ["Cloud Architecture", "Server Pipelines", "IT Security"], 
            awards: "🏆 Tech Innovator 2025, 🏆 Digital Excellence 2024, 🏆 Cloud Systems Pioneer 2023, 🏆 Infrastructure Architect 2022, 🏆 Best IT Solutions in Media 2020, 🏆 Server Pipeline Expert 2018", 
            experience: "8+ years", 
            bio: "Pankaj is the mastermind behind the FEA’s robust digital infrastructure, transforming how post-production resources are distributed across the state. As the Chief Technical Officer, he oversees the association's massive cloud storage archives, securing petabytes of raw footage, digital assets, and high-end plugins for member access. He single-handedly designed the secure server pipelines that allow remote editors to collaborate in real-time with Dehradun-based studios without latency issues. Pankaj also spearheads cybersecurity for the association, ensuring that unreleased films and member portfolios remain strictly confidential and protected from piracy."},
        "Sarvesh Kushwaha": { role: "Executive Director & Secretary " ,skills: ["Film Editing", "VFX Supervision", "Cinematics"," Supervising Leader"], awards: "🏆 Best Video Editor 2025, 🏆 Master of VFX 2025, 🏆 Best Video Editor 2024 , 🏆Community Builder 2026, 🏆Supervising Leader 2026", experience: "5+ years", bio: "Sarvesh stands as the senior-most video editor of the Film Editor's Association, bringing unparalleled expertise and creative vision to the post-production industry of Uttarakhand. With an extensive and celebrated background in editing high-end feature films, his command over the editing suite has set the benchmark for regional cinematic storytelling. Beyond raw editing, Sarvesh is a master of VFX supervision and complex cinematics, seamlessly blending visual effects with live-action footage to create breathtaking visual narratives. As the Executive Director of the Video Editing wing, he oversees the technical curriculum, mentors the next generation of editors, and ensures that every major project meets global industry standards. His profound understanding of pacing, rhythm, and structural storytelling makes him a cornerstone of the FEA." },
        "Deepak": { role: "Post-Production Supervisor", skills: ["Workflow Design", "Troubleshooting", "Data Management"], awards: "🏆 Best Supervisor 2025, 🏆 Workflow Master 2024", experience: "4+ years", bio: "Deepak is the ultimate technical troubleshooter, ensuring flawless workflows between the editing, VFX, and audio mixing departments. His deep understanding of data management, proxy generation, and server-side rendering prevents massive bottlenecks in complex, multi-timeline studio projects. He built the FEA's standardized folder structures and server protocols that are now used by major production houses across Dehradun. When a project faces a catastrophic technical failure or corrupted media, Deepak is the one called in to salvage the timeline. His ability to optimize hardware for massive 8K raw files has saved studios hundreds of hours in rendering." },
        "Payal Rawat": { role: "Post-Producer", skills: ["Scheduling", "Budgeting", "Producing"], awards: "🏆 Schedule Master 2025, 🏆 Outstanding Producer 2024", experience: "4+ years", bio: "Payal is the master of timelines, client deliverables, and post-production budgets. Acting as the crucial, high-stress link between the directors, the clients, and the editing suite, she shields the creative artists from external pressures so they can focus entirely on their craft. She is known for her airtight scheduling, ensuring that massive feature projects hit their distribution deadlines without forcing the editing team into extreme burnout. Her ability to break down a script and accurately project the required post-production hours and budget is unmatched in the state." },
        "Varun": { role: "Project Coordinator", skills: ["Timeline Versioning", "Logistics", "Client Logs"], awards: "🏆 Timeline Manager 2025, 🏆 Workflow Coordination 2024", experience: "4+ years", bio: "Operating at the chaotic intersection of production and post-production, Varun ensures that every massive studio timeline remains perfectly organized. Working directly under the Post-Producer, he handles daily timeline versioning, complex handoffs between the editing and VFX departments, and meticulous client review logs. His strict adherence to naming conventions and folder structures prevents critical media offline errors during crunch times. Varun acts as the crucial communication node, translating the director's abstract feedback into actionable technical tasks for the editing suite. His proactive approach keeps projects on schedule and within budget." },
        "Pranit Bisht": { role: "Resource Person", skills: ["Asset Management", "Tech Support", "Plugins"], awards: "🏆 Resourcefulness Award 2025, 🏆 Tech Guru 2024", experience: "3+ years", bio: "Pranit is the association's primary technological scout and resource manager. He is responsible for acquiring, testing, and distributing high-quality digital assets, industry-standard plugins, and secure cloud storage resources to the FEA's massive member base. He spends hours benchmarking the latest AI editing tools and hardware setups, eventually distilling this knowledge into easily digestible seminars for the community. If there is a new, faster way to mask a subject or clear up noisy audio, Pranit is the first to document the workflow and share it with the state's editors." },
        "Prerna": { role: "Colorist / DI", skills: ["DaVinci Resolve", "HDR", "Look Development"], awards: "🏆 Best Color Grade 2025, 🏆 DI Specialist of the Year 2024", experience: "3+ years", bio: "An absolute master of DaVinci Resolve, Prerna is responsible for crafting the final visual mood and emotional tone of the region's top films. She possesses a painter's eye for light and shadow, specializing in advanced node-tree structures, HDR workflows, and seamless camera-matching techniques. She regularly hosts the association's most sought-after masterclasses, teaching editors how to move beyond basic LUTs and truly understand color science. Her signature cinematic grades have elevated numerous low-budget regional films to look like high-end, international studio productions." },
        "Sarthak": { role: "Cinematics Supervisor", skills: ["Composition", "Cinematography", "Visual Flow"], awards: "🏆 Visual Storyteller 2025, 🏆 Best Cinematic Eye 2024", experience: "3+ years", bio: "Sarthak ensures that the visual framing, shot composition, and overall cinematic language remain perfectly consistent from the camera to the final render. Working closely with the color and VFX teams, acts as the guardian of the director's visual intent during the chaotic post-production phase. He has a profound understanding of lens distortion, aspect ratios, and spatial continuity, easily identifying and correcting framing errors before they reach the final cut. His deep knowledge of film theory makes him a vital consultant for indie filmmakers in Uttarakhand." },
        "Aryan": { role: "GFX Supervisor", skills: ["After Effects", "Title Sequences", "Motion Design"], awards: "🏆 Best Motion Graphics 2025, 🏆 Creative Tech Award 2024", experience: "3+ years", bio: "Aryan oversees all dynamic motion graphics, complex title sequences, and digital overlays, constantly pushing the boundaries of 2D animation within regional cinema. Using After Effects as his primary canvas, he transforms static data and plain text into gripping visual experiences. He is heavily involved in the commercial side of the industry, designing high-retention motion graphics for major brands and state-level advertising campaigns. His workshops on easing, graph editors, and kinetic typography are mandatory viewing for the younger FEA members." },
        "Mallika Arora": { role: "SFX Supervisor", skills: ["Audio Mixing", "Foley", "Sound Design"], awards: "🏆 Best Sound Design 2025, 🏆 Audio Excellence 2024", experience: "3+ years", bio: "Mallika builds the invisible, immersive soundscapes that breathe life into the editing timeline. She handles everything from meticulous dialogue cleanup to Foley recording and the final spatial audio mixdown. Understanding that sound is 50% of the cinematic experience, she works tirelessly to ensure that every footstep, wind howl, and musical swell hits with maximum emotional impact. She has established the FEA's standardized audio-level protocols for broadcasting and web delivery, ensuring Uttarakhand's content sounds perfect on any device." },
        "Sunita Dandriyal": { role: "VFX Supervisor", skills: ["Nuke", "Compositing", "Tracking"], awards: "🏆 Best Visual Effects 2025, 🏆 VFX Pioneer 2024", experience: "3+ years", bio: "Sunita leads the highly technical visual effects team, specializing in seamless green screen compositing, complex wire-removals, and integrating CGI into live-action footage. Operating primarily in Nuke, her node-based workflow allows for incredibly efficient rendering on massive studio projects. She has pioneered the use of AI-assisted rotoscoping and 3D camera tracking within the local industry, drastically cutting down post-production times for regional directors. Her ability to execute invisible VFX—where the audience doesn't even know effects were used—is legendary." },
        "Nandini Nautiyal": { role: "Supervising Editor", skills: ["Continuity", "Narrative Structure", "Supervision"], awards: "🏆 Top Supervising Editor 2025, 🏆 Continuity Award 2024", experience: "4+ years", bio: "Nandini oversees the macro-level editorial timeline, ensuring that narrative continuity and emotional pacing are perfectly maintained across sprawling, feature-length projects. She acts as the ultimate quality control checkpoint before a film goes to picture lock. By managing teams of assistant editors, she ensures that every scene flows logically into the next without jarring cuts or spatial errors. Her deep understanding of script structure allows her to restructure entire acts in the editing room to save pacing issues." },
        "Niharika": { role: "Associate Editor", skills: ["Commercials", "Assembly", "Detail Oriented"], awards: "🏆 Rising Star Editor 2025, 🏆 Best Assistant Edit 2024", experience: "4+ years", bio: "Niharika represents the brightest emerging talent in the directorate, bringing incredibly fresh, modern pacing styles to both commercial edits and narrative films. Working directly under senior leadership, she assists in core curriculum planning for the association's younger members, bridging the gap between classic cinematic rules and modern, fast-paced digital retention strategies. Her meticulous attention to detail during the crucial assembly phase allows directors to see the skeleton of their film faster than ever. She is also a vocal advocate for increasing the presence of female editors in top-tier regional cinema." },
        "Neha Sharma": { role: "Assistant Editor", skills: ["Media Management", "Proxies", "Assembly Cuts"], awards: "🏆 Dedication in Editing 2025, 🏆 Fast Pacer Award 2024", experience: "2+ years", bio: "Neha forms the crucial, highly organized foundation for the senior editing team. She handles the daunting tasks of project ingestion, massive metadata organization, proxy generation, and syncing audio for multi-cam shoots. Her ability to quickly build clean, logical rough assemblies allows the senior editors and directors to immediately jump into the creative process without fighting through raw footage. Her speed, dedication, and mastery of timeline management software make her one of the most reliable post-production artists in the state." },
        "Sneha Rana": { role: "Creative Director", skills: ["Brand Identity", "Typography", "Creative Direction"], awards: "🏆 Creative Design Excellence 2025, 🏆 Best Brand Identity 2024", experience: "5+ years", bio: "Sneha leads the massive design wing of the FEA, setting the ultimate standard for cinematic posters, digital campaigns, and full-scale brand identities. She possesses a razor-sharp, modern aesthetic that has redefined how Uttarakhand films are marketed to the public. Passionate about the psychology of color and typography, she frequently hosts masterclasses pushing her team to blend traditional fine art concepts with cutting-edge digital visualization. Her creative direction ensures that every piece of marketing material resonates deeply with the film's core narrative. She is a true visionary in the digital canvas space." },
        "Prashant": { role: "Motion Graphic Designer", skills: ["Animation", "Keyframing", "Dynamic Motion"], awards: "🏆 Best Keyframing 2025, 🏆 Smooth Transitions 2024", experience: "5+ years", bio: "Prashant brings static designs to explosive life through advanced keyframing, dynamic motion, and fluid transitions. He specializes in creating highly engaging promotional materials, kinetic typography for social media, and immersive digital billboards for film releases. By perfectly syncing his motion graphics with audio cues, he creates marketing assets that demand audience retention. He is currently spearheading the association's push into 3D motion design using Cinema 4D and Unreal Engine." },
        "Arjun Bisht": { role: "3D Motion Artist", skills: ["Cinema 4D", "Blender", "3D Motion Graphics"], awards: "🏆 3D Innovator 2025, 🏆 Motion Excellence 2024", experience: "5+ years", bio: "Arjun brilliantly bridges the gap between traditional 2D graphic design and immersive 3D virtual production environments. Utilizing Cinema 4D, Blender, and Unreal Engine, he creates stunning custom 3D title cards, dynamic broadcast graphics, and holographic HUD elements for high-end cinematic projects. He is a pioneer in integrating 3D motion tracking with live-action footage, allowing regional filmmakers to achieve Hollywood-level visual flair on indie budgets. Arjun regularly conducts masterclasses for the FEA, teaching junior members how to transition from static layouts into full-scale 3D environment design and kinetic typography." },
        "Sachin": { role: "Production Artist", skills: ["Print Optimization", "Vector Art", "Layouts"], awards: "🏆 Print Excellence 2025, 🏆 Best Output Art 2024", experience: "5+ years", bio: "Sachin is the vital link between the digital concept screen and the final physical print. He ensures that all digital designs—from massive highway billboards to intricate DVD packaging—are perfectly optimized in CMYK, completely free of vector errors, and ready for flawless physical output. His deep understanding of print bleeds, resolution scaling, and color profiles saves studios from expensive printing disasters. He is a master of Adobe Illustrator and precise layout architecture." },
        "Devika Bora": { role: "Resource Person / Post-Production", skills: ["Asset Curation", "Final Polish", "Tool Mastery"], awards: "🏆 Design Educator 2025, 🏆 Tool Master 2024", experience: "5+ years", bio: "Devika manages the vast design asset library for the FEA, curating thousands of high-res textures, fonts, and vector packs for member use. Beyond asset management, she applies the absolute final polish to major post-production designs, ensuring a flawless cinematic finish before public release. She is also a passionate educator, conducting regular deep-dive sessions on hidden Photoshop techniques and non-destructive workflow practices for junior members." },
        "Priyanshi Joshi": { role: "Concept Artist", skills: ["Digital Painting", "Character Design", "Storyboarding"], awards: "🏆 Original Concept 2025, 🏆 Digital Canvas Award 2024", experience: "4+ years", bio: "Priyanshi creates the breathtaking initial visual blueprints for projects, seamlessly turning raw script pages into vivid digital sketches and character concepts. Her ability to capture lighting, mood, and anatomy in the very early stages of pre-production helps directors lock in their visual style before the cameras even start rolling. She is heavily involved in the growing animation and game design sectors of the state, bringing fantastical ideas into brilliant digital reality." },
        "Udit Sharma": { role: "Concept Artist", skills: ["Environment Art", "World Building", "Matte Painting"], awards: "🏆 Best Environment Art 2025, 🏆 Concept Visionary 2024", experience: "4+ years", bio: "Udit specializes in building expansive, highly detailed environments and world designs. Using advanced matte painting techniques, he establishes the epic scale and visual tone of a film's universe. From historical recreations to futuristic sci-fi cityscapes, his concept art acts as the direct reference for both the set-designers and the VFX compositors. His meticulous attention to architectural detail and atmospheric perspective is widely celebrated." },
        "Divyansh": { role: "Visualizer", skills: ["Pre-Viz", "Animatics", "3D Mockups"], awards: "🏆 Best Pre-Viz 2025, 🏆 Idea Generator 2024", experience: "3+ years", bio: "Divyansh works closely with directors and cinematographers to generate dynamic pre-visualization animatics. By mapping out complex VFX scenes, stunt choreography, and elaborate camera movements in a 3D space, he saves the production massive amounts of time and money on set. His rapid 3D mockups and spatial problem-solving skills allow filmmakers to experiment with daring shots without the risk of physical failure." },
        "Sanyam": { role: "Associate Graphic Designer", skills: ["Social Media Assets", "Layouts", "Typography"], awards: "🏆 Promising Designer 2025, 🏆 Best Typography 2024", experience: "3+ years", bio: "Sanyam creates the rapid, high-impact supporting graphics, social media assets, and unique typography treatments required for modern digital marketing. Assisting the Creative Director on major state-wide campaigns, he ensures that the core brand identity translates perfectly to the small screen of a smartphone. His understanding of social media algorithms and visual retention hooks makes his designs incredibly effective." },
        "Shailendra Singh": { role: "Assistant Graphic Designer", skills: ["Retouching", "Masking", "Vector Cleanup"], awards: "🏆 Outstanding Support 2025, 🏆 Vector Art Award 2024", experience: "3+ years", bio: "Shailendra handles the meticulous foundational tasks of the design wing, including high-end photo retouching, complex subject masking, and vector cleanups. By providing this essential, detail-oriented support, he frees up the senior design team to focus entirely on creative conceptualization. His speed in isolating subjects from difficult backgrounds is renowned throughout the directorate." },
        "Manish Tiwari": {
            role: "Joint Treasurer",
            skills: ["Budget Allocation", "Event Funding", "Auditing"],
            awards: "🏆 Financial Integrity Award 2026, 🏆 Best Budget Strategist 2025, 🏆 Resource Optimizer 2024, 🏆 Emerging Auditor 2023",
            experience: "4 years",
            bio: "Manish ensures the financial gears of the association turn smoothly by meticulously tracking workshop sponsorships, membership dues, and operational budgets. Based in Kanpur, UP, and bringing a sharp analytical mind to the Dehradun headquarters, he assists the Treasurer in maintaining absolute transparency for the FEA. His financial models for freelance project pricing have been adopted by hundreds of independent creators across the state to ensure they never undercharge for their services."},
        "Priya Rawat": {
            role: "Chief Legal Advisor",
            skills: ["Freelance Contracts", "Copyright Law", "Dispute Resolution"],
            awards: "🏆 Legal Shield Award 2026, 🏆 Freelance Advocate 2025, 🏆 Contract Master 2024, 🏆 Intellectual Property Defender 2023",
            experience: "3.5 years",
            bio: "Priya operates as the crucial legal shield for the entire 15,000-member collective, specializing in entertainment contract law, copyright protections, and intellectual property disputes. Hailing from the Pauri Garhwal region, she passionately defends independent artists against exploitative studio practices, uncredited work, and delayed payments. Her fierce negotiation skills have forced major production houses to respect regional talent."
        },
        "Rohit Chauhan": {
            role: "Membership Director",
            skills: ["Member Onboarding", "Grievance Redressal", "Regional Outreach"],
            awards: "🏆 Community Builder 2026, 🏆 Top Regional Networker 2025, 🏆 Best Member Onboarding 2024",
            experience: "3 years",
            bio: "Rohit is the welcoming face and operational backbone of the association's massive member onboarding pipeline, directly managing the logistics of our 15,000+ member registry. Operating extensively across the Kumaon region, he actively bridges the gap between isolated rural artists and the bustling Dehradun studio circuit. His grassroots networking efforts have transformed the FEA from a localized Dehradun group into a truly state-wide cinematic powerhouse."
        },
        "Vivek Singh": {
            role: "Event Logistics Head",
            skills: ["Venue Management", "Hardware Procurement", "Gala Logistics"],
            awards: "🏆 Master of Logistics 2026, 🏆 Best Event Coordinator 2025, 🏆 Gala Architect 2024, 🏆 Venue Management Expert 2023",
            experience: "4 years",
            bio: "Vivek orchestrates the massive logistical frameworks required to execute the FEA's state-wide educational workshops, masterclasses, and the annual awards gala. Originally from Gorakhpur, UP, he brings a highly disciplined approach to venue management, hardware procurement, and crowd control. Whether securing 50 high-end editing workstations or managing the red-carpet flow at LP Vilas, his background is indispensable."
        },
        "Neha Karki": {
            role: "PR & Communications Head",
            skills: ["Press Releases", "Studio Partnerships", "Media Strategy"],
            awards: "🏆 Top Media Strategist 2026, 🏆 PR Campaign of the Year 2025, 🏆 Brand Voice Award 2024",
            experience: "3 years",
            bio: "Neha drives the external narrative and brand prestige of the Film Editor's Association, managing high-level press releases, studio partnerships, and the overarching social media strategy. Rooted in Nainital, she has a profound understanding of how to market regional post-production talent to national, Mumbai-based production houses. Her communication frameworks ensure that the incredible technical achievements of Uttarakhand's artists are celebrated on a national stage."
        },
        "Ankit Khanduri": {
            role: "Lead Narrative Assembly Editor",
            skills: ["Narrative Film Editing", "Offline Assembly", "Scene Pacing"],
            awards: "🏆 Master of Narrative Flow 2026, 🏆 Assembly Editor of the Year 2025",
            experience: "4 years",
            bio: "Specializing in early-stage editorial builds, Ankit bridges raw production takes and fine narrative structure. His offline assembly cuts establish the crucial emotional pulse of feature-length scripts before directors enter the final cut phase. Hailing from Garhwal, he has developed a reputation for lightning-fast rough cuts over the last four years, allowing production teams to wrap sets with absolute confidence."
        },
        "Anurag Shukla": {
            role: "Trailer & Promo Editorial Supervisor",
            skills: ["Theatrical Trailers", "High-Retention Teasers", "Promotional Dynamics"],
            awards: "🏆 Best Trailer Cut 2026, 🏆 Teaser Architect Award 2025, 🏆 Promo Excellence 2024",
            experience: "4 years",
            bio: "Anurag commands the promotional cutting suite, tailoring high-impact narrative hooks and rhythmic cuts for feature trailers and digital retention campaigns. Originally from Lucknow, UP, he brings a fast-paced, high-energy metropolitan editing style to the regional cinema space. His deep understanding of sound-driven editing and micro-pacing ensures that every promo he cuts maximizes audience engagement."
        },
        "Meenakshi Bhatt": {
            role: "Archival & Documentary Lead Editor",
            skills: ["Long-Form Non-Fiction", "Archival Restoration", "Unscripted Structuring"],
            awards: "🏆 Documentary Storyteller 2026",
            experience: "4 years",
            bio: "Meenakshi shapes hundreds of hours of raw, unscripted media into coherent, gripping socio-cultural documentary films. Operating primarily out of the Kumaon region, she is deeply passionate about preserving the visual history of the Himalayas. Her specialized skill set includes upscaling vintage footage, repairing degraded audio, and constructing powerful narrative arcs without the safety net of a script."
        },
        "Abhishek Yadav": {
            role: "Master Conform & Finishing Supervisor",
            skills: ["Online Conform", "DCP Mastering", "XML/EDL Roundtripping"],
            awards: "🏆 Picture Lock Excellence 2026, 🏆 Technical Conform Master 2025",
            experience: "3 years",
            bio: "Abhishek handles the highly technical and critical gateway between picture lock and theatrical release. Based originally in Varanasi, UP, his expertise lies in relinking offline proxy timelines to heavy raw camera negative masters without a single frame drop. He flawlessly coordinates VFX plate handoffs and compiles the final theatrical DCP packages required for cinema distribution."
        },
        "Saurabh Panwar": {
            role: "Multi-Cam & Live Production Editorial Lead",
            skills: ["Multi-Camera Syncing", "Live Concert Editing", "Timecode Routing"],
            awards: "🏆 Multi-Cam Sync Specialist 2025",
            experience: "3.5 years",
            bio: "Saurabh leads complex editorial setups for massive live productions and multi-camera shoots. Working extensively across the Tehri district, he specializes in managing seamless timecode alignments across dozens of simultaneous camera feeds. Whether editing high-energy regional music concerts or traditional cultural stage plays, his ability to sort high-volume timelines and execute real-time switching sync is unparalleled."
        },
        "Ritu Srivastava": {
            role: "QC & Delivery Supervisor",
            skills: ["Broadcast Standards", "Sync Drift Auditing", "Codec Architecture"],
            awards: "🏆 Zero-Artifact QC Lead 2026, 🏆 Pipeline Integrity Award 2025",
            experience: "4 years",
            bio: "Acting as the absolute final checkpoint for every master render, Ritu enforces strict audio-video sync tolerances, color space tags, and digital distribution specifications. Moving from Prayagraj to Dehradun, she brought a level of broadcasting rigor previously unseen in the regional indie circuit. She conducts grueling frame-by-frame audits to ensure content meets the stringent technical standards of OTT streaming platforms and national television networks."
        },
        "Rohan Mishra": {
            role: "Lead Matte Painter",
            skills: ["Set Extensions", "Photorealism", "2.5D Projections"],
            awards: "🏆 Digital Landscape Award 2026, 🏆 Environment Art Master 2025, 🏆 Illusionist of the Year 2024",
            experience: "4 years",
            bio: "Rohan is the ultimate digital world-builder, specializing in photorealistic matte painting, digital set extensions, and complex 2.5D camera projections. Hailing from Agra, UP, he seamlessly extends practical film sets into sprawling, breathtaking cinematic landscapes using Photoshop and Nuke. Over the past four years, his invisible environment art has saved regional indie directors millions of rupees in practical set construction and on-location shooting costs."
        },
        "Simran Bisht": {
            role: "UI/UX Screen Designer",
            skills: ["Futuristic HUDs", "Holographic UI", "Data Visualization"],
            awards: "🏆 FUI Visionary 2026, 🏆 Sci-Fi Interface Design 2025",
            experience: "3 years",
            bio: "Simran dominates the highly specialized niche of Fictional User Interface (FUI) design, crafting the futuristic HUDs, holographic screens, and complex data visualizations seen in modern regional thrillers. Based in Dehradun, she blends her deep knowledge of authentic UX/UI principles with aggressive, cinematic motion graphics. Her screens actively drive the plot forward and react dynamically to the actors' performances on set."
        },
        "Kunal Pandey": {
            role: "Cinematic Calligrapher",
            skills: ["Custom Fonts", "Regional Scripts", "Title Aesthetics"],
            awards: "🏆 Best Custom Typography 2026",
            experience: "3.5 years",
            bio: "Kunal is a master of cinematic typography, custom font generation, and intricate calligraphy, focusing heavily on regional scripts and culturally resonant title aesthetics. Coming from Varanasi, UP, he brings a deep appreciation for classical art forms, merging ancient script styles with ultra-modern 3D beveling and texturing. He meticulously designs the opening title cards and main branding assets for high-budget feature films."
        },
        "Kavita Rautela": {
            role: "Storyboard Illustrator",
            skills: ["Pre-production Sketches", "Shot Blocking", "Animatics"],
            awards: "🏆 Shot Blocking Master 2026, 🏆 Visual Blueprint Award 2025",
            experience: "4 years",
            bio: "Kavita translates raw script pages into dynamic, comprehensive visual blueprints through her masterful storyboard illustrations and shot-blocking sketches. Operating out of the Almora district, she works directly with directors during early pre-production to lock in camera angles, character blocking, and complex action sequences. Her detailed animatics ensure that both the VFX supervisors and the cinematographers share the exact same vision before arriving on set."
        },
        "Amit Rajput": {
            role: "Texture & LookDev Artist",
            skills: ["3D Asset Texturing", "Material Generation", "PBR Workflows"],
            awards: "🏆 Best Surface Artist 2026",
            experience: "3 years",
            bio: "Amit specializes in high-fidelity 3D asset texturing, complex material generation, and render optimization within the graphic and VFX pipelines. Originally from Meerut, UP, he uses tools like Substance Painter to breathe hyper-realistic life into flat 3D models, crafting everything from rusted metal weaponry to biologically accurate creature skin. His deep understanding of physically based rendering (PBR) workflows ensures that digital assets react perfectly to live-action lighting setups."
        }
    };

    // 4. About Us Modal Logic
    const aboutTriggers = document.querySelectorAll('.about-trigger');
    const aboutModal = document.getElementById('about-modal');

    if (aboutTriggers.length > 0 && aboutModal) {
        const aboutData = {
            'intro': {
                title: 'History & Introduction',
                desc: 'Formed in 2021, the Film Editor\'s Association (FEA) of Uttarakhand stands as the premier collective representing the true backbone of the state\'s post-production industry. Born out of the critical necessity to unite isolated creative talents, the FEA serves as the unified voice for visual storytelling professionals, encompassing video editors, graphic designers, VFX artists, concept artists, and colorists. From its humble beginnings, the association has experienced explosive growth and now proudly boasts a robust network of over 15,000+ members, ranging from emerging independent creators to top-tier working professionals.\n\nBefore the inception of the FEA, the post-production landscape in Uttarakhand was highly fragmented. Freelancers and studio artists often faced uneven pay scales, uncredited work, extended working hours without overtime, and a general lack of standardized workflows. Recognizing these systemic issues, the FEA was established to actively secure the fundamental workplace rights of these artists, enforce standard baseline pay scales, and aggressively defend their creative freedom in the fast-growing digital and regional film landscape.\n\nThe FEA is structured around dedicated directorates, primarily focusing on Video Editing and Graphic Design. Each wing is led by seasoned industry veterans who guide the creative and operational direction of the association. Through this structured leadership, the FEA acts not just as a union, but as an educational and developmental powerhouse.\n\nTo continually elevate the craft of its massive member base, the FEA hosts advanced software workshops on industry-standard tools like DaVinci Resolve, Adobe After Effects, and Nuke. The association conducts rigorous portfolio reviews, offering one-on-one mentorship from senior committee members. Furthermore, the FEA manages professional dispute resolutions, offering legal backing for contract disputes to ensure members are never exploited.\n\nBeyond advocacy and education, the FEA is committed to honoring exceptional talent. They organize the highly anticipated regional FEA Creative Awards, an annual gala that recognizes the pinnacle of post-production excellence across multiple categories. The association also provides members with secure cloud storage resources, high-quality digital asset drives, and maintains a comprehensive state-wide directory to seamlessly connect local freelancers with top production houses.\n\nUltimately, the Film Editor\'s Association is driven by a singular, ambitious vision: to establish Uttarakhand as a self-sustaining, premier hub for world-class post-production and digital art. By nurturing local talent, setting rigorous industry benchmarks, and fostering a supportive community, the FEA is ensuring that every cut, color grade, and visual effect produced in the state meets the highest global cinematic standards.'
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
                if (aboutData[type]) {
                    document.getElementById('about-modal-title').innerText = aboutData[type].title;
                    document.getElementById('about-modal-desc').innerHTML = aboutData[type].desc.replace(/\n\n/g, '<br><br>');
                    aboutModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        document.getElementById('close-about-modal').addEventListener('click', () => {
            aboutModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) {
                aboutModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 5. Profiles Modal Logic
    const profileTriggers = document.querySelectorAll('.profile-trigger');
    const profileModal = document.getElementById('profile-modal');

    if (profileTriggers.length > 0 && profileModal) {
        profileTriggers.forEach(card => {
            card.addEventListener('click', () => {
                const memberName = card.getAttribute('data-member');
                const data = memberProfiles[memberName];

                if (data) {
                    const sectionId = card.closest('section')?.id || '';
                    const memberId = findMemberId(memberName, sectionId);
                    const idEl = document.getElementById('profile-modal-id');
                    if (idEl) idEl.innerText = memberId;

                    document.getElementById('profile-modal-name').innerText = memberName;
                    document.getElementById('profile-modal-role').innerText = data.role;
                    document.getElementById('profile-modal-bio').innerText = data.bio;

                    const expElement = document.getElementById('profile-modal-exp-val');
                    if (data.experience) {
                        expElement.innerText = data.experience.replace(/[^0-9.]/g, '') + '+';
                    } else {
                        expElement.innerText = "N/A";
                    }

                    let status = "Pro";
                    const roleString = data.role.toLowerCase();
                    if (roleString.includes("director") || roleString.includes("president")) status = "Exec.";
                    else if (roleString.includes("lead") || roleString.includes("supervisor")) status = "Lead";
                    else if (roleString.includes("senior")) status = "Senior";
                    document.getElementById('profile-modal-status').innerText = status;

                    const skillsContainer = document.getElementById('profile-modal-skills');
                    skillsContainer.innerHTML = '';
                    data.skills.forEach(skill => {
                        skillsContainer.innerHTML += `<span style="background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.2); color: var(--accent-gold); padding: 6px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; letter-spacing: 1px;">${skill.trim()}</span>`;
                    });

                    const awardsContainer = document.getElementById('profile-modal-awards');
                    awardsContainer.innerHTML = '';
                    if (data.awards) {
                        data.awards.split(',').forEach(award => {
                            const text = award.replace(/🏆/g, '').trim();
                            if (text) {
                                awardsContainer.innerHTML += `
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <span style="font-size: 1.1rem; filter: drop-shadow(0 0 5px rgba(234,179,8,0.5));">🏆</span>
                                    <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0;">${text}</p>
                                </div>`;
                            }
                        });
                    } else {
                        awardsContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem;">No titles listed.</p>';
                    }

                    profileModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        document.getElementById('close-profile-modal').addEventListener('click', () => {
            profileModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) {
                profileModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 6. Join Modal Logic
    const joinTriggers = document.querySelectorAll('.join-trigger');
    const joinModal = document.getElementById('join-modal');

    if (joinTriggers.length > 0 && joinModal) {
        joinTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                joinModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        document.getElementById('close-join-modal').addEventListener('click', () => {
            joinModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        joinModal.addEventListener('click', (e) => {
            if (e.target === joinModal) {
                joinModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close any open modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
        }
    });

    // 7. Mobile Navigation Toggle & Auto-Close
    const mobileMenu = document.getElementById('mobile-menu');
    const navContainer = document.querySelector('.nav-container');
    if (mobileMenu && navContainer) {
        mobileMenu.addEventListener('click', () => {
            navContainer.classList.toggle('active');
        });
        navContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('active');
            });
        });
    }

    // 8. Corner Crop Marks & Initials Avatars
    function getInitials(name) {
        return name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
    }

    function addCornerMarks(el) {
        if (el.querySelector('.corner-mark')) return;
        const tl = document.createElement('span');
        tl.className = 'corner-mark tl';
        const br = document.createElement('span');
        br.className = 'corner-mark br';
        el.appendChild(tl);
        el.appendChild(br);
    }

    document.querySelectorAll('.about-box, .spotlight-card, .cert-card').forEach(addCornerMarks);

    document.querySelectorAll('.card.profile-trigger:not(.spotlight-card)').forEach(card => {
        addCornerMarks(card);
        const roleEl = card.querySelector('h3');
        const nameEl = card.querySelector('p');
        if (roleEl && nameEl && !card.querySelector('.card-identity')) {
            const nameText = nameEl.innerText.trim();
            const roleText = roleEl.innerText.trim();
            const sectionId = card.closest('section')?.id || '';
            const memberId = findMemberId(nameText, sectionId);
            card.innerHTML = `
                <span class="corner-mark tl"></span>
                <span class="corner-mark br"></span>
                <div class="card-identity">
                    <div class="nominee-avatar">${getInitials(nameText)}</div>
                    <div>
                        <h3>${roleText}</h3>
                        <p>${nameText}</p>
                    </div>
                </div>
                <div class="card-footer-cta">
                    <span class="member-id-pill">${memberId}</span>
                    <span>View Dossier ↗</span>
                </div>
            `;
        }
    });

    // 9. Titles (awards.html) — Avatars, IDs, Stats, Filters & Search
    const awardCards = document.querySelectorAll('.member-award-card');
    if (awardCards.length > 0) {
        const committeeRoles = [
            'president', 'vice president', 'general secretary', 'joint secretary',
            'treasurer', 'cto', 'it head', 'legal advisor', 'membership director',
            'logistics head', 'pr & communications'
        ];
        const designRoles = [
            'creative director', 'matte painter', 'ui/ux', 'calligrapher',
            'storyboard', 'texture', 'motion graphic', '3d motion',
            'production artist', 'concept artist', 'visualizer', 'graphic designer',
            'resource person / post-production'
        ];

        let totalTags = 0;

        awardCards.forEach(card => {
            addCornerMarks(card);
            const nameEl = card.querySelector('h4');
            const roleEl = card.querySelector('.role');
            const tags = card.querySelectorAll('.tag');
            totalTags += tags.length;

            if (nameEl && roleEl && !card.querySelector('.award-card-head')) {
                const nameText = nameEl.innerText.trim();
                const roleText = roleEl.innerText.trim();
                const roleLower = roleText.toLowerCase();
                let group = 'Editorial Directorate';
                let secHint = 'video-editing';

                if (roleLower.includes('executive director')) {
                    group = 'Editorial Directorate';
                    secHint = 'video-editing';
                } else if (committeeRoles.some(r => roleLower.includes(r))) {
                    group = 'Core Committee';
                    secHint = 'committee';
                } else if (designRoles.some(r => roleLower.includes(r))) {
                    group = 'Creative Directorate';
                    secHint = 'graphic-design';
                }

                card.setAttribute('data-group', group);
                const memberId = findMemberId(nameText, secHint);

                const head = document.createElement('div');
                head.className = 'award-card-head';
                head.innerHTML = `
                    <div class="nominee-avatar">${getInitials(nameText)}</div>
                    <div>
                        <p class="role">${roleText}</p>
                        <h4>${nameText}</h4>
                        <span class="member-id-pill" style="margin-top: 6px;">${memberId}</span>
                    </div>
                `;
                nameEl.remove();
                roleEl.remove();
                card.prepend(head);
            }
        });

        const totalMembersEl = document.getElementById('awards-total-members');
        const totalTitlesEl = document.getElementById('awards-total-titles');
        const awardsEmptyEl = document.getElementById('awards-empty-state');
        if (totalMembersEl) totalMembersEl.innerText = awardCards.length;
        if (totalTitlesEl) totalTitlesEl.innerText = totalTags;

        let activeAwardGroup = 'all';
        let awardQuery = '';

        function filterAwards() {
            let visibleCount = 0;
            awardCards.forEach(card => {
                const matchGroup = activeAwardGroup === 'all' || card.getAttribute('data-group') === activeAwardGroup;
                const matchText = !awardQuery || card.innerText.toLowerCase().includes(awardQuery);
                const show = matchGroup && matchText;
                card.style.display = show ? '' : 'none';
                if (show) visibleCount++;
            });
            if (awardsEmptyEl) awardsEmptyEl.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        document.querySelectorAll('#awards-filters .filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#awards-filters .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeAwardGroup = btn.getAttribute('data-group');
                filterAwards();
            });
        });

        const awardsSearch = document.getElementById('awards-search');
        if (awardsSearch) {
            awardsSearch.addEventListener('input', e => {
                awardQuery = e.target.value.trim().toLowerCase();
                filterAwards();
            });
        }
    }

    // 10. Certifications (certifications.html) — Stats, Track Filters & Search
    const certCards = document.querySelectorAll('.cert-card');
    if (certCards.length > 0) {
        const totalCertsEl = document.getElementById('certs-total-count');
        const certsEmptyEl = document.getElementById('certs-empty-state');
        if (totalCertsEl) totalCertsEl.innerText = certCards.length;

        let activeTrack = 'all';
        let certQuery = '';

        function filterCerts() {
            let totalVisible = 0;
            document.querySelectorAll('.department-section').forEach(section => {
                let visibleInSection = 0;
                section.querySelectorAll('.cert-card').forEach(card => {
                    const matchTrack = activeTrack === 'all' || card.classList.contains(activeTrack);
                    const matchText = !certQuery || card.innerText.toLowerCase().includes(certQuery);
                    const show = matchTrack && matchText;
                    card.style.display = show ? '' : 'none';
                    if (show) visibleInSection++;
                });
                section.style.display = visibleInSection > 0 ? '' : 'none';
                totalVisible += visibleInSection;
            });
            if (certsEmptyEl) certsEmptyEl.style.display = totalVisible === 0 ? 'block' : 'none';
        }

        document.querySelectorAll('#certs-filters .filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#certs-filters .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeTrack = btn.getAttribute('data-track');
                filterCerts();
            });
        });

        const certsSearch = document.getElementById('certs-search');
        if (certsSearch) {
            certsSearch.addEventListener('input', e => {
                certQuery = e.target.value.trim().toLowerCase();
                filterCerts();
            });
        }
    }

    // 11. Verification Page Logic (verify.html)
    const verifyForm = document.getElementById('verify-form');
    const verifyInput = document.getElementById('verify-input');
    const verifyResult = document.getElementById('verify-result');

    function runVerification(rawId) {
        const cleanId = rawId.trim().toUpperCase();
        const found = memberRegistry.find(m => m.id === cleanId);
        if (found) {
            verifyResult.innerHTML = `
                <div class="verified-card">
                    <span class="verified-status">✓ Official FEA Member Verified</span>
                    <h3 style="font-size: 1.8rem; color: #fff; margin-bottom: 4px;">${found.name}</h3>
                    <p style="color: var(--gold-light); font-size: 0.85rem; letter-spacing: 1.5px; text-transform: uppercase;">${found.role}</p>
                    <div class="verified-grid">
                        <div class="verified-field"><span>Member ID</span><strong>${found.id}</strong></div>
                        <div class="verified-field"><span>Directorate</span><strong>${found.directorate}</strong></div>
                        <div class="verified-field"><span>Experience</span><strong>${found.exp}</strong></div>
                        <div class="verified-field"><span>Status</span><strong style="color: #4ade80;">Active (2026)</strong></div>
                    </div>
                </div>
            `;
        } else {
            verifyResult.innerHTML = `
                <div class="verified-card invalid">
                    <h3 style="color: #f87171; font-size: 1.2rem; margin-bottom: 6px;">ID Not Found</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">No active FEA Uttarakhand record matches <strong>${cleanId}</strong>. Please check the ID and try again.</p>
                </div>
            `;
        }
    }

    if (verifyForm && verifyInput && verifyResult) {
        verifyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            runVerification(verifyInput.value);
        });

        const urlId = new URLSearchParams(window.location.search).get('id');
        if (urlId) {
            verifyInput.value = urlId;
            runVerification(urlId);
        }
    }

    // 12. Interactive Stats Counter on Home
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                const duration = 1200;
                const startTime = performance.now();

                function updateCount(now) {
                    const progress = Math.min((now - startTime) / duration, 1);
                    const current = Math.floor(progress * target);
                    el.innerText = (target >= 10000 ? current.toLocaleString('en-IN') : current) + suffix;
                    if (progress < 1) requestAnimationFrame(updateCount);
                    else el.innerText = (target >= 10000 ? target.toLocaleString('en-IN') : target) + suffix;
                }
                requestAnimationFrame(updateCount);
                observer.unobserve(el);
            });
        }, { threshold: 0.3 });

        statNumbers.forEach(num => statsObserver.observe(num));
    }

    // 13. Back-to-Top Floating Button (All Pages)
    const topBtn = document.createElement('button');
    topBtn.className = 'back-to-top';
    topBtn.setAttribute('aria-label', 'Back to top');
    topBtn.innerHTML = '↑';
    document.body.appendChild(topBtn);

    window.addEventListener('scroll', () => {
        topBtn.classList.toggle('show', window.scrollY > 350);
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
