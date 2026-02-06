// Valentine's Week Data - Messages and Configuration
const valentineWeek = {
    1: {
        name: "Rose Day",
        date: "Feb 7",
        message: "Like a rose, my love for you blooms more beautifully each day. Every petal represents a moment I cherish with you. You are the most beautiful flower in the garden of my heart.",
        animation: "rose",
        interactive: "Send me a virtual rose!",
        interactiveMessage: "A beautiful rose for my beautiful love! 🌹 Every petal whispers 'I love you'.",
        musicStart: 0
    },
    2: {
        name: "Propose Day",
        date: "Feb 8",
        message: "If I had to propose to you every day for the rest of my life, I would do it with the same excitement as the first time. You are my always and forever.",
        animation: "heart",
        interactive: "Will you be mine forever?",
        interactiveMessage: "Yes! A thousand times yes! 💍 My heart has been yours since the day we met.",
        musicStart: 0
    },
    3: {
        name: "Chocolate Day",
        date: "Feb 9",
        message: "You're sweeter than any chocolate in the world. My life has been so much sweeter since you came into it. Every moment with you is a delicious treat.",
        animation: "choco",
        interactive: "Share virtual chocolate with me!",
        interactiveMessage: "Sharing the sweetest moments with you! 🍫 You make everything sweeter.",
        musicStart: 0
    },
    4: {
        name: "Teddy Day",
        date: "Feb 10",
        message: "Like a teddy bear, I want to be the one you cuddle with when you need comfort. I promise to always be your safe place, your comfort, your home.",
        animation: "teddy",
        interactive: "Give teddy a virtual hug!",
        interactiveMessage: "The warmest hug for my favorite person! 🧸 You're my comfort and peace.",
        musicStart: 0
    },
    5: {
        name: "Promise Day",
        date: "Feb 11",
        message: "I promise to love you more with each passing day. I promise to be there through thick and thin. I promise you forever, because you are my always.",
        animation: "promise",
        interactive: "Make a promise to us",
        interactiveMessage: "I promise to love you more tomorrow than I do today. Forever and always. 💝",
        musicStart: 0
    },
    6: {
        name: "Hug Day",
        date: "Feb 12",
        message: "If I could, I'd hug you right now and never let go. Your hugs make everything better. They're my favorite place in the entire world.",
        animation: "hug",
        interactive: "Send a virtual hug!",
        interactiveMessage: "Sending you the warmest, tightest hug! 🤗 Your hugs heal my soul.",
        musicStart: 0
    },
    7: {
        name: "Kiss Day",
        date: "Feb 13",
        message: "Every kiss with you feels like the first. It's magical, electric, and perfect. I can't wait for all the kisses we'll share for the rest of our lives.",
        animation: "kiss",
        interactive: "Blow me a kiss!",
        interactiveMessage: "Catching your kiss and keeping it in my heart forever! 💋 You're my everything.",
        musicStart: 0
    },
    8: {
        name: "Valentine's Day",
        date: "Feb 14",
        message: "Happy Valentine's Day, my love! Today and every day, I choose you. I love you more than words could ever express. You are my everything.",
        animation: "heart",
        interactive: "I love you more!",
        interactiveMessage: "I love you to the moon and back, forever and always. 💖",
        musicStart: 0
    }
};

// Music URLs (REPLACE THESE WITH YOUR ACTUAL MUSIC LINKS)
const musicTracks = {
    1: "assets/music/day1.mp3",
    2: "assets/music/day2.mp3",
    3: "assets/music/day3.mp3",
    4: "assets/music/day4.mp3",
    5: "assets/music/day5.mp3",
    6: "assets/music/day6.mp3",
    7: "assets/music/day7.mp3",
    8: "assets/music/day8.mp3"
};

// DOM Elements
const setupScreen = document.getElementById('setup-screen');
const appScreen = document.getElementById('app-screen');
const nicknameInput = document.getElementById('nickname');
const startDateInput = document.getElementById('start-date');
const submitBtn = document.getElementById('submit-btn');
const daysCounter = document.getElementById('days-counter');
const greetingText = document.getElementById('greeting-text');
const currentDayBadge = document.getElementById('current-day-badge');
const sideMenu = document.getElementById('side-menu');
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu');
const menuNickname = document.getElementById('menu-nickname');
const menuDays = document.getElementById('menu-days');
const daysList = document.getElementById('days-list');
const dayTitle = document.getElementById('day-title');
const dayDate = document.getElementById('day-date');
const dayProgress = document.getElementById('day-progress');
const currentDayNum = document.getElementById('current-day-num');
const dayContent = document.getElementById('day-content');

const footerNickname = document.getElementById('footer-nickname');
const nextDayCountdown = document.getElementById('next-day-countdown');
const backgroundMusic = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');
const resetAppBtn = document.getElementById('reset-app');

// Image Upload Elements
const userImageInput = document.getElementById('user-image');
const chooseImageBtn = document.getElementById('choose-image-btn');
const removeImageBtn = document.getElementById('remove-image-btn');
const imagePreview = document.getElementById('image-preview');
const userInfo = document.getElementById('user-info');

// Music Player Elements
const musicPlayer = document.getElementById('music-player');
const musicOverlay = document.getElementById('music-overlay');
const closeMusicBtn = document.getElementById('close-music');
const musicTitle = document.getElementById('music-title');
const musicDay = document.getElementById('music-day');
const musicPlayerStatus = document.getElementById('music-player-status');
const musicPlayPauseBtn = document.getElementById('music-play-pause');
const musicPrevBtn = document.getElementById('music-prev');
const musicNextBtn = document.getElementById('music-next');
const volumeSlider = document.getElementById('volume-slider');
const playlistItems = document.getElementById('playlist-items');

// App State
let currentDay = 1;
let currentMusicTrack = 1;
let userNickname = "";
let relationshipStartDate = "";
let userImage = null;
let daysTogether = 0;
let isMusicPlaying = true;
let isMusicPlayerOpen = false;

// Valentine's Day Special Feature
let valentineClickCount = 0;
let valentineEndScreenShown = false;

// Initialize Date Picker max to today
startDateInput.max = new Date().toISOString().split('T')[0];

// ========== CORE FUNCTIONS ==========

// Calculate current Valentine's Week Day
function getCurrentValentineDay() {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // Valentine's Week dates for 2024
    const valentineDates = {
        1: new Date(currentYear, 1, 7),  // Feb 7
        2: new Date(currentYear, 1, 8),  // Feb 8
        3: new Date(currentYear, 1, 9),  // Feb 9
        4: new Date(currentYear, 1, 10), // Feb 10
        5: new Date(currentYear, 1, 11), // Feb 11
        6: new Date(currentYear, 1, 12), // Feb 12
        7: new Date(currentYear, 1, 13), // Feb 13
        8: new Date(currentYear, 1, 14)  // Feb 14
    };
    
    // Find current day
    for (let day = 1; day <= 8; day++) {
        const date = valentineDates[day];
        if (today.toDateString() === date.toDateString()) {
            return day;
        }
    }
    
    // If not in Valentine's week, return day 1 (Rose Day) as default
    return 1;
}

// Calculate days together
function calculateDaysTogether(startDate) {
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = today - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 ? diffDays : 0;
}

// Update days counter
function updateDaysCounter() {
    if (relationshipStartDate) {
        daysTogether = calculateDaysTogether(relationshipStartDate);
        daysCounter.innerHTML = `<i class="fas fa-heartbeat"></i><span>We've been together for ${daysTogether} beautiful days!</span>`;
        menuDays.textContent = `${daysTogether} days together`;
    }
}

// Check if form is valid
function checkFormValidity() {
    const nicknameValid = nicknameInput.value.trim().length > 0;
    const dateValid = startDateInput.value.length > 0;
    
    if (nicknameValid && dateValid) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-lock-open"></i> Enter Valentine Week';
    } else {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-lock"></i> Enter Valentine Week';
    }
}

// Load day content
function loadDayContent(day) {
    // Reset Valentine's Day click counter if switching days
    if (currentDay !== 8 && day === 8) {
        valentineClickCount = 0;
        valentineEndScreenShown = false;
    }
    
    currentDay = day;
    const dayData = valentineWeek[day];
    
    // Update UI
    dayTitle.textContent = dayData.name;
    dayDate.textContent = `${dayData.date}, ${new Date().getFullYear()}`;
    currentDayNum.textContent = day;
    
    // Update progress bar
    const progressPercent = (day / 8) * 100;
    dayProgress.style.width = `${progressPercent}%`;
    
    // Update current day badge
    currentDayBadge.textContent = `Day ${day}`;
    
    // Update menu selection
    updateMenuDaySelection();
    
    
    // Create animation based on day
    let animationHTML = "";
    
    switch(dayData.animation) {
        case "rose":
            animationHTML = `
                <div class="rose-animation">
                    <div style="font-size: 4rem; color: #ff0066; animation: float 3s infinite;">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div style="position: absolute; top: 20px; left: 30px; font-size: 2rem; color: #ff1493; animation: float 4s infinite 0.5s;">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div style="position: absolute; top: 60px; right: 40px; font-size: 3rem; color: #ff69b4; animation: float 3.5s infinite 1s;">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div style="position: absolute; bottom: 30px; left: 50px; font-size: 2.5rem; color: #ff0066; animation: float 4s infinite 1.5s;">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            `;
            break;
        case "heart":
            animationHTML = `
                <div class="heart-animation">
                    <div style="font-size: 5rem; color: #ff0066; animation: heartbeat 1.5s infinite;">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            `;
            break;
        case "choco":
            animationHTML = `
                <div class="choco-animation">
                    <div style="font-size: 4rem; color: #8B4513; margin-bottom: 20px;">
                        <i class="fas fa-candy-cane"></i>
                    </div>
                    <div style="display: flex; justify-content: center; gap: 15px;">
                        <div style="font-size: 3rem; color: #D2691E; animation: bounce 2s infinite;">
                            <i class="fas fa-cookie-bite"></i>
                        </div>
                        <div style="font-size: 3rem; color: #A0522D; animation: bounce 2s infinite 0.3s;">
                            <i class="fas fa-ice-cream"></i>
                        </div>
                        <div style="font-size: 3rem; color: #8B4513; animation: bounce 2s infinite 0.6s;">
                            <i class="fas fa-birthday-cake"></i>
                        </div>
                    </div>
                </div>
            `;
            break;
        case "teddy":
            animationHTML = `
                <div class="teddy-animation">
                    <div style="font-size: 5rem; color: #8B4513; animation: wiggle 3s infinite;">
                        <i class="fas fa-paw"></i>
                    </div>
                </div>
            `;
            break;
        default:
            animationHTML = `
                <div class="heart-animation">
                    <div style="font-size: 5rem; color: #ff0066;">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            `;
    }
    
    // Create day content
    dayContent.innerHTML = `
        <div class="day-message">"${dayData.message}"</div>
        <div class="day-animation">
            ${animationHTML}
        </div>
        <div class="interactive-area">
            <h3 class="interactive-title">${dayData.interactive}</h3>
            <button class="interactive-btn" id="interaction-btn">
                <i class="fas fa-gift"></i> Click Here
            </button>
            <div id="interaction-response" style="margin-top: 15px; font-size: 1.1rem; min-height: 30px;">
                ${day === 8 ? 'Click 10 times for a special surprise! 💖' : 'Click the button above!'}
            </div>
        </div>
    `;
    
    // Add interaction handler
    const interactionBtn = document.getElementById('interaction-btn');
    if (interactionBtn) {
        interactionBtn.addEventListener('click', handleDayInteraction);
    }
    
    // Sync music with current day if music player is not manually changed
    if (day === currentMusicTrack || !isMusicPlayerOpen) {
        loadMusicTrack(day);
    }
}

// Handle day interaction
function handleDayInteraction() {
    const dayData = valentineWeek[currentDay];
    
    // For Valentine's Day (Day 8) - Special 10-click feature
    if (currentDay === 8 && !valentineEndScreenShown) {
        valentineClickCount++;
        
        if (valentineClickCount < 10) {
            // Show countdown messages
            const countdownMessages = [
                "Just a few more taps... ❤️",
                "Almost there, my love! 💕",
                "You're making my heart race! 💓",
                "Just a little more... 🌟",
                "I'm feeling the love! 🥰",
                "This is getting exciting! 💖",
                "Almost ready for something special! ✨",
                "One more... get ready! 💫",
                "Here it comes! Hold on tight! 💘"
            ];
            
            const responseElement = document.getElementById('interaction-response');
            if (responseElement) {
                responseElement.innerHTML = `${countdownMessages[valentineClickCount - 1]} (${10 - valentineClickCount} to go)`;
            }
            
            // Add special visual feedback for Valentine's Day
            const btn = document.getElementById('interaction-btn');
            if (btn) {
                // Create floating hearts on click
                createFloatingHeart();
                
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 150);
            }
            
            // Play special sound if it's the 5th click
            if (valentineClickCount === 5) {
                playSpecialSound();
            }
            
            return;
        } else if (valentineClickCount === 10) {
            // Show the special end screen
            showValentineEndScreen();
            valentineEndScreenShown = true;
            return;
        }
    }
    
    // For regular days (1-7) and after Valentine's end screen
    const responseElement = document.getElementById('interaction-response');
    if (responseElement) {
        responseElement.innerHTML = dayData.interactiveMessage || "You make my heart happy! 💖";
    }
    
    // Add visual feedback
    const btn = document.getElementById('interaction-btn');
    if (btn) {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    }
}

// Function to create floating hearts for Valentine's Day
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = '2rem';
    heart.style.zIndex = '10000';
    heart.style.pointerEvents = 'none';
    
    // Random starting position around the button
    const btn = document.getElementById('interaction-btn');
    const btnRect = btn.getBoundingClientRect();
    
    const startX = btnRect.left + Math.random() * btnRect.width;
    const startY = btnRect.top + Math.random() * btnRect.height;
    
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    
    document.body.appendChild(heart);
    
    // Animate heart floating up
    const animation = heart.animate([
        { transform: 'translateY(0) scale(1)', opacity: 1 },
        { transform: `translateY(-${100 + Math.random() * 100}px) scale(1.5)`, opacity: 0 }
    ], {
        duration: 1500,
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
    });
    
    // Remove heart after animation
    animation.onfinish = () => {
        document.body.removeChild(heart);
    };
}

// Function to play special sound
function playSpecialSound() {
    const audio = new Audio();
    audio.src = "https://assets.mixkit.co/sfx/preview/mixkit-happy-crowd-laugh-464.mp3";
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Sound play prevented:", e));
}

// Function to show Valentine's Day End Screen
function showValentineEndScreen() {
    // Create the end screen overlay
    const endScreen = document.createElement('div');
    endScreen.id = 'valentine-end-screen';
    endScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, #ff0066, #ff1493, #ff69b4);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        text-align: center;
        color: white;
        font-family: 'Poppins', sans-serif;
        overflow-y: auto;
    `;
    
    // Create content for end screen
    endScreen.innerHTML = `
        <div class="end-screen-content" style="max-width: 400px; width: 100%;">
            <div class="end-heart" style="font-size: 5rem; margin-bottom: 20px; animation: heartbeat 1.5s infinite;">
                ❤️
            </div>
            
            <h1 style="font-family: 'Dancing Script', cursive; font-size: 3rem; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                My Forever Valentine!
            </h1>
            
            <div class="end-message" style="font-size: 1.2rem; line-height: 1.6; margin-bottom: 30px; background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; border: 2px solid rgba(255,255,255,0.2);">
                <p style="margin-bottom: 15px;">My dearest ${userNickname || "Love"},</p>
                
                <p style="margin-bottom: 15px; font-style: italic;">
                    "You found all the love I hid for you this week! ❤️"
                </p>
                
                <p style="margin-bottom: 15px;">
                    Every day with you is Valentine's Day in my heart. You make ordinary moments extraordinary and fill my life with joy beyond measure.
                </p>
                
                <p style="margin-bottom: 15px;">
                    Thank you for being my sunshine on cloudy days, my anchor in stormy seas, and my greatest adventure. 
                    ${daysTogether > 0 ? `For ${daysTogether} beautiful days and counting,` : 'Every single day,'}
                    you've been my favorite person.
                </p>
                
                <p style="font-weight: 500; color: #ffebf3;">
                    I love you more than all the stars in the sky, more than all the roses in the world, and more than words could ever say.
                </p>
            </div>
            
            <div class="love-stats" style="display: flex; justify-content: space-around; margin-bottom: 30px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                <div class="stat">
                    <div style="font-size: 2rem;">${daysTogether}</div>
                    <div style="font-size: 0.9rem;">Days Together</div>
                </div>
                <div class="stat">
                    <div style="font-size: 2rem;">8</div>
                    <div style="font-size: 0.9rem;">Valentine Days</div>
                </div>
                <div class="stat">
                    <div style="font-size: 2rem;">∞</div>
                    <div style="font-size: 0.9rem;">Love Remaining</div>
                </div>
            </div>
            
            <div class="final-note" style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 30px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
                <i class="fas fa-heart" style="color: #ffebf3; margin-right: 5px;"></i>
                This love story is just beginning... There are infinite more chapters to write together.
            </div>
            
            <button id="close-end-screen" style="background: rgba(255,255,255,0.2); border: 2px solid rgba(255,255,255,0.3); color: white; padding: 15px 30px; border-radius: 50px; font-size: 1.1rem; cursor: pointer; display: flex; align-items: center; gap: 10px; margin: 0 auto;">
                <i class="fas fa-heart"></i> Forever Yours
            </button>
            
            <div class="credits" style="margin-top: 30px; font-size: 0.8rem; opacity: 0.7;">
                Made with <i class="fas fa-heart" style="color: #ffebf3;"></i> for you, forever
            </div>
        </div>
        
        <style>
            @keyframes floatUp {
                0% { transform: translateY(100px) scale(0.8); opacity: 0; }
                100% { transform: translateY(0) scale(1); opacity: 1; }
            }
            
            .end-screen-content {
                animation: floatUp 1s ease-out;
            }
            
            @keyframes sparkle {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
            }
            
            .end-heart::after {
                content: '✨';
                position: absolute;
                font-size: 1.5rem;
                animation: sparkle 2s infinite;
            }
        </style>
    `;
    
    // Add to document
    document.body.appendChild(endScreen);
    
    // Add floating hearts animation
    createFloatingHeartsAnimation();
    
    // Play celebration music
    playCelebrationMusic();
    
    // Add close button event listener
    document.getElementById('close-end-screen').addEventListener('click', () => {
        // Fade out animation
        endScreen.style.opacity = '0';
        endScreen.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.removeChild(endScreen);
            // Remove floating hearts container
            const heartsContainer = document.getElementById('floating-hearts');
            if (heartsContainer) {
                document.body.removeChild(heartsContainer);
            }
            // Restore normal Valentine's Day interaction
            const responseElement = document.getElementById('interaction-response');
            if (responseElement) {
                responseElement.innerHTML = "I'll love you forever and always! 💕";
            }
        }, 500);
    });
}

// Function to create floating hearts animation for end screen
function createFloatingHeartsAnimation() {
    const heartsContainer = document.createElement('div');
    heartsContainer.style.position = 'fixed';
    heartsContainer.style.top = '0';
    heartsContainer.style.left = '0';
    heartsContainer.style.right = '0';
    heartsContainer.style.bottom = '0';
    heartsContainer.style.pointerEvents = 'none';
    heartsContainer.style.zIndex = '10000';
    heartsContainer.id = 'floating-hearts';
    
    document.body.appendChild(heartsContainer);
    
    // Create multiple floating hearts
    for (let i = 0; i < 50; i++) {
        createFloatingHeartElement(heartsContainer);
    }
}

function createFloatingHeartElement(container) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = `${1 + Math.random() * 2}rem`;
    heart.style.opacity = '0.7';
    
    // Random starting position
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${100 + Math.random() * 50}vh`;
    
    container.appendChild(heart);
    
    // Animate heart floating up
    const duration = 3000 + Math.random() * 4000;
    const delay = Math.random() * 2000;
    
    const animation = heart.animate([
        { 
            transform: `translateY(0) rotate(0deg) scale(${0.5 + Math.random()})`,
            opacity: 0.7 
        },
        { 
            transform: `translateY(-${100 + Math.random() * 100}vh) rotate(${360 + Math.random() * 360}deg) scale(${0.2 + Math.random()})`,
            opacity: 0 
        }
    ], {
        duration: duration,
        delay: delay,
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
    });
    
    // Restart animation when it ends
    animation.onfinish = () => {
        // Reset position
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${100 + Math.random() * 50}vh`;
        
        // Restart animation
        animation.play();
    };
}

// Function to play celebration music
function playCelebrationMusic() {
    const celebrationAudio = new Audio();
    celebrationAudio.src = "https://assets.mixkit.co/music/preview/mixkit-romantic-anniversary-479.mp3";
    celebrationAudio.volume = 0.5;
    celebrationAudio.loop = true;
    
    // Try to play
    celebrationAudio.play().catch(e => {
        console.log("Celebration music autoplay prevented:", e);
        // Play when user interacts with close button
        document.getElementById('close-end-screen').addEventListener('click', () => {
            celebrationAudio.play().catch(e => console.log("Still prevented"));
        });
    });
    
    // Stop when closing
    document.getElementById('close-end-screen').addEventListener('click', () => {
        celebrationAudio.pause();
        celebrationAudio.currentTime = 0;
    });
}

// Update menu day selection
function updateMenuDaySelection() {
    daysList.innerHTML = '';
    
    for (let day = 1; day <= 8; day++) {
        const dayItem = document.createElement('div');
        dayItem.className = `day-menu-item ${day === currentDay ? 'active' : ''} ${day < currentDay ? 'completed' : ''}`;
        dayItem.innerHTML = `
            <span>${valentineWeek[day].name}</span>
            <span class="day-check">${day < currentDay ? '<i class="fas fa-check-circle"></i>' : ''}</span>
        `;
        dayItem.addEventListener('click', () => {
            if (day <= currentDay) {
                currentDay = day;
                loadDayContent(currentDay);
                sideMenu.classList.remove('active');
            }
        });
        daysList.appendChild(dayItem);
    }
}

// Update next day countdown
function updateNextDayCountdown() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    nextDayCountdown.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// ========== IMAGE UPLOAD FUNCTIONS ==========

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Image size should be less than 5MB');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            userImage = e.target.result;
            
            // Update preview
            imagePreview.innerHTML = `<img src="${userImage}" alt="Your photo">`;
            imagePreview.style.border = '3px solid #ff69b4';
            
            // Show remove button
            removeImageBtn.style.display = 'flex';
            
            // Update user info in menu
            updateUserImageInMenu();
        };
        reader.readAsDataURL(file);
    }
}

// Remove image
function removeImage() {
    userImage = null;
    userImageInput.value = '';
    imagePreview.innerHTML = '<i class="fas fa-user-circle"></i><span>No image selected</span>';
    imagePreview.style.border = '3px dashed rgba(255, 255, 255, 0.3)';
    removeImageBtn.style.display = 'none';
    
    // Update user info in menu
    updateUserImageInMenu();
}

// Update user image in menu
function updateUserImageInMenu() {
    if (userImage) {
        userInfo.classList.add('has-image');
        const avatar = userInfo.querySelector('.avatar');
        avatar.style.backgroundImage = `url(${userImage})`;
    } else {
        userInfo.classList.remove('has-image');
        const avatar = userInfo.querySelector('.avatar');
        avatar.style.backgroundImage = '';
    }
}

// ========== MUSIC PLAYER FUNCTIONS ==========

// Initialize Music System
function initMusicSystem() {
    // Set initial volume
    backgroundMusic.volume = 0.7;
    volumeSlider.value = 0.7;
    
    // Load initial track
    loadMusicTrack(currentMusicTrack);
    
    // Create playlist
    createPlaylist();
}

// Load Music Track
function loadMusicTrack(trackNumber) {
    const musicUrl = musicTracks[trackNumber];
    if (!musicUrl) {
        console.warn(`No music URL for track ${trackNumber}`);
        return;
    }
    
    currentMusicTrack = trackNumber;
    const dayData = valentineWeek[trackNumber];
    
    // Update UI
    musicTitle.textContent = `${dayData.name} Theme`;
    musicDay.textContent = `Day ${trackNumber}: ${dayData.name}`;
    
    // Update playlist selection
    updatePlaylistSelection();
    
    // Load and play music
    backgroundMusic.src = musicUrl;
    backgroundMusic.currentTime = dayData.musicStart || 0;
    
    // If music was playing, continue playing
    if (isMusicPlaying) {
        playMusic();
    }
}

// Create Playlist
function createPlaylist() {
    playlistItems.innerHTML = '';
    
    for (let day = 1; day <= 8; day++) {
        const dayData = valentineWeek[day];
        const playlistItem = document.createElement('div');
        playlistItem.className = `playlist-item ${day === currentMusicTrack ? 'active' : ''}`;
        playlistItem.innerHTML = `
            <div class="day-info">
                <div class="day-name">${dayData.name}</div>
                <div class="day-date">${dayData.date}</div>
            </div>
            <div class="play-icon">
                ${day === currentMusicTrack ? '<i class="fas fa-play"></i>' : ''}
            </div>
        `;
        
        playlistItem.addEventListener('click', () => {
            loadMusicTrack(day);
        });
        
        playlistItems.appendChild(playlistItem);
    }
}

// Update Playlist Selection
function updatePlaylistSelection() {
    const items = playlistItems.querySelectorAll('.playlist-item');
    items.forEach((item, index) => {
        const day = index + 1;
        if (day === currentMusicTrack) {
            item.classList.add('active');
            item.querySelector('.play-icon').innerHTML = '<i class="fas fa-play"></i>';
        } else {
            item.classList.remove('active');
            item.querySelector('.play-icon').innerHTML = '';
        }
    });
}

// Toggle Music Player
function toggleMusicPlayer() {
    isMusicPlayerOpen = !isMusicPlayerOpen;
    
    if (isMusicPlayerOpen) {
        // Show music player
        musicOverlay.classList.add('active');
        musicPlayer.classList.add('active');
    } else {
        // Hide music player
        musicPlayer.classList.remove('active');
        setTimeout(() => {
            musicOverlay.classList.remove('active');
        }, 400);
    }
}

// Play Music
function playMusic() {
    backgroundMusic.play().then(() => {
        isMusicPlaying = true;
        const icon = musicPlayPauseBtn.querySelector('i');
        icon.className = 'fas fa-pause';
        musicPlayerStatus.textContent = 'Playing';
        
        // Update header music button
        const musicToggleIcon = musicToggle.querySelector('i');
        musicToggleIcon.style.color = '#ffebf3';
    }).catch(e => {
        console.log("Autoplay prevented:", e);
        isMusicPlaying = false;
        const icon = musicPlayPauseBtn.querySelector('i');
        icon.className = 'fas fa-play';
        musicPlayerStatus.textContent = 'Tap to play';
    });
}

// Pause Music
function pauseMusic() {
    backgroundMusic.pause();
    isMusicPlaying = false;
    const icon = musicPlayPauseBtn.querySelector('i');
    icon.className = 'fas fa-play';
    musicPlayerStatus.textContent = 'Paused';
    
    // Update header music button
    const musicToggleIcon = musicToggle.querySelector('i');
    musicToggleIcon.style.color = '';
}

// ========== INITIALIZE APP ==========

function initApp() {
    // Get current Valentine's day
    currentDay = getCurrentValentineDay();
    currentMusicTrack = currentDay;
    
    // Load current day content
    loadDayContent(currentDay);
    
    // Initialize music system
    initMusicSystem();
    
    // Update countdown every second
    setInterval(updateNextDayCountdown, 1000);
    
    // Update days together every minute
    setInterval(updateDaysCounter, 60000);
}

// ========== EVENT LISTENERS ==========

// Form validation
nicknameInput.addEventListener('input', checkFormValidity);
startDateInput.addEventListener('change', function() {
    checkFormValidity();
    updateDaysCounter();
});

// Image upload
chooseImageBtn.addEventListener('click', () => {
    userImageInput.click();
});

userImageInput.addEventListener('change', handleImageUpload);

removeImageBtn.addEventListener('click', removeImage);

// Submit button
submitBtn.addEventListener('click', function() {
    userNickname = nicknameInput.value.trim();
    relationshipStartDate = startDateInput.value;
    
    // Save to localStorage
    localStorage.setItem('valentineNickname', userNickname);
    localStorage.setItem('valentineStartDate', relationshipStartDate);
    
    if (userImage) {
        localStorage.setItem('valentineUserImage', userImage);
    }
    
    // Update UI
    greetingText.textContent = `Hello, ${userNickname}!`;
    menuNickname.textContent = userNickname;
    footerNickname.textContent = userNickname;
    
    // Switch screens
    setupScreen.classList.remove('active');
    appScreen.classList.add('active');
    
    // Initialize app
    initApp();
    
    // Try to play music after a short delay
    setTimeout(() => {
        if (isMusicPlaying) {
            playMusic();
        }
    }, 1000);
});

// Menu
menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});


// Music player
musicToggle.addEventListener('click', toggleMusicPlayer);

closeMusicBtn.addEventListener('click', toggleMusicPlayer);

musicOverlay.addEventListener('click', toggleMusicPlayer);

musicPlayPauseBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

musicPrevBtn.addEventListener('click', () => {
    if (currentMusicTrack > 1) {
        loadMusicTrack(currentMusicTrack - 1);
    }
});

musicNextBtn.addEventListener('click', () => {
    if (currentMusicTrack < 8) {
        loadMusicTrack(currentMusicTrack + 1);
    }
});

// Volume control
volumeSlider.addEventListener('input', (e) => {
    backgroundMusic.volume = parseFloat(e.target.value);
});

// Music events
backgroundMusic.addEventListener('ended', () => {
    // Auto-play next track
    if (currentMusicTrack < 8) {
        loadMusicTrack(currentMusicTrack + 1);
    } else {
        // Loop back to first track
        loadMusicTrack(1);
    }
});

// Reset app
resetAppBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset the experience? This will clear all your data including your photo.")) {
        localStorage.clear();
        location.reload();
    }
});

// Load saved data on page load
window.addEventListener('load', function() {
    // Load saved nickname
    const savedNickname = localStorage.getItem('valentineNickname');
    if (savedNickname) {
        nicknameInput.value = savedNickname;
    }
    
    // Load saved date
    const savedDate = localStorage.getItem('valentineStartDate');
    if (savedDate) {
        startDateInput.value = savedDate;
        updateDaysCounter();
    }
    
    // Load saved image
    const savedImage = localStorage.getItem('valentineUserImage');
    if (savedImage) {
        userImage = savedImage;
        imagePreview.innerHTML = `<img src="${savedImage}" alt="Your photo">`;
        imagePreview.style.border = '3px solid #ff69b4';
        removeImageBtn.style.display = 'flex';
    }
    
    // Check form validity
    checkFormValidity();
});

