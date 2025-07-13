function incrementProgress() {
  const progressEl = document.getElementById('courseProgress');
  const percentText = document.getElementById('progressPercent');

  let current = parseInt(progressEl.value, 10);
  if (current < 100) {
    current += 10;
    progressEl.value = current;
    percentText.textContent = `${current}%`;
  } else {
    alert("Course already completed!");
  }
}
