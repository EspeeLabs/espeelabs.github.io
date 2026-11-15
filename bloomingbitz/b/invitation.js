"use strict";
// Only local fragment processing. No decoding of personal messages or network requests.
const copy = document.getElementById("copy");
const status = document.getElementById("status");
const code = document.getElementById("code");
const codeLabel = document.getElementById("code-label");
let wrapped = "";
function readInvitation() {
  const token = window.location.hash.slice(1);
  const valid = token.length > 0 && token.length <= 714 && /^[A-Za-z0-9_-]+$/.test(token);
  wrapped = valid ? "BBP1:" + token : "";
  copy.disabled = !valid;
  code.value = "";
  code.hidden = true;
  codeLabel.hidden = true;
  status.textContent = valid
    ? "Your code is ready to copy. BloomingBitz will validate it when opened."
    : "This invitation is missing or damaged. Return to the original message and copy the full link, or ask the sender to share it again.";
}
copy.addEventListener("click", async () => {
  const value = wrapped;
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
    if (wrapped === value) status.textContent = "Bloom Code copied. Paste it into Discover the Message in BloomingBitz.";
  } catch {
    if (wrapped !== value) return;
    code.value = value;
    code.hidden = false;
    codeLabel.hidden = false;
    code.focus();
    code.select();
    status.textContent = "Select and copy the Bloom Code below.";
  }
});
window.addEventListener("hashchange", readInvitation);
readInvitation();
