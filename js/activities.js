const activitiesData = {
    kinder: `
        <div class="detail-hero hero-emocional">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">🧸</span>
                </div>
                <h2>Kinder</h2>
                <p class="hero-subtitle">Iniciando el camino</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Estimulación temprana e iniciación a la lectoescritura. Preparamos a los pequeños para su etapa escolar con bases sólidas, fomentando el amor por aprender desde sus primeros pasos.</p>
                
                <div class="detail-section">
                    <h3>Áreas de Desarrollo</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">📖</span>
                            <div class="benefit-text">
                                <strong>Lectura</strong>
                                <p>Primeras letras y sonidos.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">✏️</span>
                            <div class="benefit-text">
                                <strong>Escritura</strong>
                                <p>Trazos y motricidad fina.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🔢</span>
                            <div class="benefit-text">
                                <strong>Matemáticas</strong>
                                <p>Números y conteo básico.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🤝</span>
                            <div class="benefit-text">
                                <strong>Socialización</strong>
                                <p>Aprender a compartir y jugar.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    primaria: `
        <div class="detail-hero hero-arte">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">📚</span>
                </div>
                <h2>Primaria</h2>
                <p class="hero-subtitle">Consolidando conocimientos</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Apoyo en tareas y refuerzo académico. Ayudamos a que las tareas no sean una carga, sino una oportunidad de aprender y reforzar lo visto en clase.</p>
                
                <div class="detail-section">
                    <h3>Apoyo Integral</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">📝</span>
                            <div class="benefit-text">
                                <strong>Tareas</strong>
                                <p>Apoyo y guía diaria.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">📖</span>
                            <div class="benefit-text">
                                <strong>Lectura</strong>
                                <p>Comprensión y fluidez.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">➗</span>
                            <div class="benefit-text">
                                <strong>Matemáticas</strong>
                                <p>Operaciones y problemas.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">✅</span>
                            <div class="benefit-text">
                                <strong>Exámenes</strong>
                                <p>Preparación y repaso.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    secundaria: `
        <div class="detail-hero hero-habilidades">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">📐</span>
                </div>
                <h2>Secundaria</h2>
                <p class="hero-subtitle">Hacia la independencia</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Refuerzo en materias específicas y técnicas de estudio. Fomentamos la autonomía, la organización y el pensamiento crítico necesarios para esta etapa.</p>
                
                <div class="detail-section">
                    <h3>Materias Clave</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">✖️</span>
                            <div class="benefit-text">
                                <strong>Matemáticas</strong>
                                <p>Álgebra y geometría.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🔬</span>
                            <div class="benefit-text">
                                <strong>Ciencias</strong>
                                <p>Biología, física, química.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🧠</span>
                            <div class="benefit-text">
                                <strong>Estudio</strong>
                                <p>Mapas mentales y resúmenes.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">📅</span>
                            <div class="benefit-text">
                                <strong>Organización</strong>
                                <p>Gestión del tiempo.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    talleres: `
        <div class="detail-hero hero-academico">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">🎨</span>
                </div>
                <h2>Talleres</h2>
                <p class="hero-subtitle">Aprendizaje creativo</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Actividades complementarias para desarrollar habilidades más allá del aula. Un espacio para explorar nuevos intereses y talentos.</p>
                
                <div class="detail-section">
                    <h3>Oferta de Talleres</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">🖌️</span>
                            <div class="benefit-text">
                                <strong>Arte</strong>
                                <p>Pintura y manualidades.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🗣️</span>
                            <div class="benefit-text">
                                <strong>Idiomas</strong>
                                <p>Inglés básico y conversación.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">📚</span>
                            <div class="benefit-text">
                                <strong>Lectura</strong>
                                <p>Club de lectura infantil.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">♟️</span>
                            <div class="benefit-text">
                                <strong>Juegos</strong>
                                <p>Ajedrez y lógica.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    personalizada: `
        <div class="detail-hero hero-ejecutivas">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">⭐</span>
                </div>
                <h2>Atención Personalizada</h2>
                <p class="hero-subtitle">A tu propio ritmo</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Clases particulares diseñadas para atender necesidades específicas o para regularización intensiva. Nos adaptamos totalmente al estilo de aprendizaje del alumno.</p>
                
                <div class="detail-section">
                    <h3>Beneficios</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">👤</span>
                            <div class="benefit-text">
                                <strong>1 a 1</strong>
                                <p>Atención total del docente.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">⏱️</span>
                            <div class="benefit-text">
                                <strong>Ritmo</strong>
                                <p>Adaptado al alumno.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">❓</span>
                            <div class="benefit-text">
                                <strong>Dudas</strong>
                                <p>Resolución inmediata.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">💪</span>
                            <div class="benefit-text">
                                <strong>Confianza</strong>
                                <p>Seguridad al preguntar.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `
};

const activitiesList = document.getElementById('activities-list');
const activityDetail = document.getElementById('activity-detail');

document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        if (activitiesData[id]) {
            activityDetail.innerHTML = activitiesData[id];
            activitiesList.classList.add('hidden');
            activityDetail.classList.remove('hidden');
            activityDetail.classList.add('activity-detail');
            // Scroll to top of section to ensure smooth transition
            document.getElementById('activities').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

function showList() {
    activityDetail.classList.add('hidden');
    activitiesList.classList.remove('hidden');
    document.getElementById('activities').scrollIntoView({ behavior: 'smooth' });
}

// Make showList globally available for the onclick handler in the HTML string
window.showList = showList;
