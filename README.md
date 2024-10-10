[HYU] health data science 24_2

-*-
Outline
NHIS_OPEN_GJ_2017_100.csv
	4:1 training:test 데이터셋 구성 (3:1 k-fold validation 진행)

NHIS_OPEN_GJ_2017_100.csv
	전체 데이터 labeling (질병 별 참고 데이터 수치 조사 기반)

IROS_239_의약품개요정보(e약은요) 서비스_v1.0.docx
	자연어 처리 (하기는 데이터 예시)
		<item>
		<entpName>삼진제약(주)</entpName>
		<itemName>아네모정</itemName>
		<itemSeq>195900043</itemSeq>
		<efcyQesitm>이 약은 위산과다, 속쓰림, 위부불쾌감, 위부팽만감, 체함, 구역, 구토, 위통, 신트림에 사용합니다.</efcyQesitm>
		<useMethodQesitm>성인 1회 2정, 1일 3회 식간(식사와 식사때 사이) 및 취침시에 복용합니다.</useMethodQesitm>
		<atpnWarnQesitm/>
		<atpnQesitm>투석요법을 받고 있는 환자, 수유부, 만 7세 이하의 어린이, 갈락토오스 불내성, Lapp 유당분해효소 결핍증 또는 포도당-갈락토오스 흡수장애 등의 유전적인 문제가 있는 환자는 이 약을 복용하지 마십시오.이 약을 복용하기 전에 이 약에 과민증 환자, 알레르기 체질, 알레르기 증상(발진, 충혈되어 붉어짐, 가려움 등) 경험자, 신장장애 환자, 임부 또는 임신하고 있을 가능성이 있는 여성, 나트륨 제한 식이를 하는 사람은 의사 또는 약사와 상의하십시오.정해진 용법과 용량을 잘 지키십시오.</atpnQesitm>
		<intrcQesitm>위장진통ㆍ진경제, 테트라사이클린계 항생제와 함께 복용하지 마십시오.</intrcQesitm>
		<seQesitm>발진, 충혈되어 붉어짐, 가려움, 드물게 입이 마르는 증상, 변비 또는 설사 등이 나타나는 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오.</seQesitm>
		<depositMethodQesitm>습기와 빛을 피해 보관하십시오.어린이의 손이 닿지 않는 곳에 보관하십시오.</depositMethodQesitm>
		<openDe>2021-01-29 00:00:00</openDe>
		<updateDe>2021-01-29</updateDe>
		<itemImage>https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/152035092098000085</itemImage>
		<bizrno>1248531621</bizrno>
		</item>

IROS_239_의약품개요정보(e약은요) 서비스_v1.0.docx
	LLM 기반 의약품 추천 모델 개발
-*-

-*-
Data
	NHIS_OPEN_GJ_2017_100.csv (HYU HDS 수업 자료)
		환자 건강 정보 데이터
	질병 별 참고 데이터.xlsx
		심평원 "생활 속 질병/진료 행위 통계" 자료에서 조사된 83개 질병 중 주요 질병 10가지 및 각 질병 별 진단 시 참고 데이터
		*수치 조사 필요
	IROS_239_의약품개요정보(e약은요) 서비스_v1.0.docx
		의약품 추천 모델 개발 시 사용될 의약품 데이터
-*-