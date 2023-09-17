---
title: "Mi entorno de desarrollo 2022"
description: "Mi entorno de desarrollo para trabajar con React y React Native en linux"
seriesId: entornos-de-desarrollo
orderInSeries: 1
pubDate: "May 25 2022"
tags:
  - mi-entorno-linux-para-trabajar
---

# My minimal linux setup for work

Actualy i am working as Front End developer, using tecnologies like React & React Native and of course i use linux as my main OS.

Here i will explain how you can configure your setup for a real working place.

---

## Linux OS

I love distributions like Deepin or Elementary OS. But in this case we are going to use Ubuntu, because is the most popular distribution, is very stable and we can find a lot of support on internet for any problem we may have.

You can get ubuntu from the oficial page [https://ubuntu.com/](https://ubuntu.com/) and it’s free!. download the LTS version, i love stay at vanguard but LTS is the best option for work.

When installing, I like the minimal installation but you can choose whatever you want.

## Terminal

Oh beautiful linux, those colors and rounded windows are very pretty. But most pretty and powerfull is the bash. First with **Ctrl + Alt + T** we are going to open the terminal and install some things, and later i will explain what we are installing.

```bash
sudo apt install curl git
```

curl is a command-line tool to transfer data to or from a server, we will use this in the next step. And git is a version control system that we are going to use in all our projects.

```bash
curl -L https://git.io/n-install | bash
```

With this command we are going to install n, n is a version management for node.js. You can get more info here [https://www.npmjs.com/package/n](https://www.npmjs.com/package/n) .

```bash
n install lts
```

With this command we can install any version of node, we only need to change lts for 14 or 16 for install node v14 or v16.

## Node

Now with node.js in our system, we are going to install some utils

```bash
npm i -g ts-node typescript yarn expo-cli
```

**What have we installed?**

- **ts-node** is a TypeScript execution engine for Node.js ([https://www.npmjs.com/package/ts-node](https://www.npmjs.com/package/ts-node))
- **typescript** is a super set of JavaScript ([https://www.typescriptlang.org/](https://www.typescriptlang.org/))
- **yarn** is another package manager like npm
- **expo-cli** is a bundle of tools to help you start a multiplatform mobile app very fast with react-native ([https://docs.expo.dev/](https://docs.expo.dev/))

## Programs

- Visual Sudio Code ([https://code.visualstudio.com/](https://code.visualstudio.com/))
- Google Chrome ([https://www.google.com/intl/es/chrome/](https://www.google.com/intl/es/chrome/))
- Gravit Designer ([https://www.designer.io/](https://www.designer.io/))
- Insomnia ([https://insomnia.rest/download](https://insomnia.rest/download))
- Slack ([https://slack.com/](https://slack.com/))

## Chrome Extensions

- Redux DevTools
- JSON Formater
- React developer Tools

## VS Code Extensions

- ESLint by Microsoft
- markdownlint by David Anson
- Prettier by Prettier
- Auto Close Tag by Jun Han
- Auto Rename Tag by Jun Han
- gitignore by CodeZombie
- EditorConfig by EditorConfig

## Bash

And lastly, I add a few lines of code in the bashrc to see the git statuses and branch names in the terminal, first I open a new terminal and put

```bash
code ~/.bashrc
```

Go to the end of the archive and paste

```bash
source /etc/bash_completion.d/git-prompt
export GIT_PS1_SHOWDIRTYSTATE=1
export PS1='\[\e]0;\u@\h: \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]$(__git_ps1 "(%s)")\$ '
```

Now you have git statuses on your terminal like branch name, or \* if you have changes without commit.

## Comment

When I started working as a programmer, I used a lot of nice extensions, programs and terminals like ZSH, but now I like to keep my setup simple and clean. With these tools, you have everything you need to work as a React and React Native developer. But do not deprive yourself of experimenting with other extensions, terminals, programs, etc. Enjoy it.
