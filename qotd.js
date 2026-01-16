// ===============================
// QUESTION OF THE DAY (DATE-WISE)
// ===============================

const questions = [
    {
        date: "2026-01-13",
        text: "Explain the concept of sustainable yield in forest management."
    },
    {
        date: "2026-01-14",
        text: "Why is mangrove conservation crucial for coastal climate resilience?"
    },
    {
        date: "2026-01-15",
        text: "Which is the only floating national park in the world, and why is it ecologically significant?"
    },
    {
        date: "2026-01-16",
        text: "What is Silvics and how it is diffrenet from Silviculture?"
    }
];

// Sort questions chronologically
questions.sort((a, b) => new Date(a.date) - new Date(b.date));

let currentIndex = 0;

// Get element after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    const qotdText = document.getElementById("qotd-text");

    function getLatestQuestionIndex() {
        const today = new Date().toISOString().split("T")[0];

        for (let i = questions.length - 1; i >= 0; i--) {
            if (questions[i].date <= today) {
                return i;
            }
        }
        return 0;
    }

    function showQuestion() {
        qotdText.textContent =
            "Q. (" + questions[currentIndex].date + ") " +
            questions[currentIndex].text;
    }

    // Expose functions globally for buttons
    window.nextQuestion = function () {
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            showQuestion();
        }
    };

    window.prevQuestion = function () {
        if (currentIndex > 0) {
            currentIndex--;
            showQuestion();
        }
    };

    // Load latest question on page load
    currentIndex = getLatestQuestionIndex();
    showQuestion();
});
// ===============================
// FOUNDER IMAGE MODAL (IG DP STYLE)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("founderModal");

    window.openFounderModal = function () {
        modal.classList.add("active");
    };

    window.closeFounderModal = function () {
        modal.classList.remove("active");
    };
});
