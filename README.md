# PingPongChat-Server
PingPonChat-Server is a backend of PingPongChat project using Node.js

# Table of Contents

* [Support](#support)
* [Building](#building)
  * [Configure Database](#configure-database)
* [Release](#release)
* [API Documentation](#api-documentation)
* [Current Project Team Members](#current-project-team-members)
* [Contributing to PingPongChat-Server](#contributing-to-pingpongchat-server)

## Support
GitHub issues are for tracking enhancements and bugs, not general support.

The open source license grants you the freedom to use PingPonChat-Server. It does not
guarantee commitments of other people's time. Please be respectful and manage
your expectations.

## Release

* **Current**: Under active development. Code for the Current release is in the
  dev branch.
* **LTS**: Newly stable version will be updated at master branch.

## Building

Prerequisite.

- Node.js
- NPM (or yarn)
- Mysql

Clone project source.
``` console
$ git clone git@github.com:Lyceum519/PingPongChat-Server.git
```

Install package in root directory of project.
``` console
$ yarn install 
```

Before start server you should *[configure your database](#configure-database)

Start server (default running port is 7001)
``` console
$ yarn start
```


## Configure Database

This project Use Mysql for database. Mysql version 5.x or 8.x recommended.

set database config with your local setting in database.js.

``` dabase.js
local: {
      host: 'localhost',
      user: 'root',
      password: 'Pingpong1!!',
      port: 3306,
      database: 'ping_pong_chat'
    },
```

after setting database configurattion. you can sync your database using sequelize that we provide to set default tables.

``` console
$ yarn sequelize:sync
```

then you can see default synced data in your database 'ping-pong-chat'

#### API Documentation

Documentation will be given in later.

## Current Project Team Members

UnoRich (wonyeong91@gmail.com)
Alsdn733 (alsdn733@gmail.com)

## Contributing to PingPongChat-Server

Be free for making a issue or make pull request.