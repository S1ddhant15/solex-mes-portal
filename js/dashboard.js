const CENTRAL_LOGIN_URL = "/solex-digital-portal/index.html?app=mes";

function getPortalSession() {
  try {
    const session = JSON.parse(sessionStorage.getItem("solexPortalSession") || "null");
    if (!session || Date.now() > session.expiresAt || !session.user?.apps?.includes("mes")) return null;
    return session;
  } catch {
    return null;
  }
}

const portalSession = getPortalSession();
if (!portalSession) {
  window.top.location.replace(CENTRAL_LOGIN_URL);
  throw new Error("Central portal MES login required.");
}

const user = portalSession.user;
const reportId = "b6ac0c8d-cad0-4b72-beaa-fc4dc3f0d9e4";
const tenantId = "efe10ad5-9f60-494c-991c-f4b5a28390ba";

const pages = {
  Dashboard: "7b89b3c91e4d95e740e7",
  Production: "d583f0c64dd166a90eaa",
  Process: "a86e5f3003a48dcee473",
  Maintenance: "994fe46fc27806d8e5c4",
  Reports: "7b89b3c91e4d95e740e7",
  Settings: "7b89b3c91e4d95e740e7"
};

const icons = {
  Dashboard: "bi-speedometer2",
  Production: "bi-bar-chart",
  Process: "bi-cpu",
  Maintenance: "bi-tools",
  Reports: "bi-file-earmark-bar-graph",
  Settings: "bi-gear"
};

const labels = {
  Dashboard: "Management Overview",
  Production: "Production Dashboard",
  Process: user.department === "Quality" ? "Quality & Process Dashboard" : "Process Dashboard",
  Maintenance: "Maintenance Dashboard",
  Reports: "Management Reports",
  Settings: "Portal Settings"
};

const accessMatrix = {
  Production: ["Production"],
  Quality: ["Process"],
  Maintenance: ["Maintenance"],
  "Process Engineering": ["Process"],
  PPC: ["Production"],
  Management: ["Dashboard", "Production", "Process", "Maintenance", "Reports"],
  "Operations Excellence": ["Dashboard", "Production", "Process", "Maintenance", "Reports", "Settings"]
};

const allPages = Object.keys(pages);
const allowedPages = user.admin ? allPages : (accessMatrix[user.department] || []);

if (!allowedPages.length) {
  window.top.location.replace("/solex-digital-portal/portal.html");
  throw new Error("No MES dashboard is assigned to this user.");
}

const menuList = document.getElementById("menuList");
const frame = document.getElementById("powerbiFrame");
const toast = document.getElementById("toast");

document.getElementById("dept").textContent = `${user.name} · ${user.department}`;
document.getElementById("accessProfile").textContent = user.admin ? "MES Administrator" : `${user.department} only`;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function loadPowerBI(page, updateHistory = true) {
  if (!allowedPages.includes(page) || !pages[page]) {
    showToast("This dashboard is not included in your MES access profile.");
    return false;
  }

  const url = "https://app.powerbi.com/reportEmbed?" +
    `reportId=${encodeURIComponent(reportId)}` +
    `&pageName=${encodeURIComponent(pages[page])}` +
    "&navContentPaneEnabled=false" +
    "&filterPaneEnabled=false" +
    "&showTabs=false" +
    "&autoAuth=true" +
    `&ctid=${encodeURIComponent(tenantId)}`;

  frame.src = url;
  document.getElementById("dashboardTitle").textContent = labels[page];
  document.getElementById("reportTitle").textContent = labels[page];
  document.querySelectorAll("#menuList a").forEach(link => link.classList.toggle("active", link.dataset.page === page));
  if (updateHistory) history.replaceState(null, "", `dashboard.html?page=${encodeURIComponent(page)}`);
  return true;
}

allowedPages.forEach(page => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = `dashboard.html?page=${encodeURIComponent(page)}`;
  link.dataset.page = page;
  link.innerHTML = `<i class="bi ${icons[page]}"></i><span>${labels[page]}</span>`;
  link.addEventListener("click", event => {
    event.preventDefault();
    loadPowerBI(page);
    if (window.matchMedia("(max-width: 768px)").matches) setSidebar(false);
  });
  item.appendChild(link);
  menuList.appendChild(item);
});

function setSidebar(open) {
  document.body.classList.toggle("sidebar-collapsed", !open);
  const button = document.getElementById("menuButton");
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open ? "Close dashboard navigation" : "Open dashboard navigation");
}

document.getElementById("menuButton").addEventListener("click", () => setSidebar(document.body.classList.contains("sidebar-collapsed")));

function logout() {
  sessionStorage.removeItem("solexPortalSession");
  localStorage.removeItem("department");
  window.top.location.replace("/solex-digital-portal/index.html");
}

const requestedPage = new URLSearchParams(location.search).get("page");
const initialPage = requestedPage && allowedPages.includes(requestedPage) ? requestedPage : allowedPages[0];

if (requestedPage && !allowedPages.includes(requestedPage)) {
  document.getElementById("accessNotice").textContent = `Restricted route blocked. ${labels[initialPage]} is the only authorised opening dashboard for this login.`;
  document.getElementById("accessNotice").classList.add("visible");
}

loadPowerBI(initialPage);
