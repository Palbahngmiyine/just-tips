# Just tips for Korean

간단한 리눅스/개발 환경 설정 팁 등을 설명하는 문서/레포지터리 입니다.

사이트는 [Subux](https://github.com/Palbahngmiyine/subux)의 docs 모드로 빌드합니다. 저장소 루트가 Subux 작업 공간입니다.

- `subux.json`: 사이트 제목, 주소, 상단 메뉴, 사이드바
- `index.md`: 홈 화면
- `contents/`: 문서. `contents/<이름>.md`가 `/contents/<이름>/` 주소가 됩니다.
- `public/`: 사이트 루트에 그대로 복사되는 파일

## 개발 환경 설정

### 로컬에서 확인

```bash
yarn install
yarn dev
```

`yarn dev`는 사이트를 빌드한 뒤 `dist/`를 Wrangler로 띄웁니다. 파일 변경을 감지하지 않으므로 수정한 뒤에는 다시 실행합니다.

### 빌드

```bash
yarn build
```

결과물은 `dist/`에 생성됩니다.

### 검사

```bash
yarn check
```

파일을 쓰지 않고 문서와 설정만 검사합니다.

### 미리보기

```bash
yarn preview
```

마지막으로 빌드한 `dist/`를 Wrangler로 띄웁니다.
