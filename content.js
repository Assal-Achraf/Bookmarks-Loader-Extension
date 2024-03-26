function debug(text) {
  const p = document.createElement('p');
  p.textContent = text;
  document.body.appendChild(p);
}
function ImportJsonFile(event) {
  try {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const jsonContents = event.target.result;
      const jsonData = JSON.parse(jsonContents);
      chrome.runtime.sendMessage({ action: 'createBookmarks', jsonData }, (bookmarks) => {});
    };

    reader.readAsText(file);
  } catch (error) {
    debug(error)
  }
}



document.addEventListener('DOMContentLoaded', function () {
  const exportBtn = document.getElementById('exportBtn');
  exportBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'getBookmarks' }, (bookmarks) => { });
  });

  const fileInput = document.getElementById('fileInput');
  const importBtn = document.getElementById('importBtn');
  importBtn.addEventListener('click', () => {
    //  chrome.runtime.sendMessage({ action: 'createBookmarks' }, (bookmarks) => {});
    fileInput.click();

  });

  fileInput.addEventListener('change', ImportJsonFile)

});




