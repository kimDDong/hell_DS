const url = "https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList";
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
    numOfRows: '10',
    efcyQesitm: symptoms,
    _type: 'json',
  };
  const queryString = new URLSearchParams(params).toString();
  console.log(queryString);
  fetch(`${url}?${queryString}`)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");
      const items = xmlDoc.getElementsByTagName("item");

      if (items.length === 0) {
        document.getElementById("result").textContent = "해당 증상에 대한 건강기능식품이 없습니다.";
      } else {
        let resultHTML = "";
        for (let i = 0; i < items.length; i++) {
          const drugName = items[i].getElementsByTagName("itemName")[0].textContent;
          const entpName = items[i].getElementsByTagName("entpName")[0].textContent;
          const itemImage = items[i].getElementsByTagName("itemImage")[0]?.textContent || "./pill2.png";
          const atpnQesitm = items[i].getElementsByTagName("atpnQesitm")[0]?.textContent || "정보 없음";
          const useMethodQesitm = items[i].getElementsByTagName("useMethodQesitm")[0]?.textContent || "정보 없음";

          resultHTML += `
            <div class="drug-item" onclick="toggleDetails(this)">
              <img src="${itemImage}" alt="${drugName} 이미지" class="drug-image" />
              <div class="drug-content">
                <div class="drug-title">${drugName} (제조사: ${entpName})</div>
                <div class="drug-details">
                  <p><strong>용법:</strong> ${useMethodQesitm}</p>
                  <p><strong>주의 사항:</strong> ${atpnQesitm}</p>
                </div>
              </div>
            </div>
          `;
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

//document.getElementById("searchButton").addEventListener("click", function() {
//  const symptoms = document.getElementById("symptoms").value;
//
//  if (!symptoms) {
//    alert("증상을 입력해주세요.");
//    return;
//  }
//
//  const params = {
//    serviceKey: serviceKey,
//    pageNo: '1',
//    numOfRows: '10',
//    efcyQesitm: symptoms,
//    _type: 'json'
//  };
//
//  const queryString = new URLSearchParams(params).toString();
//
//  fetch(`${url}?${queryString}`)
//    .then(response => response.text())
//    .then(data => {
//      const parser = new DOMParser();
//      const xmlDoc = parser.parseFromString(data, "application/xml");
//      const items = xmlDoc.getElementsByTagName("item");
//
//      if (items.length === 0) {
//        document.getElementById("result").textContent = "해당 증상에 대한 건강기능식품이 없습니다.";
//        return;
//      }
//
//      let resultHTML = "";
//      for (let i = 0; i < items.length; i++) {
//        const drugName = items[i].getElementsByTagName("itemName")[0].textContent;
//        const entpName = items[i].getElementsByTagName("entpName")[0].textContent;
//        const itemImage = items[i].getElementsByTagName("itemImage")[0]?.textContent || "";
//        const atpnQesitm = items[i].getElementsByTagName("atpnQesitm")[0]?.textContent || "정보 없음";
//        const useMethodQesitm = items[i].getElementsByTagName("useMethodQesitm")[0]?.textContent || "정보 없음";
//
//        resultHTML += `
//          <div class="drug-item" onclick="toggleDetails(this)">
//            <img src="${itemImage}" alt="${drugName} 이미지" class="drug-image" />
//            <div class="drug-content">
//              <div class="drug-title">${drugName} (제조사: ${entpName})</div>
//              <div class="drug-details">
//                <p><strong>용법:</strong> ${useMethodQesitm}</p>
//                <p><strong>주의 사항:</strong> ${atpnQesitm}</p>
//              </div>
//            </div>
//          </div>
//        `;
//      }
//
//      document.getElementById("result").innerHTML = resultHTML;
//    })
//    .catch(error => {
//      console.error('There was a problem with the fetch operation:', error);
//      document.getElementById("result").textContent = 'Error: ' + error.message;
//    });
//});

function toggleDetails(element) {
  const details = element.querySelector('.drug-details');
  details.style.display = details.style.display === 'none' || details.style.display === '' ? 'block' : 'none';
}
