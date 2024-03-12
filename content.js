chrome.runtime.sendMessage({ action: 'getBookmarks' }, (bookmarks) => {
    console.log(2,"action has beensent");
    const ul = document.getElementById('bookmarksList');
    // bookmarks.forEach((bookmark) => {
    //     const li = document.createElement('li');
    //     li.textContent = bookmark.title;
    //     ul.appendChild(li);
    // });
});

