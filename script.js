//your JS code here. If required.

const output = document.getElementById("output");

// Display loading row initially
output.innerHTML = `
  <tr>
    <td colspan="2">Loading...</td>
  </tr>
`;

function createPromise() {
  const delay = Math.floor(Math.random() * 2000) + 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay / 1000);
    }, delay);
  });
}

const startTime = performance.now();

Promise.all([
  createPromise(),
  createPromise(),
  createPromise()
]).then((results) => {
  const totalTime = (performance.now() - startTime) / 1000;

  output.innerHTML = "";

  results.forEach((time, index) => {
    output.innerHTML += `
      <tr>
        <td>Promise ${index + 1}</td>
        <td>${time.toFixed(3)}</td>
      </tr>
    `;
  });

  output.innerHTML += `
    <tr>
      <td><strong>Total</strong></td>
      <td><strong>${totalTime.toFixed(3)}</strong></td>
    </tr>
  `;
});
