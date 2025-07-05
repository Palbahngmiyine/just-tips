# 일반적인 리눅스 설정 명령어 모음

## 폰트 설정

설치하고자 하는 폰트를 공유 폴더로 옮겨줍니다.

```bash
mv [target fonts] $HOME/.local/share/fonts/[target fonts]
# 이후에 폰트 캐시 갱신
fc-cache -v
```

## Arch Linux 계열 배포판에서 KIME 설정하는 방법

```bash
# 사전에 yay(https://github.com/Jguer/yay)를 설치해야 합니다.
yay -S kime
```

이후 `~/.xprofile` 혹은 `~/.xinit` 파일을 생성해서 아래와 같이 작성하고 저장합니다.

```
export GTK_IM_MODULE=kime
export QT_IM_MODULE=kime
export XMODIFIERS=@im=kime
```

한/영 설정을 변경하려면 아래와 같이 기본 KIME 설정 파일을 복사 붙여넣기 해줍니다.

```bash
cp /usr/share/doc/kime/default_config.yaml  ~/.config/kime/config.yaml
```

이후 한영키를 바꿀 때 `globalHotKey` 속성 내 Super-Space 항목을 원하는 키에 맞게 변경하면 됩니다.

> 필자는 S-Space(Shift + Space)로 변경했습니다.

설정 파일을 수정했다면 기기를 재시작하고 `kime-check`을 터미널에서 입력해주면 기본적인 KIME 설정은 완료됩니다.
