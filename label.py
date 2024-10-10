import pandas as pd


# 조건을 체크하는 함수
def check_conditions(conditions):
    total_score = sum([weight for condition, weight in conditions])
    matched_score = sum([weight for condition, weight in conditions if condition])
    return matched_score >= (total_score / 2)


df1 = pd.read_csv('no_label_filtered_split_data_1.csv', encoding='EUC-KR')
df2 = pd.read_csv('no_label_filtered_split_data_2.csv', encoding='EUC-KR')
df3 = pd.read_csv('no_label_filtered_split_data_3.csv', encoding='EUC-KR')
df4 = pd.read_csv('no_label_filtered_split_data_4.csv', encoding='EUC-KR')
df5 = pd.read_csv('no_label_filtered_split_data_5.csv', encoding='EUC-KR')

dfs = [df1, df2, df3, df4, df5]

for i, df in enumerate(dfs):
    # CSV 파일을 읽기
    df = pd.read_csv('no_label_filtered_split_data_1.csv', encoding='cp949')

    # BMI 계산 (BMI = 체중(kg) / (신장(m)^2))
    df['BMI'] = df['체중(5Kg단위)'] / ((df['신장(5Cm단위)'] / 100) ** 2)

    # 지방간 조건 정의
    fatty_liver_conditions = [
        df['BMI'] >= 25,
        df['허리둘레'] >= 95,
        df['총콜레스테롤'] >= 200,
        df['트리글리세라이드'] >= 150,
        df['HDL콜레스테롤'] <= 40,
        df['LDL콜레스테롤'] >= 160,
        df['(혈청지오티)AST'] >= 35,
        df['(혈청지오티)ALT'] >= 40,
        df['감마지티피'] >= 50,
        df['음주여부'] == 1
    ]

    # 궤양성대장염 및 크론병 조건 정의
    uc_cd_conditions = [
        (df['연령대코드(5세단위)'] >= 15) & (df['연령대코드(5세단위)'] <= 35),
        df['BMI'] >= 25,
        df['허리둘레'] >= 95,
        df['혈색소'] <= 12,
        df['혈청크레아티닌'] >= 1.2,
        df['요단백'] >= 2
    ]

    # 간염 조건 정의
    hepatitis_conditions = [
        df['총콜레스테롤'] >= 200,
        df['(혈청지오티)AST'] >= 35,
        df['(혈청지오티)ALT'] >= 40,
        df['감마지티피'] >= 50,
        df['음주여부'] == 1
    ]

    # 위식도역류질환 조건 정의
    gerd_conditions = [
        df['BMI'] >= 25,
        df['허리둘레'] >= 95,
        df['흡연상태'] == 1,
        df['음주여부'] == 1
    ]

    # 고혈압 조건 정의
    hypertension_conditions = [
        df['수축기혈압'] >= 130,
        df['이완기혈압'] >= 80,
        df['BMI'] >= 25,
        df['허리둘레'] >= 95,
        df['총콜레스테롤'] >= 200,
        df['트리글리세라이드'] >= 150,
        df['HDL콜레스테롤'] <= 40,
        df['LDL콜레스테롤'] >= 160,
        df['흡연상태'] == 1
    ]

    # 협심증 조건 정의
    angina_conditions = [
        df['수축기혈압'] >= 130,
        df['이완기혈압'] >= 80,
        df['총콜레스테롤'] >= 240,
        df['트리글리세라이드'] >= 150,
        df['HDL콜레스테롤'] <= 40,
        df['LDL콜레스테롤'] >= 160,
        df['흡연상태'] == 1
    ]

    # 심근경색증 조건 정의
    myocardial_infarction_conditions = [
        df['수축기혈압'] >= 130,
        df['이완기혈압'] >= 80,
        df['총콜레스테롤'] >= 240,
        df['트리글리세라이드'] >= 150,
        df['HDL콜레스테롤'] <= 40,
        df['LDL콜레스테롤'] >= 160,
        df['흡연상태'] == 1
    ]

    # 당뇨병 조건 정의
    diabetes_conditions = [
        df['식전혈당(공복혈당)'] >= 126,
        df['총콜레스테롤'] >= 200,
        df['트리글리세라이드'] >= 150,
        df['HDL콜레스테롤'] <= 40,
        df['LDL콜레스테롤'] >= 160,
        df['혈청크레아티닌'] >= 1.2,
        df['요단백'] >= 2
    ]

    # 비염 조건 정의
    rhinitis_conditions = [
        (df['연령대코드(5세단위)'] >= 15) & (df['연령대코드(5세단위)'] <= 35),
        df['시력(좌)'] <= 0.5,
        df['시력(우)'] <= 0.5,
        df['흡연상태'] == 1,
        df['구강검진수검여부'] == 0
    ]

    # 각 질병에 대해 판단 후 값을 설정
    # df['지방간'] = df.apply(lambda row: 1 if check_conditions(fatty_liver_conditions) else 0, axis=1)
    # df['궤양성대장염 및 크론병'] = df.apply(lambda row: 1 if check_conditions(uc_cd_conditions) else 0, axis=1)
    # df['간염'] = df.apply(lambda row: 1 if check_conditions(hepatitis_conditions) else 0, axis=1)
    # df['위식도역류질환'] = df.apply(lambda row: 1 if check_conditions(gerd_conditions) else 0, axis=1)
    # df['고혈압'] = df.apply(lambda row: 1 if check_conditions(hypertension_conditions) else 0, axis=1)
    # df['협심증'] = df.apply(lambda row: 1 if check_conditions(angina_conditions) else 0, axis=1)
    # df['심근경색증'] = df.apply(lambda row: 1 if check_conditions(myocardial_infarction_conditions) else 0, axis=1)
    # df['당뇨병'] = df.apply(lambda row: 1 if check_conditions(diabetes_conditions) else 0, axis=1)
    # df['비염'] = df.apply(lambda row: 1 if check_conditions(rhinitis_conditions) else 0, axis=1)

    # 각 질병에 대해 판단 후 값을 설정

    df['지방간'] = (sum(fatty_liver_conditions) >= len(fatty_liver_conditions)/2).astype(int)
    df['궤양성대장염 및 크론병'] = (sum(uc_cd_conditions) >= len(uc_cd_conditions)/2).astype(int)
    df['간염'] = (sum(hepatitis_conditions) >= len(hepatitis_conditions)/2).astype(int)
    df['위식도역류질환'] = (sum(gerd_conditions) >= len(gerd_conditions)/2).astype(int)
    df['고혈압'] = (sum(hypertension_conditions) >= len(hypertension_conditions)/2).astype(int)
    df['협심증'] = (sum(angina_conditions) >= len(angina_conditions)/2).astype(int)
    df['심근경색증'] = (sum(myocardial_infarction_conditions) >= len(myocardial_infarction_conditions)/2).astype(int)
    df['당뇨병'] = (sum(diabetes_conditions) >= len(diabetes_conditions)/2).astype(int)
    df['비염'] = (sum(rhinitis_conditions) >= len(rhinitis_conditions)/2).astype(int)

    df.to_csv(f'label_filtered_split_data_{i + 1}.csv', index=False, encoding='EUC-KR')
