import pandas as pd
import numpy as np

# CSV 파일 불러오기
df = pd.read_csv('NHIS_OPEN_GJ_2017_100.csv', encoding='EUC-KR')
# 열 이름 확인

# 데이터를 5개의 부분으로 나누기
num_splits = 5
split_dfs = np.array_split(df, num_splits)

columns_to_keep = [
    '연령대코드(5세단위)', '신장(5Cm단위)', '체중(5Kg단위)', '허리둘레', '시력(좌)', '시력(우)',
    '청력(좌)', '청력(우)', '수축기혈압', '이완기혈압', '식전혈당(공복혈당)', '총콜레스테롤',
    '트리글리세라이드', 'HDL콜레스테롤', 'LDL콜레스테롤', '혈색소', '요단백', '혈청크레아티닌',
    '(혈청지오티)AST', '(혈청지오티)ALT', '감마지티피', '흡연상태', '음주여부', '구강검진수검여부'
]

# 새로운 열 추가 (기본값은 NaN)
new_columns = [
    '지방간', '궤양성대장염 및 크론병', '간염', '위식도역류질환', '고혈압', '협심증', '심근경색증', '당뇨병', '비염'
]

# 각각의 부분을 CSV로 저장
for i, split_df in enumerate(split_dfs):
    # 해당 열만 선택
    df_filtered = split_df[columns_to_keep]

    for col in new_columns:
        df_filtered[col] = pd.NA  # 기본값으로 NaN을 설정

    # 필터링된 데이터를 새로운 CSV 파일로 저장
    df_filtered.to_csv(f'no_label_filtered_split_data_{i + 1}.csv', index=False, encoding='EUC-KR')
