const form = document.getElementById('bmiForm');
const result = document.getElementById('result');

function getCategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', className: 'category-underweight' };
  if (bmi < 25) return { label: 'Normal weight', className: 'category-normal' };
  if (bmi < 30) return { label: 'Overweight', className: 'category-overweight' };
  return { label: 'Obese', className: 'category-obese' };
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const heightCm = parseFloat(document.getElementById('height').value);
  const weightKg = parseFloat(document.getElementById('weight').value);

  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
    result.className = 'error';
    result.textContent = 'Please enter a valid height and weight.';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const category = getCategory(bmi);
  const status = bmi >= 25
    ? { label: 'You are overweight', className: 'category-overweight' }
    : { label: 'Your weight is good', className: 'category-normal' };

  result.className = 'result visible';
  result.innerHTML = `
    <div class="bmi-value">${bmi.toFixed(1)}</div>
    <div class="bmi-category ${category.className}">${category.label}</div>
    <div class="bmi-status ${status.className}">${status.label}</div>
  `;
});
