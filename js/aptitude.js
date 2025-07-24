// /js/aptitude.js
document.addEventListener("DOMContentLoaded", () => {
  if (typeof questions === "undefined") return;

  const container = document.getElementById("question-container");

  questions.slice(0, 25).forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question-card";

    const qText = document.createElement("h3");
    qText.textContent = `${index + 1}. ${q.question}`;

    const optionList = document.createElement("ul");
    optionList.className = "options";

    q.options.forEach(opt => {
      const li = document.createElement("li");
      li.textContent = opt;
      optionList.appendChild(li);
    });

    const ans = document.createElement("p");
    ans.className = "answer";
    ans.innerHTML = `<strong>Answer:</strong> ${q.answer}`;

    const sol = document.createElement("p");
    sol.className = "solution";
    sol.innerHTML = `<strong>Solution:</strong> ${q.solution}`;

    qDiv.appendChild(qText);
    qDiv.appendChild(optionList);
    qDiv.appendChild(ans);
    qDiv.appendChild(sol);

    container.appendChild(qDiv);
  });
});
