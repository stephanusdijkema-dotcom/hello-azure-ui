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
