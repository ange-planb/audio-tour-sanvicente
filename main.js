// Coordenadas KML, audios, Imágenes reales e Historia
const tourPoints = [
    {
        id: 0,
        lat: -34.43930, lng: -71.07700,
        image: "referencias/bienvenida, hito0.png",
        es: { title: "Intro Audiotour", desc: "Bienvenidos a la Plaza de San Vicente de Tagua Tagua.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/AUDIO%20TOUR%20PLAZA%20DE%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Intro Audiotour", desc: "Welcome to San Vicente de Tagua Tagua Square.", audio: "audiotur%20en%20ingles%20MP3/0.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-camera", esTitle: "Fotografía Inicial", esDesc: "Toma una foto panorámica para capturar la esencia natural.", enTitle: "First Photo", enDesc: "Take a panoramic shot here." }]
    },
    {
        id: 1,
        lat: -34.43897, lng: -71.07652,
        image: "referencias/carmen gallegos.jpeg",
        es: { title: "Carmen Gallegos", desc: "María del Carmen Gallegos del Campo donó sus tierras inmemoriales el 6 de octubre de 1845 para fundar el pueblo.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/1.%20CARMEN%20GALLEGOS.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Carmen Gallegos", desc: "María del Carmen Gallegos donated her lands on Oct 6, 1845, establishing the town's foundation.", audio: "audiotur%20en%20ingles%20MP3/1.%20CARMEN%20GALLEGOS.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-mug-hot", esTitle: "Café Cercano", esDesc: "A media cuadra hay excelentes cafeterías tradicionales.", enTitle: "Nearby Coffee", enDesc: "There are traditional coffee shops nearby." }]
    },
    {
        id: 2,
        lat: -34.43970, lng: -71.07665,
        image: "referencias/reloj.jpeg",
        es: { title: "Reloj Árabe", desc: "Torre de arquitectura árabe regalada en el centenario (1945). Originalmente sonaba un carillón musical cada hora con piezas maestras de metal.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/2.%20RELOJ.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Arab Clock", desc: "Arab architecture tower gifted during the centennial (1945). It originally played musical carillons hourly.", audio: "audiotur%20en%20ingles%20MP3/2.%20CLOCK.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-clock", esTitle: "Cruce de Horas", esDesc: "Observa sus 4 caras de igual diseño enfocadas en la calle.", enTitle: "Four Faces", enDesc: "Observe its 4 symmetrical faces." }]
    },
    {
        id: 3,
        lat: -34.43958, lng: -71.07663,
        image: "referencias/galgo.jpg",
        es: { title: "Galgos", desc: "Esculturas representativas de la época, símbolo del arraigo de tradiciones.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/3.%20GALGOS.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Greyhounds", desc: "Representative sculptures symbolizing anchored local traditions.", audio: "audiotur%20en%20ingles%20MP3/3.%20GREYHOUNDS.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-utensils", esTitle: "Gastronomía", esDesc: "A pasos de aquí hay oferta de restaurantes y comida típica.", enTitle: "Gastronomy", enDesc: "Steps away there is a wide offer of local food." }]
    },
    {
        id: 4,
        lat: -34.43949, lng: -71.07687,
        image: "referencias/odeon.jpg",
        es: { title: "Odeón", desc: "Punto de confluencia musical clásico que históricamente reunió a bandas locales de campo.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/4.%20ODE%C3%93N.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Odeon", desc: "Classic musical stage connecting local bands with town citizens.", audio: "audiotur%20en%20ingles%20MP3/4.%20ODE%C3%93N.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-music", esTitle: "Música en Vivo", esDesc: "En días festivos suelen tocar orquestas aquí.", enTitle: "Live Music", enDesc: "During holidays, bands tend to play here." }]
    },
    {
        id: 5,
        lat: -34.43925, lng: -71.07678,
        image: "referencias/pileta.jpeg",
        es: { title: "Pileta y Araucarias", desc: "La pileta central representa místicamente a la desaparecida Laguna de Tagua Tagua. Antes era octagonal con fauna real y es custodiada por centenarias araucarias y palmeras plantadas por regidores.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/5.%20PILETA%20Y%20%C3%81RBOLES.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Fountain & Trees", desc: "The fountain represents the lost Tagua Tagua lagoon. It is guarded by monumental century-old palm trees.", audio: "audiotur%20en%20ingles%20MP3/5.%20FOUNTAIN%20AND%20TREES.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-leaf", esTitle: "Descanso", esDesc: "Bajo estas palmeras centenarias corre el mejor flujo de aire.", enTitle: "Rest Stop", enDesc: "Best breeze flows under these trees." }]
    },
    {
        id: 6,
        lat: -34.43917, lng: -71.07686,
        image: "referencias/alcantarillado.jpg",
        es: { title: "Vestigios Históricos", desc: "Monolito y símbolos que anclan la plaza en la línea de tiempo de la patria vieja.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/6.%20MONOLITO.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Historical Vestiges", desc: "Monolith symbolizing the deep patriotic timeline of the city.", audio: "audiotur%20en%20ingles%20MP3/6.%20COMMEMORATIVE%20MONOLITH.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-book", esTitle: "Lectura Digna", esDesc: "Toma el tiempo de leer la placa original.", enTitle: "Worthy Read", enDesc: "Take time to read the specific plaque wording." }]
    },
    {
        id: 7,
        lat: -34.43893, lng: -71.07690,
        image: "referencias/leon.jpg",
        es: { title: "Los Leones", desc: "Imponentes estatuas que vigilan flanqueando los accesos a la Plaza central.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/7.LOS%20LEONES.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "The Lions", desc: "Imposing statues guarding the entrances to the main central square.", audio: "audiotur%20en%20ingles%20MP3/7.THE%20LIONS.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-camera", esTitle: "Selfie Clásica", esDesc: "Es tradicional que los más pequeños escale el león para la foto.", enTitle: "Classic Selfie", enDesc: "Traditional photo spot climbing the lion figure." }]
    },
    {
        id: 8,
        lat: -34.43892, lng: -71.07700,
        image: "referencias/iglesia.jpeg",
        es: { title: "Iglesia San Juan", desc: "La histórica Parroquia San Juan Evangelista, un epicentro para el devenir religioso, fundado junto a San Vicente.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/8.%20IGLESIA.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "San Juan Church", desc: "Parish of San Juan Evangelista, epicenter of religious developments since the foundation.", audio: "audiotur%20en%20ingles%20MP3/8.%20CHURCH.%20AUDIO%20TOUR%20%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-hands-praying", esTitle: "Hora Vesperal", esDesc: "Observa los vitrales luminosos en los horarios de atardecer.", enTitle: "Vesper Hour", enDesc: "Check out the luminous stained-glass windows at dusk." }]
    },
    {
        id: 9,
        lat: -34.43891, lng: -71.07676,
        image: "referencias/mastodonte.jpg",
        es: { title: "Mastodonte Paleontológico", desc: "Representación física de los grandes hallazgos óseos de gonfoterios de hace 12.000 años, extraídos de la Laguna Seca.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/9.%20MASTODONTE.%20AUDIO%20TOUR%20PLAZA%20DE%20ARMAS%20DE%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "Paleontological Mastodon", desc: "Physical representation of the giant gonphothere fossil findings dating back 12,000 years in the Dry Lagoon.", audio: "audiotur%20en%20ingles%20MP3/9.%20MASTODON.%20AUDIO%20TOUR%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-bone", esTitle: "Museo Cuchipuy", esDesc: "Considera sumar el Museo de Cuchipuy a tu itinerario general si te interesa esto.", enTitle: "Cuchipuy Museum", enDesc: "Add the Cuchipuy Museum if you enjoy paleontology." }]
    },
    {
        id: 10,
        lat: -34.43873, lng: -71.07668,
        image: "referencias/mounstruo.jpeg",
        es: { title: "El Monstruo", desc: "Monstruo de la Laguna. Rememora el folclore local y deidades o bestias extrañas descritas por los cronistas que aterrorizaban la antigua era hídrica.", audio: "audiotour%20en%20espa%C3%B1ol%20MP3/10.%20MONSTRUO%20DE%20LA%20LAGUNA.%20AUDIO%20TOUR%20PLAZA%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA..mp3" },
        en: { title: "The Monster", desc: "Lagoon Monster. It relates to local folklore of mythical water beasts recorded by early chroniclers.", audio: "audiotur%20en%20ingles%20MP3/10.%20MONSTER%20OF%20THE%20LAGOON.%20%20AUDIO%20TOUR%20%20SAN%20VICENTE%20DE%20TAGUA%20TAGUA%20SQUARE..mp3" },
        tips: [{ icon: "fa-water", esTitle: "El Cuentacuentos", esDesc: "Pregunta a los ancianos del pueblo sobre este mito, tienen variaciones emocionantes.", enTitle: "Storytellers", enDesc: "Elders often have differing exciting tales about this beast." }]
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
    
    const heroImgEl = document.getElementById('point-hero');
    const heroContainer = document.getElementById('hero-container');
    if (activePoint.image) {
        heroImgEl.src = activePoint.image;
        heroContainer.classList.remove('hidden-hero');
    } else {
        heroContainer.classList.add('hidden-hero');
    }
    
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
