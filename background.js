
function ManegingJsonFil(bookmarks) {
  try {
    const jsonBookmarks = JSON.stringify(bookmarks);
    // const blob = new Blob([jsonBookmarks], { type: 'application/json' });
    // const url = URL.createObjectURL(blob);
    const dataURI = 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonBookmarks);
    chrome.downloads.download({
      url: dataURI,
      filename: 'bookmarks.json'
    });
  } catch (error) {
    console.log(error);
  }
}




function GetCheldrenNode(bookmark) {
  try {
    const bookmarksJSON = [];
    bookmark.forEach((node) => {
      const _bookmark = {
        title: node.title,
        url: node.url || null,
        children: node.children ? GetCheldrenNode(node.children) : null
      }

      bookmarksJSON.push(_bookmark);

    });
    return bookmarksJSON;
  } catch (error) {
    console.log(error);
  }

}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getBookmarks') {
    chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
      const bookmarksJSON = GetCheldrenNode(bookmarkTreeNodes);
      ManegingJsonFil(bookmarksJSON);
      // Now you can use bookmarksJSON as your JSON data
      console.log(bookmarksJSON);
    });
  }
  if (message.action === 'createBookmarks') {
    chrome.bookmarks.create();
  }
});

