function ImportJsonFile(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const jsonContents = event.target.result;
    const jsonData = JSON.parse(jsonContents);
    
    // Process jsonData as needed for your extension
    processJSONData(jsonData);
  };
}


document.addEventListener('DOMContentLoaded', function () {
    const exportBtn = document.getElementById('exportBtn');
    exportBtn.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'getBookmarks' }, (bookmarks) => {});
    });

    const fileInput = document.getElementById('fileInput');
    const importBtn = document.getElementById('importBtn');
    importBtn.addEventListener('click', () => {
      //  chrome.runtime.sendMessage({ action: 'createBookmarks' }, (bookmarks) => {});

      fileInput.click();

    });

    fileInput.addEventListener('change',ImportJsonFile)

  });




