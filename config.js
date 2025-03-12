// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "LeiLani",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will you be???",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💐', '🌹', '🎀', '👾'],  // Heart emojis
        jellys : ['🪼', '👾']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "do you like cats",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No(i think you meant yes😞)",                                               // Text for "No" button
            secretAnswer: "(yes goofy)"           // Secret hover message
        },
        second: {
            text: "do you have two legs(i think you do)",                          // For the love meter
            startText: "Uhmmmm maybe",                                   // Text before the percentage
            nextBtn: "Next"                                         // Text for the next button
        },
        third: {
            text: "Can I take you out to the spring fling? 💐(pls say yes)", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No(☹️)"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Yes i for sure do 🗣‼️",  // Shows when they go past 5000%
        high: "I think so 😛",              // Shows when they go past 1000%
        normal: "Mmmmmmmm idk🤨"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yipeeeee! Idek how to dance gang! 🎉🐈‍⬛️🖤",
        message: "Ik we've been up and down all day but hopefully you can enjoy urself <3",
        emojis: "🪼💗🎁💐👻💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#34c3eb",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#3deb34",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#f0b7b3",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#000000"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "12s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "65px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "1s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.7         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dp0ma3kde/video/upload/v1739470948/Jeanette_-_El_Muchacho_de_los_Ojos_Tristes_dezjtm.mp3", // Music streaming URL
        startText: "🎵 Play",        // Button text to start music 
        volume: 1.0                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
