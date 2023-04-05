const btn_start_pip = document.getElementById('start_pip');

btn_start_pip.addEventListener('click', function (ev) {
  chrome.tabs.query({active: true, lastFocusedWindow: true}).then(tab => {
    chrome.scripting
      .executeScript({
        target: {tabId: tab[0].id}, 
        files: ['inject.js']
      })
      .then(() => console.log("script injected!"));

  });
});

