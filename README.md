# Melt 🔥

[![npm version](https://badge.fury.io/js/%40statebait%2Fmelt.svg)](https://badge.fury.io/js/%40statebait%2Fmelt)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Melt your files and folders on Windows!

A configurable utility tool which provides `rm` like functionality for Windows machines.

![melt-demo.gif](https://i.imgur.com/ppsHbjI.gif)

## Getting Started

### Installation

There are currently 2 ways to install `melt`;

1. With npm (you need to have [NodeJS](https://nodejs.org) installed on your machine):

```bash
npm install -g @statebait/melt
```

2. Using the `.exe` and adding it to the path:

   - Download the latest release [here.](https://github.com/statebait/melt/releases)

   - Extract the downloaded zip file into a folder.

   - Add the path to bin folder in your environment variables appropriately (see how to do this [here.](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/))

Congratulations you have `melt` installed on your machine! 🎉

### Usage

For deleting regular files:

```bash
melt <file_name>
```

For deleting folders (and folders with contents):

```bash
melt <folder_name> -r
```

#### Configure

You can configure melt to disable/enable the warning prompt while using the recursive option.

To turn off the warning prompt:

```bash
melt -p off
```

To turn on the warning prompt:

```bash
melt -p on
```

### All flags

- Display the current version of melt: `-v` or `--version`

- Display help: `-h` or `--help`

- Configure warning prompt: `-p` or `--prompt`

- Recursive delete (for folders): `-r` or `--recursive`

## License

This project is licensed under the GPL-3.0 License - Copyright (c) 2020 Mohamed Shadab
