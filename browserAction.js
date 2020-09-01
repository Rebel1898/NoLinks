browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.isEnabled({}).then(result => {
    var gettingBadgeText = browser.browserAction.getBadgeText({tabId:tab.id});
    gettingBadgeText.then(BadgeResult =>{
  
      if(BadgeResult == "ON"){
        browser.browserAction.setBadgeText({text: ("").toString(),tabId:tab.id});
        browser.tabs.reload();
        }
      else {
        const executing = browser.tabs.executeScript({
          file: "/NoLinks.js",
          allFrames: true,
        });
        executing.then((updateIcon, onError) => {
          
        });
        browser.browserAction.setBadgeText({text: ("ON").toString(),tabId:tab.id});
        function onError(error) {
          console.log(`Error: ${error}`);
        }
      
        let getting = browser.storage.sync.get("reader");
        getting.then(getCurrentChoice, onError);
      }
  

    });
    
  });
   

  function getCurrentChoice(result) {
  
    if (result.reader == true) {
      var oldId;
      oldId = tab.id;
      browser.tabs.toggleReaderMode(oldId);
    }
    else { }
  }

  
  

})


