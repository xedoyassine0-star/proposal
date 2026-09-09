// Smooth scroll to the story
function scrollToStory() {

    document
        .getElementById("story")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// When she clicks YES
function sayYes() {

    const celebration =
        document.getElementById("celebration");

    celebration.classList.add("show");

    createHearts();

}


// Create celebration hearts
function createHearts() {

    const symbols = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "✨",
        "💍"
    ];

    for (let i = 0; i < 80; i++) {

        const heart =
            document.createElement("span");

        heart.innerText =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "-40px";

        heart.style.fontSize =
            12 + Math.random() * 25 + "px";

        heart.style.zIndex = "200";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            `fall ${3 + Math.random() * 4}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 7500);

    }

}


// Background floating hearts
function backgroundHearts() {

    const container =
        document.querySelector(".hearts");

    setInterval(() => {

        const heart =
            document.createElement("span");

        heart.innerText = "♥";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            8 + Math.random() * 16 + "px";

        heart.style.animationDuration =
            8 + Math.random() * 8 + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 16000);

    }, 1200);

}


// Start background animation
backgroundHearts();