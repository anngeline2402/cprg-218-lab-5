// Toggle Menu
const toggleButton = document.getElementById("toggle");
const nav = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  const expanded = toggleButton.getAttribute("aria-expanded") === "true";
  toggleButton.setAttribute("aria-expanded", !expanded);
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});