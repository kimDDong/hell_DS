const url = "https://apis.data.go.kr/1471000/HtfsTrgetInfoService02/getHtfsInfoList02";
const serviceKey = "/XOOBhwKX+fYTkJSvYYlWSGQXXs7fJwqn1XN0WRCJQdwOyM2fa1VZ1OT0PlU4OhCiX4HUY/nZzbhTS2FAT98Iw==";

document.getElementById("searchButton").addEventListener("click", function () {
  const symptoms = document.getElementById("symptoms").value;
  if (!symptoms) {
    alert("증상을 입력해주세요.");
    return;
  }

  // 로더 표시
  document.getElementById("loader").style.display = "flex";
  document.getElementById("result").innerHTML = ""; // 이전 결과 초기화

  const params = {
    serviceKey: serviceKey,
    pageNo: '1',
    numOfRows: '100',
//    PRIMARY_FNCLTY: symptoms,
    _type: 'json',
  };
  const queryString = new URLSearchParams(params).toString();

  fetch(`${url}?${queryString}`)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");
      const items = xmlDoc.getElementsByTagName("item");


      const symptoms = document.getElementById("symptoms").value.trim(); // 사용자 입력값

      let resultHTML = "";
      let filteredItems = []; // 재검색된 결과를 담을 배열



      if (items.length === 0) {
        document.getElementById("result").textContent = "해당 증상에 대한 건강기능식품이 없습니다.";
      } else {
        let resultHTML = "";
        for (let i = 0; i < items.length; i++) {
          const PRDLST_NM = items[i].getElementsByTagName("PRDLST_NM")[0]?.textContent || "정보 없음";
          const IFTKN_ATNT_MATR_CN = items[i].getElementsByTagName("IFTKN_ATNT_MATR_CN")[0]?.textContent || "정보 없음";
          const PRIMARY_FNCLTY = items[i].getElementsByTagName("PRIMARY_FNCLTY")[0]?.textContent || "정보 없음";
          const NTK_MTHD = items[i].getElementsByTagName("NTK_MTHD")[0]?.textContent || "정보 없음";
          const DISPOS = items[i].getElementsByTagName("DISPOS")[0]?.textContent || "정보 없음";
          const CSTDY_MTHD = items[i].getElementsByTagName("CSTDY_MTHD")[0]?.textContent || "정보 없음";
          const BSSH_NM = items[i].getElementsByTagName("BSSH_NM")[0]?.textContent || "정보 없음";
          const STDR_STND = items[i].getElementsByTagName("STDR_STND")[0]?.textContent || "정보 없음";

          // symptoms가 PRIMARY_FNCLTY에 포함되어 있는지 검사
          if (PRIMARY_FNCLTY.includes(symptoms)) {
            filteredItems.push(items[i]); // 필터링된 item 추가
              resultHTML += `
                <div class="drug-item" onclick="toggleDetails(this)">
                  <div class="drug-content">
                    <div class="drug-title">${PRDLST_NM} (제조사: ${CSTDY_MTHD})</div>
                    <div class="drug-details">
                      <p><strong>효과:</strong> ${PRIMARY_FNCLTY}</p>
                      <p><strong>용법:</strong> ${NTK_MTHD}</p>
                      <p><DISPOS>외관:</strong> ${DISPOS}</p>
                      <p><CSTDY_MTHD>사용기한:</strong> ${CSTDY_MTHD}</p>
                      <p><STDR_STND>용량:</strong> ${STDR_STND}</p>
                      <p><strong>주의 사항:</strong> ${IFTKN_ATNT_MATR_CN}</p>
                    </div>
                  </div>
                </div>
              `;
              }
        }
        document.getElementById("result").innerHTML = resultHTML;
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      document.getElementById("result").textContent = 'Error: ' + error.message;
    })
    .finally(() => {
      // 로더 숨기기
      document.getElementById("loader").style.display = "none";
    });
});


function toggleDetails(element) {
  const details = element.querySelector('.drug-details');
  details.style.display = details.style.display === 'none' || details.style.display === '' ? 'block' : 'none';
}
