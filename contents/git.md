# 깃 설정 팁

## 여러개의 Git credential을 보유한 경우

각각의 Git credential을 사용하고 싶은 프로젝트 폴더로 이동합니다. 그 다음 해당 프로젝트 폴더에 `.gitconfig` 파일을 생성하고 각각의 `.gitconfig` 파일 내 credential을 설정합니다.

그 후 아래와 같이 설정합니다.

```bash
vi ~/.gitconfig
# vi를 사용하지 않고 일반적인 nano, VS Code 등 텍스트 편집기로 이용해도 좋습니다.
[includeIf "gitDir:~/별개의 credential을 원하는 프로젝트 폴더/**/*.git"]
path = ~/별개의 credential을 원하는 프로젝트 폴더/.gitconfig
```
