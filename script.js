// Language translations
const translations = {
    en: {
        appTitle: "Trade Algo Bot",
        description: "Advanced Trading Signals",
        pairsTab: "Pairs",
        timeTab: "Time",
        signalTab: "Signal",
        pairsTitle: "Most Popular Pairs",
        pairsSubtitle: "Choose your trading pair",
        timeTitle: "Select Time Frame",
        timeSubtitle: "Choose your analysis period",
        time5s: { value: "5s", description: "Ultra Fast" },
        time10s: { value: "10s", description: "Fast" },
        time15s: { value: "15s", description: "Medium" },
        time30s: { value: "30s", description: "Stable" },
        recommendation: "Recommended: 30 seconds is optimal for quick signals with good accuracy",
        backToPairs: "Back to Pairs",
        signalTitle: "Signal Processing",
        signalSubtitle: "Analyzing your selected pair",
        liveSignal: "Live Signal",
        generateButton: "Generate New Signal",
        backToTime: "Back to Time",
        signalLong: "Your Signal - Long",
        signalShort: "Your Signal - Short",
        cooldownText: "New Signal in... {time}s",
        languageChanged: "Language changed to"
    },
    ru: {
        appTitle: "Trade Algo Bot",
        description: "Продвинутые Торговые Сигналы",
        pairsTab: "Пары",
        timeTab: "Время",
        signalTab: "Сигнал",
        pairsTitle: "Самые Популярные Пары",
        pairsSubtitle: "Выберите торговую пару",
        timeTitle: "Выберите Временной Интервал",
        timeSubtitle: "Выберите период анализа",
        time5s: { value: "5с", description: "Ультра Быстро" },
        time10s: { value: "10с", description: "Быстро" },
        time15s: { value: "15с", description: "Средне" },
        time30s: { value: "30с", description: "Стабильно" },
        recommendation: "Рекомендация: 30 секунд оптимально для быстрых сигналов с хорошей точностью",
        backToPairs: "Назад к Парам",
        signalTitle: "Обработка Сигнала",
        signalSubtitle: "Анализ выбранной пары",
        liveSignal: "Live Signal",
        generateButton: "Сгенерировать Новый Сигнал",
        backToTime: "Назад ко Времени",
        signalLong: "Ваш Сигнал - Long",
        signalShort: "Ваш Сигнал - Short",
        cooldownText: "Новый Сигнал через... {time}с",
        languageChanged: "Язык изменен на"
    },
    es: {
        appTitle: "Trade Algo Bot",
        description: "Señales de Trading Avanzadas",
        pairsTab: "Pares",
        timeTab: "Tiempo",
        signalTab: "Señal",
        pairsTitle: "Pares Más Populares",
        pairsSubtitle: "Elige tu par de trading",
        timeTitle: "Seleccionar Marco Temporal",
        timeSubtitle: "Elige tu período de análisis",
        time5s: { value: "5s", description: "Ultra Rápido" },
        time10s: { value: "10s", description: "Rápido" },
        time15s: { value: "15s", description: "Medio" },
        time30s: { value: "30s", description: "Estable" },
        recommendation: "Recomendado: 30 segundos es óptimo para señales rápidas con buena precisión",
        backToPairs: "Volver a Pares",
        signalTitle: "Procesamiento de Señales",
        signalSubtitle: "Analizando tu par seleccionado",
        liveSignal: "Live Signal",
        generateButton: "Generar Nueva Señal",
        backToTime: "Volver a Tiempo",
        signalLong: "Tu Señal - Long",
        signalShort: "Tu Señal - Short",
        cooldownText: "Nueva Señal en... {time}s",
        languageChanged: "Idioma cambiado a"
    },
    pt: {
        appTitle: "Trade Algo Bot",
        description: "Sinais de Trading Avançados",
        pairsTab: "Pares",
        timeTab: "Tempo",
        signalTab: "Sinal",
        pairsTitle: "Pares Mais Populares",
        pairsSubtitle: "Escolha seu par de trading",
        timeTitle: "Selecionar Período de Tempo",
        timeSubtitle: "Escolha seu período de análise",
        time5s: { value: "5s", description: "Ultra Rápido" },
        time10s: { value: "10s", description: "Rápido" },
        time15s: { value: "15s", description: "Médio" },
        time30s: { value: "30s", description: "Estável" },
        recommendation: "Recomendado: 30 segundos é ideal para sinais rápidos com boa precisão",
        backToPairs: "Voltar aos Pares",
        signalTitle: "Processamento de Sinais",
        signalSubtitle: "Analisando seu par selecionado",
        liveSignal: "Live Signal",
        generateButton: "Gerar Novo Sinal",
        backToTime: "Voltar ao Tempo",
        signalLong: "Seu Sinal - Long",
        signalShort: "Seu Sinal - Short",
        cooldownText: "Novo Sinal em... {time}s",
        languageChanged: "Idioma alterado para"
    },
    fr: {
        appTitle: "Trade Algo Bot",
        description: "Signaux de Trading Avancés",
        pairsTab: "Paires",
        timeTab: "Temps",
        signalTab: "Signal",
        pairsTitle: "Paires les Plus Populaires",
        pairsSubtitle: "Choisissez votre paire de trading",
        timeTitle: "Sélectionner la Période",
        timeSubtitle: "Choisissez votre période d'analyse",
        time5s: { value: "5s", description: "Ultra Rapide" },
        time10s: { value: "10s", description: "Rapide" },
        time15s: { value: "15s", description: "Moyen" },
        time30s: { value: "30s", description: "Stable" },
        recommendation: "Recommandé : 30 secondes est optimal pour des signaux rapides avec une bonne précision",
        backToPairs: "Retour aux Paires",
        signalTitle: "Traitement du Signal",
        signalSubtitle: "Analyse de votre paire sélectionnée",
        liveSignal: "Live Signal",
        generateButton: "Générer un Nouveau Signal",
        backToTime: "Retour au Temps",
        signalLong: "Votre Signal - Long",
        signalShort: "Votre Signal - Short",
        cooldownText: "Nouveau Signal dans... {time}s",
        languageChanged: "Langue changée en"
    }
};

// Variables to store selected pair and time
let selectedPair = '';
let selectedTime = '';

// Function to update text based on selected language
function updateLanguage(lang) {
    const trans = translations[lang];

    // Update header
    document.querySelector('.app-title').textContent = trans.appTitle;
    document.querySelector('.description').textContent = trans.description;

    // Update navigation tabs
    document.querySelector('[data-tab="pairs"]').textContent = trans.pairsTab;
    document.querySelector('[data-tab="time"]').textContent = trans.timeTab;
    document.querySelector('[data-tab="signal"]').textContent = trans.signalTab;

    // Update trading pairs section
    document.querySelector('.trading-pairs .section-title').textContent = trans.pairsTitle;
    document.querySelector('.trading-pairs .section-subtitle').textContent = trans.pairsSubtitle;

    // Update time frame section
    document.querySelector('.time-frame-selection .section-title').textContent = trans.timeTitle;
    document.querySelector('.time-frame-selection .section-subtitle').textContent = trans.timeSubtitle;
    document.querySelector('[data-time="5s"] .time-value').textContent = trans.time5s.value;
    document.querySelector('[data-time="5s"] .time-description').textContent = trans.time5s.description;
    document.querySelector('[data-time="10s"] .time-value').textContent = trans.time10s.value;
    document.querySelector('[data-time="10s"] .time-description').textContent = trans.time10s.description;
    document.querySelector('[data-time="15s"] .time-value').textContent = trans.time15s.value;
    document.querySelector('[data-time="15s"] .time-description').textContent = trans.time15s.description;
    document.querySelector('[data-time="30s"] .time-value').textContent = trans.time30s.value;
    document.querySelector('[data-time="30s"] .time-description').textContent = trans.time30s.description;
    document.querySelector('.recommendation').textContent = trans.recommendation;
    document.querySelector('.btn-back').textContent = trans.backToPairs;

    // Update signal selection section
    document.querySelector('.signal-selection .section-title').textContent = trans.signalTitle;
    document.querySelector('.signal-selection .section-subtitle').textContent = trans.signalSubtitle;
    document.querySelector('.live-signal').childNodes[0].textContent = trans.liveSignal + ' | ';
    document.querySelector('.btn-generate').textContent = trans.generateButton;
    document.querySelector('.btn-back-to-time').textContent = trans.backToTime;

    // Update signal text if already generated
    const signalText = document.getElementById('signal-text');
    if (signalText && signalText.textContent.includes('Long')) {
        signalText.textContent = trans.signalLong;
    } else if (signalText && signalText.textContent.includes('Short')) {
        signalText.textContent = trans.signalShort;
    }

    // Store selected language in localStorage
    localStorage.setItem('language', lang);
}

// Add hover effects to pair items
document.querySelectorAll('.pair-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Pair selection to show time frame and update active tab with animation
document.querySelectorAll('.pair-item').forEach(item => {
    item.addEventListener('click', function() {
        selectedPair = this.getAttribute('data-pair');
        const [pair1, pair2] = selectedPair.split('/');
        document.getElementById('signal-pair1').textContent = pair1;
        document.getElementById('signal-pair2').textContent = pair2;
        document.getElementById('signal-flag1').src = `https://flagcdn.com/16x12/${getFlagCode(pair1)}.png`;
        document.getElementById('signal-flag2').src = `https://flagcdn.com/16x12/${getFlagCode(pair2)}.png`;
        const tradingPairs = document.querySelector('.trading-pairs');
        const timeFrameSelection = document.querySelector('.time-frame-selection');

        tradingPairs.classList.add('hidden');
        setTimeout(() => {
            tradingPairs.style.display = 'none';
            timeFrameSelection.style.display = 'block';
            setTimeout(() => timeFrameSelection.classList.remove('hidden'), 50);
        }, 500);

        document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
        document.querySelector('[data-tab="time"]').classList.add('active');
    });
});

// Time frame selection to show signal and update active tab with animation
document.querySelectorAll('.time-frame-item').forEach(item => {
    item.addEventListener('click', function() {
        selectedTime = this.getAttribute('data-time');
        const timeFrameSelection = document.querySelector('.time-frame-selection');
        const signalSelection = document.querySelector('.signal-selection');
        const signalWindow = document.getElementById('signal-window');
        const generateButton = document.querySelector('.btn-generate');

        timeFrameSelection.classList.add('hidden');
        setTimeout(() => {
            timeFrameSelection.style.display = 'none';
            signalSelection.style.display = 'block';
            setTimeout(() => signalSelection.classList.remove('hidden'), 50);
            document.getElementById('selected-time-text').textContent = selectedTime;

            // Update flags on signal block
            const [pair1, pair2] = selectedPair.split('/');
            document.getElementById('signal-flag1').src = `https://flagcdn.com/16x12/${getFlagCode(pair1)}.png`;
            document.getElementById('signal-flag2').src = `https://flagcdn.com/16x12/${getFlagCode(pair2)}.png`;

            // Simulate signal processing with circular progress
            const circularProgress = document.getElementById('circular-progress');
            const progressText = document.getElementById('progress-text');
            const signalIcon = document.getElementById('signal-icon');
            const signalText = document.getElementById('signal-text');
            let progress = 0;

            generateButton.disabled = true;
            circularProgress.style.opacity = '1';
            signalIcon.style.opacity = '0';
            signalText.style.opacity = '0';

            const interval = setInterval(() => {
                if (progress < 100) {
                    progress += 1;
                    progressText.textContent = `${progress}%`;
                } else {
                    clearInterval(interval);
                    circularProgress.style.opacity = '0';
                    const isLong = Math.random() > 0.5;
                    signalIcon.src = isLong ? 'assets\\icon_up.png' : 'assets\\icon_down.png';
                    signalText.textContent = isLong ? translations[localStorage.getItem('language') || 'en'].signalLong : translations[localStorage.getItem('language') || 'en'].signalShort;
                    signalIcon.className = 'signal-icon ' + (isLong ? 'up' : 'down');
                    setTimeout(() => {
                        signalIcon.style.opacity = '1';
                        signalText.style.opacity = '1';
                    }, 300);

                    startCooldown(generateButton);
                }
            }, 25);
        }, 500);

        document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
        document.querySelector('[data-tab="signal"]').classList.add('active');
    });
});

// Generate New Signal button
document.querySelector('.btn-generate').addEventListener('click', function() {
    if (this.disabled) return;

    const circularProgress = document.getElementById('circular-progress');
    const progressText = document.getElementById('progress-text');
    const signalIcon = document.getElementById('signal-icon');
    const signalText = document.getElementById('signal-text');
    const signalWindow = document.getElementById('signal-window');

    this.disabled = true;
    signalIcon.style.opacity = '0';
    signalText.style.opacity = '0';
    circularProgress.style.opacity = '1';
    progressText.textContent = '0%';

    let progress = 0;
    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            progressText.textContent = `${progress}%`;
        } else {
            clearInterval(interval);
            circularProgress.style.opacity = '0';
            const isLong = Math.random() > 0.5;
            signalIcon.src = isLong ? 'assets\\icon_up.png' : 'assets\\icon_down.png';
            signalText.textContent = isLong ? translations[localStorage.getItem('language') || 'en'].signalLong : translations[localStorage.getItem('language') || 'en'].signalShort;
            signalIcon.className = 'signal-icon ' + (isLong ? 'up' : 'down');
            setTimeout(() => {
                signalIcon.style.opacity = '1';
                signalText.style.opacity = '1';
            }, 300);

            startCooldown(this);
        }
    }, 25);
});

// Function to start cooldown for button
function startCooldown(button) {
    let timeLeft = parseInt(selectedTime); // Начальное время из выбранного интервала
    const lang = localStorage.getItem('language') || 'en';
    const startTime = Date.now(); // Время начала отсчета
    const cooldownKey = 'cooldownState'; // Ключ для localStorage

    // Сохраняем начальное состояние
    localStorage.setItem(cooldownKey, JSON.stringify({
        timeLeft: timeLeft,
        startTime: startTime,
        isActive: true
    }));

    function updateCooldown() {
        const state = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
        if (!state.isActive) return; // Если таймер не активен, выходим

        const elapsed = Math.floor((Date.now() - state.startTime) / 1000); // Прошедшее время в секундах
        timeLeft = Math.max(0, state.timeLeft - elapsed); // Оставшееся время

        if (timeLeft <= 0) {
            clearInterval(cooldownInterval);
            button.disabled = false;
            button.textContent = translations[lang].generateButton;
            localStorage.removeItem(cooldownKey); // Очищаем состояние
        } else {
            button.textContent = translations[lang].cooldownText.replace('{time}', timeLeft);
            localStorage.setItem(cooldownKey, JSON.stringify({
                timeLeft: timeLeft,
                startTime: state.startTime,
                isActive: true
            }));
        }
    }

    // Инициализируем таймер
    updateCooldown(); // Сразу обновляем
    const cooldownInterval = setInterval(updateCooldown, 1000); // Обновляем каждую секунду
}

// Function to get flag code based on currency
function getFlagCode(currency) {
    const flagCodes = {
        'EUR': 'eu',
        'USD': 'us',
        'GBP': 'gb',
        'JPY': 'jp',
        'CHF': 'ch',
        'AUD': 'au'
    };
    return flagCodes[currency] || 'unknown';
}

// Back to Time button
document.querySelector('.btn-back-to-time').addEventListener('click', function() {
    const signalSelection = document.querySelector('.signal-selection');
    const timeFrameSelection = document.querySelector('.time-frame-selection');

    signalSelection.classList.add('hidden');
    setTimeout(() => {
        signalSelection.style.display = 'none';
        timeFrameSelection.style.display = 'block';
        setTimeout(() => timeFrameSelection.classList.remove('hidden'), 50);
    }, 500);

    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-tab="time"]').classList.add('active');
});

// Back to Pairs button
document.querySelector('.btn-back').addEventListener('click', function() {
    const tradingPairs = document.querySelector('.trading-pairs');
    const timeFrameSelection = document.querySelector('.time-frame-selection');

    timeFrameSelection.classList.add('hidden');
    setTimeout(() => {
        timeFrameSelection.style.display = 'none';
        tradingPairs.style.display = 'block';
        setTimeout(() => tradingPairs.classList.remove('hidden'), 50);
    }, 500);

    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-tab="pairs"]').classList.add('active');
    selectedPair = '';
    selectedTime = '';
});

// Notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#17a2b8'};
        color: white;
        padding: 15px;
        border-radius: 8px;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Language selection event listener
document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        updateLanguage(lang);
        const buttonText = document.querySelector('.language-button .button-text');
        const buttonFlagImg = document.querySelector('.language-button .flag img');
        if (buttonText && buttonFlagImg) {
            buttonText.textContent = this.textContent; // Обновляем только текст
            buttonFlagImg.src = this.querySelector('.flag img').src; // Обновляем флаг
            buttonFlagImg.srcset = this.querySelector('.flag img').srcset; // Обновляем srcset
            buttonFlagImg.alt = this.querySelector('.flag img').alt; // Обновляем alt
            console.log('Updated button:', buttonText.textContent, buttonFlagImg.src); // Отладка
        } else {
            console.error('Elements not found:', buttonText, buttonFlagImg);
        }
        document.querySelector('.language-option.active').classList.remove('active');
        this.classList.add('active');
        document.querySelector('.language-menu').style.display = 'none'; // Скрываем меню после выбора
        const trans = translations[lang]; // Получаем переводы для выбранного языка
        showNotification(`${trans.languageChanged} ${this.textContent}`, 'success');
    });
});

// Показываем меню при клике на кнопку
document.querySelector('.language-button').addEventListener('click', function(e) {
    e.preventDefault();
    const menu = document.querySelector('.language-menu');
    if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
});

// Скрываем меню при клике вне его
document.addEventListener('click', function(e) {
    const selector = document.querySelector('.language-selector');
    const menu = document.querySelector('.language-menu');
    if (selector && menu && !selector.contains(e.target)) {
        menu.style.display = 'none';
    }
});

// Initialize language and active tab on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    updateLanguage(savedLang);
    const activeOption = document.querySelector(`.language-option[data-lang="${savedLang}"]`);
    if (activeOption) {
        activeOption.classList.add('active');
    } else {
        console.error('Active option not found for lang:', savedLang);
    }
    const buttonText = document.querySelector('.language-button .button-text');
    const buttonFlagImg = document.querySelector('.language-button .flag img');
    if (buttonText && buttonFlagImg) {
        const activeOption = document.querySelector(`.language-option[data-lang="${savedLang}"]`);
        if (activeOption) {
            buttonText.textContent = activeOption.textContent; // Устанавливаем начальный текст
            buttonFlagImg.src = activeOption.querySelector('.flag img').src; // Устанавливаем начальный флаг
            buttonFlagImg.srcset = activeOption.querySelector('.flag img').srcset;
            buttonFlagImg.alt = activeOption.querySelector('.flag img').alt;
            console.log('Initialized button:', buttonText.textContent, buttonFlagImg.src); // Отладка
        }
    } else {
        console.error('Initialization failed: Elements not found:', buttonText, buttonFlagImg);
    }
    document.querySelector('[data-tab="pairs"]').classList.add('active');

    // Восстановление таймера при загрузке
    const cooldownState = JSON.parse(localStorage.getItem('cooldownKey') || '{}');
    if (cooldownState.isActive && selectedTime) {
        const button = document.querySelector('.btn-generate');
        if (button) {
            startCooldown(button); // Запускаем таймер с восстановленным состоянием
        }
    }
});
