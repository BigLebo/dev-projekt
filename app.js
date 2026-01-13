/**
 * BTR Nové Dvory - Projektový portál
 * JavaScript Application
 */

// ========================================
// Data
// ========================================

const activities = [
    { code: '0.1', name: 'Analýza území a regulativů', start: '2026-01-01', end: '2026-01-29', phase: '0', critical: true, resp: 'PM, ARCH' },
    { code: '0.2', name: 'Analýza trhu', start: '2026-01-01', end: '2026-01-22', phase: '0', critical: false, resp: 'INV, PM' },
    { code: '0.3', name: 'SWOT projektu', start: '2026-01-01', end: '2026-01-08', phase: '0', critical: false, resp: 'PM' },
    { code: '0.4', name: 'Identifikace rizik', start: '2026-01-01', end: '2026-01-08', phase: '0', critical: false, resp: 'INV, PM' },
    { code: '0.5', name: 'Ekonomické posouzení', start: '2026-01-01', end: '2026-01-15', phase: '0', critical: false, resp: 'INV, EKO' },
    { code: '0.6', name: 'Geologický průzkum', start: '2026-01-15', end: '2026-02-05', phase: '0', critical: false, resp: 'GEO, PM' },
    { code: '0A.1', name: 'Předjednání financování', start: '2026-01-29', end: '2026-04-09', phase: '0A', critical: false, resp: 'INV, EKO' },
    { code: '0A.2', name: 'Aktualizace fin. modelu', start: '2026-04-09', end: '2026-05-07', phase: '0A', critical: false, resp: 'INV, EKO' },
    { code: '0A.3', name: 'Nezávazné nabídky bank', start: '2026-05-07', end: '2026-06-11', phase: '0A', critical: false, resp: 'INV, EKO' },
    { code: '1.1', name: 'Architektonická studie', start: '2026-01-29', end: '2026-03-19', phase: '1', critical: true, resp: 'ARCH' },
    { code: '1.2', name: 'Konzultace se stav. úřadem', start: '2026-03-19', end: '2026-04-16', phase: '1', critical: true, resp: 'ARCH, ING' },
    { code: '1.3', name: 'DPZ (vč. DOSS)', start: '2026-04-16', end: '2026-07-09', phase: '1', critical: true, risk: true, resp: 'ARCH, PROJ' },
    { code: '1.4', name: 'Řízení o povolení záměru', start: '2026-07-09', end: '2026-10-01', phase: '1', critical: true, risk: true, resp: 'ING, ÚŘAD' },
    { code: '1.5', name: 'Buffer – odvolací lhůta', start: '2026-10-01', end: '2026-10-29', phase: '1', critical: true, resp: 'ÚŘAD' },
    { code: '1.6', name: 'Value engineering', start: '2026-10-29', end: '2026-11-26', phase: '1', critical: true, resp: 'PM, ARCH, EKO' },
    { code: '1.7', name: 'PDPS', start: '2026-11-26', end: '2027-02-18', phase: '1', critical: true, resp: 'PROJ' },
    { code: '1A.1', name: 'DD banky', start: '2026-11-26', end: '2027-01-07', phase: '1A', critical: false, resp: 'INV, EKO' },
    { code: '1A.2', name: 'Vyjednání úvěru', start: '2027-01-07', end: '2027-02-18', phase: '1A', critical: false, resp: 'INV, EKO' },
    { code: '1A.3', name: 'Podpis úvěrové smlouvy', start: '2027-02-18', end: '2027-03-04', phase: '1A', critical: false, resp: 'INV, EKO' },
    { code: '2.1', name: 'Poptávkové řízení GD', start: '2027-02-18', end: '2027-03-18', phase: '2', critical: true, resp: 'PM' },
    { code: '2.2', name: 'Vyhodnocení a vyjednávání', start: '2027-03-18', end: '2027-04-08', phase: '2', critical: true, resp: 'INV, PM' },
    { code: '2.3', name: 'Smlouva o dílo', start: '2027-04-08', end: '2027-04-22', phase: '2', critical: true, resp: 'INV, LEG' },
    { code: '2.4', name: 'Pojištění stavby', start: '2027-04-22', end: '2027-04-29', phase: '2', critical: true, resp: 'INV, LEG' },
    { code: '3.1', name: 'Zařízení staveniště', start: '2027-04-29', end: '2027-05-13', phase: '3', critical: true, resp: 'GD' },
    { code: '3.2', name: 'Zemní práce', start: '2027-05-13', end: '2027-06-17', phase: '3', critical: true, resp: 'GD, TDI' },
    { code: '3.3', name: 'Základy', start: '2027-06-17', end: '2027-07-15', phase: '3', critical: true, resp: 'GD, TDI' },
    { code: '3.4', name: 'Suterén', start: '2027-07-15', end: '2027-08-26', phase: '3', critical: true, resp: 'GD, TDI' },
    { code: '3.5', name: 'Hrubá stavba NP', start: '2027-08-26', end: '2028-01-27', phase: '3', critical: true, risk: true, resp: 'GD, TDI' },
    { code: '3.6', name: 'Střecha a fasáda', start: '2028-01-27', end: '2028-03-30', phase: '3', critical: true, resp: 'GD, TDI' },
    { code: '3.7', name: 'Instalace TZB', start: '2028-03-30', end: '2028-06-29', phase: '3', critical: true, risk: true, resp: 'GD, PROJ' },
    { code: '3.8', name: 'Okna, výplně', start: '2028-06-29', end: '2028-07-27', phase: '3', critical: true, resp: 'GD, TDI' },
    { code: '3.9', name: 'Omítky, SDK', start: '2028-07-27', end: '2028-09-07', phase: '3', critical: true, resp: 'GD, TDI' },
    { code: '3.10', name: 'Podlahy, dlažby', start: '2028-09-07', end: '2028-10-05', phase: '3', critical: true, resp: 'GD, TDI' },
    { code: '3.11', name: 'Interiéry', start: '2028-10-05', end: '2028-11-16', phase: '3', critical: true, resp: 'GD, TDI' },
    { code: '3.12', name: 'Revize a zkoušky', start: '2028-11-16', end: '2028-12-07', phase: '3', critical: true, resp: 'GD, TDI' },
    { code: '3.13', name: 'Kolaudace', start: '2028-12-07', end: '2029-01-11', phase: '3', critical: true, resp: 'GD, ING' },
    { code: '3.14', name: 'Předání stavby', start: '2029-01-11', end: '2029-01-25', phase: '3', critical: true, resp: 'GD, PM' },
    { code: '4.1', name: 'Pre-leasing', start: '2028-10-05', end: '2028-12-28', phase: '4', critical: false, resp: 'MKT' },
    { code: '4.2', name: 'Nastavení FM', start: '2028-12-07', end: '2029-01-04', phase: '4', critical: false, resp: 'FM, PM' },
    { code: '4.3', name: 'Předání nájemníkům', start: '2029-01-25', end: '2029-02-22', phase: '4', critical: true, resp: 'FM, MKT' },
    { code: '4.4', name: 'Stabilizace provozu', start: '2029-02-22', end: '2029-05-17', phase: '4', critical: true, resp: 'FM, INV' },
    { code: '4.5', name: '50% obsazenost', start: '2029-05-17', end: '2029-05-17', phase: '4', critical: true, milestone: true, resp: '—' },
    { code: '4.6', name: '95% obsazenost', start: '2029-05-17', end: '2029-08-17', phase: '4', critical: true, resp: 'MKT, INV' },
];

const projectStart = new Date(2026, 0, 1);
const projectEnd = new Date(2029, 7, 31);
const totalDays = Math.ceil((projectEnd - projectStart) / (1000 * 60 * 60 * 24));

// ========================================
// Navigation
// ========================================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('sidebarOverlay');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show corresponding page
            pages.forEach(p => p.classList.remove('active'));
            document.getElementById(`page-${pageId}`).classList.add('active');
            
            // Close mobile menu
            closeMobileMenu();
            
            // Update URL hash
            window.location.hash = pageId;
        });
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });
    
    // Close menu on overlay click
    overlay.addEventListener('click', closeMobileMenu);
    
    // Handle initial hash
    const hash = window.location.hash.slice(1) || 'dashboard';
    const initialLink = document.querySelector(`[data-page="${hash}"]`);
    if (initialLink) {
        initialLink.click();
    }
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('sidebarOverlay');
    
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    menuToggle.classList.remove('active');
}

// ========================================
// Gantt Chart
// ========================================

function getPosition(dateStr) {
    const date = new Date(dateStr);
    const days = Math.ceil((date - projectStart) / (1000 * 60 * 60 * 24));
    return (days / totalDays) * 100;
}

function getWidth(start, end) {
    const s = new Date(start);
    const e = new Date(end);
    const days = Math.ceil((e - s) / (1000 * 60 * 60 * 24));
    return Math.max((days / totalDays) * 100, 0.5);
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });
}

function formatDateShort(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric' });
}

function generateQuarterMarkers() {
    const container = document.getElementById('quarterMarkers');
    if (!container) return;
    
    const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
    let html = '';
    
    for (let year = 2026; year <= 2029; year++) {
        for (let q = 0; q < 4; q++) {
            const date = new Date(year, q * 3, 1);
            if (date <= projectEnd) {
                const pos = getPosition(date.toISOString().split('T')[0]);
                html += `<div class="quarter-marker" style="left: ${pos}%">${quarters[q]}</div>`;
            }
        }
    }
    container.innerHTML = html;
}

function generateGridLines() {
    let html = '';
    for (let year = 2026; year <= 2029; year++) {
        for (let q = 0; q < 4; q++) {
            const date = new Date(year, q * 3, 1);
            if (date <= projectEnd) {
                html += `<div class="grid-line" style="left: ${getPosition(date.toISOString().split('T')[0])}%"></div>`;
            }
        }
    }
    return html;
}

function getFilteredActivities() {
    const phaseFilter = document.getElementById('phaseFilter')?.value || 'all';
    const roleFilter = document.getElementById('roleFilter')?.value || 'all';
    const criticalOnly = document.getElementById('criticalOnly')?.checked || false;
    
    return activities.filter(act => {
        if (criticalOnly && !act.critical) return false;
        if (phaseFilter !== 'all' && act.phase !== phaseFilter) return false;
        if (roleFilter !== 'all' && !act.resp.includes(roleFilter)) return false;
        return true;
    });
}

function renderGanttChart() {
    const container = document.getElementById('ganttBody');
    if (!container) return;
    
    const gridLines = generateGridLines();
    const filteredActivities = getFilteredActivities();
    
    let html = '';
    
    filteredActivities.forEach(act => {
        const barClasses = [
            'bar',
            `phase-${act.phase}`,
            act.critical ? '' : 'non-critical',
            act.risk ? 'risk' : ''
        ].filter(Boolean).join(' ');
        
        const tooltip = `${act.code}: ${act.name}\n${formatDate(act.start)} → ${formatDate(act.end)}\nOdpovědnost: ${act.resp}${act.critical ? '\n★ Kritická cesta' : ''}`;
        
        html += `
            <div class="gantt-row">
                <div class="gantt-col-code">${act.code}</div>
                <div class="gantt-col-name" title="${act.name}">${act.name}</div>
                <div class="gantt-col-resp">${act.resp}</div>
                <div class="gantt-timeline">
                    ${gridLines}
                    ${act.milestone 
                        ? `<div class="milestone-marker" style="left: ${getPosition(act.start)}%" title="${tooltip}"></div>`
                        : `<div class="${barClasses}" style="left: ${getPosition(act.start)}%; width: ${getWidth(act.start, act.end)}%;" title="${tooltip}">${getWidth(act.start, act.end) > 2.5 ? act.code : ''}</div>`
                    }
                </div>
            </div>
        `;
    });
    
    if (filteredActivities.length === 0) {
        html = '<div style="padding: 24px; text-align: center; color: #666;">Žádné aktivity neodpovídají zvoleným filtrům.</div>';
    }
    
    container.innerHTML = html;
}

function renderMobileList() {
    const container = document.getElementById('mobileList');
    if (!container) return;
    
    const filteredActivities = getFilteredActivities();
    
    let html = '';
    
    filteredActivities.forEach(act => {
        const cardClasses = [
            'mobile-card',
            !act.critical ? 'non-critical' : '',
            act.risk ? 'risk' : ''
        ].filter(Boolean).join(' ');
        
        const progressWidth = getWidth(act.start, act.end);
        const progressLeft = getPosition(act.start);
        
        html += `
            <div class="${cardClasses}">
                <div class="mobile-card-header">
                    <span class="mobile-card-code">${act.code}</span>
                    <span class="mobile-card-resp">${act.resp}</span>
                </div>
                <div class="mobile-card-name">${act.name}</div>
                <div class="mobile-card-bar">
                    <div class="mobile-card-progress phase-${act.phase}" 
                         style="margin-left: ${progressLeft}%; width: ${Math.max(progressWidth, 5)}%;">
                        ${act.critical ? '★' : ''}
                    </div>
                </div>
                <div class="mobile-card-dates">
                    <span>${formatDateShort(act.start)}</span>
                    <span>${formatDateShort(act.end)}</span>
                </div>
            </div>
        `;
    });
    
    if (filteredActivities.length === 0) {
        html = '<div style="padding: 24px; text-align: center; color: #666;">Žádné aktivity neodpovídají zvoleným filtrům.</div>';
    }
    
    container.innerHTML = html;
}

function initGantt() {
    generateQuarterMarkers();
    renderGanttChart();
    renderMobileList();
    
    // Filter event listeners
    document.getElementById('phaseFilter')?.addEventListener('change', () => {
        renderGanttChart();
        renderMobileList();
    });
    
    document.getElementById('roleFilter')?.addEventListener('change', () => {
        renderGanttChart();
        renderMobileList();
    });
    
    document.getElementById('criticalOnly')?.addEventListener('change', () => {
        renderGanttChart();
        renderMobileList();
    });
    
    // View toggle for mobile
    const btnList = document.getElementById('btnList');
    const btnGantt = document.getElementById('btnGantt');
    const ganttWrapper = document.getElementById('ganttWrapper');
    const mobileList = document.getElementById('mobileList');
    
    if (btnList && btnGantt) {
        btnList.addEventListener('click', () => {
            btnList.classList.add('active');
            btnGantt.classList.remove('active');
            ganttWrapper.classList.remove('show');
            mobileList.classList.remove('hide');
        });
        
        btnGantt.addEventListener('click', () => {
            btnGantt.classList.add('active');
            btnList.classList.remove('active');
            ganttWrapper.classList.add('show');
            mobileList.classList.add('hide');
        });
    }
}

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initGantt();
});

// Handle hash changes
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    const link = document.querySelector(`[data-page="${hash}"]`);
    if (link) {
        link.click();
    }
});
