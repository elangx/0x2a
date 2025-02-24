// Saves options to chrome.storage
const saveOptions = () => {
    const googleCtx = document.getElementById('google_cse_ctx').value;
    chrome.storage.sync.set(
      { googleCtx: googleCtx},
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.'+googleCtx;
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.sync.get(
      ['googleCseCx']).then((result)=>{
        document.getElementById('google_cse_ctx').value = result.googleCtx
      })
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);