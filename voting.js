// voting.js
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       1. CLOUD DATABASE CONFIG (FIREBASE REALTIME DATABASE)
       Set USE_FIREBASE = true after pasting your Firebase config
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
       2. CURATED CINEMATIC ARTWORK FOR BANNERS
       ========================================================= */
    const editorialVisuals = [
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80"
    ];

    const creativeVisuals = [
        "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
    ];

    /* =========================================================
       3. CATEGORIES (CORE COMMITTEE EXCLUDED)
       Each category has 1 Current Lead + 4 FEA Member Nominees.
       ========================================================= */
    const categories = [
        // --- EDITORIAL DIRECTORATE (VIDEO EDITING) ---
        { id: "exec_director", title: "Executive Director", directorate: "Editorial Directorate", lead: "Sarvesh Kushwaha", members: ["Aditya Bisht", "Gaurav Rawat", "Himani Negi", "Rishabh Pant"] },
        { id: "post_prod_sup", title: "Post-Production Supervisor", directorate: "Editorial Directorate", lead: "Deepak", members: ["Pankaj Joshi", "Nitin Rawat", "Sakshi Bhatt", "Mayank Negi"] },
        { id: "lead_editor", title: "Lead Narrative Assembly Editor", directorate: "Editorial Directorate", lead: "Ankit Khanduri", members: ["Harshvardhan Bisht", "Komal Pandey", "Tarun Chauhan", "Dheeraj Rana"] },
        { id: "trailer_sup", title: "Trailer & Promo Supervisor", directorate: "Editorial Directorate", lead: "Anurag Shukla", members: ["Shubham Karki", "Aayushi Joshi", "Vikram Singh", "Lalit Bora"] },
        { id: "doc_editor", title: "Archival & Documentary Editor", directorate: "Editorial Directorate", lead: "Meenakshi Bhatt", members: ["Pooja Rawat", "Naveen Tiwari", "Sonal Bisht", "Hemant Pant"] },
        { id: "finishing_sup", title: "Master Conform & Finishing Supervisor", directorate: "Editorial Directorate", lead: "Abhishek Yadav", members: ["Rajat Negi", "Prateek Joshi", "Anjali Rautela", "Karan Mehra"] },
        { id: "multicam_lead", title: "Multi-Cam Editorial Lead", directorate: "Editorial Directorate", lead: "Saurabh Panwar", members: ["Mohit Bisht", "Deeksha Rawat", "Ashish Kandpal", "Yashwant Rana"] },
        { id: "qc_sup", title: "QC & Delivery Supervisor", directorate: "Editorial Directorate", lead: "Ritu Srivastava", members: ["Swati Pandey", "Gagan Negi", "Bhaskar Joshi", "Tanuja Karki"] },
        { id: "assoc_editor", title: "Associate Editor", directorate: "Editorial Directorate", lead: "Niharika", members: ["Riya Bisht", "Kunal Rawat", "Nikhil Bhatt", "Shruti Tiwari"] },
        { id: "post_producer", title: "Post-Producer", directorate: "Editorial Directorate", lead: "Payal Rawat", members: ["Manisha Negi", "Sumit Joshi", "Aakash Pant", "Kavya Bora"] },
        { id: "proj_coord", title: "Project Coordinator", directorate: "Editorial Directorate", lead: "Varun", members: ["Hitesh Bisht", "Priyanka Rawat", "Sandeep Rana", "Jatin Pandey"] },
        { id: "resource_editorial", title: "Resource Person (Editorial)", directorate: "Editorial Directorate", lead: "Pranit Bisht", members: ["Alok Joshi", "Neha Negi", "Rohan Karki", "Vikas Tiwari"] },
        { id: "colorist_di", title: "Colorist / DI", directorate: "Editorial Directorate", lead: "Prerna", members: ["Divya Bhatt", "Siddharth Rawat", "Aarti Bisht", "Chetan Pant"] },
        { id: "cinematics_sup", title: "Cinematics Supervisor", directorate: "Editorial Directorate", lead: "Sarthak", members: ["Aman Negi", "Kritika Joshi", "Piyush Rana", "Sagar Bisht"] },
        { id: "gfx_sup", title: "GFX Supervisor", directorate: "Editorial Directorate", lead: "Aryan", members: ["Tushar Rawat", "Megha Pandey", "Yash Bisht", "Anmol Karki"] },
        { id: "sfx_sup", title: "SFX Supervisor", directorate: "Editorial Directorate", lead: "Mallika Arora", members: ["Shreya Negi", "Raghav Joshi", "Deepanshu Bhatt", "Kiran Bora"] },
        { id: "vfx_sup", title: "VFX Supervisor", directorate: "Editorial Directorate", lead: "Sunita Dandriyal", members: ["Akshay Rawat", "Nandini Bisht", "Prashant Pant", "Harshit Tiwari"] },
        { id: "supervising_editor", title: "Supervising Editor", directorate: "Editorial Directorate", lead: "Nandini Nautiyal", members: ["Gauri Joshi", "Vivek Negi", "Arpit Rana", "Preeti Karki"] },
        { id: "asst_editor", title: "Assistant Editor", directorate: "Editorial Directorate", lead: "Neha Sharma", members: ["Muskan Rawat", "Sahil Bisht", "Chirag Pandey", "Ankita Bhatt"] },

        // --- CREATIVE DIRECTORATE (GRAPHIC DESIGN) ---
        { id: "creative_dir", title: "Creative Director", directorate: "Creative Directorate", lead: "Sneha Rana", members: ["Bhavna Joshi", "Kartik Pant", "Ishita Negi", "Rohan Bisht"] },
        { id: "motion_designer", title: "Motion Graphic Designer", directorate: "Creative Directorate", lead: "Prashant", members: ["Lakshya Rawat", "Palak Joshi", "Ankur Negi", "Surbhi Bhatt"] },
        { id: "prod_artist", title: "Production Artist", directorate: "Creative Directorate", lead: "Sachin", members: ["Dinesh Bisht", "Roshni Pandey", "Keshav Rana", "Aanchal Karki"] },
        { id: "post_prod_designer", title: "Post-Production Designer", directorate: "Creative Directorate", lead: "Devika Bora", members: ["Mansi Rawat", "Ujjwal Joshi", "Shweta Negi", "Naman Pant"] },
        { id: "3d_motion", title: "3D Motion Artist", directorate: "Creative Directorate", lead: "Arjun Bisht", members: ["Ayush Rawat", "Khushi Bhatt", "Pranav Tiwari", "Gaurang Negi"] },
        { id: "concept_artist", title: "Concept Artist", directorate: "Creative Directorate", lead: "Priyanshi Joshi", members: ["Aditi Rawat", "Mayur Bisht", "Srishti Pandey", "Devendra Rana"] },
        { id: "post_concept", title: "Post-Concept Artist", directorate: "Creative Directorate", lead: "Udit Sharma", members: ["Vanshika Negi", "Ritik Joshi", "Bhumika Karki", "Tejas Pant"] },
        { id: "visualizer", title: "Visualizer", directorate: "Creative Directorate", lead: "Divyansh", members: ["Parth Bisht", "Simran Rawat", "Kshitij Bhatt", "Nidhi Tiwari"] },
        { id: "assoc_designer", title: "Associate Graphic Designer", directorate: "Creative Directorate", lead: "Sanyam", members: ["Garima Negi", "Hardik Joshi", "Poonam Rana", "Utkarsh Bisht"] },
        { id: "asst_designer", title: "Assistant Graphic Designer", directorate: "Creative Directorate", lead: "Shailendra Singh", members: ["Tanvi Rawat", "Aryan Pandey", "Deepali Karki", "Rakesh Bora"] },
        { id: "matte_painter", title: "Lead Matte Painter", directorate: "Creative Directorate", lead: "Rohan Mishra", members: ["Saurav Negi", "Ananya Bisht", "Kailash Joshi", "Vidhi Pant"] },
        { id: "uiux_screen", title: "UI/UX Screen Designer", directorate: "Creative Directorate", lead: "Simran Bisht", members: ["Jhanvi Rawat", "Prakhar Tiwari", "Shalini Bhatt", "Abhinav Rana"] },
        { id: "calligrapher", title: "Cinematic Calligrapher", directorate: "Creative Directorate", lead: "Kunal Pandey", members: ["Madhuri Joshi", "Sushant Negi", "Chitra Bisht", "Vaibhav Karki"] },
        { id: "storyboard", title: "Storyboard Illustrator", directorate: "Creative Directorate", lead: "Kavita Rautela", members: ["Niharika Pant", "Himanshu Rawat", "Radhika Joshi", "Anuj Bora"] },
        { id: "texture_lookdev", title: "Texture & LookDev Artist", directorate: "Creative Directorate", lead: "Amit Rajput", members: ["Karanveer Negi", "Shivani Bisht", "Pradeep Pandey", "Tanya Rawat"] }
    ];

    categories.forEach((cat, idx) => {
        cat.indexNum = String(idx + 1).padStart(2, "0");
        const pool = cat.directorate === "Editorial Directorate" ? editorialVisuals : creativeVisuals;
        cat.bannerImg = pool[idx % pool.length];
        cat.shortDir = cat.directorate === "Editorial Directorate" ? "Editorial" : "Creative";
        cat.nominees = [
            { id: `${cat.id}__lead`, name: cat.lead, status: cat.title, isLead: true },
            ...cat.members.map((mName, i) => ({
                id: `${cat.id}__m${i + 1}`,
                name: mName,
                status: "FEA Member",
                isLead: false
            }))
        ];
    });

    /* =========================================================
       4. STATE & STORAGE ENGINE
       ========================================================= */
    const LOCAL_VOTES_KEY = "fea_2026_cat_votes_v2";
    const USER_VOTED_KEY = "fea_2026_user_voted_v2";

    let voteCounts = {};
    let userVotedMap = JSON.parse(localStorage.getItem(USER_VOTED_KEY) || "{}");
    let activeDirectorate = "all";
    let searchQuery = "";
    let activeCategoryId = null;

    let db = null, fbRef = null, fbUpdate = null, fbIncrement = null;

    const bannersView = document.getElementById("banners-view");
    const categoryView = document.getElementById("category-voting-view");
    const bannersGrid = document.getElementById("category-banners-grid");
    const nomineesGrid = document.getElementById("category-nominees-grid");
    const totalVotesEl = document.getElementById("total-votes-count");
    const totalCategoriesEl = document.getElementById("total-categories-count");
    const activeCatHero = document.querySelector(".active-category-hero");
    const activeCatDirEl = document.getElementById("active-cat-directorate");
    const activeCatTitleEl = document.getElementById("active-cat-title");
    const activeCatVotesEl = document.getElementById("active-cat-votes");
    const toastEl = document.getElementById("vote-toast");

    if (totalCategoriesEl) totalCategoriesEl.innerText = categories.length;

    function showToast(msg) {
        if (!toastEl) return;
        toastEl.innerText = msg;
        toastEl.classList.add("show");
        setTimeout(() => toastEl.classList.remove("show"), 3000);
    }

    function getInitials(name) {
        return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
    }

    function getCategoryTotalVotes(cat) {
        return cat.nominees.reduce((sum, n) => sum + (voteCounts[n.id] || 0), 0);
    }

    function getGrandTotalVotes() {
        return categories.reduce((sum, cat) => sum + getCategoryTotalVotes(cat), 0);
    }

    function loadLocalVotes() {
        const saved = JSON.parse(localStorage.getItem(LOCAL_VOTES_KEY) || "{}");
        categories.forEach(cat => {
            cat.nominees.forEach(n => {
                voteCounts[n.id] = saved[n.id] || 0;
            });
        });
        renderCurrentView();
    }

    function saveLocalVotes() {
        localStorage.setItem(LOCAL_VOTES_KEY, JSON.stringify(voteCounts));
    }

    async function initDatabase() {
        if (USE_FIREBASE) {
            try {
                const { initializeApp } = await import("https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js");
                const { getDatabase, ref, onValue, update, increment } = await import("https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js");
                const app = initializeApp(firebaseConfig);
                db = getDatabase(app);
                fbRef = ref;
                fbUpdate = update;
                fbIncrement = increment;

                onValue(ref(db, "fea_2026_cat_votes"), (snapshot) => {
                    const data = snapshot.val() || {};
                    categories.forEach(cat => {
                        cat.nominees.forEach(n => {
                            voteCounts[n.id] = data[n.id] || 0;
                        });
                    });
                    renderCurrentView();
                });
            } catch (err) {
                console.error("Firebase error, using local storage:", err);
                loadLocalVotes();
            }
        } else {
            loadLocalVotes();
        }
    }

    /* =========================================================
       5. RENDER ART-DIRECTED BANNERS & BALLOT VIEW
       ========================================================= */
    function renderCurrentView() {
        if (totalVotesEl) totalVotesEl.innerText = getGrandTotalVotes().toLocaleString("en-IN");
        if (activeCategoryId) {
            renderCategoryVotingView(activeCategoryId);
        } else {
            renderBanners();
        }
    }

    function renderBanners() {
        if (!bannersGrid) return;
        bannersGrid.innerHTML = "";

        const filtered = categories.filter(cat => {
            const matchDir = activeDirectorate === "all" || cat.directorate === activeDirectorate;
            const q = searchQuery;
            const matchSearch =
                !q ||
                cat.title.toLowerCase().includes(q) ||
                cat.nominees.some(n => n.name.toLowerCase().includes(q));
            return matchDir && matchSearch;
        });

        filtered.forEach(cat => {
            const catVotes = getCategoryTotalVotes(cat);
            const hasVoted = Boolean(userVotedMap[cat.id]);

            const card = document.createElement("div");
            card.className = "category-banner-card";
            card.setAttribute("data-cat-id", cat.id);
            card.innerHTML = `
                <div class="banner-bg-img" style="background-image: url('${cat.bannerImg}')"></div>
                <span class="corner-mark tl"></span>
                <span class="corner-mark br"></span>

                <div class="banner-top-meta">
                    <span class="banner-index-tag">CAT. ${cat.indexNum} <span>//</span> ${cat.shortDir}</span>
                    ${hasVoted ? `<span class="banner-voted-pill">✓ Voted</span>` : ""}
                </div>

                <div class="banner-body">
                    <h3 class="banner-title">${cat.title}</h3>
                    <p class="banner-nominee-line">
                        Featuring <strong>${cat.lead}</strong> & ${cat.members.length} FEA Members
                    </p>
                </div>

                <div class="banner-footer">
                    <span class="banner-votes-count"><strong>${catVotes.toLocaleString("en-IN")}</strong> Votes</span>
                    <span class="banner-cta">Enter Ballot ↗</span>
                </div>
            `;
            bannersGrid.appendChild(card);
        });
    }

    function renderCategoryVotingView(catId) {
        const cat = categories.find(c => c.id === catId);
        if (!cat || !nomineesGrid) return;

        const catTotal = getCategoryTotalVotes(cat);
        if (activeCatHero) {
            activeCatHero.style.backgroundImage = `url('${cat.bannerImg}')`;
        }
        activeCatDirEl.innerText = `CATEGORY ${cat.indexNum} // ${cat.directorate}`;
        activeCatTitleEl.innerText = cat.title;
        activeCatVotesEl.innerText = catTotal.toLocaleString("en-IN");

        const votedNomineeId = userVotedMap[cat.id];
        nomineesGrid.innerHTML = "";

        const sortedNominees = [...cat.nominees].sort(
            (a, b) => (voteCounts[b.id] || 0) - (voteCounts[a.id] || 0)
        );

        sortedNominees.forEach((n, idx) => {
            const count = voteCounts[n.id] || 0;
            const pct = catTotal > 0 ? ((count / catTotal) * 100).toFixed(1) : "0.0";
            const isThisVoted = votedNomineeId === n.id;
            const isLeader = idx === 0 && count > 0;
            const rankText = String(idx + 1).padStart(2, "0");

            const card = document.createElement("div");
            card.className = `nominee-card ${isLeader ? "leader-card" : ""} ${isThisVoted ? "voted-card" : ""}`;
            card.innerHTML = `
                <div class="rank-badge">${rankText}</div>

                <div class="nominee-top">
                    <div class="nominee-avatar">${getInitials(n.name)}</div>
                    <div>
                        <span class="status-badge ${n.isLead ? "incumbent" : "member"}">
                            ${n.isLead ? "Defending " + cat.title : "FEA Member"}
                        </span>
                        <h3 class="nominee-name">${n.name}</h3>
                    </div>
                </div>

                <div class="vote-meter-wrap">
                    <div class="vote-meter-labels">
                        <span><strong>${count.toLocaleString("en-IN")}</strong> Votes</span>
                        <span class="pct-pill">${pct}%</span>
                    </div>
                    <div class="vote-bar-bg">
                        <div class="vote-bar-fill" style="width: ${pct}%"></div>
                    </div>
                </div>

                <div>
                    <button class="btn-vote ${isThisVoted ? "voted" : ""}" data-cat="${cat.id}" data-nominee="${n.id}" ${votedNomineeId ? "disabled" : ""}>
                        ${isThisVoted ? "✓ Vote Cast" : (votedNomineeId ? "Ballot Closed" : "Cast Vote")}
                    </button>
                </div>
            `;
            nomineesGrid.appendChild(card);
        });
    }

    /* =========================================================
       6. CLICK & NAVIGATION HANDLERS
       ========================================================= */
    if (bannersGrid) {
        bannersGrid.addEventListener("click", (e) => {
            const banner = e.target.closest(".category-banner-card");
            if (!banner) return;
            activeCategoryId = banner.getAttribute("data-cat-id");
            bannersView.style.display = "none";
            categoryView.classList.add("active");
            renderCategoryVotingView(activeCategoryId);
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const backBtn = document.getElementById("back-to-banners");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            activeCategoryId = null;
            categoryView.classList.remove("active");
            bannersView.style.display = "block";
            renderBanners();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    if (nomineesGrid) {
        nomineesGrid.addEventListener("click", async (e) => {
            const btn = e.target.closest(".btn-vote");
            if (!btn || btn.disabled) return;

            const catId = btn.getAttribute("data-cat");
            const nomId = btn.getAttribute("data-nominee");
            const cat = categories.find(c => c.id === catId);
            const nominee = cat?.nominees.find(n => n.id === nomId);
            if (!cat || !nominee) return;

            if (userVotedMap[catId]) {
                showToast(`You already voted in ${cat.title}`);
                return;
            }

            userVotedMap[catId] = nomId;
            localStorage.setItem(USER_VOTED_KEY, JSON.stringify(userVotedMap));

            if (USE_FIREBASE && db) {
                await fbUpdate(fbRef(db, "fea_2026_cat_votes"), { [nomId]: fbIncrement(1) });
            } else {
                voteCounts[nomId] = (voteCounts[nomId] || 0) + 1;
                saveLocalVotes();
                renderCurrentView();
            }
            showToast(`Ballot Recorded — ${nominee.name}`);
        });
    }

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeDirectorate = btn.getAttribute("data-directorate");
            renderBanners();
        });
    });

    const searchInput = document.getElementById("category-search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            renderBanners();
        });
    }

    /* =========================================================
       7. INSTANT BULK VOTE HELPERS (BROWSER CONSOLE)
       ========================================================= */
    window.addInstantVotes = async (nomineeName, amount = 10000) => {
        let targetId = null;
        categories.forEach(cat => {
            cat.nominees.forEach(n => {
                if (n.name.toLowerCase() === nomineeName.toLowerCase()) targetId = n.id;
            });
        });
        if (!targetId) {
            console.error("Nominee not found:", nomineeName);
            return;
        }
        if (USE_FIREBASE && db) {
            await fbUpdate(fbRef(db, "fea_2026_cat_votes"), { [targetId]: fbIncrement(amount) });
        } else {
            voteCounts[targetId] = (voteCounts[targetId] || 0) + amount;
            saveLocalVotes();
            renderCurrentView();
        }
        console.log(`Added ${amount} votes to ${nomineeName}.`);
    };

    window.distributeInstantVotes = async (totalAmount = 10000) => {
        const allNomineeIds = [];
        categories.forEach(cat => cat.nominees.forEach(n => allNomineeIds.push(n.id)));
        const weights = allNomineeIds.map(() => Math.random() + 0.2);
        const weightSum = weights.reduce((a, b) => a + b, 0);
        const updates = {};

        allNomineeIds.forEach((id, i) => {
            const share = Math.round((weights[i] / weightSum) * totalAmount);
            if (USE_FIREBASE && db) {
                updates[id] = fbIncrement(share);
            } else {
                voteCounts[id] = (voteCounts[id] || 0) + share;
            }
        });

        if (USE_FIREBASE && db) {
            await fbUpdate(fbRef(db, "fea_2026_cat_votes"), updates);
        } else {
            saveLocalVotes();
            renderCurrentView();
        }
        console.log(`Distributed ~${totalAmount} votes across all ${allNomineeIds.length} nominees.`);
    };

    initDatabase();
});