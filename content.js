
document.addEventListener('DOMContentLoaded', function () {
    const exportBtn = document.getElementById('exportBtn');
    exportBtn.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'getBookmarks' }, (bookmarks) => {});
    });
  });

