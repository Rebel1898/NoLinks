# ![Reader View icon](https://gitlab.com/fkohrt/activate-reader-view/-/raw/master/icons/readerModeGrayWhite-48.png) Activate Reader View

by Florian Kohrt

> This add-on adds a button to the toolbar. Clicking on it activates the Reader View even if the icon in the address bar is not present.

[![Get the add-on](https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/addons/files/2015/11/get-the-addon.png)](https://addons.mozilla.org/firefox/addon/activate-reader-view/)

## Description

The Reader View is a feature that strips away clutter like buttons, ads and background images, and changes the page’s text size, contrast and layout for better readability. However it can not always be activated by a click on the address bar icon as not all sites are considered reader-able by Firefox. This add-on adds a button to the toolbar. Clicking on it activates the Reader View even if the icon in the address bar is not present. The ability of the Reader View to make sites readable is not affected by this add-on, some pages might still not work. The button does not toggle the Reader View state. To exit the Reader View use the address bar icon.

![Screenshot of this add-on in use](https://addons.cdn.mozilla.net/user-media/previews/full/174/174544.png)

## Installation for Firefox 56 and below

Users of Firefox 56 and below may use version 0.0.7 of this add-on, which can be obtained from this project’s [Releases](https://gitlab.com/fkohrt/activate-reader-view/-/releases) tab.

## Remarks

**2019-11-11** As a user [pointed out](https://addons.mozilla.org/firefox/addon/activate-reader-view/reviews/1439021/), setting “reader.parse-on-load.force-enabled” to “true” using the [configuration editor](https://support.mozilla.org/kb/about-config-editor-firefox) will force the icon to be visible as well, without the need to install this add-on.

**2019-06-08** I employed [a different way](https://bugzilla.mozilla.org/show_bug.cgi?id=1419520#c13) to toggle the Reader View, version 0.1.1 of this add-on now  works as intended.

**2018-06-09** As the WebExtension API change is still not implemented, this add-on cannot force the Reader View to open. As an alternative, I created a [bookmark version](https://addons.mozilla.org/addon/activate-reader-view-bookmark/?src=external-listing-activatereaderview) of this add-on. One can also manually activate the Reader View by prepending “about:reader?url=” to the current tab’s address.

**2017-11-21** _Starting with Firefox 58 and version 0.1.0 of this add-on, the new WebExtension APIs are being used, making the add-on work in Firefox “Quantum”. However, right now the new API forbids “forcing” the Reader View to open. See <https://bugzil.la/1419520>_ Users of Firefox 57 Nightly and Developer Edition may set “extensions.legacy.enabled” to true using the [configuration editor](https://support.mozilla.org/kb/about-config-editor-firefox). Users of Firefox 56 and below may use [version 0.0.7](https://gitlab.com/fkohrt/activate-reader-view/-/releases/v0.0.7) of this add-on.

**2017-09-07** _As Mozilla discontinues its support for all Firefox add-ons except those using the WebExtensions APIs, this add-on in its current version 0.0.7 will become unusable with Firefox 57 (“Quantum”)._ This widely criticized measure, although regarded as necessary by Mozilla, will lead to many broken add-ons. They may remain unfixed because the required features are not possible with the new APIs or because the developers decide to not fix them (see [this statement](https://web.archive.org/web/20171102174519/http://fasezero.com/lastnotice.html) by Luís Miguel, [this note](https://web.archive.org/web/20180730222635/https://freeshell.de/~kaosmos/index-en.html) by Paolo “Kaosmos” or [the documentation](https://web.archive.org/web/20170812035243/http://maf.mozdev.org/documentation.html) of the now discontinued “Mozilla Archive Format” (alternative: [WebScrapBook](https://addons.mozilla.org/firefox/addon/webscrapbook/))—originally developed for long-time archiving purposes (!)—for example). Other developers may not be aware of the changes and some add-ons have been abandoned a long time ago. The migration of this add-on currently fails due to a lack of required APIs. That could change over time, the corresponding bug can be found here: <http://bugzil.la/1286387>

## Similar add-ons

- [Activate Reader View – Bookmark Version](https://addons.mozilla.org/addon/activate-reader-view-bookmark/?src=external-listing-activatereaderview)
- [Activate Reader Android](https://addons.mozilla.org/android/addon/activate-reader-android/)
- [Open in Reader View](https://addons.mozilla.org/firefox/addon/reader-view/)
- [Automatic Reader View](https://addons.mozilla.org/firefox/addon/automatic-reader-view/)
- [Auto Reader View](https://addons.mozilla.org/firefox/addon/auto-reader-view/)
- [AutoReaderView](https://addons.mozilla.org/firefox/addon/autoreaderview/)
- [Always Reader](https://addons.mozilla.org/android/addon/always-reader/)


## What’s more?
Also have a look at my add-on collection “[Private and Secure Firefox](https://addons.mozilla.org/firefox/collections/12286934/private-and-secure-firefox/)”.