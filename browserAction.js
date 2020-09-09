browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.isEnabled({}).then(result => {
    browser.browserAction.setBadgeBackgroundColor({
      color: "green",
      tabId: tab.id
    });
    var gettingBadgeText = browser.browserAction.getBadgeText({ tabId: tab.id });
    gettingBadgeText.then(BadgeResult => {
      if (BadgeResult == "ON") {
        browser.browserAction.setBadgeText({ text: ("").toString(), tabId: tab.id });
        let getting = browser.storage.sync.get("reader");
        getting.then(result => {
          if (result.reader == true) { browser.tabs.goBack(tab.id); }
          else { browser.tabs.reload(tab.id); }
        }, onError);
      }
      else {
        function onExecuted() {
          function getCurrentChoice(result) {
            if (result.reader == true) {
              var oldId = tab.id;
              var promisereader = browser.tabs.toggleReaderMode(oldId);
              promisereader.then(result => {
                setTimeout(function () {
                  browser.browserAction.setBadgeBackgroundColor({
                    color: "green",
                    tabId: tab.id
                  });
                  browser.browserAction.setBadgeText({ text: ("ON").toString(), tabId: oldId });
                }, 1000);
              })
                .catch(onError);
            }
            else { }
          }
          browser.browserAction.setBadgeText({ text: ("ON").toString(), tabId: tab.id });
          let getting = browser.storage.sync.get("reader");
          getting.then(getCurrentChoice, onError);
        }
        function onError(error) {
          console.log("Error:" + error);
        }
        const executing = browser.tabs.executeScript({
          file: "/NoLinks.js",
          allFrames: true,
        });
        executing.then(onExecuted, onError)
      }
    });
  });
})