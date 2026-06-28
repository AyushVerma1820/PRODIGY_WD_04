// ===========================
// ACTIVE NAVIGATION
// ===========================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".mid a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ===========================
// TYPING EFFECT
// ===========================

const typingElement = document.querySelector(".left h2");

const text = "A Java Software Developer";

if (typingElement) {
    typingElement.innerHTML = "";
}

let index = 0;

function typeText() {

    if (typingElement && index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 80);
    }
}

typeText();

// ===========================
// PROJECT CARD TILT
// ===========================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 15;
        const rotateY = (x - rect.width / 2) / 15;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    });

});


// ===========================
// SOCIAL ICON ANIMATION
// ===========================

document.querySelectorAll(".bottom a").forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "translateY(-8px) scale(1.2)";
    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "translateY(0px) scale(1)";
    });

});


// ===========================
// BUTTON RIPPLE EFFECT
// ===========================

document.querySelectorAll(".getInTouch,.cv").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter =
            Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.position = "absolute";
        circle.style.borderRadius = "50%";

        circle.style.background =
            "rgba(255,255,255,0.4)";

        circle.style.left =
            e.offsetX - diameter / 2 + "px";

        circle.style.top =
            e.offsetY - diameter / 2 + "px";

        circle.style.pointerEvents = "none";

        circle.style.animation =
            "ripple .6s linear";

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);

    });

});


// ===========================
// SCROLL TO TOP BUTTON
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";
    }
    else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const projects = {

    numberGame:{
        title:"Number Guess Game",

        description:
        "Interactive Java Swing game where the user guesses a random number with score tracking and multiple attempts.",

        tech:[
            "Java",
            "Swing",
            "OOP",
            "Random Class"
        ],

        github:
        "https://github.com/AyushVerma1820/Number-Game"
    },

    pizza:{
        title:"Pizza Mania",

        description:
        "Responsive pizza restaurant website built using HTML, CSS and Bootstrap.",

        tech:[
            "HTML",
            "CSS",
            "Bootstrap"
        ],

        github:
        "https://github.com/AyushVerma1820/Headless-Pizza"
    },
    atm:{
        title:"ATM Interface",

        description:
        "Banking system simulation using Java Swing, JDBC and MySQL.",

        tech:[
            "Java",
            "Swing",
            "JDBC",
            "MySQL"
        ],

        github:
        "https://github.com/AyushVerma1820/PRODIGY_WD_02"
    },
    ttt:{
        title:"Tic-Tac-Toe",

        description:
        "Developed an interactive Tic Tac Toe game with 2-player and AI modes. Implemented game logic, win detection, score tracking, and responsive grid layout using vanilla JavaScript.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        github:
        "https://github.com/AyushVerma1820/ATM-INTERFACE"
    },
    portfolio:{
        title:"Portfolio Website",

        description:
        "Designed and developed a fully responsive personal portfolio using HTML5 and CSS3. Implemented sections with mobile-first approach.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap"
        ],

        github:
        "https://github.com/AyushVerma1820/PRODIGY_WD_03"
    },
    weather:{
        title:"Weather App",

        description:
        "Built a responsive weather application that fetches real-time weather data using OpenWeather API.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript",
            "API"
        ],

        github:
        "https://github.com/AyushVerma1820/PRODIGY_WD_04"
    }
};

const modal =
document.getElementById("projectModal");

document
.querySelectorAll(".project-card")
.forEach(card=>{

    const openProject = () => {

        const project =
        projects[card.dataset.project];

        document.getElementById("modalTitle")
        .innerText = project.title;

        document.getElementById("modalDescription")
        .innerText = project.description;

        let techHTML = "";

        project.tech.forEach(t=>{

            techHTML +=
            `<span class="tech-badge">${t}</span>`;
        });

        document.getElementById("modalTech")
        .innerHTML = techHTML;

        document.getElementById("githubLink")
        .href = project.github;

        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
    };

    card.addEventListener("click", openProject);

    card.addEventListener("keydown", (e) => {

        if (e.key === "Enter" || e.key === " ") {

            e.preventDefault();
            openProject();
        }
    });

});

document
.querySelector(".close-btn")
.addEventListener("click",()=>{

    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
});

window.addEventListener("click",(e)=>{

    if(e.target === modal){

        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    }

});
