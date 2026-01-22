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
        text: "What is Silvics and how it is different from Silviculture?"
    },
     {
        date: "2026-01-17",
        text: "What is Carbon Credit? How does it work?"
    },
    {
    date: "2026-01-17",
    text: "Differentiate between natural regeneration and artificial regeneration in forestry."
},
{
    date: "2026-01-18",
    text: "What is the concept of sustained yield and why is it important in forest management?"
},
{
    date: "2026-01-19",
    text: "Explain the difference between reserved forests, protected forests, and unclassed forests."
},
{
    date: "2026-01-20",
    text: "What is agroforestry? Discuss its ecological and economic benefits."
},
{
    date: "2026-01-21",
    text: "What is forest fragmentation and how does it affect biodiversity?"
},
{
    date: "2026-01-22",
    text: "Explain crown density and its significance in forest survey and assessment."
},
{
    date: "2026-01-23",
    text: "What are invasive alien species? Mention their impact on Indian forests."
},
{
    date: "2026-01-24",
    text: "Define carbon sequestration and explain the role of forests in climate change mitigation."
},
{
    date: "2026-01-25",
    text: "What is social forestry? How is it different from farm forestry?"
},
{
    date: "2026-01-26",
    text: "Explain the concept of working plan in forestry."
},
{
    date: "2026-01-27",
    text: "What is forest fire? Distinguish between surface fire, crown fire, and ground fire."
},
{
    date: "2026-01-28",
    text: "Define biodiversity hotspots. Why are they important for conservation planning?"
},
{
    date: "2026-01-29",
    text: "What is the importance of mangrove forests in coastal ecosystem stability?"
},
{
    date: "2026-01-30",
    text: "Explain the term growing stock and its relevance in forest inventory."
},
{
    date: "2026-01-31",
    text: "What is joint forest management (JFM)? Discuss its objectives."
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


