# 배포 캘린더 & 재신청 로드맵

일괄 배포는 Scaled Content Abuse(대량 생성) 신호가 되므로, 재작성 글은 **배치 단위로 시간차를 두고 배포**합니다.
날짜는 2026-07-06 작업 기준의 권장안이며, 앞뒤 며칠 밀려도 됩니다. **핵심은 "한 번에 다 올리지 않는 것"과 "updatedAt을 실제 배포일로 맞추는 것"입니다.**

## 1. 배포 순서

| 주차 | 기간 | 배포 내용 |
|------|------|-----------|
| 0주차 | 7/6 ~ 7/8 | 구조 변경(terms·disclaimer·저자·계산기 3종) + **배치 1** (핵심 10개) |
| 1주차 | 7/13 ~ 7/17 | **배치 2** 중 5개 (주 초 2~3개 / 주 후반 2~3개로 쪼개면 더 좋음) |
| 2주차 | 7/20 ~ 7/24 | 배치 2 나머지 5개 |
| 3주차 | 7/27 ~ 7/31 | **배치 3** 중 5개 + 배치 1 글에 스크린샷 삽입 시작 |
| 4주차 | 8/3 ~ 8/7 | 배치 3 나머지 5개 |
| 5주차 | 8/10 ~ 8/14 | **배치 4** 중 5개 |
| 6주차 | 8/17 ~ 8/21 | 배치 4 나머지 5개 + 전 글 스크린샷 마무리 |
| 7~8주차 | 8/24 ~ 9/4 | 신규 글 주 2편 발행(실제 작성일 = publishedAt), 색인·유입 모니터링 |
| 9주차~ | 9/7 이후 | 재신청 전 체크리스트 통과 시 **애드센스 재신청** |

## 1-1. 배치 구성

| 배치 | 글 (slug) |
|------|-----------|
| 배치 1 (핵심) | resident-registration-copy · resident-registration-abstract · family-relation-certificate · health-insurance-eligibility-certificate · earned-income-credit · car-tax-annual-prepay · year-end-tax-settlement · unemployment-benefit · youth-rent-support · seal-certificate |
| 배치 2 (세금·증명) | comprehensive-income-tax · cash-receipt · income-amount-certificate · local-tax-certificate · acquisition-tax · property-tax-payment · hometax-payment-statement · value-added-tax · tax-refund-check · health-insurance-payment-proof |
| 배치 3 (지원금·부동산) | child-tax-credit · basic-pension · parental-childcare-benefit · national-employment-support · energy-voucher · youth-future-savings · national-scholarship · emergency-welfare-support · building-register · real-estate-registration-certificate |
| 배치 4 (조회·기타) | telecom-unrefunded-fee · four-major-insurance-history · national-pension-history · dormant-money-check · traffic-fine-check · car-inspection-check · card-point-check · land-register · driving-record-certificate · immigration-fact-certificate |

## 2. 배치별 배포 절차 (매번 동일)

1. 해당 배치 글들의 `updatedAt`을 **배포하는 날 날짜**로 수정
   ```bash
   # 예: 배치 2의 글 5개를 오늘 날짜로
   cd src/data/articles
   for f in comprehensive-income-tax.ts cash-receipt.ts income-amount-certificate.ts local-tax-certificate.ts acquisition-tax.ts; do
     sed -i '' "s/updatedAt: '[0-9-]*'/updatedAt: '$(date +%F)'/" "$f"
   done
   ```
2. `npm run build` 로 확인 후 커밋·푸시 (배포)
3. Search Console → 해당 URL 색인 요청 (하루 몇 개씩)

> 주의: 배포하지 않은 배치의 글은 커밋을 미뤄 두거나(스테이징), 배포 전까지 updatedAt을 건드리지 않습니다. **미래 날짜·과거 소급 날짜 입력 금지** — 날짜 조작이 이번 거절 원인 중 하나였습니다.

## 3. 매주 해야 할 운영 루틴

- Search Console: 색인 커버리지 확인, 새 글 색인 요청
- 실제 발급/신청 1~2건 수행 → 스크린샷 촬영·삽입 (docs/screenshot-guide.md)
- 촬영 중 실제로 막힌 지점 → 해당 글 `TODO(경험담)` 슬롯 채우기
- 애드센스 관련 작업 이력은 이 파일 하단 「진행 로그」에 한 줄씩 기록

## 4. 재신청 전 체크리스트 (전부 충족 후 신청)

- [ ] 전 40개 글 확장본 배포 완료 + 핵심 15개 이상에 실제 스크린샷 2장 이상
- [ ] `AUTHOR_NAME` 실명/필명 교체 완료 (src/lib/site.ts)
- [ ] 경험담 슬롯: 핵심 글 10개 이상 채움
- [ ] Search Console 색인: 유효 페이지가 전체 페이지의 80% 이상
- [ ] 일 자연 검색 유입 발생 중 (최소한 0이 아닐 것, 권장 일 30명+)
- [ ] 마지막 콘텐츠 변경 후 1주 이상 안정 상태
- [ ] 거절일(2026-07-05경)로부터 최소 8주 경과

## 5. 재신청 후

- 심사 중 사이트 대규모 변경 금지 (신규 글 발행은 계속)
- 재거절 시: 사유를 기록하고, 같은 사유면 콘텐츠 방향(도구·경험 중심)을 더 강화한 뒤 4주+ 후 재시도

## 진행 로그

| 날짜 | 작업 |
|------|------|
| 2026-07-06 | 구조 개편(약관·면책·저자·이미지 블록·계산기 3종) + 전 40개 글 확장 재작성 완료 (평균 1,473→3,087자). 빌드 65페이지 검증 |
| 2026-07-07 | **0주차 배포**: 구조 개편 + 배치 1(10편, 이미지 10장) + 잔여 글 날짜 정직화 → main 푸시. 배치 2~4는 `content-batches` 브랜치에 보관 (배포 시 해당 글만 main에 반영 + updatedAt 갱신) |
| 2026-07-07 | 운영자 실경험 3건 반영 (등본·건보 자격득실·실업급여) |
| 2026-07-13 | **1주차 배포**: 배치 2 세금·증명 10편 (평균 3,007자) → main 푸시. 배포 후 Search Console 색인 요청 필요 |
