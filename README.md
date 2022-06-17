# PostMe-for-Instagram
PostMe for Instagram: Sticky Note Image Generator
<br>
인스타그램 스토리, 게시물을 통해 공부나 계획을 공유하는 사람을 위한 To-do 리스트 이미지 생성기 입니다.

<br>

[Link](https://wontory.github.io/PostMe)

<br>

현재까지 구현한 기능
1. 스티키노트 디자인
2. 사용자 입력란
3. 체크 기능
4. 웹 캡처기능

<br>

앞으로 추가할 기능
1. 웹사이트 레이아웃
2. 광고 추가
3. 테마 추가
4. 데이터베이스 연결
5. 크로스 플랫폼 (리액트 네이티브로 개발환경 옮기기)

<br>

웹 캡처 오류 수정 -> 개발 중단<br>
HTML을 Canvas 요소로 변환한 후 이미지로 캡쳐하는 자바스크립트 라이브러리 html2canvas 사용<br>
textarea 글씨 잘림 현상의 해결 방법을 찾을 수 없어 기술적인 문제로 개발을 중단합니다.<br>
-> 수정 완료<br>
최신버전에서 발생하는 문제. html2canvas 버전을 내려서 오류를 해결했습니다.<br>
향후 html2canvas가 업데이트되어 해당 오류가 수정되면 버전업 할 예정입니다.<br>
(css의 box-shadow 속성은 아직 html2canvas에서 미지원)
