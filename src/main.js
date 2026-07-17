const state = {
      route: "login",
      productGroup: "vrv",
      deviceType: "Indoor Units",
      selectedProduct: "FXAA05AAVJU",
      editorMode: "technical",
      activeVersion: "GSDB 2.1.0 / Central_USA 13.6.2",
      signedInUser: "Rafiul Haq"
    };

    const catalogGroups = [
      { id: "vrv", name: "VRV", modules: ["Indoor Units", "Outdoor Units", "Ventilation and Special", "BS / SV / BP", "Controllers", "Options, Refnets, DGT", "Gas Furnaces", "DOAS", "Future Indoor Groups", "Mega Q"] },
      { id: "split", name: "Split and Sky Air", modules: ["Outdoor Units", "Indoor Units", "BP Units", "Water Tanks", "Options", "Product Information"] },
      { id: "unitary", name: "Unitary and LC Split", modules: ["Outdoor Units", "Coils", "AHU", "Gas Furnaces", "Blowers", "Options"] },
      { id: "altherma", name: "Altherma", modules: ["Outdoor Units", "Hydroboxes", "Emitters", "Water Tanks", "Options"] },
      { id: "future", name: "PTAC / ResPack / Future", modules: ["PTAC", "ResPack", "Rooftop", "Ductless / Mini-Split", "Planned Families"] }
    ];

    const products = [
      { id: 743, group: "vrv", type: "Indoor Units", family: "VRV FXAA_AA - Wall Mounted Unit", material: "FXAA05AAVJU", product: "FXAA05AAVJU", refrigerant: "R32", ci: 5.8, placement: "Wall mounted", power: "VJ: 1x208-230V, 60Hz", weight: "12kg", dimensions: "859x295x248mm", status: "Ready", reused: 16 },
      { id: 1052, group: "vrv", type: "BS / SV / BP", family: "BS-Boxes", material: "BSA36AAVJ", product: "BSA36AAVJ", refrigerant: "R32", ci: 36, placement: "Branch selector", power: "VJ: 1x208-230V, 60Hz", weight: "13kg", dimensions: "387x206x425mm", status: "Ready", reused: 9 },
      { id: 36, group: "vrv", type: "Controllers", family: "Daikin Cloud Plus", material: "DGE601A71", product: "Hero Pro Edge", refrigerant: "-", ci: 0, placement: "Wall / panel", power: "C71: 1x24V, 60Hz", weight: "-", dimensions: "230x81x146mm", status: "Ready", reused: 7 },
      { id: 10, group: "vrv", type: "Ventilation and Special", family: "VAM - Ceiling Mounted Duct", material: "VAM300GVJU", product: "VAM300GVJU", refrigerant: "-", ci: 0, placement: "Ducted", power: "VJ: 1x208-230V, 60Hz", weight: "32.2kg", dimensions: "880x306x800mm", status: "Needs review", reused: 13 },
      { id: 57, group: "vrv", type: "Ventilation and Special", family: "AHU DX Kit", material: "DX kit for AHU connection", product: "DX kit for AHU connection", refrigerant: "R410A", ci: 0, placement: "AHU integration", power: "VJ: 1x208-230V, 60Hz", weight: "1.0kg", dimensions: "1x1x1mm", status: "Ready", reused: 22 },
      { id: 129, group: "split", type: "Outdoor Units", family: "2 PORTS", material: "2MX18AXVJU", product: "1.5 TON MULTI-ZONE INVERTER CIRRA", refrigerant: "R410A", ci: 18, placement: "Outdoor", power: "VJ: 1x208-230V, 60Hz", weight: "34.93kg", dimensions: "550.86x675x284.16mm", status: "Ready", reused: 18 },
      { id: 14, group: "split", type: "Outdoor Units", family: "RK_NMVJU", material: "RK09NMVJU", product: "19 SEER, AC, Ductless ODU, 3/4 Ton", refrigerant: "R410A", ci: 9, placement: "Outdoor", power: "VJ: 1x208-230V, 60Hz", weight: "24.95kg", dimensions: "549.27x675x284.16mm", status: "Ready", reused: 11 },
      { id: 338, group: "split", type: "Indoor Units", family: "Sky FAA_AAVJU - R32 SKYAIR WALL MOUNTED", material: "FAA18AAVJU", product: "FAA18AAVJU", refrigerant: "R32", ci: 0, placement: "Wall mounted", power: "-", weight: "0kg", dimensions: "-", status: "Draft", reused: 5 },
      { id: 5965, group: "unitary", type: "Outdoor Units", family: "LC packaged", material: "DSH1503D", product: "Daikin Light Commercial Packaged Heat Pump", refrigerant: "R32", ci: 0, placement: "Outdoor", power: "TJ: 3x230V, 60Hz", weight: "618.7kg", dimensions: "228.76x1493.84x2382.84mm", status: "Ready", reused: 8 },
      { id: 90, group: "unitary", type: "AHU", family: "AHU DAR", material: "DAR09043", product: "DAR Air Handler, Motor, 7.5 Ton", refrigerant: "-", ci: 90, placement: "Concealed in floor", power: "TJ: 3x230V, 60Hz", weight: "170.1kg", dimensions: "1231.9x1536.7x609.6mm", status: "Ready", reused: 14 },
      { id: 182, group: "unitary", type: "Coils", family: "Coil CAPF", material: "CAPF1824A6", product: "CAPF1824A6D", refrigerant: "-", ci: 0, placement: "Concealed in floor", power: "VJ: 1x208-230V, 60Hz", weight: "14.51kg", dimensions: "355.6x457.2x533.4mm", status: "Ready", reused: 20 },
      { id: 97, group: "unitary", type: "Gas Furnaces", family: "Gas furnace DM97MC", material: "DM97MC0804CN", product: "DM97MC0804CNA", refrigerant: "-", ci: 0, placement: "Upflow/Horizontal", power: "GF: 1x115, 60Hz", weight: "64.41kg", dimensions: "533.4x876.3x733.42mm", status: "Ready", reused: 12 },
      { id: 36, group: "altherma", type: "Outdoor Units", family: "Heat pump", material: "UPRA036DAVJ", product: "reversible air to water heat pump", refrigerant: "R32", ci: 0, placement: "Outdoor", power: "VJ", weight: "146kg", dimensions: "1270x1003x534mm", status: "Ready", reused: 6 },
      { id: 50, group: "altherma", type: "Water Tanks", family: "Low / Daikin", material: "EKHWS050BA3VJU", product: "EKHWS050BA3VJU", refrigerant: "-", ci: 0, placement: "Water tank", power: "208-230V, 60Hz", weight: "45.0kg", dimensions: "1150x580x580mm", status: "Ready", reused: 10 },
      { id: 36, group: "altherma", type: "Hydroboxes", family: "Daikin", material: "EDLQ036BA", product: "Hydrobox", refrigerant: "-", ci: 0, placement: "Hydrobox", power: "208-230V, 60Hz", weight: "180kg", dimensions: "1418x1435x382mm", status: "Ready", reused: 15 },
      { id: 801, group: "future", type: "PTAC", family: "PTAC heat pump", material: "PTAC-P024", product: "Packaged terminal air conditioner", refrigerant: "R32", ci: 24, placement: "Through-wall", power: "VJ: 1x208-230V, 60Hz", weight: "54kg", dimensions: "1067x406x533mm", status: "Discovery", reused: 4 },
      { id: 802, group: "future", type: "ResPack", family: "Residential packaged", material: "RSPK036", product: "Residential packaged heat pump", refrigerant: "R32", ci: 36, placement: "Outdoor", power: "TJ: 3x230V, 60Hz", weight: "182kg", dimensions: "940x940x990mm", status: "Discovery", reused: 6 }
    ];

    const masterData = [
      { name: "Power supply VJ", type: "Electrical", value: "1x208-230V, 60Hz", used: 192, owner: "Shared Definitions" },
      { name: "R32 charge scheme", type: "Refrigerant", value: "Imperial charge per pipe diameter", used: 84, owner: "Schemes" },
      { name: "2MXS18NMVJU piping length", type: "Piping", value: "Max total 50.0m, height 15.0m", used: 31, owner: "Schemes" },
      { name: "RA Indoor option pack", type: "Options", value: "Adapter, controller, drain pump, filter", used: 66, owner: "Options" },
      { name: "Sky Air benefit library", type: "Product Info", value: "3-D airflow, ECO+, quiet operation", used: 49, owner: "Product Information" },
      { name: "Indoor mix 4MXS", type: "Combination", value: "CR 50-200, VRV/RA constraints", used: 24, owner: "Combinations" }
    ];

    const releaseStages = [
      { stage: "Canonical version", owner: "GSDB core", status: "Single source of truth", updated: "Today 9:12 AM", badge: "ok" },
      { stage: "Change package", owner: "Product data team", status: "126 records grouped for review", updated: "Today 10:03 AM", badge: "warn" },
      { stage: "Validation gate", owner: "Release authority", status: "5 open checks before publish", updated: "Today 10:22 AM", badge: "warn" },
      { stage: "Published snapshot", owner: "Applications", status: "Read-only runtime export", updated: "Yesterday 6:40 PM", badge: "ok" }
    ];

    const consumers = [
      { name: "WebXpress", use: "VRV selection", coverage: "Clean field map plus reconciliation queue", status: "Mapped" },
      { name: "MatchupXpress", use: "Equipment matchup", coverage: "Master field usage tracked", status: "Mapped" },
      { name: "LCXpress", use: "Light commercial selection", coverage: "Field categories tracked", status: "Mapped" },
      { name: "EA-Pro", use: "Energy analysis", coverage: "API contract candidate", status: "Discovery" },
      { name: "BIM / 3D / Revit", use: "Model and plugin consumers", coverage: "Documented API endpoint", status: "Discovery" },
      { name: "Third-party tools", use: "Approved integration partners", coverage: "Documented API contract", status: "Mapped" }
    ];

    const coverageItems = [
      ["Product families", "VRV, Unitary / Light Commercial, Ductless / Mini-Split, PTAC, ResPack, Altherma, Mega Q, planned families"],
      ["Guided entry", "Product-line-aware steps, irrelevant field suppression, inline guidance, copy-product review"],
      ["Functional parity", "Graphics/image management, top/CAD/floor plan views, capacity tables, charge calculations, mix schemes, connection ratio logic"],
      ["Rules management", "Compatibility, required accessory, configuration dependency, refrigerant, validation, completeness, and regional rules"],
      ["Regions", "Daikin Japan, Europe, North America, Latin America with one canonical baseline and regional associations"],
      ["Operations", "Authentication, permissions, configuration, audit logging, reporting, runbooks, and training handover"]
    ];

    const syncRows = [
      ["AHRI", "Unitary / Split", "42 inbound changes", "12 conflicts", "Preview required"],
      ["PIM", "Product information", "118 product attributes", "8 conflicts", "Selective sync"],
      ["MDM", "All product lines", "41,801 candidate records", "466 reconciliation items", "Human review"]
    ];

    const extractionRows = [
      ["PDF spec sheet", "UPRA036DAVJ", "18 fields prefilled", "Needs engineering review"],
      ["CSV capacity table", "2MX18AXVJU", "Cooling / heating table parsed", "Ready for validation"],
      ["Product image batch", "BRC1E73 resized", "Picture and benefit mappings found", "Needs steward review"]
    ];

    const validationRows = [
      ["FXAA05AAVJU", "OK", "Reuses VJ power supply, R32 charge, and wall placement", "FXAA05AAVJU"],
      ["VAM300GVJU", "Review", "Fan curve exists but SFPe table missing high-speed value", "VAM300GVJU"],
      ["2MX18AXVJU", "OK", "Piping scheme and indoor mix scheme match series", "2MX18AXVJU"],
      ["DSH1503D", "Review", "Product information image missing thumbnail mapping", "DSH1503D"],
      ["EDLQ036BA", "OK", "Hydrobox integration and power supply combination linked", "EDLQ036BA"]
    ];

    function h(strings, ...values) {
      return strings.map((s, i) => s + (values[i] ?? "")).join("");
    }

    function setRoute(route, extras = {}) {
      Object.assign(state, extras);
      state.route = route;
      render();
      window.scrollTo(0, 0);
    }

    function toast(message) {
      const el = document.getElementById("toast");
      el.textContent = message;
      el.classList.add("show");
      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
    }

    function currentGroup() {
      return catalogGroups.find(g => g.id === state.productGroup) || catalogGroups[0];
    }

    function filteredProducts() {
      return products.filter(p => p.group === state.productGroup && (!state.deviceType || p.type === state.deviceType));
    }

    function currentProduct() {
      return products.find(p => p.material === state.selectedProduct) || filteredProducts()[0] || products[0];
    }

    function daikinLogo() {
      return `
        <div class="brand" aria-label="Daikin">
          <svg viewBox="0 0 300 76" role="img" aria-hidden="true" focusable="false">
            <g fill="#0097d7">
              <polygon points="0,0 70,0 28,44 0,44"></polygon>
              <polygon points="0,51 21,51 91,0 70,0"></polygon>
              <text x="82" y="49"
                font-family="Arial Black, Arial, Helvetica, sans-serif"
                font-size="44"
                font-weight="900"
                font-style="italic"
                letter-spacing="1.5">DAIKIN</text>
            </g>
          </svg>
        </div>
      `;
    }

    function appShell(content) {
      const primaryNav = [
        ["dashboard", "Management Console"],
        ["editorHome", "Device Editor"],
        ["catalog", "Catalog Definitions"],
        ["recordEditor", "Record Editor"],
        ["combinations", "Combinations"],
        ["masters", "Reusable Data"],
        ["validation", "Validation"]
      ];
      const platformNav = [
        ["integrations", "API & Consumers"],
        ["sync", "Sync Management"],
        ["extraction", "LLM Extraction"],
        ["reports", "Scorecards"]
      ];
      return h`
        <div class="shell">
          <aside class="sidebar">
            ${daikinLogo()}
            <div class="nav-title">GSDB Modernized</div>
            ${primaryNav.map(([route, label]) => `<button class="nav-btn ${state.route === route ? "active" : ""}" data-route="${route}" onclick="setRoute('${route}')">${label}</button>`).join("")}
            <div class="nav-group">
              <div class="nav-group-label">Platform controls</div>
              <div class="nav-wrap">${platformNav.map(([route, label]) => `<button class="nav-btn ${state.route === route ? "active" : ""}" data-route="${route}" onclick="setRoute('${route}')">${label}</button>`).join("")}</div>
            </div>
            <div class="nav-title">Product Lines</div>
            ${catalogGroups.map(g => `<button class="nav-btn ${state.productGroup === g.id ? "active" : ""}" data-product-group="${g.id}" onclick="setRoute('editorHome',{productGroup:'${g.id}',deviceType:'${g.modules[0]}'})">${g.name}</button>`).join("")}
          </aside>
          <main class="main">
            <div class="topbar">
              <div>
                <div class="crumb"><strong>${titleForRoute()}</strong> / ${currentGroup().name} / ${state.activeVersion}</div>
              </div>
              <div class="top-actions">
                <span class="pill">Region DNA</span>
                <span class="pill">Central_USA 13.6.2</span>
                <button class="secondary" onclick="setRoute('login')">Sign out</button>
              </div>
            </div>
            <section class="content">${content}</section>
          </main>
        </div>
      `;
    }

    function titleForRoute() {
      return {
        dashboard: "Management Console",
        editorHome: "Device Editor",
        catalog: "Catalog Definitions",
        recordEditor: "Record Editor",
        combinations: "Combinations",
        masters: "Reusable Data",
        integrations: "API & Consumers",
        sync: "Sync Management",
        extraction: "LLM Extraction",
        validation: "Validation",
        reports: "Scorecards",
        operations: "Admin & Handover",
        importExport: "Import / Export"
      }[state.route] || "GSDB";
    }

    function loginPage() {
      return h`
        <div class="login">
          <section class="login-card">
            ${daikinLogo()}
            <h1>GSDB modernization prototype</h1>
            <p>One connected workspace for product definitions, shared schemes, combinations, and release validation.</p>
            <div class="field"><label>User</label><input value="rafiul.haq@daikin.example"></div>
            <div class="field"><label>Password</label><input type="password" value="modernization"></div>
            <div class="field"><label>Region</label><select><option>DNA - Central USA</option><option>DENV</option><option>DIL</option></select></div>
            <button onclick="setRoute('dashboard')">Sign in to GSDB</button>
            <p style="margin-top:18px">Prototype role: product data steward with release authority.</p>
          </section>
          <section class="login-visual">
            <div class="system-map">
              <h2>Reusable product data hub</h2>
              <p>Customer problem solved: data entered once becomes reusable master data across devices, schemes, option libraries, product information, combinations, and validation.</p>
              <div class="map-grid">
                <div class="map-node"><strong>Shared Definitions</strong><span>Power supplies, refrigerants, piping, dimensions, capacities.</span></div>
                <div class="map-node"><strong>Product Catalog</strong><span>VRV, Split/Sky Air, Unitary, Altherma, Mega Q.</span></div>
                <div class="map-node"><strong>Smart Editors</strong><span>Inherited fields, duplicate detection, impact preview.</span></div>
                <div class="map-node"><strong>Combinations</strong><span>Indoor/outdoor, BS/SV/BP, AHU, options, gas furnace pairings.</span></div>
                <div class="map-node"><strong>Validation</strong><span>Pre-release checks for missing tables and inconsistent schemes.</span></div>
                <div class="map-node"><strong>Release Flow</strong><span>One canonical version, change packages, validation gates, and published snapshots.</span></div>
              </div>
            </div>
          </section>
        </div>
      `;
    }

    function dashboardPage() {
      return appShell(h`
        <div class="hero">
          <h1>GSDB Management Console</h1>
          <p>Operate from one canonical GSDB version. Product teams submit change packages, validation gates protect quality, and downstream tools consume controlled published snapshots without creating duplicate databases.</p>
        </div>
        <div class="metrics">
          <div class="metric"><b>41,801</b><span>MDM records waiting</span></div>
          <div class="metric"><b>15</b><span>shared master libraries</span></div>
          <div class="metric"><b>328</b><span>definitions reusing schemes</span></div>
          <div class="metric"><b>1</b><span>canonical database version</span></div>
        </div>
        <div class="grid two">
          <div class="panel">
            <div class="panel-head">
              <h2>Single version operating model</h2>
              <div class="toolbar">
                <button onclick="setRoute('editorHome')">Open catalog</button>
                <button class="secondary" onclick="toast('Change package created from current canonical version')">Create package</button>
                <button class="secondary" onclick="toast('Published snapshot queued after validation gate')">Publish snapshot</button>
              </div>
            </div>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Stage</th><th>Owner</th><th>Updated</th><th>Status</th></tr></thead>
                <tbody>
                  ${releaseStages.map((d, i) => `<tr class="${i === 0 ? "selected" : ""}" onclick="toast('${d.stage}: ${d.status}')"><td>${d.stage}</td><td>${d.owner}</td><td>${d.updated}</td><td><span class="status ${d.badge}">${d.status}</span></td></tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>
          <div class="panel">
            <div class="panel-head"><h2>Release readiness</h2><button onclick="setRoute('validation')">View validation</button></div>
            <div class="panel-body">
              ${validationRows.map(r => `<div class="reuse-card"><div class="reuse-icon">${r[1] === "OK" ? "OK" : "!"}</div><div><h3>${r[0]}</h3><p>${r[2]}</p></div><span class="status ${r[1] === "OK" ? "ok" : "warn"}">${r[1]}</span></div>`).join("")}
            </div>
          </div>
        </div>
        <div class="panel" style="margin-top:18px">
          <div class="panel-head"><h2>Modernization coverage</h2><button class="secondary" onclick="setRoute('reports')">Open scorecards</button></div>
          <div class="panel-body">
            ${coverageItems.map((c, i) => `<div class="reuse-card" onclick="setRoute('${["editorHome","recordEditor","masters","integrations","reports","validation"][i]}')"><div class="reuse-icon">${i + 1}</div><div><h3>${c[0]}</h3><p>${c[1]}</p></div><span class="status ok">Covered</span></div>`).join("")}
          </div>
        </div>
      `);
    }

    function editorHomePage() {
      const g = currentGroup();
      return appShell(h`
        <div class="hero">
          <h1>${g.name} Device Editor</h1>
          <p>Modernized launch page for application families. Each tile connects directly to filtered definitions and keeps shared data visible instead of hiding it across separate windows.</p>
        </div>
        <div class="tiles">
          ${g.modules.map((m, i) => `
            <div class="tile" onclick="setRoute('catalog',{deviceType:'${m}',selectedProduct:'${(products.find(p => p.group === g.id && p.type === m) || products.find(p => p.group === g.id) || products[0]).material}'})">
              <div>
                <h3>${m}</h3>
                <p>${moduleCopy(m)}</p>
              </div>
              <div class="device-art ${i % 5 === 1 ? "round" : i % 5 === 2 ? "card" : i % 5 === 3 ? "tank" : i % 5 === 4 ? "board" : ""}"></div>
            </div>
          `).join("")}
        </div>
      `);
    }

    function moduleCopy(name) {
      if (name.includes("Outdoor")) return "Capacity, piping, region rules, and combinations.";
      if (name.includes("Indoor")) return "Selection data, fan tables, options, capacities.";
      if (name.includes("Options")) return "Refnets, DGT, adapters, option packs.";
      if (name.includes("Controller")) return "BACnet, cloud, touch manager, network limits.";
      if (name.includes("Water")) return "Tank specifications and hydrobox connections.";
      if (name.includes("Gas")) return "Families, furnaces, performance and AFUE.";
      return "Technical data, tables, and reusable definition links.";
    }

    function catalogPage() {
      const rows = filteredProducts();
      const group = currentGroup();
      return appShell(h`
        <div class="hero">
          <h1>${state.deviceType}</h1>
          <p>A modern catalog view replaces separate list panes with filters, family context, model details, and direct editing. Click a row to open its unified record.</p>
        </div>
        <div class="panel">
          <div class="panel-head">
            <h2>${group.name} definitions</h2>
            <div class="toolbar">
              <select class="search" onchange="setRoute('catalog',{deviceType:this.value})">${group.modules.map(m => `<option ${m === state.deviceType ? "selected" : ""}>${m}</option>`).join("")}</select>
              <input class="search" placeholder="Search material, product, family">
              <button onclick="openEditor()">New</button>
              <button class="secondary" onclick="openEditor()">Edit</button>
              <button class="secondary" onclick="toast('Copied selected definition with inherited reusable data')">Copy</button>
            </div>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>ID</th><th>Material</th><th>Product</th><th>Family</th><th>Refrigerant</th><th>Shared data reuse</th><th>Status</th></tr></thead>
              <tbody>
                ${rows.map((p, i) => `<tr class="${p.material === state.selectedProduct ? "selected" : ""}" onclick="setRoute('recordEditor',{selectedProduct:'${p.material}'})"><td>${p.id}</td><td>${p.material}</td><td>${p.product}</td><td>${p.family}</td><td>${p.refrigerant}</td><td>${p.reused} linked fields</td><td><span class="status ${p.status === "Ready" ? "ok" : p.status === "Draft" ? "" : "warn"}">${p.status}</span></td></tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `);
    }

    function recordEditorPage() {
      const p = currentProduct();
      const tabs = ["technical", "selection", "piping", "capacity", "combinations", "region"];
      return appShell(h`
        <div class="hero">
          <h1>${p.material}</h1>
          <p>${p.product}. The editor shows inherited reusable values next to local overrides so teams stop retyping dimensions, power, piping, charge schemes, and combinations.</p>
        </div>
        <div class="panel">
          <div class="tabs">${tabs.map(t => `<button class="tab ${state.editorMode === t ? "active" : ""}" onclick="state.editorMode='${t}'; render()">${label(t)}</button>`).join("")}</div>
          <div class="panel-body">
            ${editorBody(p)}
          </div>
        </div>
      `);
    }

    function label(text) {
      return text.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    }

    function editorBody(p) {
      if (state.editorMode === "piping") return pipingEditor(p);
      if (state.editorMode === "capacity") return capacityEditor(p);
      if (state.editorMode === "combinations") return combinationsEditor(p);
      if (state.editorMode === "region") return regionEditor(p);
      if (state.editorMode === "selection") return selectionEditor(p);
      return technicalEditor(p);
    }

    function technicalEditor(p) {
      return h`
        <div class="form-grid">
          <section>
            <div class="section-title">Core identity</div>
            <div class="field"><label>Material name</label><input value="${p.material}"></div>
            <div class="field"><label>Product name</label><input value="${p.product}"></div>
            <div class="field"><label>Family</label><input value="${p.family}"></div>
            <div class="field"><label>Brand</label><input value="Daikin"></div>
          </section>
          <section>
            <div class="section-title">Mechanical data</div>
            <div class="kv"><span>W x H x D</span><span>${p.dimensions}</span><span>Weight</span><span>${p.weight}</span><span>Placement</span><span>${p.placement}</span><span>Connection index</span><span>${p.ci}</span></div>
            <div class="section-title" style="margin-top:18px">Sound data</div>
            <div class="kv"><span>Cooling pressure</span><span>56 dBA</span><span>Heating pressure</span><span>59 dBA</span><span>Power cooling</span><span>0 dBA</span></div>
          </section>
          <section>
            <div class="section-title">Electrical data</div>
            <div class="kv"><span>Power supply</span><span>${p.power}</span><span>Min-max V</span><span>187-253</span><span>MCA</span><span>0.9A</span><span>MFA</span><span>15A</span><span>Fuses</span><span>Factory Std</span></div>
            <div class="checkbox-row" style="margin-top:14px"><span class="check"><span class="box checked"></span> Has own power supply</span><span class="check"><span class="box"></span> Basic validation only</span></div>
          </section>
        </div>
        <div class="panel" style="margin-top:16px">
          <div class="panel-head"><h3>Reusable field lineage</h3><button class="secondary" onclick="setRoute('masters')">Open master data</button></div>
          <div class="panel-body grid three">
            ${masterData.slice(0,3).map(m => `<div class="reuse-card"><div class="reuse-icon">↻</div><div><h3>${m.name}</h3><p>${m.value}</p></div><span class="status ok">${m.used} uses</span></div>`).join("")}
          </div>
        </div>
      `;
    }

    function selectionEditor(p) {
      return h`
        <div class="form-grid">
          <section>
            <div class="section-title">Selection data</div>
            <div class="radio-row"><span class="check"><span class="radio checked"></span> Heat pump</span><span class="check"><span class="radio"></span> Cooling only</span><span class="check"><span class="box"></span> Domestic hot water</span></div>
            <div class="section-title" style="margin-top:18px">Cooling data</div>
            <div class="kv"><span>Minimum</span><span>-5 / 14</span><span>Maximum</span><span>50 / 25</span><span>Nominal</span><span>35 / 19.44</span></div>
          </section>
          <section>
            <div class="section-title">Heating data</div>
            <div class="kv"><span>Minimum</span><span>-20 / 15</span><span>Maximum</span><span>15.5 / 26.7</span><span>Nominal</span><span>8.33 / 21.11</span></div>
          </section>
          <section>
            <div class="section-title">Required options</div>
            <div class="checkbox-row"><span class="check"><span class="box checked"></span> Drain pump</span><span class="check"><span class="box"></span> BACnet extension</span><span class="check"><span class="box checked"></span> Adapter card</span><span class="check"><span class="box"></span> Electric heater</span></div>
          </section>
        </div>
      `;
    }

    function pipingEditor(p) {
      return h`
        <div class="grid three">
          <div class="panel"><div class="panel-head"><h3>Refrigerant pipes</h3></div><div class="panel-body kv"><span>Liquid pipe</span><span>${p.refrigerant === "R32" ? "9.5mm braze" : "6.4mm flare"}</span><span>Gas pipe</span><span>${p.refrigerant === "R32" ? "15.9mm braze" : "9.5mm flare"}</span><span>Oil equalizer</span><span>-</span></div></div>
          <div class="panel"><div class="panel-head"><h3>Schemes</h3></div><div class="panel-body kv"><span>Piping length</span><span>RZA_18-48</span><span>Charge scheme</span><span>${p.refrigerant}-standard</span><span>Indoor mix</span><span>4MXS</span></div></div>
          <div class="panel"><div class="panel-head"><h3>Extra charge A factor</h3><button class="secondary" onclick="toast('Added extra charge factor row')">Add</button></div><div class="panel-body"><table><tr><th>Ratio</th><th>Length</th><th>Extra charge</th></tr><tr><td>100%</td><td>7.62m</td><td>0.0kg</td></tr></table></div></div>
        </div>
      `;
    }

    function capacityEditor(p) {
      return h`
        <div class="toolbar" style="margin-bottom:12px"><button class="tab active">Table</button><button class="tab" onclick="toast('Graph view opened')">Graph</button><button class="tab" onclick="toast('Length correction opened')">Length correction</button></div>
        <div class="grid two">
          <div class="panel"><div class="panel-head"><h3>Capacity table</h3><button class="secondary" onclick="toast('Imported capacity and PI tables')">Import tables</button></div><div class="table-wrap"><table>
            <thead><tr><th>Out CDB</th><th>20 Tot</th><th>25 Tot</th><th>30 Tot</th><th>35 Tot</th><th>40 Tot</th><th>46 Tot</th></tr></thead>
            <tbody>${[14,16,18,19.4,22,24].map((r,i)=>`<tr><td>${r}</td><td>${(2.1+i*.1).toFixed(2)}</td><td>${(2+i*.1).toFixed(2)}</td><td>${(1.9+i*.1).toFixed(2)}</td><td>${(1.8+i*.1).toFixed(2)}</td><td>${(1.7+i*.1).toFixed(2)}</td><td>${(1.63+i*.1).toFixed(2)}</td></tr>`).join("")}</tbody>
          </table></div></div>
          <div class="panel"><div class="panel-head"><h3>Performance curve</h3></div><div class="panel-body"><div class="chart"></div></div></div>
        </div>
      `;
    }

    function combinationsEditor(p) {
      return h`
        <div class="grid two">
          <div class="panel"><div class="panel-head"><h3>${p.type}</h3><input class="search" placeholder="Search definitions"></div><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody>${products.slice(0,12).map(x=>`<tr><td>${x.material}</td><td>${x.family}</td></tr>`).join("")}</tbody></table></div></div>
          <div class="panel"><div class="panel-head"><h3>Combined with</h3><button onclick="toast('Combination copied with inherited CR rules')">Copy</button></div><div class="table-wrap"><table><thead><tr><th>Name</th><th>Extra info</th></tr></thead><tbody>${["RXSQ24TAVJU","RXSQ36TAVJU","RXSQ48TAVJU","RXYQ120AATJA","BSA36AAVJ","FAA18AAVJU"].map((x,i)=>`<tr class="${i===2?"selected":""}"><td>${currentGroup().name} - ${x}</td><td>CR <= ${i>2?160:130}%</td></tr>`).join("")}</tbody></table></div></div>
        </div>
      `;
    }

    function regionEditor(p) {
      return h`
        <div class="form-grid">
          <section><div class="section-title">DENV only</div><div class="kv"><span>Split pair max distance OU-IU</span><span>0m</span></div></section>
          <section><div class="section-title">DIL only</div><div class="kv"><span>Actual PI at CF 1.00</span><span>0</span><span>PI at 50% nominal</span><span>0</span></div></section>
          <section><div class="section-title">DNA only</div><div class="kv"><span>EER</span><span>12.5</span><span>SEER</span><span>19</span><span>HSPF</span><span>0</span><span>AHRI</span><span>8064207</span></div></section>
        </div>
      `;
    }

    function mastersPage() {
      return appShell(h`
        <div class="hero">
          <h1>Reusable Data Library</h1>
          <p>This is the business-problem layer: reusable schemes and shared values are managed once, then linked everywhere they are needed. Any change shows impact before save.</p>
        </div>
        <div class="grid two">
          <div class="panel">
            <div class="panel-head"><h2>Shared masters</h2><div class="toolbar"><input class="search" placeholder="Filter shared data"><button onclick="toast('New shared data record started')">New</button></div></div>
            <div class="panel-body">
              ${masterData.map(m => `<div class="reuse-card" onclick="toast('Impact preview: ${m.name} is used by ${m.used} records')"><div class="reuse-icon">${m.type.charAt(0)}</div><div><h3>${m.name}</h3><p>${m.type} · ${m.value}</p></div><span class="status ok">${m.used} uses</span></div>`).join("")}
            </div>
          </div>
          <div class="panel">
            <div class="panel-head"><h2>Reuse impact preview</h2><button class="secondary" onclick="toast('Bulk update preview generated')">Preview update</button></div>
            <div class="panel-body">
              <div class="flow">
                <div class="flow-step"><b>Define once</b><span>Power, piping, refrigerant, option, and product-info masters.</span></div>
                <div class="flow-step"><b>Link</b><span>Attach to products, families, combinations, and tables.</span></div>
                <div class="flow-step"><b>Inherit</b><span>Editors show source values and local overrides.</span></div>
                <div class="flow-step"><b>Validate</b><span>Detect missing tables or mismatched regional rules.</span></div>
                <div class="flow-step"><b>Publish</b><span>Approve a change package and create a read-only snapshot for downstream apps.</span></div>
              </div>
              <div style="margin-top:18px" class="panel"><div class="panel-head"><h3>Records affected by VJ power supply</h3></div><table><tr><th>Product</th><th>Area</th><th>Action</th></tr><tr><td>FXAA05AAVJU</td><td>Indoor Units</td><td>Update inherited value</td></tr><tr><td>BSA36AAVJ</td><td>BS Boxes</td><td>Update inherited value</td></tr><tr><td>VAM300GVJU</td><td>Ventilation</td><td>Flag for review</td></tr></table></div>
            </div>
          </div>
        </div>
      `);
    }

    function combinationsPage() {
      return appShell(h`
        <div class="hero">
          <h1>Combination Workspace</h1>
          <p>Indoor/outdoor, option, refnet, AHU, gas furnace, tank, and BP/SV/BS relationships are edited in one place with the same selection model.</p>
        </div>
        ${combinationsEditor(currentProduct())}
      `);
    }

    function integrationsPage() {
      return appShell(h`
        <div class="hero">
          <h1>API & Downstream Consumers</h1>
          <p>The API layer preserves existing pipeline behavior while exposing documented access for selection tools, energy analysis, BIM/Revit, and approved partners.</p>
        </div>
        <div class="panel">
          <div class="panel-head"><h2>Consumer API endpoints</h2><button onclick="toast('API contract draft exported')">Export contract</button></div>
          <table><thead><tr><th>Consumer</th><th>Use case</th><th>Endpoint</th><th>Actions</th></tr></thead><tbody>
            ${consumers.map(c => `<tr><td>${c.name}</td><td>${c.use}</td><td><code>/api/v1/gsdb/${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}</code></td><td><button class="secondary" onclick="toast('Showing API for ${c.name}')">Show API</button> <button class="secondary" onclick="toast('Copied API endpoint for ${c.name}')">Copy</button></td></tr>`).join("")}
          </tbody></table>
        </div>
      `);
    }

    function syncPage() {
      return appShell(h`
        <div class="hero">
          <h1>Sync Layer Management</h1>
          <p>Inbound AHRI, PIM, and MDM records are previewed before commit. Teams can run selective sync by product line and accept or reject conflicts with audit history.</p>
        </div>
        <div class="panel">
          <div class="panel-head"><h2>Inbound sync preview</h2><div class="toolbar"><button onclick="toast('VRV-only sync preview started')">Preview selective sync</button><button class="secondary" onclick="toast('Decision history exported')">Audit history</button></div></div>
          <table><thead><tr><th>Source</th><th>Scope</th><th>Pending records</th><th>Conflicts</th><th>Decision</th></tr></thead><tbody>
            ${syncRows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><button class="secondary" onclick="toast('Conflict decision captured for ${r[0]}')">${r[4]}</button></td></tr>`).join("")}
          </tbody></table>
        </div>
      `);
    }

    function extractionPage() {
      return appShell(h`
        <div class="hero">
          <h1>LLM-Assisted Extraction</h1>
          <p>Upload a PDF, CSV, image pack, or spec sheet. The assistant extracts structured product data, maps it to reusable GSDB fields, fills a draft record, and sends uncertain values to human review before approval.</p>
        </div>
        <div class="panel">
          <div class="panel-head">
            <h2>Add product from source document</h2>
            <div class="toolbar">
              <button onclick="toast('Upload dialog opened')">Add source</button>
              <button class="secondary" onclick="toast('Extraction simulation started')">Run extraction</button>
            </div>
          </div>
          <div class="panel-body">
            <div class="extract-stage">
              <div class="drop-zone" onclick="toast('Drop zone ready for PDF, CSV, XLSX, JPG, or PNG')">
                <div class="upload-icon">+</div>
                <h2>Upload or drag source files</h2>
                <p>Spec sheets, performance tables, product images, benefit lists, and CSV capacity data are converted into a structured draft.</p>
                <div class="source-pill-row">
                  <span class="source-pill">PDF spec sheet</span>
                  <span class="source-pill">CSV capacity table</span>
                  <span class="source-pill">XLSX data map</span>
                  <span class="source-pill">Product images</span>
                </div>
              </div>
              <div class="extract-pipeline">
                <div class="pipeline-step" style="--delay:0s"><div class="step-dot">1</div><div><strong>Ingest</strong><span>Source package received and classified by product line.</span></div><div class="confidence" style="--score:100%"><i></i></div></div>
                <div class="pipeline-step" style="--delay:.45s"><div class="step-dot">2</div><div><strong>Extract</strong><span>Tables, dimensions, refrigerant data, labels, and images detected.</span></div><div class="confidence" style="--score:92%"><i></i></div></div>
                <div class="pipeline-step" style="--delay:.9s"><div class="step-dot">3</div><div><strong>Map</strong><span>Fields matched to canonical GSDB schema and reusable masters.</span></div><div class="confidence" style="--score:88%"><i></i></div></div>
                <div class="pipeline-step" style="--delay:1.35s"><div class="step-dot">4</div><div><strong>Fill draft</strong><span>Draft product form is populated with confidence markers.</span></div><div class="confidence" style="--score:84%"><i></i></div></div>
                <div class="pipeline-step" style="--delay:1.8s"><div class="step-dot">5</div><div><strong>Human gate</strong><span>Reviewer accepts, corrects, or rejects suggested values.</span></div><div class="confidence" style="--score:76%"><i></i></div></div>
              </div>
            </div>
            <div class="review-strip">
              <div class="review-stat"><b>24</b><span>fields detected</span></div>
              <div class="review-stat"><b>18</b><span>auto-filled with high confidence</span></div>
              <div class="review-stat"><b>3</b><span>need reviewer decision</span></div>
              <div class="review-stat"><b>6</b><span>reusable masters linked</span></div>
            </div>
          </div>
        </div>
        <div class="grid two" style="margin-top:18px">
          <div class="panel">
            <div class="panel-head"><h2>Filled draft preview</h2><button onclick="toast('Draft opened in Record Editor')">Open draft</button></div>
            <div class="panel-body">
              <div class="extracted-form">
                <div class="filled-field" style="--delay:0s"><label>Material name</label><b>UPRA036DAVJ</b><span class="field-status">96% matched</span></div>
                <div class="filled-field" style="--delay:.08s"><label>Product name</label><b>Reversible air-to-water heat pump</b><span class="field-status">91% matched</span></div>
                <div class="filled-field" style="--delay:.16s"><label>Product family</label><b>Altherma Outdoor</b><span class="field-status">Reusable family linked</span></div>
                <div class="filled-field" style="--delay:.24s"><label>Refrigerant</label><b>R32</b><span class="field-status">Master linked</span></div>
                <div class="filled-field" style="--delay:.32s"><label>Dimensions</label><b>1270 x 1003 x 534 mm</b><span class="field-status">94% matched</span></div>
                <div class="filled-field" style="--delay:.4s"><label>Base charge</label><b>4.21 kg</b><span class="field-status warn">Needs review</span></div>
                <div class="filled-field" style="--delay:.48s"><label>Power supply</label><b>VJ</b><span class="field-status">Master linked</span></div>
                <div class="filled-field" style="--delay:.56s"><label>Capacity table</label><b>Cooling/heating parsed</b><span class="field-status warn">2 cells flagged</span></div>
                <div class="filled-field" style="--delay:.64s"><label>Images</label><b>3 product assets found</b><span class="field-status">Ready to attach</span></div>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-head"><h2>Review queue</h2><button class="secondary" onclick="toast('Reviewed fields applied to product draft')">Apply reviewed fields</button></div>
            <table><thead><tr><th>Source</th><th>Candidate</th><th>Result</th><th>Action</th></tr></thead><tbody>
              ${extractionRows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><button class="secondary" onclick="toast('Reviewer decision captured for ${r[1]}')">${r[3]}</button></td></tr>`).join("")}
            </tbody></table>
          </div>
        </div>
      `);
    }

    function validationPage() {
      return appShell(h`
        <div class="hero">
          <h1>Validation Center</h1>
          <p>Pre-release checks catch problems that were previously hidden across many dialogs: missing capacity tables, orphan options, charge scheme conflicts, and stale product information.</p>
        </div>
        <div class="panel">
          <div class="panel-head"><h2>Release checks</h2><div class="toolbar"><button onclick="toast('Validation rerun completed')">Run validation</button><button class="secondary" onclick="toast('Validation report exported')">Export report</button></div></div>
          <table><thead><tr><th>Record</th><th>Result</th><th>Issue / reuse note</th><th>Connected page</th></tr></thead><tbody>
            ${validationRows.map(r => `<tr><td>${r[0]}</td><td><span class="status ${r[1] === "OK" ? "ok" : "warn"}">${r[1]}</span></td><td>${r[2]}</td><td><button class="secondary" onclick="setRoute('recordEditor',{selectedProduct:'${r[3]}'})">Open</button></td></tr>`).join("")}
          </tbody></table>
        </div>
      `);
    }

    function reportsPage() {
      return appShell(h`
        <div class="hero">
          <h1>Reporting & Data-Quality Scorecards</h1>
          <p>Operational reporting shows release status, completeness, coverage by product line and region, error rates, rework cycles, approvals, and sync conflicts with drilldowns into the records causing the score.</p>
        </div>
        <div class="metrics">
          <div class="metric"><b>92%</b><span>product completeness</span></div>
          <div class="metric"><b>5</b><span>blocked release checks</span></div>
          <div class="metric"><b>12</b><span>open sync conflicts</span></div>
          <div class="metric"><b>18%</b><span>rework cycle reduction target</span></div>
        </div>
        <div class="grid two">
          <div class="panel"><div class="panel-head"><h2>Scorecard drilldown</h2><button onclick="toast('Scorecard report exported')">Export</button></div><table><tr><th>Area</th><th>Score</th><th>Open items</th><th>Drilldown</th></tr><tr><td>VRV completeness</td><td>96%</td><td>4 warnings</td><td><button class="secondary" onclick="setRoute('catalog',{productGroup:'vrv',deviceType:'Indoor Units'})">Open records</button></td></tr><tr><td>Unitary / LC readiness</td><td>88%</td><td>9 missing values</td><td><button class="secondary" onclick="setRoute('catalog',{productGroup:'unitary',deviceType:'Outdoor Units'})">Open records</button></td></tr><tr><td>PTAC / ResPack onboarding</td><td>41%</td><td>18 draft fields</td><td><button class="secondary" onclick="setRoute('catalog',{productGroup:'future',deviceType:'PTAC'})">Open records</button></td></tr><tr><td>Sync conflicts</td><td>12</td><td>AHRI / PIM / MDM</td><td><button class="secondary" onclick="setRoute('sync')">Open sync</button></td></tr><tr><td>Extractor review</td><td>91%</td><td>3 low confidence</td><td><button class="secondary" onclick="setRoute('extraction')">Open extraction</button></td></tr></table></div>
          <div class="panel"><div class="panel-head"><h2>Selected drilldown: Unitary / LC readiness</h2><button class="secondary" onclick="setRoute('validation')">View validation</button></div><table><tr><th>Record</th><th>Issue</th><th>Owner</th><th>Action</th></tr><tr><td>DSH1503D</td><td>Product image thumbnail mapping missing</td><td>Product data</td><td><button class="secondary" onclick="setRoute('recordEditor',{selectedProduct:'DSH1503D'})">Open</button></td></tr><tr><td>DAR09043</td><td>Fan airflow heating values incomplete</td><td>Engineering</td><td><button class="secondary" onclick="setRoute('recordEditor',{selectedProduct:'DAR09043'})">Open</button></td></tr><tr><td>CAPF1824A6</td><td>Selection data review required after copy</td><td>Product data</td><td><button class="secondary" onclick="setRoute('recordEditor',{selectedProduct:'CAPF1824A6'})">Open</button></td></tr><tr><td>DM97MC0804CN</td><td>Performance data ready for sign-off</td><td>Engineering</td><td><button class="secondary" onclick="setRoute('recordEditor',{selectedProduct:'DM97MC0804CN'})">Open</button></td></tr></table></div>
        </div>
      `);
    }

    function operationsPage() {
      return appShell(h`
        <div class="hero">
          <h1>Admin, Configuration & Handover</h1>
          <p>The system is designed for Daikin ownership: source code, schema, configuration, API contracts, deployment runbooks, admin guides, training, and bounded hypercare without proprietary lock-in.</p>
        </div>
        <div class="grid two">
          <div class="panel">
            <div class="panel-head"><h2>Platform controls</h2><button onclick="toast('Configuration change logged')">Edit config</button></div>
            <div class="panel-body">
              <div class="reuse-card"><div class="reuse-icon">ID</div><div><h3>Authentication</h3><p>Role-based access by product line and function.</p></div><span class="status ok">Covered</span></div>
              <div class="reuse-card"><div class="reuse-icon">CFG</div><div><h3>Configuration</h3><p>Regions, feature flags, release gates, and environment snapshots.</p></div><span class="status ok">Covered</span></div>
              <div class="reuse-card"><div class="reuse-icon">LOG</div><div><h3>Audit logging</h3><p>Tracks creates, updates, approvals, sync decisions, and published snapshots.</p></div><span class="status ok">Covered</span></div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-head"><h2>In-house readiness</h2><button class="secondary" onclick="toast('Runbook checklist exported')">Export runbook</button></div>
            <table><thead><tr><th>Deliverable</th><th>Status</th></tr></thead><tbody>
              <tr><td>Architecture and data model documentation</td><td><span class="status ok">Included</span></td></tr>
              <tr><td>API contracts and integration examples</td><td><span class="status ok">Included</span></td></tr>
              <tr><td>Deployment and support runbooks</td><td><span class="status ok">Included</span></td></tr>
              <tr><td>Admin, engineering, and product training</td><td><span class="status warn">Planned</span></td></tr>
              <tr><td>Bounded hypercare and clean exit</td><td><span class="status warn">Planned</span></td></tr>
            </tbody></table>
          </div>
        </div>
      `);
    }

    function importExportPage() {
      return appShell(h`
        <div class="hero">
          <h1>Bulk Import / Export</h1>
          <p>CSV and XML workflows are modernized with mapping templates, regional decimal/list separators, capacity table import, and reusable data matching to reduce duplicate definitions.</p>
        </div>
        <div class="grid two">
          <div class="panel"><div class="panel-head"><h2>Import queue</h2><button onclick="toast('Import mapped to reusable master data')">Import</button></div><div class="panel-body">
            <div class="field"><label>Source</label><select><option>MDM new data records</option><option>Capacity / PI tables</option><option>Family import</option></select></div>
            <div class="field"><label>Reuse matching</label><select><option>Auto-link exact master data matches</option><option>Create local overrides</option></select></div>
            <div class="checkbox-row"><span class="check"><span class="box checked"></span> Use regional settings</span><span class="check"><span class="box checked"></span> Validate before commit</span></div>
          </div></div>
          <div class="panel"><div class="panel-head"><h2>Export</h2><button onclick="toast('Export package created')">Export CSV</button></div><div class="panel-body">
            <div class="reuse-card"><div class="reuse-icon">CSV</div><div><h3>Capacity tables</h3><p>Includes linked schemes and inherited values.</p></div><span class="status ok">Ready</span></div>
            <div class="reuse-card"><div class="reuse-icon">XML</div><div><h3>Product definitions</h3><p>Preserves reusable master references.</p></div><span class="status ok">Ready</span></div>
          </div></div>
        </div>
      `);
    }

    function openEditor() {
      document.body.insertAdjacentHTML("beforeend", h`
        <div class="modal-backdrop" id="modal">
          <div class="modal">
            <div class="modal-head"><h2>Edit definition</h2><button class="ghost" onclick="closeEditor()">Close</button></div>
            <div class="panel-body">${technicalEditor(currentProduct())}</div>
            <div class="modal-foot"><button class="secondary" onclick="closeEditor()">Cancel</button><button onclick="closeEditor(); toast('Definition saved and reuse links preserved')">Save</button></div>
          </div>
        </div>
      `);
    }

    function closeEditor() {
      const modal = document.getElementById("modal");
      if (modal) modal.remove();
    }

    function render() {
      const routes = {
        login: loginPage,
        dashboard: dashboardPage,
        editorHome: editorHomePage,
        catalog: catalogPage,
        recordEditor: recordEditorPage,
        masters: mastersPage,
        integrations: integrationsPage,
        sync: syncPage,
        extraction: extractionPage,
        combinations: combinationsPage,
        validation: validationPage,
        reports: reportsPage,
        operations: operationsPage,
        importExport: importExportPage
      };
      document.getElementById("app").innerHTML = (routes[state.route] || dashboardPage)();
    }

    Object.assign(window, {
      state,
      setRoute,
      toast,
      render,
      openEditor,
      closeEditor
    });

    render();
