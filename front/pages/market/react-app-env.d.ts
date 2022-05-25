/// <reference types="react-scripts" />

interface Window {
  ethereum: any;
}

// 윈도우에 메타마스크를 설치하면 ethereum 오브젝트가 생김
// 리액트는 ethereum를 인식하지 못하기때문에 작성해주는 코드
