# Common Linux Command list


## fonts apply

move fonts to share directory

`mv [target fonts] $HOME/.local/share/fonts/[target fonts]`

### when fonts moved successfully..

`fc-cache -v`

## Setting KIME(Working on Arch linux like distros)

```bash
yay -S kime
```

and edit(add) .xprofile below

```
export GTK_IM_MODULE=kime
export QT_IM_MODULE=kime
export XMODIFIERS=@im=kime
```

and copy config

```bash
cp /usr/share/doc/kime/default_config.yaml  ~/.config/kime/config.yaml
```

If you want to change switching input source key, check `globalHotKey`(almost set Super-Space) configuration in `config.yaml`.

and restart desktop and type `kime-check` in terminal.
