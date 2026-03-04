const reloadAllTabsInAllWindows = async () => {
  const tabs = await chrome.tabs.query({});

  for (const tab of tabs) {
    if (typeof tab.id !== "number") continue;
    if (!tab.url || tab.url.startsWith("chrome://") || tab.url.startsWith("edge://")) {
      continue; // Skip browser-internal pages.
    }
    chrome.tabs.reload(tab.id);
  }
};

chrome.action.onClicked.addListener(() => {
  reloadAllTabsInAllWindows();
});
