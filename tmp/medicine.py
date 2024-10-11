import requests
import json  # json 모듈을 import

# API 기본 URL
url = "http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList"

# API 키 (본인의 API 키로 대체해야 함)
service_key = "/XOOBhwKX+fYTkJSvYYlWSGQXXs7fJwqn1XN0WRCJQdwOyM2fa1VZ1OT0PlU4OhCiX4HUY/nZzbhTS2FAT98Iw=="

# 요청 파라미터 설정
params = {
    'serviceKey': service_key,  # 필수 파라미터 (발급받은 키)
    'pageNo': '1',              # 페이지 번호
    'numOfRows': '10',          # 한 페이지에 표시할 결과 수
    'itemName': '',      # 검색할 의약품 이름
    'entpName': '',             # 제조사명 (필요시 추가)
    'efcyQesitm': '',           # 효능 검색 (필요시 추가)
    'useMethodQesitm': '',      # 사용 방법 검색 (필요시 추가)
    'atpnWarnQesitm': '',       # 주의 사항 검색 (필요시 추가)
    'atpnQesitm': '',           # 사용 시 주의 사항 검색 (필요시 추가)
    'intrcQesitm': '',          # 상호작용 검색 (필요시 추가)
    'seQesitm': '',             # 부작용 검색 (필요시 추가)
    'depositMethodQesitm': '',  # 보관 방법 검색 (필요시 추가)
    '_type': 'json'             # 결과 포맷 (xml 또는 json)
}
# API 요청
response = requests.get(url, params=params)

# 응답 상태 코드 확인
print(response.status_code)
print(response.text)  # 응답 내용을 출력해봅니다.

# if response.status_code == 200:
#     try:
#         result = response.json()  # JSON 변환 시도
#         print(result)
#     except json.decoder.JSONDecodeError as e:
#         print("JSON 디코드 에러:", e)
# else:
#     print(f"Error {response.status_code}")
