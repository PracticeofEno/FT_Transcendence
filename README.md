### ~~42API 기한 만료로 인해 더이상 동작하지 않습니다(Oauth 단일 로그인 방식)~~ -> google oauth 변경
## google oauth의 경우 redirect uri 유효성 검사가 원시 host ip를 지원하지 않는것으로 추정됨
- 각 서버에 대한 ip를 localhost로 통일시킨 이유
- backend -> localhost:5000, frontend -> localhost:3000, postgres->localhost:5432
- 출처 : https://developers.google.com/identity/protocols/oauth2/web-server#uri-validation

----------------------

## 목적
- 탁구 게임을 만들어라
- 관리자 보기, 관전자끼리 채팅, 실시간 멀티플레이 기능이 있어야 한다

----------------------- 
## 필수 사항
- 모든 프레임워크, 라이브러리는 최신 안정버전을 사용해야한다
- 웹사이트의 백엔드는 NestJS로 작성해야 한다
- DB는 PostgreSQL을 사용해야 한다. 딴건 금지
- 프론트엔드는 typescript 프레임워크를 사용해야 한다
- 웹사이트는 단일앱 이여야 하며, 뒤로가기 버튼을 사용할수 있어야 한다
- 최신버전의 크롬, 파폭, 사파리에서 사용가능해야 한다
- 웹사이트를 탐색할때 처리되지 않은 오류나 경고가 없어야한다
- docker-compose up -build 에 대한 단일 호출로 모든것이 실행되어야 한다.

----------------------

## 필수 구현 사항
### Security concerns
- 완벽하게 동작하는 웹사이트이기에 몇가지 보안문제를 해결해야한다
- 데이터베이스에 저장된 암호는 암호화 되어야 한다
- SQL인젝션으로부터 보호되어야 한다
- 양식 및 모든 사용자 입력에 대해 일종의 서버측 유효성 검사를 해야한다.

### User Account
- ~~사용자는 42인트라넷의 Oauth시스템을 사용하여 로그인 하여야 한다~~ -> 42 만료로 인해 google oauth로 변경
- 사용자는 웹사이트에 표시될 고유한 이름을 선택할 수 있어야 한다
- 사용자는 여러가지 승리와 패배 및 기타 통계를 가져야한다
- 사용자가 생성하거나 업로드한 아바타가 있어야한다.
- 사용자는 2단계 인증을 활성화 할 수 있어야 한다.(구글인증, SMS등) -> google 인증 사용
- 사용자는 다른 사용자를 친구로 추가하고 현재상태를 볼수 있어야 한다.(게임중, 온라인, 오프라인)
- 각 사용자는 로그인한 모든 사람들이 볼 수 있는 대전기록을(레더나 일반경기) 가지고 있어야 한다.

### Chat
- 사용자는 공개/비공개 또는 비밀번호로 보호되는 채널을 생성할 수 있어야 한다.
- 사용자는 다른사용자에게 직접 메세지를 보낼수 있어야 한다.
- 사용자는 다른 사용자를 차단할 수 있어야 한다(메세지 볼수 없어야 한다)
- 새 채널을 만든 사용자는 떠날 때까지 자동으로 소유자가 된다
- 채널 소유자는 채널에 액세스 하기 위한 암호를 추가/제거/변경 할수 있다.
- 소유자는 사용자를 관리자로 선택할 수 있으며 채널의 관리자 이기도 합니다.
- 관리자는 일정 시간동안 사용자를 차단하거나 음소거 할수 있어야 한다. 
- 채팅 인터페이스를 통하여 다른 사용자에게 경기요청을 할수있어야 한다 (ex) /게임 nickname)
- 채팅 인터페이스를 통해 사용자는 다른 플레이어의 프로필을 열람 가능해야 한다.(ex) /프로필 nickname)

### Game
- 웹사이트에서 직접 탁구를 플레이하고 대결할수 있어야 한다
- 매치메이킹 시스템이 있어야 하며 , 사용자는 게임 대기열에 참여할 수 있고, 자동으로 다른플레이어와 매칭됩니다
- 캔버스일수도 3D효과가 있을수도 있지만, 1972년에 나온것과 같은 탁구여야 합니다.
- 몇가지 사용자 정의 옵션이 (파워업, 다른맵)이 있어야 하지만 추가항목 없이 기본탁구게임 할수있어야 한다
- 게임은 responsive해야한다
- 다른 사용자는 게임을 방해하지 않고 실시간 시청이 가능해야 한다
- 네트워크나 지연같은 문제를 생각해 보아라. 사용자 경험은 가능한 최선을 다해야 한다.

-----------------------------------------------

## Requirements
> - Docker, Dcoekr-compose
> - port: 3000(front), 5432(postgres in docker), 5000(nestjs in docker)

## 실행
```
git clone https://github.com/PracticeofEno/ft_transcendence
cd ft_transcendence
docker-compose up -build
```

## 기술 스택
- TypeOrm
- Nestjs
- VueJs
- javascript
- postgresql
- socket.io

--------------------------

## 사전지식 자료 정리 및 출처
- 데코레이터 출처 : https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841 
- 의존성 주입 출처 : https://mangkyu.tistory.com/150
- ES5 to ES6 출처 : https://ui.toast.com/fe-guide/ko_ES5-TO-ES6
- SPA(Single Page Application) 출처: https://m.blog.naver.com/dktmrorl/222085340333 
- Vue3 : https://enocent.notion.site/Vue-js-7d9f0bca3191499884a4935ea12160e5
- Nestjs: https://enocent.notion.site/NestJS-ca5379e770e3443f9a4b437684a38b43
- typescript : https://enocent.notion.site/TypeScript-e3b802e1091347d093c1ff7c1c37abfb
- Nodejs 구조 : https://enocent.notion.site/node-js-af927310d5f3491ea0586ae9daf96176
- JWT(json web token) 출처 : https://tech.toktokhan.dev/2021/04/30/JWT/
- oauth 2.0 출처 : https://hwannny.tistory.com/92
- Nestjs - socket.io : https://docs.nestjs.com/websockets/gateways


## Backend DB 구조
![2022-11-27 오후 6-27-43](https://user-images.githubusercontent.com/57505385/204128177-373b3521-ef5e-40da-acbd-c92fd189f4ac.png)

## 실행 화면
![2022-11-27 오후 10-26-47](https://user-images.githubusercontent.com/57505385/204142580-f2de8d69-5fb1-4aa7-a2e2-f232cf9669cf.png)
![2](https://user-images.githubusercontent.com/57505385/204142583-b36f6e9d-564d-440d-a255-946d02395dc9.png)
![3](https://user-images.githubusercontent.com/57505385/204142585-e3ca4d33-f3ca-4867-a358-4af6c1e3987e.png)
![4](https://user-images.githubusercontent.com/57505385/204142586-16ab13f0-310e-4870-b683-e0c121d53a48.png)
![5](https://user-images.githubusercontent.com/57505385/204142587-aefc5540-4ebd-488f-b2ca-c742c0e729cb.png)
![6](https://user-images.githubusercontent.com/57505385/204142579-300d513e-1a13-488c-8068-eca1ec4ffd49.png)

