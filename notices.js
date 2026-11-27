// notices.js
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       1. FIREBASE CONFIG (SAME DATABASE AS VOTING 2026)
       ========================================================= */
    const USE_FIREBASE = true;

    const firebaseConfig = {
        apiKey: "AIzaSyC7iCcElQL-XNuaGh6DRWVhc3phR-BYpV4",
        authDomain: "fea-voting2026.firebaseapp.com",
        databaseURL: "https://fea-voting2026-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "fea-voting2026",
        storageBucket: "fea-voting2026.firebasestorage.app",
        messagingSenderId: "509840519426",
        appId: "1:509840519426:web:1295c7f5f61f7afa61121b",
        measurementId: "G-DJ9NCS4DLC"
    };

    /* =========================================================
       2. THREE ADMIN LOGIN ACCOUNTS
       ========================================================= */
    const ADMIN_CREDENTIALS = {
        "Core Committee": {
            id: "fea.corecommittee@2026",
            pass: "FEA@Core2026"
        },
        "Editorial Directorate": {
            id: "fea.editorialdirectorate@2026",
            pass: "FEA@Edit2026"
        },
        "Graphic Designer": {
            id: "fea.creativedirectorate@2026",
            pass: "FEA@Design2026"
        }
    };

    /* =========================================================
       3. DEFAULT NOTICES (28 TOTAL: 13 EXISTING + 15 NEW)
       #1 From Secretary (Deadline: 5 DEC 2026)
       #2 From Executive Director
       ========================================================= */
    const defaultNotices = [
        {
                "id": "sys_01",
                "badge": "Mandatory",
                "isLive": true,
                "date": "27 NOV 2026",
                "title": "Mandatory Annual Registry & Member ID Verification — Deadline: 5 DEC 2026",
                "body": "As part of the 2026–27 Annual Secretariat Audit, all registered members across the Core Committee, Editorial Directorate, and Creative Directorate are directed to verify their official FEA Member IDs on the Verification Portal on or before 5 DEC 2026 (11:59 PM IST).\n\nKey Compliance Requirements:\n• Confirm your assigned ID prefix: FEA-CC### (Core Committee), FEA-ED### (Editorial Directorate), or FEA-GD### (Creative Directorate).\n• Verify that your legal name, active designation, and years of experience match official association records.\n• Report any spelling errors, missing designations, or dual-wing discrepancies to fea.uttarakhand@gmail.com with the subject line 'ID Audit Correction'.\n\nNon-Compliance Notice:\nProfiles remaining unverified after 5 DEC 2026 will be placed on temporary administrative hold, pausing access to the FEA Cloud Asset Drive, legal contract backing, and 2026 Awards Gala e-invites until manual re-verification is completed.",
                "postedBy": "Sarvesh Kushwaha",
                "designation": "Secretary",
                "adminType": "Core Committee",
                "linkUrl": "verify.html",
                "linkLabel": "Verify Member ID ↗",
                "timestamp": 1764280000000
        },
        {
                "id": "sys_02",
                "badge": "Circular",
                "isLive": true,
                "date": "25 NOV 2026",
                "title": "Editorial Directorate Q4 Pipeline & DaVinci Resolve HDR Standards",
                "body": "To maintain uniform theatrical and OTT delivery quality across Uttarakhand's regional cinema ecosystem, the Editorial Directorate is enforcing updated Q4 2026 post-production and color pipeline standards effective immediately.\n\nMandatory Technical Specifications:\n• Color Pipeline: All feature and commercial timelines must use ACEScct or DaVinci Wide Gamut intermediate color spaces before final Rec.709 / HDR10 deliverables.\n• Proxy Naming: Follow standardized reel-and-timecode conventions (PROJ_SCENE_TAKE_CAM_PROXY.mov) to prevent media-offline errors during XML/AAF roundtrips.\n• Audio Sync & Stems: Deliver separated Dialogue (DX), Music (MX), and Effects (FX) stems at 48 kHz / 24-bit WAV alongside reference picture-lock exports.\n• Archive Backups: Maintain a 3-2-1 project file backup (local NVMe, studio NAS, and FEA encrypted cloud snapshot) prior to picture lock.\n\nSupervisors and lead editors are requested to brief their assistant teams before onboarding December 2026 production slates.",
                "postedBy": "Sarvesh Kushwaha",
                "designation": "Executive Director",
                "adminType": "Editorial Directorate",
                "linkUrl": "certifications.html",
                "linkLabel": "View Technical Tracks ↗",
                "timestamp": 1764100000000
        },
        {
                "id": "sys_03",
                "badge": "Active",
                "isLive": true,
                "date": "24 NOV 2026",
                "title": "FEA Titles 2026 — Live Voting Open Across All 34 Categories",
                "body": "Official public and member voting for the FEA Uttarakhand Titles 2026 is now live. This year's ballot honors excellence across 19 Editorial Directorate categories and 15 Creative Directorate categories.\n\nBallot Rules & Transparency Guidelines:\n• Eligibility: Each voter may cast exactly one (1) vote per category across all 34 directorate titles.\n• Live Standings: Vote counts and percentage bars update in real time directly on the Voting 2026 portal.\n• Fair Play Policy: Automated scripts, bot traffic, or coordinated ballot manipulation will trigger immediate disqualification of suspicious vote clusters upon IT audit.\n• Direct Sharing: Nominees may share direct category ballot links (?cat=...) across social media to mobilize genuine community support.\n\nFinal certified results will be sealed by the Core Committee and announced live at the Annual FEA Creative Awards Gala in Dehradun.",
                "postedBy": "Narendra Negi",
                "designation": "President",
                "adminType": "Core Committee",
                "linkUrl": "voting.html",
                "linkLabel": "Enter Voting Portal ↗",
                "timestamp": 1764000000000
        },
        {
                "id": "sys_04",
                "badge": "Circular",
                "isLive": false,
                "date": "22 NOV 2026",
                "title": "Annual FEA Uttarakhand Creative Awards Gala 2026 — Dehradun",
                "body": "The Event Logistics Wing is pleased to announce that the 5th Annual FEA Uttarakhand Creative Awards Gala will be hosted in Dehradun in late December 2026.\n\nEvent Highlights & Attendance Protocol:\n• Red Carpet & Showreel Screening: Doors open at 4:30 PM IST with a 4K projection of the 2026 Uttarakhand Post-Production Showcase.\n• Title Conferment: Official trophies and signed FEA master certificates will be presented to all 34 category winners and Core Committee honorees.\n• Pass Issuance: Verified nominees and registered members will receive QR-coded e-invites at their registered email addresses once ID verification closes on 5 DEC 2026.\n• Outstation Support: Travel coordination desks will operate from Dehradun ISBT and Dehradun Railway Station for members arriving from Kumaon and Garhwal districts.\n\nFormal dress code (Black / Charcoal / Gold accents) is recommended for all award recipients.",
                "postedBy": "Vivek Singh",
                "designation": "Event Logistics Head",
                "adminType": "Core Committee",
                "linkUrl": "awards.html",
                "linkLabel": "View Titles Directory ↗",
                "timestamp": 1763820000000
        },
        {
                "id": "sys_05",
                "badge": "Circular",
                "isLive": false,
                "date": "20 NOV 2026",
                "title": "Key Art, Poster & Theatrical Billing Block Guidelines 2026–27",
                "body": "To elevate the visual identity of Uttarakhand cinema across theatrical hoardings, festival catalogs, and streaming thumbnails, the Creative Directorate has issued revised key-art specifications for 2026–27.\n\nDesign & Pre-Press Directives:\n• Print Specifications: All theatrical one-sheets (27x40 inches) must be supplied in CMYK (300 DPI) with 0.25-inch bleed and outlined vector fonts.\n• Billing Block Integrity: Post-production leads—including Lead Editor, Colorist, VFX Supervisor, and Key Art Designer—must be credited in the official billing block at standard aspect ratios.\n• FEA Emblem Usage: Official FEA Uttarakhand seals must maintain clear-space margins equal to 25% of the emblem diameter and must not be stretched or recolored outside approved monochrome/gold variants.\n• OTT Safe Zones: Keep primary titles and faces inside the central 16:9 and 2:3 title-safe boundaries to prevent platform UI overlap.",
                "postedBy": "Sneha Rana",
                "designation": "Creative Director",
                "adminType": "Graphic Designer",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1763650000000
        },
        {
                "id": "sys_06",
                "badge": "Mandatory",
                "isLive": false,
                "date": "18 NOV 2026",
                "title": "Updated Freelance Contract & Credit Protection Charter (2026)",
                "body": "Following feedback from independent editors and designers across the state, the Chief Legal Advisory Wing has published the 2026 Standardized Freelance Post-Production Agreement.\n\nCore Protections Included:\n• Milestone Payments: Mandatory 30% booking advance, 40% on rough-cut/draft approval, and 30% prior to final master/high-res file handover.\n• Revision Caps: Standard contracts now cap complimentary rounds at two (2) consolidated feedback passes; additional changes are billed at the FEA hourly rate card.\n• Credit Guarantee: Production houses cannot remove on-screen or promotional credits of any editor, colorist, or graphic artist without documented written consent.\n• Dispute Redressal: Verified members facing non-payment beyond 30 days may file a formal grievance with the FEA Legal Desk for mediation and studio blacklisting review.",
                "postedBy": "Priya Rawat",
                "designation": "Chief Legal Advisor",
                "adminType": "Core Committee",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1763480000000
        },
        {
                "id": "sys_07",
                "badge": "Workshop",
                "isLive": true,
                "date": "15 NOV 2026",
                "title": "8K RAW Proxy Workflow & Multi-Editor Server Clinic",
                "body": "The Editorial Directorate is hosting an intensive live technical clinic on managing heavy 6K/8K RAW camera originals (RED R3D, ARRI LogC4, Sony X-OCN) on mid-range and studio workstations.\n\nSession Curriculum:\n• Automated batch proxy generation (ProRes Proxy / DNxHR LB) with burnt-in source timecode.\n• Configuring shared PostgreSQL / DaVinci Resolve Project Servers for simultaneous multi-editor collaboration.\n• Diagnosing and repairing corrupted timelines, dropped frames, and audio-sample drift during conform.\n• Live Q&A and real-time troubleshooting of member-submitted project bottlenecks.\n\nSchedule: Hybrid session (Dehradun Studio Hub + Live Stream) — Free for all verified FEA Editorial members.",
                "postedBy": "Deepak",
                "designation": "Post-Production Supervisor",
                "adminType": "Editorial Directorate",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1763220000000
        },
        {
                "id": "sys_08",
                "badge": "Workshop",
                "isLive": false,
                "date": "12 NOV 2026",
                "title": "Kinetic Typography & 3D Title Sequence Masterclass",
                "body": "Registration is open for a two-day weekend masterclass tailored for Graphic Designers and Motion Artists looking to craft theatrical opening credit sequences.\n\nWhat You Will Build:\n• Precision speed-graph and value-graph easing curves in Adobe After Effects for silky kinetic typography.\n• Extruding custom metallic 3D title cards in Blender and Cinema 4D with realistic volumetric fog and rim lighting.\n• Integrating optical lens flares, film halation, and sound-synced impact cuts into title reveals.\n\nParticipants who complete the final 15-second title assignment will receive an official FEA Workshop Completion Badge toward their Motion Typography certification.",
                "postedBy": "Prashant",
                "designation": "Motion Graphic Designer",
                "adminType": "Graphic Designer",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1762960000000
        },
        {
                "id": "sys_09",
                "badge": "Circular",
                "isLive": false,
                "date": "10 NOV 2026",
                "title": "FEA Cloud Asset Drive & Plugin Vault — Infrastructure Upgrade",
                "body": "Our Dehradun digital infrastructure team is upgrading the FEA Cloud Asset Drive and member verification servers to handle higher concurrent download speeds across Kumaon and Garhwal.\n\nUpgrade Details:\n• Bandwidth Expansion: Upgrading mirror nodes to 10 Gbps throughput for faster LUT packs, Foley libraries, and 4K film-grain downloads.\n• Security Hardening: Enforcing TLS 1.3 encryption and tokenized access links to protect unreleased member workprints from unauthorized sharing.\n• Maintenance Window: Scheduled for Sunday from 02:00 AM to 04:00 AM IST. Public website pages and Voting 2026 will remain unaffected.\n\nIf you encounter download errors post-maintenance, clear your browser cache or contact the IT Helpdesk.",
                "postedBy": "Pankaj Sharma",
                "designation": "CTO / IT Head",
                "adminType": "Core Committee",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1762780000000
        },
        {
                "id": "sys_10",
                "badge": "Open",
                "isLive": true,
                "date": "08 NOV 2026",
                "title": "Call for Showreels: FEA Uttarakhand Official 2026 Showcase",
                "body": "The PR & Communications Wing is curating the official 'FEA Uttarakhand 2026 Master Showreel', which will be screened at the Annual Gala and distributed to partner production houses in Mumbai, Delhi NCR, and Dehradun.\n\nSubmission Guidelines:\n• Length & Resolution: 45 to 60 seconds, 4K UHD (3840x2160) or 1080p MP4 (H.264 / ProRes 422), 24/25 fps.\n• Eligible Work: Narrative film cuts, commercial edits, VFX before/after breakdowns, color-grade wipes, motion titles, and key-art reels produced in 2025–26.\n• Credit Slate: Include a clean 3-second opening slate with your Full Name, FEA Member ID, and primary specialization.\n\nEmail your Google Drive / Vimeo download link to fea.uttarakhand@gmail.com with the subject '2026 Official Showreel Submission'.",
                "postedBy": "Neha Karki",
                "designation": "PR & Communications Head",
                "adminType": "Core Committee",
                "linkUrl": "mailto:fea.uttarakhand@gmail.com",
                "linkLabel": "Submit Showreel ↗",
                "timestamp": 1762610000000
        },
        {
                "id": "sys_11",
                "badge": "Circular",
                "isLive": false,
                "date": "05 NOV 2026",
                "title": "Kumaon & Garhwal Regional Chapter Meetups — Winter 2026",
                "body": "To ensure independent artists outside Dehradun have equal access to mentorship, legal backing, and studio referrals, the Joint Secretariat has scheduled regional chapter meetups across Uttarakhand.\n\nConfirmed Regional Hubs:\n• Kumaon Chapter (Haldwani & Rudrapur): Portfolio reviews, local studio tie-ups, and freelance grievance desk.\n• Garhwal Chapter (Kotdwar & Pauri): Student-editor onboarding, software clinic, and regional film collaboration mixer.\n• Dehradun HQ: Open townhall with Core Committee leads and technical supervisors.\n\nExact venue addresses and time slots will be emailed to registered members in each district 7 days prior to the meetup.",
                "postedBy": "Hemchand Pandey",
                "designation": "Joint Secretary",
                "adminType": "Core Committee",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1762350000000
        },
        {
                "id": "sys_12",
                "badge": "Mandatory",
                "isLive": true,
                "date": "03 NOV 2026",
                "title": "Official Member ID Verification Portal Live — Verify by 5 DEC 2026",
                "body": "The Membership Directorate has launched the public FEA Member ID Verification Portal so production houses, clients, and institutions can instantly authenticate official FEA Uttarakhand credentials.\n\nAction Required Before 5 DEC 2026:\n• Visit verify.html and enter your dedicated ID (e.g., FEA-CC001, FEA-ED001, FEA-GD001).\n• Confirm that your Active (2026) status badge, Directorate name, and experience tier display accurately.\n• Share your direct verification URL (verify.html?id=YOUR_ID) on resumes, LinkedIn profiles, and client proposals.\n\nAll active members must complete this verification check no later than 5 DEC 2026.",
                "postedBy": "Rohit Chauhan",
                "designation": "Membership Director",
                "adminType": "Core Committee",
                "linkUrl": "verify.html",
                "linkLabel": "Verify Member ID ↗",
                "timestamp": 1762180000000
        },
        {
                "id": "sys_13",
                "badge": "Open",
                "isLive": true,
                "date": "01 NOV 2026",
                "title": "New Membership & Directorate Intake (2026–27 Cycle)",
                "body": "The Film Editor's Association, Uttarakhand is officially accepting applications for the 2026–27 Membership and Directorate Intake across all 13 districts.\n\nAvailable Tracks:\n• General Membership: Open to aspiring editors, designers, film students, and content creators across Uttarakhand.\n• Editorial Directorate: Video Editing, Color Grading (DI), VFX Compositing, and Sound Design (requires verified portfolio/experience).\n• Creative Directorate: Graphic Design, Key Art, Concept Art, Motion Graphics, and 3D Title Design (requires verified portfolio/experience).\n\nApproved applicants receive an official FEA Member ID, access to regional workshops, legal contract templates, and inclusion in our state-wide hiring directory.",
                "postedBy": "Ronish",
                "designation": "Vice President",
                "adminType": "Core Committee",
                "linkUrl": "#join",
                "linkLabel": "Apply for Membership ↗",
                "timestamp": 1762000000000
        },
        {
                "id": "sys_14",
                "badge": "Urgent",
                "isLive": true,
                "date": "30 OCT 2026",
                "title": "Final Cutoff for 2026 Certification Portfolio Assessments",
                "body": "Members seeking official FEA Uttarakhand Master, Expert, or Specialist Certifications for the Winter 2026 cohort must submit their assessment dossiers before 10 DEC 2026.\n\nAssessment Dossier Requirements:\n• Select up to two (2) certification tracks from the Official Certifications Directory (Elite Master, Video Editing, Graphic Design, or VFX/Audio/Tech).\n• Submit unwatermarked project breakdowns, timeline screenshots or node-tree exports, and final rendered deliverables.\n• Include a brief technical statement explaining your workflow, software stack, and problem-solving approach.\n\nEvaluations are conducted blind by a three-member review panel from the respective Directorate.",
                "postedBy": "Sumit",
                "designation": "General Secretary",
                "adminType": "Core Committee",
                "linkUrl": "certifications.html",
                "linkLabel": "View Certifications ↗",
                "timestamp": 1761820000000
        },
        {
                "id": "sys_15",
                "badge": "Circular",
                "isLive": false,
                "date": "28 OCT 2026",
                "title": "Standardized OTT & Theatrical DCP Mastering Checklist",
                "body": "To reduce costly mastering rejections from multiplex chains and streaming aggregators, the Conform & Finishing Desk has issued the 2026 DCP & IMF Delivery Checklist.\n\nMandatory Pre-Master Checks:\n• Frame Rate & Cadence: True 24.000 fps for theatrical DCPs; 24/25 fps progressive with zero interlacing artifacts for OTT.\n• Color Space: XYZ 12-bit JPEG2000 for DCP; verified Rec.709 / P3-D65 metadata tags for digital masters.\n• Audio Loudness: Integrated loudness locked to -24 LKFS (±1 LU) for broadcast/OTT and calibrated cinema dynamics for 5.1 theatrical mixes.\n• Subtitles & Forced Narratives: Burn-in or timed-text SMPTE XML checked for spelling, reading speed, and safe margins.",
                "postedBy": "Abhishek Yadav",
                "designation": "Master Conform & Finishing Supervisor",
                "adminType": "Editorial Directorate",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1761650000000
        },
        {
                "id": "sys_16",
                "badge": "Workshop",
                "isLive": false,
                "date": "26 OCT 2026",
                "title": "Photorealistic Set Extensions & 2.5D Matte Painting Lab",
                "body": "The Creative Directorate invites concept artists, matte painters, and VFX compositors to a hands-on lab focused on seamless Himalayan environment extensions.\n\nLab Modules:\n• Sky replacement, mountain-ridge extensions, and atmospheric depth matching using real Uttarakhand location plates.\n• Exporting layered Photoshop PSD projections into Nuke and Blender for moving-camera 2.5D parallax.\n• Matching lens distortion, chromatic aberration, and natural shadow falloff so digital extensions remain completely invisible.\n\nAll registered attendees will receive practice raw plates and custom cloud/fog brush packs.",
                "postedBy": "Rohan Mishra",
                "designation": "Lead Matte Painter",
                "adminType": "Graphic Designer",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1761480000000
        },
        {
                "id": "sys_17",
                "badge": "Circular",
                "isLive": false,
                "date": "24 OCT 2026",
                "title": "Q4 Financial Transparency & Bulk Plugin Licensing Update",
                "body": "In line with our commitment to transparent governance, the Treasury has published the Q4 2026 allocation summary covering educational workshops, cloud storage hosting, and awards gala reserves.\n\nMember Benefit Updates:\n• Subsidized Plugin Bundles: Group-rate renewals for color, audio cleanup, and motion-graphics plugin suites are now active for verified 2026 members.\n• Workshop Funding: All official FEA technical clinics for Winter 2026 remain 100% free of charge for active members.\n• Audit Access: Core Committee and Directorate leads may review the full itemized Q4 ledger during the December review session.",
                "postedBy": "Inder Singh",
                "designation": "Treasurer",
                "adminType": "Core Committee",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1761300000000
        },
        {
                "id": "sys_18",
                "badge": "Workshop",
                "isLive": false,
                "date": "22 OCT 2026",
                "title": "Dolby Atmos & Spatial Soundscape Mixing Briefing",
                "body": "Sound defines half the cinematic experience. The SFX Supervision Wing is conducting a specialized technical briefing on building theatrical-grade mixes from challenging location audio.\n\nTopics Covered:\n• Dialogue restoration: Removing wind rumble, generator hum, and room reverb without introducing robotic artifacts.\n• Layering organic Foley (footsteps, cloth rustle, mountain ambience) to anchor cutaways and montage sequences.\n• Routing object-based beds for 5.1 surround and Dolby Atmos binaural fold-downs.\n\nRecommended for SFX Supervisors, Associate Editors, and independent filmmakers handling their own final mix.",
                "postedBy": "Mallika Arora",
                "designation": "SFX Supervisor",
                "adminType": "Editorial Directorate",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1761130000000
        },
        {
                "id": "sys_19",
                "badge": "Circular",
                "isLive": false,
                "date": "20 OCT 2026",
                "title": "Regional Script Calligraphy & Opening Title Typography Standards",
                "body": "To preserve cultural authenticity in Uttarakhand cinema, the Creative Directorate has released a curated typography stylebook for Devanagari, Garhwali, and Kumaoni film titles.\n\nKey Recommendations:\n• Prioritize custom brush/vector calligraphy over overused default system fonts for primary theatrical title treatments.\n• Maintain clear legibility at mobile thumbnail scale (320px width) as well as 40-foot cinema projection.\n• Always archive editable vector outlines (.AI / .SVG) alongside high-resolution transparent PNGs for the editorial team.\n\nTwelve new custom Devanagari display ligature sheets have been added to the FEA Design Vault.",
                "postedBy": "Kunal Pandey",
                "designation": "Cinematic Calligrapher",
                "adminType": "Graphic Designer",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1760960000000
        },
        {
                "id": "sys_20",
                "badge": "Mandatory",
                "isLive": false,
                "date": "18 OCT 2026",
                "title": "Zero-Artifact QC Audit Policy for Regional Film Submissions",
                "body": "Effective Q4 2026, every feature film, short film, or documentary submitted to national festivals under FEA Uttarakhand endorsement must clear our Zero-Artifact Quality Control (QC) Audit.\n\nAutomated & Manual QC Checkpoints:\n• Video Integrity: Zero flash frames, black frames, macro-blocking, dead pixels, or illegal broadcast chroma spikes.\n• Audio-Video Sync: Lip-sync drift strictly within ±0.5 frames across the entire runtime.\n• Metadata & Slates: Clean head/tail leaders, accurate aspect-ratio matting, and verified end-credit spelling.\n\nSubmit test screeners at least 72 hours prior to festival deadlines for priority QC sign-off.",
                "postedBy": "Ritu Srivastava",
                "designation": "QC & Delivery Supervisor",
                "adminType": "Editorial Directorate",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1760780000000
        },
        {
                "id": "sys_21",
                "badge": "Circular",
                "isLive": false,
                "date": "16 OCT 2026",
                "title": "Updated Freelance Rate Card & Project Budgeting Guide (2026–27)",
                "body": "To combat unfair pricing and undercutting in the regional post-production market, the Joint Treasury has issued the 2026–27 Recommended Freelance Rate Card.\n\nWhat the Guide Covers:\n• Baseline per-day and per-project brackets for Assistant Editors, Lead Editors, Colorists, VFX Artists, and Graphic Designers.\n• Rush-fee multipliers (25%–50%) for overnight turnarounds and weekend emergency deliveries.\n• Hardware, render-time, and licensed stock-asset pass-through billing clauses.\n\nAll members are encouraged to reference this benchmark during client negotiations and pair it with the FEA Legal Contract Charter.",
                "postedBy": "Manish Tiwari",
                "designation": "Joint Treasurer",
                "adminType": "Core Committee",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1760610000000
        },
        {
                "id": "sys_22",
                "badge": "Workshop",
                "isLive": false,
                "date": "14 OCT 2026",
                "title": "AI-Assisted Rotoscoping & Clean-Plate VFX Clinic",
                "body": "Modern invisible VFX requires speed without sacrificing edge fidelity. Join the VFX Supervision team for a focused clinic on hybrid neural-plus-manual compositing.\n\nKey Techniques Covered:\n• Combining AI matte extraction with manual Bezier edge refinement for hair, motion blur, and semi-transparent fabrics.\n• Rapid boom-mic, crew-reflection, and safety-wire removal using temporal clean-plate patching in Nuke and After Effects.\n• 3D planar and camera tracking for screen replacements and signage swaps.\n\nOpen to all Editorial Directorate members and intermediate editors looking to expand into VFX.",
                "postedBy": "Sunita Dandriyal",
                "designation": "VFX Supervisor",
                "adminType": "Editorial Directorate",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1760440000000
        },
        {
                "id": "sys_23",
                "badge": "Open",
                "isLive": false,
                "date": "12 OCT 2026",
                "title": "Design Vault Expansion: 500+ New Textures, Overlays & LUT Packs",
                "body": "The FEA Graphic Design & Post-Production Resource Library has been expanded with over 500 royalty-free, commercial-grade assets curated specifically for regional filmmakers and designers.\n\nNew Additions Now Available:\n• 35mm & 16mm real scanned film grain, halation overlays, and subtle dust/scratch plates in 4K.\n• Authentic Himalayan mist, deodar forest silhouettes, and atmospheric fog PNG/VDB elements.\n• Print-ready theatrical poster grid templates, festival laurel packs, and billing-block presets.\n\nVerified members can request direct download credentials through their Directorate Resource Person.",
                "postedBy": "Devika Bora",
                "designation": "Post-Production Designer",
                "adminType": "Graphic Designer",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1760260000000
        },
        {
                "id": "sys_24",
                "badge": "Circular",
                "isLive": false,
                "date": "10 OCT 2026",
                "title": "High-Retention Trailer & Teaser Pacing Guidelines (2026)",
                "body": "Promotional cuts make or break theatrical openings and digital releases. The Trailer & Promo Editorial Desk has compiled structural guidelines for cutting high-impact teasers.\n\nEditorial Principles:\n• Three-Act Micro-Arc: Establish the world in the first 15 seconds, escalate conflict with rhythmic sound risers, and peak with a clean signature hook.\n• Spoiler Discipline: Never reveal Act-3 twists or climax resolutions in primary theatrical trailers.\n• Dual-Format Delivery: Prepare native 16:9 cinema cuts alongside reframed 9:16 vertical cuts (with dedicated mobile-readable title cards) for Instagram Reels and YouTube Shorts.",
                "postedBy": "Anurag Shukla",
                "designation": "Trailer & Promo Supervisor",
                "adminType": "Editorial Directorate",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1760090000000
        },
        {
                "id": "sys_25",
                "badge": "Workshop",
                "isLive": false,
                "date": "08 OCT 2026",
                "title": "Pre-Production Storyboarding & Shot-Blocking Seminar",
                "body": "Great edits begin before cameras roll. This joint Creative and Editorial seminar focuses on translating complex scripts into actionable visual blueprints.\n\nSeminar Agenda:\n• Breaking down action and VFX-heavy scenes into clear shot-blocking frames with camera movement arrows.\n• Timing rough storyboard panels into edited 2D animatics with temp sound effects to test pacing before shoot day.\n• Aligning Directors, Cinematographers, and VFX Supervisors on lens choices and eyeline continuity.\n\nStoryboard artists and lead editors are encouraged to attend together.",
                "postedBy": "Kavita Rautela",
                "designation": "Storyboard Illustrator",
                "adminType": "Graphic Designer",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1759920000000
        },
        {
                "id": "sys_26",
                "badge": "Circular",
                "isLive": false,
                "date": "05 OCT 2026",
                "title": "Himalayan Archival & Documentary Restoration Initiative",
                "body": "FEA Uttarakhand has launched a long-term cultural preservation drive to digitize, clean, and restore aging VHS, BetaCam, and celluloid reels documenting Uttarakhand's cinema and folk heritage.\n\nHow Members Can Contribute:\n• Volunteer restoration hours for deflickering, stabilization, scratch removal, and AI-assisted upscaling.\n• Help catalog historical interviews and regional stage recordings with structured metadata and timecoded transcripts.\n• Contributors earn verified hours toward the prestigious 'Regional Cinema Preservationist (FEA-M10)' Master Credential.\n\nWrite to the Archival Desk via fea.uttarakhand@gmail.com to join the restoration roster.",
                "postedBy": "Meenakshi Bhatt",
                "designation": "Archival & Documentary Lead Editor",
                "adminType": "Editorial Directorate",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1759660000000
        },
        {
                "id": "sys_27",
                "badge": "Circular",
                "isLive": false,
                "date": "03 OCT 2026",
                "title": "FUI & Holographic Screen Design Showcase Submissions",
                "body": "The Creative Directorate is spotlighting Fictional User Interfaces (FUI), tactical HUDs, and on-screen mobile/computer graphics designed for films, web series, and music videos.\n\nSubmission Criteria:\n• Submit high-resolution motion clips or still breakdowns showing both the standalone UI design and the final composited shot.\n• Works demonstrating clean typography, believable data visualization, and diegetic lighting integration will be featured in the Q4 FEA Design Digest.\n• Selected designers will be invited to host a 20-minute breakdown during our December Creative Showcase.",
                "postedBy": "Simran Bisht",
                "designation": "UI/UX Screen Designer",
                "adminType": "Graphic Designer",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1759480000000
        },
        {
                "id": "sys_28",
                "badge": "Mandatory",
                "isLive": false,
                "date": "01 OCT 2026",
                "title": "Post-Production Scheduling & Anti-Burnout Working Hours Protocol",
                "body": "Sustainable creativity requires healthy edit-bay discipline. All FEA-affiliated studios and independent post-producers are advised to implement the 2026 Anti-Burnout Scheduling Protocol.\n\nStandard Shift Guidelines:\n• Maximum 10-hour standard edit-bay shift (including a mandatory 1-hour meal/eye-rest break) with at least 12 hours turnaround between consecutive days.\n• Consolidated Feedback Windows: Clients and directors must submit timecoded notes in single batches rather than fragmented midnight messages.\n• Overtime Compensation: Any work extending beyond standard hours or on declared public holidays must be pre-approved with overtime pay.\n\nMembers experiencing coercive scheduling practices may report confidentially to the Core Committee.",
                "postedBy": "Payal Rawat",
                "designation": "Post-Producer",
                "adminType": "Editorial Directorate",
                "linkUrl": "",
                "linkLabel": "",
                "timestamp": 1759310000000
        }
];

    /* =========================================================
       4. STATE & DOM REFERENCES
       ========================================================= */
    const LOCAL_NOTICES_KEY = "fea_2026_custom_notices_v1";
    const LOCAL_OVERRIDES_KEY = "fea_2026_default_overrides_v1";
    const ADMIN_SESSION_KEY = "fea_2026_admin_session";

    let customNotices = [];
    let defaultOverrides = {};
    let activeWing = "all";
    let searchQuery = "";
    let currentAdmin = JSON.parse(sessionStorage.getItem(ADMIN_SESSION_KEY) || "null");
    let editingNotice = null;

    let db = null, fbRef = null, fbPush = null, fbSet = null, fbRemove = null;

    const gridEl = document.getElementById("notices-grid");
    const totalCountEl = document.getElementById("notices-total-count");
    const activeCountEl = document.getElementById("notices-active-count");
    const emptyStateEl = document.getElementById("notices-empty-state");
    const toastEl = document.getElementById("vote-toast");

    const viewModal = document.getElementById("view-notice-modal");
    const loginModal = document.getElementById("admin-login-modal");
    const postModal = document.getElementById("post-notice-modal");
    const postModalHeading = document.getElementById("post-modal-heading");
    const postModalSubmitBtn = document.getElementById("post-modal-submit-btn");
    const postNoticeForm = document.getElementById("post-notice-form");
    const openLoginBtn = document.getElementById("open-admin-login-btn");
    const openPostBtn = document.getElementById("open-post-notice-btn");
    const logoutBtn = document.getElementById("admin-logout-btn");
    const sessionInfoEl = document.getElementById("admin-session-info");
    const sessionLabelEl = document.getElementById("admin-session-label");
    const publisherWingBadge = document.getElementById("publisher-wing-badge");
    const loginErrorEl = document.getElementById("admin-login-error");

    function showToast(msg) {
        if (!toastEl) return;
        toastEl.innerText = msg;
        toastEl.classList.add("show");
        setTimeout(() => toastEl.classList.remove("show"), 3200);
    }

    function escapeHTML(str) {
        return String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function formatTodayDate() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, "0");
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return `${day} ${months[now.getMonth()]} ${now.getFullYear()}`;
    }

    // Core Committee can edit/delete ALL notices; Editorial & Graphic Designer only their own wing
    function canManageNotice(notice) {
        if (!currentAdmin) return false;
        if (currentAdmin.wing === "Core Committee") return true;
        return notice.adminType === currentAdmin.wing;
    }

    /* =========================================================
       5. FIREBASE + LOCAL STORAGE SYNC
       ========================================================= */
    function loadLocalState() {
        customNotices = JSON.parse(localStorage.getItem(LOCAL_NOTICES_KEY) || "[]");
        defaultOverrides = JSON.parse(localStorage.getItem(LOCAL_OVERRIDES_KEY) || "{}");
        renderNotices();
    }

    function saveLocalState() {
        localStorage.setItem(LOCAL_NOTICES_KEY, JSON.stringify(customNotices));
        localStorage.setItem(LOCAL_OVERRIDES_KEY, JSON.stringify(defaultOverrides));
    }

    async function initDatabase() {
        if (USE_FIREBASE) {
            try {
                const { initializeApp, getApps, getApp } = await import("https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js");
                const { getDatabase, ref, onValue, push, set, remove } = await import("https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js");

                const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
                db = getDatabase(app);
                fbRef = ref;
                fbPush = push;
                fbSet = set;
                fbRemove = remove;

                onValue(ref(db, "fea_2026_notices"), (snapshot) => {
                    const data = snapshot.val() || {};
                    const nextCustom = [];
                    const nextOverrides = {};

                    Object.entries(data).forEach(([key, val]) => {
                        if (!val) return;
                        if (key.startsWith("sys_")) {
                            nextOverrides[key] = val;
                        } else {
                            nextCustom.push({
                                ...val,
                                firebaseKey: key,
                                isDefault: false
                            });
                        }
                    });

                    customNotices = nextCustom;
                    defaultOverrides = nextOverrides;
                    renderNotices();
                });
            } catch (err) {
                console.error("Firebase notice sync error, using local storage:", err);
                loadLocalState();
            }
        } else {
            loadLocalState();
        }
    }

    /* =========================================================
       6. MERGE & RENDER HEADLINE-ONLY NOTICE CARDS
       ========================================================= */
    function getAllNotices() {
        const mergedDefaults = [];
        defaultNotices.forEach(def => {
            const ov = defaultOverrides[def.id];
            if (ov && ov.deleted) return;
            mergedDefaults.push({
                ...def,
                ...(ov || {}),
                id: def.id,
                isDefault: true
            });
        });

        const mergedCustom = customNotices.map(n => ({
            ...n,
            isDefault: false
        }));

        return [...mergedCustom, ...mergedDefaults].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    }

    function findNoticeByKey(key, isDef) {
        return getAllNotices().find(n =>
            isDef ? n.id === key : (n.firebaseKey === key || n.id === key)
        );
    }

    function renderNotices() {
        if (!gridEl) return;
        const all = getAllNotices();

        if (totalCountEl) totalCountEl.innerText = all.length;
        if (activeCountEl) {
            activeCountEl.innerText = all.filter(n => n.isLive || ["Active", "Urgent", "Mandatory", "Open"].includes(n.badge)).length;
        }

        const filtered = all.filter(n => {
            const matchWing = activeWing === "all" || n.adminType === activeWing;
            const hay = `${n.title} ${n.body} ${n.postedBy} ${n.designation || ""} ${n.adminType} ${n.badge}`.toLowerCase();
            const matchSearch = !searchQuery || hay.includes(searchQuery);
            return matchWing && matchSearch;
        });

        gridEl.innerHTML = "";
        if (emptyStateEl) emptyStateEl.style.display = filtered.length === 0 ? "block" : "none";

        filtered.forEach(notice => {
            const card = document.createElement("div");
            card.className = "notice-card headline-card";

            const isLiveBadge = notice.isLive || notice.badge === "Active" || notice.badge === "Urgent";
            const noticeKey = notice.isDefault ? notice.id : (notice.firebaseKey || notice.id);
            card.setAttribute("data-key", noticeKey);
            card.setAttribute("data-default", notice.isDefault ? "1" : "0");

            const adminControlsHtml = canManageNotice(notice)
                ? `<div class="notice-admin-btns">
                        <button class="notice-edit-btn" data-key="${escapeHTML(noticeKey)}" data-default="${notice.isDefault ? "1" : "0"}" title="Edit Notice">Edit</button>
                        <button class="notice-delete-btn" data-key="${escapeHTML(noticeKey)}" data-default="${notice.isDefault ? "1" : "0"}" title="Delete Notice">Delete</button>
                   </div>`
                : "";

            card.innerHTML = `
                <span class="corner-mark tl"></span>
                <span class="corner-mark br"></span>

                <div class="notice-meta">
                    <span class="notice-badge ${isLiveBadge ? "live" : ""}">${escapeHTML(notice.badge)}</span>
                    <span class="notice-date">${escapeHTML(notice.date)}</span>
                </div>

                <h3>${escapeHTML(notice.title)}</h3>

                <div class="notice-issuer-box">
                    <span class="notice-wing-tag">${escapeHTML(notice.adminType)}</span>
                    <div class="notice-issuer-name">
                        By <strong>${escapeHTML(notice.postedBy)}</strong>
                        ${notice.designation ? `<span class="notice-issuer-role">(${escapeHTML(notice.designation)})</span>` : ""}
                    </div>
                </div>

                <div class="notice-card-actions">
                    <span class="notice-read-cta">Read Full Notice ↗</span>
                    ${adminControlsHtml}
                </div>
            `;
            gridEl.appendChild(card);
        });
    }

    /* =========================================================
       7. FULL NOTICE READER MODAL
       ========================================================= */
    function openViewModal(notice) {
        if (!viewModal || !notice) return;
        const isLiveBadge = notice.isLive || notice.badge === "Active" || notice.badge === "Urgent";
        const noticeKey = notice.isDefault ? notice.id : (notice.firebaseKey || notice.id);

        const badgeEl = document.getElementById("view-notice-badge");
        badgeEl.innerText = notice.badge || "Circular";
        badgeEl.className = `notice-badge ${isLiveBadge ? "live" : ""}`;

        document.getElementById("view-notice-date").innerText = notice.date || "";
        document.getElementById("view-notice-title").innerText = notice.title || "";
        document.getElementById("view-notice-body").innerText = notice.body || "";
        document.getElementById("view-notice-wing").innerText = notice.adminType || "";
        document.getElementById("view-notice-issuer").innerHTML = `
            Issued by: <strong>${escapeHTML(notice.postedBy)}</strong>
            ${notice.designation ? `<span class="notice-issuer-role">(${escapeHTML(notice.designation)})</span>` : ""}
        `;

        const linkWrap = document.getElementById("view-notice-link-wrap");
        if (notice.linkUrl === "#join") {
            linkWrap.innerHTML = `<a href="#" class="notice-link join-trigger">${escapeHTML(notice.linkLabel || "Apply Now ↗")}</a>`;
            linkWrap.querySelector(".join-trigger").addEventListener("click", (e) => {
                e.preventDefault();
                closeViewModal();
                const joinModal = document.getElementById("join-modal");
                if (joinModal) {
                    joinModal.classList.add("active");
                    document.body.style.overflow = "hidden";
                }
            });
        } else if (notice.linkUrl) {
            const isExternal = notice.linkUrl.startsWith("http");
            linkWrap.innerHTML = `<a href="${escapeHTML(notice.linkUrl)}" class="notice-link" ${isExternal ? 'target="_blank" rel="noopener"' : ''}>${escapeHTML(notice.linkLabel || "View Details ↗")}</a>`;
        } else {
            linkWrap.innerHTML = "";
        }

        const adminWrap = document.getElementById("view-notice-admin-wrap");
        if (canManageNotice(notice)) {
            adminWrap.innerHTML = `
                <button class="notice-edit-btn" data-key="${escapeHTML(noticeKey)}" data-default="${notice.isDefault ? "1" : "0"}">Edit</button>
                <button class="notice-delete-btn" data-key="${escapeHTML(noticeKey)}" data-default="${notice.isDefault ? "1" : "0"}">Delete</button>
            `;
        } else {
            adminWrap.innerHTML = "";
        }

        viewModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeViewModal() {
        if (!viewModal) return;
        viewModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    if (viewModal) {
        document.getElementById("close-view-notice").addEventListener("click", closeViewModal);
        viewModal.addEventListener("click", (e) => {
            if (e.target === viewModal) closeViewModal();
        });
        document.getElementById("view-notice-admin-wrap").addEventListener("click", (e) => {
            const editBtn = e.target.closest(".notice-edit-btn");
            if (editBtn) {
                const target = findNoticeByKey(editBtn.getAttribute("data-key"), editBtn.getAttribute("data-default") === "1");
                closeViewModal();
                if (target) openEditModal(target);
                return;
            }
            const delBtn = e.target.closest(".notice-delete-btn");
            if (delBtn) {
                const key = delBtn.getAttribute("data-key");
                const isDef = delBtn.getAttribute("data-default") === "1";
                closeViewModal();
                handleDeleteNotice(key, isDef);
            }
        });
    }

    /* =========================================================
       8. PUBLISH / EDIT MODAL HELPERS
       ========================================================= */
    function openCreateModal() {
        if (!currentAdmin) return;
        editingNotice = null;
        postNoticeForm.reset();
        if (postModalHeading) postModalHeading.innerText = "Publish Official Notice";
        if (postModalSubmitBtn) postModalSubmitBtn.innerText = "Publish Notice Live";
        if (publisherWingBadge) publisherWingBadge.innerText = `Authorized Wing: ${currentAdmin.wing}`;
        postModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function openEditModal(notice) {
        if (!currentAdmin || !canManageNotice(notice)) return;
        editingNotice = notice;

        document.getElementById("notice-poster-name").value = notice.postedBy || "";
        document.getElementById("notice-poster-title").value = notice.designation || "";
        document.getElementById("notice-badge-select").value = notice.badge || "Circular";
        document.getElementById("notice-title-input").value = notice.title || "";
        document.getElementById("notice-body-input").value = notice.body || "";
        document.getElementById("notice-link-url").value = notice.linkUrl || "";
        document.getElementById("notice-link-label").value = notice.linkLabel || "";

        if (postModalHeading) postModalHeading.innerText = "Edit Official Notice";
        if (postModalSubmitBtn) postModalSubmitBtn.innerText = "Save Notice Changes";
        if (publisherWingBadge) {
            publisherWingBadge.innerText = `Editing (${notice.adminType}) • Logged in as ${currentAdmin.wing}`;
        }

        postModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closePostModal() {
        editingNotice = null;
        postNoticeForm.reset();
        postModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    async function handleDeleteNotice(key, isDef) {
        const target = findNoticeByKey(key, isDef);
        if (!target || !canManageNotice(target)) {
            showToast("You can only delete notices from your own wing");
            return;
        }
        if (!confirm(`Delete notice "${target.title}"?`)) return;

        if (isDef) {
            if (USE_FIREBASE && db && fbSet) {
                try {
                    await fbSet(fbRef(db, `fea_2026_notices/${key}`), { deleted: true });
                } catch (err) {
                    console.error("Firebase default delete failed, saving locally:", err);
                    defaultOverrides[key] = { deleted: true };
                    saveLocalState();
                    renderNotices();
                }
            } else {
                defaultOverrides[key] = { deleted: true };
                saveLocalState();
                renderNotices();
            }
        } else {
            if (USE_FIREBASE && db && fbRemove) {
                try {
                    await fbRemove(fbRef(db, `fea_2026_notices/${key}`));
                } catch (err) {
                    console.error("Firebase delete failed, saving locally:", err);
                    customNotices = customNotices.filter(n => n.firebaseKey !== key && n.id !== key);
                    saveLocalState();
                    renderNotices();
                }
            } else {
                customNotices = customNotices.filter(n => n.id !== key);
                saveLocalState();
                renderNotices();
            }
        }
        showToast("Notice deleted");
    }

    /* =========================================================
       9. ADMIN AUTH, PUBLISH, EDIT & DELETE HANDLERS
       ========================================================= */
    function updateAdminUI() {
        if (currentAdmin) {
            openLoginBtn.style.display = "none";
            openPostBtn.style.display = "inline-block";
            logoutBtn.style.display = "inline-block";
            sessionInfoEl.style.display = "inline-flex";
            sessionLabelEl.innerText = `Admin: ${currentAdmin.wing}`;
            if (publisherWingBadge) {
                publisherWingBadge.innerText = `Authorized Wing: ${currentAdmin.wing}`;
            }
        } else {
            openLoginBtn.style.display = "inline-block";
            openPostBtn.style.display = "none";
            logoutBtn.style.display = "none";
            sessionInfoEl.style.display = "none";
        }
        renderNotices();
    }


    // Show / Hide Admin Passcode toggle
    const togglePassBtn = document.getElementById("toggle-admin-pass");
    const adminPassInput = document.getElementById("admin-pass-input");
    if (togglePassBtn && adminPassInput) {
        togglePassBtn.addEventListener("click", () => {
            const isHidden = adminPassInput.type === "password";
            adminPassInput.type = isHidden ? "text" : "password";
            togglePassBtn.innerText = isHidden ? "Hide" : "Show";
            togglePassBtn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
        });
    }

    openLoginBtn.addEventListener("click", () => {
        loginErrorEl.style.display = "none";
        if (adminPassInput && togglePassBtn) { adminPassInput.type = "password"; togglePassBtn.innerText = "Show"; }
        loginModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    document.getElementById("close-admin-login").addEventListener("click", () => {
        loginModal.classList.remove("active");
        document.body.style.overflow = "auto";
    });

    loginModal.addEventListener("click", (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

    document.getElementById("admin-login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const wing = document.getElementById("admin-role-select").value;
        const enteredId = document.getElementById("admin-id-input").value.trim().toLowerCase();
        const enteredPass = document.getElementById("admin-pass-input").value.trim();

        const cred = ADMIN_CREDENTIALS[wing];
        if (cred && enteredId === cred.id.toLowerCase() && enteredPass === cred.pass) {
            currentAdmin = { wing, id: enteredId };
            sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(currentAdmin));
            e.target.reset();
            loginModal.classList.remove("active");
            document.body.style.overflow = "auto";
            updateAdminUI();
            showToast(`Logged in as ${wing} Admin`);
        } else {
            loginErrorEl.innerText = "Invalid Admin ID or Passcode for the selected wing.";
            loginErrorEl.style.display = "block";
        }
    });

    logoutBtn.addEventListener("click", () => {
        currentAdmin = null;
        editingNotice = null;
        sessionStorage.removeItem(ADMIN_SESSION_KEY);
        updateAdminUI();
        showToast("Admin logged out");
    });

    openPostBtn.addEventListener("click", openCreateModal);
    document.getElementById("close-post-notice").addEventListener("click", closePostModal);
    postModal.addEventListener("click", (e) => {
        if (e.target === postModal) closePostModal();
    });

    postNoticeForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!currentAdmin) {
            showToast("Please login as an admin first");
            return;
        }

        const posterName = document.getElementById("notice-poster-name").value.trim();
        const posterTitle = document.getElementById("notice-poster-title").value.trim();
        const badge = document.getElementById("notice-badge-select").value;
        const title = document.getElementById("notice-title-input").value.trim();
        const body = document.getElementById("notice-body-input").value.trim();
        const linkUrl = document.getElementById("notice-link-url").value.trim();
        const linkLabel = document.getElementById("notice-link-label").value.trim();

        if (!posterName || !title || !body) return;

        // EDIT EXISTING NOTICE
        if (editingNotice) {
            if (!canManageNotice(editingNotice)) {
                showToast("You do not have permission to edit this notice");
                return;
            }

            const updatedNotice = {
                id: editingNotice.id,
                badge,
                isLive: badge === "Active" || badge === "Urgent",
                date: editingNotice.date,
                title,
                body,
                postedBy: posterName,
                designation: posterTitle,
                adminType: editingNotice.adminType,
                linkUrl,
                linkLabel,
                timestamp: editingNotice.timestamp
            };

            const targetKey = editingNotice.isDefault
                ? editingNotice.id
                : (editingNotice.firebaseKey || editingNotice.id);

            if (USE_FIREBASE && db && fbSet) {
                try {
                    await fbSet(fbRef(db, `fea_2026_notices/${targetKey}`), updatedNotice);
                } catch (err) {
                    console.error("Firebase edit failed, saving locally:", err);
                    if (editingNotice.isDefault) {
                        defaultOverrides[editingNotice.id] = updatedNotice;
                    } else {
                        customNotices = customNotices.map(n =>
                            (n.firebaseKey === targetKey || n.id === targetKey) ? { ...updatedNotice, firebaseKey: n.firebaseKey } : n
                        );
                    }
                    saveLocalState();
                    renderNotices();
                }
            } else {
                if (editingNotice.isDefault) {
                    defaultOverrides[editingNotice.id] = updatedNotice;
                } else {
                    customNotices = customNotices.map(n => (n.id === targetKey ? updatedNotice : n));
                }
                saveLocalState();
                renderNotices();
            }

            closePostModal();
            showToast("Notice updated successfully");
            return;
        }

        // PUBLISH NEW NOTICE
        const newNotice = {
            id: "notice_" + Date.now(),
            badge,
            isLive: badge === "Active" || badge === "Urgent",
            date: formatTodayDate(),
            title,
            body,
            postedBy: posterName,
            designation: posterTitle,
            adminType: currentAdmin.wing,
            linkUrl,
            linkLabel,
            timestamp: Date.now()
        };

        if (USE_FIREBASE && db && fbPush) {
            try {
                await fbPush(fbRef(db, "fea_2026_notices"), newNotice);
            } catch (err) {
                console.error("Firebase write failed, saving locally:", err);
                customNotices.unshift({ ...newNotice, isDefault: false });
                saveLocalState();
                renderNotices();
            }
        } else {
            customNotices.unshift({ ...newNotice, isDefault: false });
            saveLocalState();
            renderNotices();
        }

        closePostModal();
        showToast(`Notice Published by ${posterName} (${currentAdmin.wing})`);
    });

    // Click delegation on Notice Cards (Edit, Delete, or Open Full Notice)
    gridEl.addEventListener("click", (e) => {
        const editBtn = e.target.closest(".notice-edit-btn");
        if (editBtn && currentAdmin) {
            e.stopPropagation();
            const target = findNoticeByKey(editBtn.getAttribute("data-key"), editBtn.getAttribute("data-default") === "1");
            if (target && canManageNotice(target)) openEditModal(target);
            return;
        }

        const delBtn = e.target.closest(".notice-delete-btn");
        if (delBtn && currentAdmin) {
            e.stopPropagation();
            handleDeleteNotice(delBtn.getAttribute("data-key"), delBtn.getAttribute("data-default") === "1");
            return;
        }

        const card = e.target.closest(".notice-card.headline-card");
        if (card) {
            const target = findNoticeByKey(card.getAttribute("data-key"), card.getAttribute("data-default") === "1");
            if (target) openViewModal(target);
        }
    });

    // Filters & Search
    document.querySelectorAll("#notices-filters .filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#notices-filters .filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeWing = btn.getAttribute("data-wing");
            renderNotices();
        });
    });

    const searchInput = document.getElementById("notices-search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            renderNotices();
        });
    }

    updateAdminUI();
    initDatabase();
});
