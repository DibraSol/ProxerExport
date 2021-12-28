<p align="center">
    <a href="https://github.com/PryosCode/ProxerExport/tags"><img src="https://img.shields.io/github/v/release/PryosCode/ProxerExport?label=Version" alt="Version"></a>
    <a href="https://github.com/PryosCode/ProxerExport/actions/workflows/build.yml"><img alt="Build" src="https://github.com/PryosCode/ProxerExport/actions/workflows/build.yml/badge.svg"></a>
    <a href="https://github.com/PryosCode/ProxerExport/blob/master/LICENSE"><img src="https://img.shields.io/github/license/PryosCode/ProxerExport?label=License" alt="License"></a>
</p>

# <a href="https://github.com/PryosCode/ProxerExport/blob/master/src/logo.png"><img src="https://github.com/PryosCode/ProxerExport/raw/master/src/logo.png" alt="Logo"></a> ProxerExport

Exportiere deine [Proxer](https://proxer.me) Listen ([Anime](https://proxer.me/ucp?s=anime), [Manga](https://proxer.me/ucp?s=manga) und [Novel](https://proxer.me/ucp?s=novel)) in eine JSON Datei.

## Installation

~~Chrome~~

[Firefox](https://addons.mozilla.org/de/firefox/addon/proxerexport/)

## Nutzung

[![Anime](https://github.com/PryosCode/ProxerExport/raw/master/img/export.png)](https://proxer.me/ucp?s=anime)

## Beispiel

```
anime-[2021-12-28_01-05-30].json
```

```json
{
  "geschaut": [
    {
      "name": "Shingeki no Kyojin",
      "medium": "Animeserie",
      "bewertung": 10,
      "stand": "25 / 25",
      "url": "https://proxer.me/info/5840"
    }
  ],
  "am-schauen": [
    {
      "name": "Overlord",
      "medium": "Animeserie",
      "bewertung": 0,
      "stand": "3 / 13",
      "url": "https://proxer.me/info/13164"
    }
  ],
  "wird-noch-geschaut": [
    {
      "name": "Shingeki no Kyojin Season 2",
      "medium": "Animeserie",
      "bewertung": 0,
      "stand": "0 / 12",
      "url": "https://proxer.me/info/9648"
    }
  ],
  "abgebrochen": [
    {
      "name": "Sword Art Online",
      "medium": "Animeserie",
      "bewertung": 1,
      "stand": "6 / 25",
      "url": "https://proxer.me/info/4167"
    }
  ]
}
```

## Lizenz

[Apache License 2.0](https://github.com/PryosCode/ProxerExport/blob/master/LICENSE)
