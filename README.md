<p align="center">
    <a href="https://github.com/PryosCode/ProxerExport/raw/master/ProxerExport.user.js"><img src="https://img.shields.io/github/v/release/PryosCode/ProxerExport?label=Install" alt="Install"></a>
    <a href="https://github.com/PryosCode/ProxerExport/blob/master/LICENSE"><img src="https://img.shields.io/github/license/PryosCode/ProxerExport?label=License" alt="License"></a>
    <a href="https://discord.gg/bF2GRHq"><img src="https://discordapp.com/api/guilds/350302354639290379/widget.png" alt="Discord"></a>
</p>

# <a href="https://proxer.me"><img src="https://github.com/PryosCode/ProxerExport/raw/master/images/logo.png" alt="Proxer"></a> ProxerExport

Export your [Proxer](https://proxer.me)-Lists ([Anime](https://proxer.me/ucp?s=anime), [Manga](https://proxer.me/ucp?s=manga) and [Novel](https://proxer.me/ucp?s=novel)) to a JSON-File.

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [How to use](#how-to-use)
4. [License](#license)

## Getting Started

Export your [Proxer](https://proxer.me)-Lists ([Anime](https://proxer.me/ucp?s=anime), [Manga](https://proxer.me/ucp?s=manga) and [Novel](https://proxer.me/ucp?s=novel)) to a JSON-File with one click and backup it or use it in your own program.

### Example file

File name

```
animelist-[2020-04-17_22-26-48].json
```

File content

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

## Installation

You just have to install [Tampermonkey](https://www.tampermonkey.net) or an other Userscript-Manager for your browser.

- [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Microsoft Edge](https://www.microsoft.com/store/apps/9NBLGGH5162S)
- [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey)
- [Opera Next](https://addons.opera.com/en/extensions/details/tampermonkey-beta)
- [Dolphin Browser](https://play.google.com/store/apps/details?id=net.tampermonkey.dolphin)
- [UC Browser](https://play.google.com/store/apps/details?id=net.tampermonkey.dolphin)

After that you have to [open this link](https://github.com/PryosCode/ProxerExport/raw/master/ProxerExport.user.js) and click on install.

## How to use

You can export your

- [Animelist](https://proxer.me/ucp?s=anime)
- [Mangalist](https://proxer.me/ucp?s=manga)
- [Novellist](https://proxer.me/ucp?s=novel)

with just a click of a button to a JSON-File.

<p align="center">
    <a href="https://proxer.me/ucp?s=anime"><img src="https://github.com/PryosCode/ProxerExport/raw/master/images/export.png" alt="Export" style="max-width: 100%"></a>
</p>

## License

Copyright (C) 2020 [PryosCode](https://pryoscode.net/)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.