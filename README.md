# Health Data Science Project (HYU) - Fall 2024

## Overview
This project focuses on utilizing health data from NHIS and pharmaceutical information to develop machine learning models. Key tasks include training models on patient data, data labeling for disease-specific analyses, and developing an LLM-based pharmaceutical recommendation model.

---

## Key Tasks
Training and Testing Dataset Composition

### [ ] Data: NHIS_OPEN_GJ_2017_100.csv
Approach:
Split into a 4:1 ratio for training and test datasets
Perform 3:1 k-fold validation to evaluate model performance
Labeling Entire Dataset

### [ ] Data: NHIS_OPEN_GJ_2017_100.csv, 질병 별 참고 데이터.xlsx
Approach:
Label entire dataset based on disease-specific reference data
LLM-Based Pharmaceutical Recommendation Model Development

### [ ] Data: IROS_239_의약품개요정보(e약은요) 서비스_v1.0.docx
Approach:
Develop an LLM-based model focusing on drug efficacy, usage, and contraindications

---

## Data Sources

### 1. NHIS_OPEN_GJ_2017_100.csv
- **Source**: HYU Health Data Science course material
- **Description**: Patient health data
- **Usage**:
  - Split into a 4:1 ratio for training and testing
  - 3:1 k-fold validation

### 2. 질병 별 참고 데이터.xlsx
- **Source**: Health Insurance Review & Assessment Service (심평원) statistics, "생활 속 질병/진료 행위 통계"
- **Description**: Covers 83 diseases, with focus on 10 major diseases
- **Usage**:
  - Used for diagnosis reference per disease
  - Numeric data investigation required for labeling

### 3. IROS_239_의약품개요정보(e약은요) 서비스_v1.0.docx
- **Source**: Drug information from the 'e약은요' service
- **Description**: Contains details such as product name, active ingredients, dosage, warnings, and side effects
- **Usage**: For LLM-based pharmaceutical recommendation model

Example data snippet:
```xml
<item>
    <entpName>삼진제약(주)</entpName>
    <itemName>아네모정</itemName>
    <itemSeq>195900043</itemSeq>
    <efcyQesitm>이 약은 위산과다, 속쓰림, 위부불쾌감, 위부팽만감, 체함, 구역, 구토, 위통, 신트림에 사용합니다.</efcyQesitm>
    <useMethodQesitm>성인 1회 2정, 1일 3회 식간 및 취침시에 복용합니다.</useMethodQesitm>
    <atpnQesitm>투석요법을 받고 있는 환자는 이 약을 복용하지 마십시오...</atpnQesitm>
    <intrcQesitm>위장진통ㆍ진경제, 테트라사이클린계 항생제와 함께 복용하지 마십시오.</intrcQesitm>
    <seQesitm>발진, 가려움, 입 마름 등의 부작용이 나타날 수 있습니다.</seQesitm>
    <depositMethodQesitm>어린이 손이 닿지 않는 곳에 보관하십시오.</depositMethodQesitm>
</item>
