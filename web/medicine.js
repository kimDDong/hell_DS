// API 기본 URL
const url = "http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList";

// API 키 (본인의 API 키로 대체해야 함)
const serviceKey = "/XOOBhwKX+fYTkJSvYYlWSGQXXs7fJwqn1XN0WRCJQdwOyM2fa1VZ1OT0PlU4OhCiX4HUY/nZzbhTS2FAT98Iw==";

// 요청 파라미터 설정
const params = {
  serviceKey: serviceKey,      // 필수 파라미터 (발급받은 키)
  pageNo: '1',                 // 페이지 번호
  numOfRows: '10',             // 한 페이지에 표시할 결과 수
  itemName: '',                // 검색할 의약품 이름
  entpName: '',                // 제조사명 (필요시 추가)
  efcyQesitm: '',              // 효능 검색 (필요시 추가)
  useMethodQesitm: '',         // 사용 방법 검색 (필요시 추가)
  atpnWarnQesitm: '',          // 주의 사항 검색 (필요시 추가)
  atpnQesitm: '',              // 사용 시 주의 사항 검색 (필요시 추가)
  intrcQesitm: '',             // 상호작용 검색 (필요시 추가)
  seQesitm: '',                // 부작용 검색 (필요시 추가)
  depositMethodQesitm: '',     // 보관 방법 검색 (필요시 추가)
  _type: 'json'                // 결과 포맷 (xml 또는 json)
};

// 파라미터를 URL 쿼리 스트링으로 변환하는 함수
const queryString = new URLSearchParams(params).toString();

// API 요청
fetch(`${url}?${queryString}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // 응답 데이터를 출력합니다.
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
