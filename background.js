// chrome.runtime.onInstalled.addListener(function() {
//     chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
//       console.log(bookmarkTreeNodes);
//       // You can process the bookmarkTreeNodes here
      
//     });
//   });

// =================================

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.bookmarks.getChildren(
//     "2",
//     function(bookmarkTreeNodes) {
//       console.log(bookmarkTreeNodes);
//       // You can process the bookmarkTreeNodes here
      
//     }
//   )    
// });

// =======================================

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getBookmarks') {
    chrome.bookmarks.getChildren(
      "2",
      function(bookmarks) {
        sendResponse(bookmarks); 
      }
    ) 
      return true; 
  }
});

