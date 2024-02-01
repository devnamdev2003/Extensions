const Btn = document.getElementById("Btn");
Btn.addEventListener("click", () => {
    chrome.tabs.query({ active: true }, function (tabs) {
        var tab = tabs[0];
        if (tab) {
            execScript(tab);
        } else {
            alert("There are no active tabs")
        }
    })
})

function execScript(tab) {
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id, allFrames: true },
            func: grabImages
        },
    )
}
function grabImages() {
    const invertFilter = 'invert(1)';
    document.body.style.filter = invertFilter;
}