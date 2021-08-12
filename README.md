<p align="center">
    <a href="https://github.com/PryosCode/ProxerExport/tags"><img src="https://img.shields.io/github/v/release/PryosCode/ProxerExport?label=Version" alt="Version"></a>
    <a href="https://github.com/PryosCode/ProxerExport/actions"><img alt="Release" src="https://github.com/PryosCode/ProxerExport/actions/workflows/release.yml/badge.svg"></a>
    <a href="https://github.com/PryosCode/ProxerExport/blob/master/LICENSE"><img src="https://img.shields.io/github/license/PryosCode/ProxerExport?label=License" alt="License"></a>
</p>

# <a href="https://proxer.me"><img src="https://github.com/PryosCode/ProxerExport/raw/master/images/logo.png" alt="Proxer"></a> ProxerExport

Export your [Proxer](https://proxer.me)-Lists ([Anime](https://proxer.me/ucp?s=anime), [Manga](https://proxer.me/ucp?s=manga) and [Novel](https://proxer.me/ucp?s=novel)) to a JSON-File.

## Installation

You just have to install [Tampermonkey](https://www.tampermonkey.net) or an other Userscript-Manager for your browser.

After that you [open this link](https://github.com/PryosCode/ProxerExport/raw/master/ProxerExport.user.js) and click on install.

## Usage

[![Anime](https://github.com/PryosCode/ProxerExport/raw/master/images/export.png)](https://proxer.me/ucp?s=anime)

## Example

```
animelist-[2020-04-17_22-26-48].json
```

```json
{
  "geschaut": [
    {
      "name": "One Punch Man",
      "state": "12 / 12",
      "type": "Animeserie",
      "url": "https://proxer.me/info/11825#top"
    },
    {
      "name": "Overlord",
      "state": "13 / 13",
      "type": "Animeserie",
      "url": "https://proxer.me/info/13164#top"
    }
  ],
  "am-schauen": [
    {
      "name": "One Punch Man 2nd Season",
      "state": "6 / 12",
      "type": "Animeserie",
      "url": "https://proxer.me/info/17943#top"
    }
  ],
  "wird-noch-geschaut": [
    {
      "name": "Overlord II",
      "state": "0 / 13",
      "type": "Animeserie",
      "url": "https://proxer.me/info/18847#top"
    },
    {
      "name": "Overlord III",
      "state": "0 / 13",
      "type": "Animeserie",
      "url": "https://proxer.me/info/22854#top"
    }
  ],
  "abgebrochen": [
    {
      "name": "Conception: Ore no Kodomo wo Undekure!",
      "state": "5 / 12",
      "type": "Animeserie",
      "url": "https://proxer.me/info/23058#top"
    }
  ]
}
```

## License

[Apache License 2.0](https://github.com/PryosCode/ProxerExport/blob/master/LICENSE)