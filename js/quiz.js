window.onload = function() {
    show(0);
};

// Making objects in array
let questions = [{
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "What is software?",
        answer: "Instructions that tell the hardware what to do",
        options: [
            "Instructions that tell the hardware what to do",
            "Flexible parts of a computer case",
            "Clothing designed to be worn by computer users",
            "Any part of the computer that has a physical structure"
        ]
    },
    {
        id: 5,
        question: "The computer’s main circuit board is called a ________.",
        answer: "motherboard",
        options: [
            "motherboard",
            "Bluetooth card",
            "hard drive",
            "monitor"
        ]
    },
    {
        id: 6,
        question: "RAM is like a computer’s ________, while a hard drive is like a computer’s ________.",
        answer: "short-term memory/long-term memory",
        options: [
            "long-term memory/short-term memory",
            "short-term memory/long-term memory",
            "nervous system/brain",
            "brain/nervous system"
        ]
    },
    {
        id: 7,
        question: "What is an Ethernet port used for?",
        answer: "Connecting to the Internet",
        options: [
            "Connecting to the Internet",
            "Connecting smartphones and other peripherals",
            "Providing power to the computer",
            "None of these"
        ]
    },
    {
        id: 8,
        question: "What is Wi-Fi?",
        answer: "A type of wireless network",
        options: [
            "A type of wireless network",
            "A type of software that scans for viruses",
            "A type of sound card",
            "An extra-wide computer case used by servers"
        ]
    },
    {
        id: 9,
        question: "Windows, macOS, and Linux are examples of ________.",
        answer: "operating systems",
        options: [
            "Internet service providers",
            "operating systems",
            "web browsers",
            "mobile devices"
        ]
    },
    {
        id: 10,
        question: `What does "GUI" stand for?`,
        answer: "Graphical user interface",
        options: [
            "Graphical user interface",
            "Gateway using Intel",
            "Global user index",
            "None of these"
        ]
    }
];
let questionCount = 0;
let question = document.getElementById("q-display");
function show(count) {
    
    // question.innerHTML = "<h2>" + questions[questionCount].question + "</h2>";
    // Now using ES6 method todo same thing
    // Option is also an array
    question.innerHTML = `<h2>Q${count+1}.${questions[count].question}</h2>
    <ul class="option-list">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
 </ul>
 `;
    //  Now enabling toggle function for options
    toggleOption();
}

function toggleOption() {
    let selectOption = document.querySelectorAll("li.option");
    for (let i = 0; i < selectOption.length; i++) {
        selectOption[i].onclick = function() {
            for (let x = 0; x < selectOption.length; x++) {
                if (selectOption[x].classList.contains("active-option")) {
                    selectOption[x].classList.remove("active-option");
                }

            }
            selectOption[i].classList.add("active-option")
        };

    };
};
let points = 0;

function next() {
    if (questionCount == questions.length - 1) {
        sessionStorage.setItem("time", `${minutes} min and ${seconds} sec `)
        clearInterval(mytime);
        window.location.replace("end.html")

    }
    // Now for checking the right answer
    let right = document.querySelector(".active-option").innerHTML;
    if (right === questions[questionCount].answer) {
        points += 10;
        sessionStorage.setItem("Points", points)
    }
    questionCount++;
    show(questionCount);
}