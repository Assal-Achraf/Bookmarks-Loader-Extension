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

function GetCheldrenNode(bookmark,index) {
  console.log("enter",index);
  console.log("bookmark id",bookmark.id);
  if (!bookmark.hasOwnProperty("url")) {
    chrome.bookmarks.getChildren(bookmark.id,function (_bookmarks) {
      console.log(index,_bookmarks);
    });
  } 
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getBookmarks') {
    // chrome.bookmarks.getChildren(
    //   "2",
    //   function(bookmarks) {
    //     sendResponse(bookmarks); 
    //   }
    // ) 
    //   return true; 

    // =======================================

    // chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
    //          console.log(bookmarkTreeNodes);

    //        });

    // ===========================================

    chrome.bookmarks.get(["0","1","2"],function (bookmarks) {
      console.log(bookmarks);
      bookmarks.forEach((bookmark,index)=>{
        GetCheldrenNode(bookmark,index)
      });
    })

  }
});

