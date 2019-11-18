# Melt 🔥

Melt your files and folders on Windows!

A utility tool which provides `rm` like functionality for Windows machines.

## Getting Started

### Installation

There are currently 2 ways to install `melt`;

1. With npm/yarn (you need to have [NodeJS](https://nodejs.org) installed on your machine):

   - With npm:

   ```bash
   npm install -g @statebait/melt
   ```

   - With yarn (you also need [Yarn](https://yarnpkg.com/) installed on your machine):

   ```bash
   yarn global add @statebait/melt
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

### All flags

- Display the current version of melt; `-v` or `--version`

- Display help; `-h` or `--help`

- Recursive delete (for folders); `-r` or `--recursive`
