// 검사 체크
const inputCont = document.querySelector(".input-container");
const btnCheck = inputCont.querySelector(".btn-check");

function ruleCalc () {
  const skillInput = inputCont.querySelector("#Skill");
  const timeInput = inputCont.querySelector("#Time");
  const errorMsg = inputCont.querySelector(".input-error");
  const resultCont = document.querySelector(".result-container");

  // 유효성 검사
  if (skillInput.value && timeInput.value) {
    const skillText = resultCont.querySelector(".skill");
    const timeText = resultCont.querySelector(".time");

    skillText.textContent = skillInput.value;
    timeText.textContent = Math.round(100000/parseInt(timeInput.value));
    skillInput.value = "";
    timeInput.value = "";
    resultCont.style.display = "block";
    errorMsg.style.display = "none";
  } else if (resultCont.style.display === "") {
    // 입력값을 없는 경우 처리
    errorMsg.style.display = "block";
  }
}

const modal = document.querySelector(".modal-background");

document.querySelector(".btn-go").addEventListener("click", () => {
  modal.style.display = "block";
})

btnCheck.addEventListener("click", ruleCalc);