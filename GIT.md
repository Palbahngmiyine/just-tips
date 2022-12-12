# Git tips

## If you got multiple credentials..

### create .gitconfig

vi ~/somewhere/.gitconfig

### then edit .gitconfig in home path

vi ~/.gitconfig

```.gitconfig
[includeIf "gitDir:~/target-directory/**/*.git"]
path = ~/somewhre/.gitconfig
```
