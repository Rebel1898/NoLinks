browser.browserAction.onClicked.addListener((tab) => {

  const executing = browser.tabs.executeScript({
    file: "/NoLinks.js",
    allFrames: true,
  });
  executing.then((onExecuted, onError) => {
  });

  function getCurrentChoice(result) {
    if (result.reader == true) {
      var oldId;
      oldId = tab.id;
      browser.tabs.toggleReaderMode(oldId);
    }
    else { }
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("reader");
  getting.then(getCurrentChoice, onError);

})


