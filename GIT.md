# Git tips

## If you got multiple credentials..

### create .gitconfig

```bash
vi ~/somewhere/.gitconfig
```

### then edit .gitconfig in home path

```bash
vi ~/.gitconfig
```

```.gitconfig
[includeIf "gitDir:~/target-directory/**/*.git"]
path = ~/somewhre/.gitconfig
```
