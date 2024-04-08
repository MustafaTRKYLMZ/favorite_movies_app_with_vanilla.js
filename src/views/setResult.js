export const setResult = (classDiv, result) => {
  const resultDiv = document.querySelector(classDiv);
  resultDiv.style.display = "block";
  resultDiv.innerHTML = result;
  setTimeout(() => {
    resultDiv.style.display = "none";
  }, 2000);
};
