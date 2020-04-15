# KaiOS Notes

## Setup
1. Download [Firefox <= v59](https://ftp.mozilla.org/pub/firefox/releases/)
2. Keep Firefox from updating with [policies.json](https://github.com/mozilla/policy-templates) OR setting [preferences](about:preferences) to "never check for updates"
3. Install [ADB](https://developer.android.com/studio/command-line/adb)


## Manifest

## App Icons
https://developer.kaiostech.com/design-guide/launcher-icon
```json
"icons": {
  "56": "/img/ic_Appname_56.png",
  "112": "/img/ic_Appname_112.jpg"
}
```

Resizing with imagemagick
```sh
convert ic_Appname.png -resize 56x56\! ic_Appname_56.png
convert ic_Appname.png -resize 112x112\! ic_Appname_112.png
```

## Borowserlist
Past this config into `.browserlistrc` in the project directory. Using bable requires @bable/preset-env 
```text
last 1 version
kaios
```

## ADB
### List Devices
```sh
adb devices
```
### Enter shell on device
```sh
adb shell
```

#### Get device stats
```sh
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/zoneinfo
free -m
```

#### Watch memory use
```sh
top -m 5 -s rss -d 1
pmap
```

### Log system events
[logcat](https://developer.android.com/studio/command-line/logcat) is equivalent to `journalctl -f` (tailing logs)

from an adb shell run
```sh
logcat
```

### Dump system services
Use [dumpsys](https://developer.android.com/studio/command-line/dumpsys) to dump running services
```sh
sysdump
```

### Trace userspace process
Trace userspace process with `atrace`
```sh
atrace
```


## Docs
- [KaiOS Docs](https://developer.kaiostech.com/)
- [KaiOS Solutions](https://support.kaiostech.com/en/support/solutions)
- [Jio Docs](http://www.jiodevelopers.com/developer-portal/)

## Notes
- [Google Assistant on feature phones](https://developers.google.com/assistant/surfaces/feature-entry-level-phones)


- zip package
```sh
zip -r package.zip src
```


- maybe not wasm but asm.js possible with [emscripten](https://emscripten.org/docs/getting_started/index.html)
https://zserge.com/posts/my-experience-with-asmjs/

## Talks
[Google IO: Next Billion Users](https://www.youtube.com/watch?v=ak6Uj02DTjk)

## Devices
- [Devices](https://www.kaiostech.com/explore/devices/)
- [MTN phones](https://simbatelecom.com/product/mtn-kamunye/)
- [KaiOS USA prepaid phones](https://www.bestbuy.com/site/searchpage.jsp?_dyncharset=UTF-8&browsedCategory=pcmcat158500050014&id=pcat17071&iht=n&ks=960&list=y&qp=operatingsystem_facet%3DOperating%20System~KaiOS&sc=Global&st=categoryid%24pcmcat158500050014&type=page&usc=All%20Categories)