### yarn berry

1. yarn set version berry
2. yarn init
3. yarn install
4. yarnrc.yml 에 nodeLinker: pnp 추가

주의1) 서드파티 라이브러리 import시 빨간줄 없애기

- yarn add -D @yarnpkg/sdks
- yarn dlx @yarnpkg/sdks vscode

주의2) 서드파티 라이브러리에서 하위 의존성 모듈로 명시하지 않은 상태의 오류

- 예시로, styled-components를 사용하겠다.
- yarn install을 하게되면 요런식으로 나오게된다. (react-is 라는 의존성이 필요)
  ➤ YN0002: │ ssr@workspace:. doesn't provide react-is (pd8d40), requested by styled-components
- 즉, styled-components의 의존성모듈로 react-is를 명시해줘야함.
- yarn explain peer-requirements p66f35 (p66f35는 yarn install을 통해서 나옴)
- ➤ YN0000: styled-components@npm:5.3.6 [4c50d] → >= 16.8.0 ✘ 나오게됨. (react-is가 >= 16.8.0 버전이여야 한다는 뜻.)

- 그럼 이제 yarnrc.yml에 직접 명시해주자 !

```javascript
packageExtensions:
  "styled-components@*":
    dependencies:
      "react-is": "^18.2.0"
```
