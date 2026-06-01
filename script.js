const PALETTE = [
        ["#1a1a2e", "#16213e", "#0f3460"],
        ["#2c003e", "#6b2fa0", "#9b5de5"],
        ["#0d1b2a", "#1b4332", "#2d6a4f"],
        ["#3d0000", "#6b1414", "#c1121f"],
        ["#1c1c3a", "#2e4057", "#048a81"],
        ["#1a0533", "#4a1942", "#c77dff"],
        ["#0a1628", "#1d3557", "#457b9d"],
        ["#1b1b2f", "#162447", "#e43f5a"],
        ["#0d2137", "#1b3a5c", "#f4845f"],
        ["#1f2d3d", "#2b4870", "#56cfe1"],
        ["#2d1b33", "#4a2f5e", "#b48ead"],
        ["#141e30", "#243b55", "#4ecca3"],
      ];

      function thumb(idx) {
        const c = PALETTE[idx % PALETTE.length];
        return `<div style="width:100%;height:100%;background:linear-gradient(135deg,${c[0]},${c[1]},${c[2]});display:flex;align-items:center;justify-content:center">
    <svg viewBox="0 0 80 60" width="80" opacity=".15" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="70" height="50" rx="4" stroke="white" stroke-width="1.5" fill="none"/><circle cx="25" cy="28" r="10" stroke="white" stroke-width="1.5" fill="none"/><path d="M40 15 L75 15 M40 22 L65 22 M40 35 L75 35 M40 42 L60 42" stroke="white" stroke-width="1.5"/></svg>
  </div>`;
      }

      const shows = [
        { t: "Neon Eclipse", g: ["Action", "Sci-Fi"], m: 94, y: "2024" },
        { t: "The Last Bastion", g: ["Drama", "War"], m: 88, y: "2023" },
        { t: "Crimson Protocol", g: ["Thriller"], m: 91, y: "2024" },
        { t: "Void Walkers", g: ["Sci-Fi", "Horror"], m: 86, y: "2024" },
        { t: "Atlas Burned", g: ["Drama"], m: 79, y: "2023" },
        { t: "Ghost Signal", g: ["Mystery", "Thriller"], m: 93, y: "2024" },
        { t: "Iron Requiem", g: ["Action", "Drama"], m: 85, y: "2023" },
        { t: "Pale Orbit", g: ["Sci-Fi"], m: 90, y: "2024" },
        { t: "The Mirror Key", g: ["Horror", "Mystery"], m: 82, y: "2024" },
        { t: "Fractured Sun", g: ["Drama", "Sci-Fi"], m: 77, y: "2023" },
        { t: "Rogue Meridian", g: ["Action", "Thriller"], m: 89, y: "2024" },
        { t: "Still Waters", g: ["Drama", "Romance"], m: 84, y: "2024" },
      ];

      function cardHTML(s, i, type = "normal") {
        const pct = s.m;
        if (type === "watching") {
          const prog = Math.floor(20 + Math.random() * 70);
          return `<div class="card watching" onclick="openModal()">
      <div class="card-thumb"><div class="card-thumb-inner">${thumb(i)}</div>
        <div class="card-overlay">
          <div class="card-actions">
            <div class="card-btn red"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M8 5v14l11-7z"/></svg></div>
            <div class="card-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><path d="M12 5v14M5 12h14"/></svg></div>
            <div class="card-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><polyline points="6 9 12 15 18 9"/></svg></div>
          </div>
          <div class="card-info"><div class="card-name">${s.t}</div></div>
        </div>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${prog}%"></div></div>
    </div>`;
        }
        if (type === "top10") {
          return `<div class="card top10" onclick="openModal()">
      <div class="card-thumb" style="position:relative"><div class="card-thumb-inner">${thumb(i)}</div>
        <span class="rank-num">${i + 1}</span>
        <div class="card-overlay">
          <div class="card-actions">
            <div class="card-btn red"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M8 5v14l11-7z"/></svg></div>
            <div class="card-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="card-info">
            <div class="match-bar"><span class="match-pct">${pct}%</span><div class="match-track"><div class="match-fill" style="width:${pct}%"></div></div></div>
            <div class="card-name">${s.t}</div>
            <div class="card-tags">${s.g.map((g) => `<span class="card-tag">${g}</span>`).join("")}</div>
          </div>
        </div>
      </div>
    </div>`;
        }
        return `<div class="card" onclick="openModal()">
    <div class="card-thumb"><div class="card-thumb-inner">${thumb(i)}</div>
      <div class="card-overlay">
        <div class="card-actions">
          <div class="card-btn red"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M8 5v14l11-7z"/></svg></div>
          <div class="card-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><path d="M12 5v14M5 12h14"/></svg></div>
          <div class="card-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
          <div class="card-btn" style="margin-left:auto"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><polyline points="6 9 12 15 18 9"/></svg></div>
        </div>
        <div class="card-info">
          <div class="match-bar"><span class="match-pct">${pct}%</span><div class="match-track"><div class="match-fill" style="width:${pct}%"></div></div></div>
          <div class="card-name">${s.t}</div>
          <div class="card-tags">${s.g.map((g) => `<span class="card-tag">${g}</span>`).join("")}</div>
        </div>
      </div>
    </div>
  </div>`;
      }

      function populate(id, items, type = "normal") {
        const el = document.getElementById(id);
        el.innerHTML = items.map((s, i) => cardHTML(s, i, type)).join("");
      }

      populate("continue", shows.slice(0, 6), "watching");
      populate("trending", shows, "normal");
      populate("top10", shows.slice(0, 10), "top10");
      populate("newrel", [...shows].reverse(), "normal");
      populate("because", shows.slice(2, 10), "normal");

      window.addEventListener("scroll", () => {
        document
          .getElementById("nav")
          .classList.toggle("scrolled", window.scrollY > 80);
      });

      function openModal() {
        document.getElementById("modal").classList.add("open");
      }
      function closeModal() {
        document.getElementById("modal").classList.remove("open");
      }

      function setGenre(btn) {
        document
          .querySelectorAll(".genre-pill")
          .forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
      }

      function toggleSearch() {
        const o = document.getElementById("searchOverlay");
        o.classList.toggle("open");
        if (o.classList.contains("open")) {
          setTimeout(() => document.getElementById("searchInput").focus(), 50);
        }
      }

      function doSearch(q) {
        const el = document.getElementById("searchResults");
        if (!q) {
          el.innerHTML = "";
          return;
        }
        const res = shows.filter(
          (s) =>
            s.t.toLowerCase().includes(q.toLowerCase()) ||
            s.g.some((g) => g.toLowerCase().includes(q.toLowerCase())),
        );
        el.innerHTML = res.length
          ? res
              .map(
                (
                  s,
                  i,
                ) => `<div class="card" onclick="toggleSearch();openModal()" style="min-width:0">
        <div class="card-thumb"><div class="card-thumb-inner">${thumb(i)}</div>
          <div class="card-overlay" style="opacity:1;background:linear-gradient(to top,rgba(0,0,0,.9),transparent)">
            <div class="card-info"><div class="card-name">${s.t}</div><div class="card-tags">${s.g.map((g) => `<span class="card-tag">${g}</span>`).join("")}</div></div>
          </div>
        </div>
      </div>`,
              )
              .join("")
          : `<p style="color:var(--text-muted);font-size:.9rem">No results for "${q}"</p>`;
      }

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeModal();
          if (
            document.getElementById("searchOverlay").classList.contains("open")
          )
            toggleSearch();
        }
      });