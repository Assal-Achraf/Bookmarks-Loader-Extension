const ul = document.getElementById('bookmarksList');

chrome.runtime.onInstalled.addListener(function() {
    chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
      console.log(bookmarkTreeNodes);
      // You can process the bookmarkTreeNodes here
      
    });
  });