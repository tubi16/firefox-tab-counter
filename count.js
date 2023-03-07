function updateTabCount(x) {
    browser.tabs.query({currentWindow: true}).then(tabs => {
            tabCount = tabs.length + x
            browser.browserAction.setBadgeText(
                {text: tabCount.toString()}
            )
        }
    )
    return
}

browser.tabs.onAttached.addListener(() => {
        updateTabCount(0)
    });
browser.tabs.onCreated.addListener(() => {
        updateTabCount(0)
    });
browser.tabs.onDetached.addListener(() => {
        updateTabCount(-1)
    });
browser.tabs.onRemoved.addListener(() => {
        updateTabCount(-1)
    });

browser.runtime.onInstalled.addListener(() => {
    browser.browserAction.setBadgeText(
        {text: "?"}
    )
    browser.browserAction.setBadgeBackgroundColor(
        {color: "#666666"})
});
