// ===== Say hi button =====
const btn = document.getElementById('toggle');
const status = document.getElementById('status');
let showing = false;

function formatTime(d) {
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  }).format(d);
}

if (btn) {
  btn.addEventListener('click', () => {
    showing = !showing;
    status.textContent = showing
      ? `👋 Hello from Azure! (updated at ${formatTime(new Date())})`
      : '';
    btn.textContent = showing ? 'Clear' : 'Say hi';
  });
}

// ===== Call API (GET) =====
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

// ===== Send data to API (POST) =====
const echoForm = document.getElementById('echoForm');
const echoInput = document.getElementById('echoInput');
const echoResult = document.getElementById('echoResult');

if (echoForm) {
  echoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    echoResult.textContent = 'Posting...';
    try {
      const res = await fetch('/api/echo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: echoInput.value })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      echoResult.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      echoResult.textContent = 'POST failed: ' + err.message;
    }
  });
}
