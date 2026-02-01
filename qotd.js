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
{   date: "2026-02-01",
    text: "What is carbon sequestration? Explain the role of forests as carbon sinks."
},
{
    date: "2026-02-02",
    text: "Define agroforestry. Discuss its significance in climate-resilient agriculture."
},
{
    date: "2026-02-03",
    text: "What is biodiversity offsetting? Critically examine its effectiveness."
},
{
    date: "2026-02-04",
    text: "Explain the concept of ecological restoration with reference to degraded forest lands."
},
{
    date: "2026-02-05",
    text: "What are invasive alien species (IAS)? Discuss their ecological impacts in India."
},
{
    date: "2026-02-06",
    text: "Discuss the objectives and limitations of the Forest Conservation Act, 1980."
},
{
    date: "2026-02-07",
    text: "What is REDD+? Examine India’s approach towards REDD+ implementation."
},
{
    date: "2026-02-08",
    text: "Explain the concept of wildlife corridors and their importance in conservation."
},
{
    date: "2026-02-09",
    text: "What is the difference between ex-situ and in-situ conservation? Give examples."
},
{
    date: "2026-02-10",
    text: "Discuss the role of mangroves in coastal protection and climate change mitigation."
},
{
    date: "2026-02-11",
    text: "What is ecosystem services approach? Explain its relevance in forest management."
},
{
    date: "2026-02-12",
    text: "Explain the causes and consequences of forest fragmentation."
},
{
    date: "2026-02-13",
    text: "What are Biosphere Reserves? How are they different from National Parks?"
},
{
    date: "2026-02-14",
    text: "Discuss the impact of climate change on forest phenology and productivity."
},
{
    date: "2026-02-15",
    text: "What is community forestry? Evaluate its role in sustainable forest management."
},
{
    date: "2026-02-16",
    text: "Explain the concept of landscape-level conservation with suitable examples."
},
{
    date: "2026-02-17",
    text: "What is the National Forest Policy, 1988? Discuss its major objectives."
},
{
    date: "2026-02-18",
    text: "Discuss the importance of forest fire management in the context of climate change."
},
{
    date: "2026-02-19",
    text: "What are non-timber forest products (NTFPs)? Explain their socio-economic importance."
},
{
    date: "2026-02-20",
    text: "Explain the role of forests in achieving India’s Nationally Determined Contributions (NDCs)."
},
{
    date: "2026-02-21",
    text: "What is sustainable forest management (SFM)? Discuss its key principles."
},
{
    date: "2026-02-22",
    text: "Discuss the ecological significance of wetlands with special reference to Ramsar sites."
},
{
    date: "2026-02-23",
    text: "What is environmental impact assessment (EIA)? Examine its relevance for forestry projects."
},
{
    date: "2026-02-24",
    text: "Explain the concept of green accounting and its relevance to environmental governance."
},
{
    date: "2026-02-25",
    text: "What are sacred groves? Discuss their role in biodiversity conservation."
},
{
    date: "2026-02-26",
    text: "Discuss the challenges in conservation of endangered forest-dwelling species in India."
},
{
    date: "2026-02-27",
    text: "What is climate-smart forestry? Explain its significance in the Indian context."
},
{
    date: "2026-02-28",
    text: "Explain the interlinkages between forests, livelihoods, and sustainable development."
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
// ===== HAMBURGER MENU TOGGLE =====
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}

/* Optional: close menu when clicking a link (mobile UX) */
document.addEventListener("click", function (e) {
    const menu = document.getElementById("navMenu");
    const burger = document.querySelector(".hamburger");

    if (!menu || !burger) return;

    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove("active");
    }
});
