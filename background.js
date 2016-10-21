chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
        if (localStorage.getItem(text)) {
            suggest([
                { content: localStorage.getItem(text), description:  localStorage.getItem(text)}
            ]);
        }
});

function navigate(url) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.update(tabs[0].id, { url: url });
    });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
    text = localStorage.getItem(text)
    navigate(text)
});
