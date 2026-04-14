// Coordenadas KML, audios y *NUEVOS* Tips Turísticos
const tourPoints = [
    {
        id: 0,
        lat: -34.43930, 
        lng: -71.07700,
        es: { title: "Intro Audiotour", desc: "Bienvenida a la Plaza de San Vicente", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/AUDIO%20TOUR%20PLAZA%20DE%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Intro Audiotour", desc: "Welcome to San Vicente Square", audio: "audiotur%20en%20ingles%20MP3/0.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
            { icon: "fa-camera", esTitle: "Fotografía Inicial", esDesc: "Toma una foto de todo el paisaje desde este punto central.", enTitle: "First Photo", enDesc: "Take a wide shot from this central point." }
        ]
    },
    {
        id: 1,
        lat: -34.43897,
        lng: -71.07652,
        es: { title: "Carmen Gallegos", desc: "Fundadora", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/1.%20CARMEN%20GALLEGOS.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Carmen Gallegos", desc: "Founder", audio: "audiotur%20en%20ingles%20MP3/1.%20CARMEN%20GALLEGOS.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
            { icon: "fa-mug-hot", esTitle: "Café Cercano", esDesc: "A media cuadra puedes encontrar excelentes cafeterías tradicionales.", enTitle: "Nearby Coffee", enDesc: "Half a block away you can find traditional coffee shops." }
        ]
    },
    {
        id: 2,
        lat: -34.43970,
        lng: -71.07665,
        es: { title: "Reloj", desc: "Historia y Tradición", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/2.%20RELOJ.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Clock", desc: "History & Tradition", audio: "audiotur%20en%20ingles%20MP3/2.%20CLOCK.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
            { icon: "fa-clock", esTitle: "Momento Ideal", esDesc: "Espera a las campanas del cambio de hora para vivir la experiencia.", enTitle: "Perfect Timing", enDesc: "Wait for the hour change bells to enhance the experience." }
        ]
    },
    {
        id: 3,
        lat: -34.43958,
        lng: -71.07663,
        es: { title: "Galgos", desc: "Esculturas Emblemáticas", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/3.%20GALGOS.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Greyhounds", desc: "Emblematic Sculptures", audio: "audiotur%20en%20ingles%20MP3/3.%20GREYHOUNDS.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
             { icon: "fa-utensils", esTitle: "Gastronomía", esDesc: "A pasos de aquí hay oferta de restaurantes y comida al paso.", enTitle: "Gastronomy", enDesc: "Steps away there is a wide offer of local food and fine dining." }
        ]
    },
    {
        id: 4,
        lat: -34.43949,
        lng: -71.07687,
        es: { title: "Odeón", desc: "Música y Encuentro", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/4.%20ODE%C3%93N.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Odeon", desc: "Music & Gatherings", audio: "audiotur%20en%20ingles%20MP3/4.%20ODE%C3%93N.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
             { icon: "fa-music", esTitle: "Música en Vivo", esDesc: "Revisa la cartelera local, a veces hay presentaciones en este mismo odeón.", enTitle: "Live Music", enDesc: "Check the local agenda, sometimes bands play directly here." }
        ]
    },
    {
        id: 5,
        lat: -34.43925,
        lng: -71.07678,
        es: { title: "Pileta", desc: "El corazón de la plaza", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/5.%20PILETA%20Y%20%C3%81RBOLES.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Fountain", desc: "Heart of the square", audio: "audiotur%20en%20ingles%20MP3/5.%20FOUNTAIN%20AND%20TREES.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
            { icon: "fa-leaf", esTitle: "Descanso", esDesc: "Siéntate en las bancas bajo las palmeras, es el lugar más fresco.", enTitle: "Rest Stop", enDesc: "Sit on the benches under the tall palms, it's the coolest spot." }
        ]
    },
    {
        id: 6,
        lat: -34.43917,
        lng: -71.07686,
        es: { title: "Monolito", desc: "Monolito Conmemorativo", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/6.%20MONOLITO.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Monolith", desc: "Historical landmark", audio: "audiotur%20en%20ingles%20MP3/6.%20COMMEMORATIVE%20MONOLITH.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
            { icon: "fa-book", esTitle: "Dato Histórico", esDesc: "Lee la placa frontal para entender el paso del tiempo en el lugar.", enTitle: "History Fact", enDesc: "Read the front plaque to understand the time progression here." }
        ]
    },
    {
        id: 7,
        lat: -34.43893,
        lng: -71.07690,
        es: { title: "Leones", desc: "Guardianes de la Plaza", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/7.LOS%20LEONES.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Lions", desc: "Square Guardians", audio: "audiotur%20en%20ingles%20MP3/7.THE%20LIONS.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
            { icon: "fa-camera", esTitle: "Selfie Clásica", esDesc: "Uno de los puntos favoritos por turistas para una buena fotografía.", enTitle: "Classic Selfie", enDesc: "One of the favorite spots for tourists to take a picture." }
        ]
    },
    {
        id: 8,
        lat: -34.43892,
        lng: -71.07700,
        es: { title: "Iglesia", desc: "Parroquia San Juan Evangelista", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/8.%20IGLESIA.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Church", desc: "San Juan Evangelista Parish", audio: "audiotur%20en%20ingles%20MP3/8.%20CHURCH.%20AUDIO%20TOUR%20%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
            { icon: "fa-hands-praying", esTitle: "Arquitectura", esDesc: "Observa los detalles de su fachada y el campanario al atardecer.", enTitle: "Architecture", enDesc: "Observe the details of its facade and the bell tower at dusk." }
        ]
    },
    {
        id: 9,
        lat: -34.43891,
        lng: -71.07676,
        es: { title: "Mastodonte", desc: "Historia prehistórica", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/9.%20MASTODONTE.%20AUDIO%20TOUR%20PLAZA%20DE%20ARMAS%20DE%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Mastodon", desc: "Prehistoric history", audio: "audiotur%20en%20ingles%20MP3/9.%20MASTODON.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
            { icon: "fa-bone", esTitle: "Milenario", esDesc: "San Vicente es famoso por sus hallazgos arqueológicos.", enTitle: "Ancient", enDesc: "San Vicente is famous for its archaeological findings." }
        ]
    },
    {
        id: 10,
        lat: -34.43873,
        lng: -71.07668,
        es: { title: "Monstruo", desc: "Mitos y Leyendas", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/10.%20MONSTRUO%20DE%20LA%20LAGUNA.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Monster", desc: "Myths and Legends", audio: "audiotur%20en%20ingles%20MP3/10.%20MONSTER%20OF%20THE%20LAGOON.%20%20AUDIO%20TOUR%20%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [
            { icon: "fa-water", esTitle: "La Laguna", esDesc: "Pregunta a los locales sobre la laguna desecada, hay mucha historia mística.", enTitle: "The Lagoon", enDesc: "Ask locals about the dried lagoon, there is mystical history there." }
        ]
    }
];

// Variables de Estado
let currentLang = 'es';
let activePoint = null;
let userMarker = null;
let userPosData = null;
let watchId = null;

// Mapa
const map = L.map('map', { zoomControl: false }).setView([-34.4393, -71.0770], 19);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 22
}).addTo(map);

// Iconografía
const createCustomIcon = (number) => {
    return L.divIcon({
        className: 'custom-icon',
        html: `<div class="custom-tour-marker" id="marker-${number}">${number}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
    });
};

const userIcon = L.divIcon({
    className: 'user-icon',
    html: `<div class="custom-tour-marker marker-user"><i class="fa-solid fa-person-walking"></i></div>`,
    iconSize:  [32, 32],
    iconAnchor: [16, 16]
});

// Renderizado de Marcadores
const markers = {};
tourPoints.forEach(point => {
    const marker = L.marker([point.lat, point.lng], { icon: createCustomIcon(point.id) }).addTo(map);
    markers[point.id] = marker;
    
    marker.on('click', () => {
        openAudioPanel(point);
        document.querySelectorAll('.custom-tour-marker').forEach(el => el.classList.remove('active'));
        const el = document.getElementById(`marker-${point.id}`);
        if(el) el.classList.add('active');
    });
});

// UI Elements
const audioPanel = document.getElementById('audio-panel');
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('btn-play-pause');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const btnLocate = document.getElementById('btn-locate');

// TABS LOGIC
const tabAudioBtn = document.getElementById('tab-audio-btn');
const tabTipsBtn = document.getElementById('tab-tips-btn');
const viewAudio = document.getElementById('view-audio');
const viewTips = document.getElementById('view-tips');

tabAudioBtn.addEventListener('click', () => {
    tabAudioBtn.classList.add('active');
    tabTipsBtn.classList.remove('active');
    viewAudio.classList.add('active-view');
    viewAudio.classList.remove('hidden-view');
    viewTips.classList.remove('active-view');
    viewTips.classList.add('hidden-view');
});

tabTipsBtn.addEventListener('click', () => {
    tabTipsBtn.classList.add('active');
    tabAudioBtn.classList.remove('active');
    viewTips.classList.add('active-view');
    viewTips.classList.remove('hidden-view');
    viewAudio.classList.remove('active-view');
    viewAudio.classList.add('hidden-view');
});

function loadTips() {
    const tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = '';
    
    if(!activePoint || !activePoint.tips) return;
    
    activePoint.tips.forEach(tip => {
        const title = currentLang === 'es' ? tip.esTitle : tip.enTitle;
        const desc = currentLang === 'es' ? tip.esDesc : tip.enDesc;
        
        const li = document.createElement('li');
        li.className = 'tip-item';
        li.innerHTML = `
            <div class="tip-icon"><i class="fa-solid ${tip.icon}"></i></div>
            <div class="tip-content">
                <div class="tip-title">${title}</div>
                <div class="tip-text">${desc}</div>
            </div>
        `;
        tipsList.appendChild(li);
    });
}

function openAudioPanel(point) {
    activePoint = point;
    updatePanelTexts();
    loadTips(); // Poblar tab de tips
    
    audioPlayer.src = point[currentLang].audio;
    audioPlayer.load();
    
    audioPanel.classList.remove('fade-out');
    btnLocate.classList.add('has-panel'); 
    
    map.flyTo([point.lat, point.lng], 19, { duration: 1 });
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    
    // Auto-Select Audio Tab on new point
    tabAudioBtn.click();
}

function closeAudioPanel() {
    audioPanel.classList.add('fade-out');
    btnLocate.classList.remove('has-panel');
    document.querySelectorAll('.custom-tour-marker').forEach(el => el.classList.remove('active'));
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

document.getElementById('btn-close-panel').addEventListener('click', closeAudioPanel);

function updatePanelTexts() {
    if (!activePoint) return;
    document.getElementById('point-title').textContent = activePoint[currentLang].title;
    document.getElementById('point-desc').textContent = activePoint[currentLang].desc;
    
    document.getElementById('label-directions').textContent = currentLang === 'es' ? 'Cómo llegar' : 'Directions';
    document.getElementById('label-info').textContent = currentLang === 'es' ? 'Cámara Turismo' : 'Tourist Board';
    document.getElementById('label-audio-tab').textContent = currentLang === 'es' ? 'Audio' : 'Audio';
    document.getElementById('label-tips-tab').textContent = currentLang === 'es' ? 'Lugares & Tips' : 'Tips & Places';
}

// Selector de Idiomas
document.getElementById('btn-es').addEventListener('click', () => setLanguage('es'));
document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('btn-es').classList.toggle('active', lang === 'es');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    
    if (activePoint) {
        const isPlaying = !audioPlayer.paused;
        const currentTime = audioPlayer.currentTime;
        audioPlayer.src = activePoint[currentLang].audio;
        audioPlayer.currentTime = currentTime;
        updatePanelTexts();
        loadTips();
        if (isPlaying) audioPlayer.play();
    }
}

// Controles de Reproducción
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});

const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

audioPlayer.addEventListener('timeupdate', () => {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    document.getElementById('current-time').textContent = formatTime(audioPlayer.currentTime);
});

audioPlayer.addEventListener('loadedmetadata', () => {
    document.getElementById('duration-time').textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener('ended', () => {
    playBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i>'; 
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    if (!isNaN(duration)) {
        audioPlayer.currentTime = (clickX / width) * duration;
    }
});

// Botón "Cómo llegar" (Pestaña 1)
document.getElementById('btn-directions').addEventListener('click', () => {
    if (!activePoint) return;
    if (!userPosData) {
        alert(currentLang === 'es' ? "Por favor activa tu ubicación GPS primero pulsando el botón del mapa." : "Please activate your GPS location first by tapping the map button.");
        return;
    }
    const origin = `${userPosData.lat},${userPosData.lng}`;
    const destination = `${activePoint.lat},${activePoint.lng}`;
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=walking`;
    window.open(url, '_blank');
});

// Geolocalización Mejorada
btnLocate.addEventListener('click', () => {
    if (!("geolocation" in navigator)) {
        alert(currentLang === 'es' ? "Tu navegador no soporta geolocalización." : "Your browser doesn't support geolocation.");
        return;
    }
    
    btnLocate.style.color = "#ccc"; 
    
    const options = { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 };

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            userPosData = { lat, lng };
            updateUserMarker(lat, lng, true); 
            btnLocate.style.color = "var(--primary-color)";
            
            if (!watchId) {
                watchId = navigator.geolocation.watchPosition(
                    (pos) => {
                        userPosData = { lat: pos.coords.latitude, lng: pos.coords.longitude };
                        updateUserMarker(pos.coords.latitude, pos.coords.longitude, false);
                    },
                    (err) => console.log("Watch error:", err),
                    options
                );
            }
        },
        (error) => {
            console.error("GPS Error:", error);
            btnLocate.style.color = "red";
            let msgBox = currentLang === 'es' ? "Error GPS: " : "GPS Error: ";
            if (error.code === error.PERMISSION_DENIED) {
                msgBox += currentLang === 'es' ? "Permiso denegado por el navegador." : "Permission denied by browser.";
            } else if (error.code === error.POSITION_UNAVAILABLE) {
                msgBox += currentLang === 'es' ? "Posición no disponible." : "Position unavailable.";
            } else if (error.code === error.TIMEOUT) {
                msgBox += currentLang === 'es' ? "Tiempo agotado (Timeout)." : "Timeout.";
            }
            alert(msgBox);
        },
        options
    );
});

function updateUserMarker(lat, lng, centerMap) {
    if (!userMarker) {
        userMarker = L.marker([lat, lng], { icon: userIcon, zIndexOffset: 1000 }).addTo(map);
    } else {
        userMarker.setLatLng([lat, lng]);
    }
    if (centerMap) map.flyTo([lat, lng], 19);
}
