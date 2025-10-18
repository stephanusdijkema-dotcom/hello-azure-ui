const btn = document.getElementById('toggle');
const status = document.getElementById('status');
let showing = false;

function formatTime(d) {
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric', minute: '2-digit', second: '2-digit'
  }).format(d);
}

btn.addEventListener('click', () => {
  showing = !showing;
  status.textContent = showing
    ? `👋 Hello from Azure! (updated at ${formatTime(new Date())})`
    : '';
  btn.textContent = showing ? 'Clear' : 'Say hi';
});
const callBtn = document.getElementById('callApi');
const apiResult = document.getElementById('apiResult');

if (callBtn) {
  callBtn.addEventListener('click', async () => {
    apiResult.textContent = 'Calling API...';
    try {
      const res = await fetch('/api/hello?name=Azure');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      apiResult.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      apiResult.textContent = 'API call failed: ' + err.message;
    }
  });
}
