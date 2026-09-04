# 콘텐츠 발행 큐

예약 발행 방식: 글의 `publishedAt`을 미래 날짜로 지정하면 `src/data/articles/index.ts` 필터가 그날까지 숨기고,
`.github/workflows/daily-publish.yml`이 매일 재빌드를 트리거해 자동 공개합니다.
형식: `- [ ] slug | 제목안 | 연결 slug | 핵심 포인트`. 예약 완료 시 `- [x]` + `(예약발행 YYYY-MM-DD)`.

## 3차 (2026-09, 격일 발행 — 심사 기간 중 운영 지속용)

- [x] car-transfer-seller-proxy | 차를 팔았는데 상대가 명의이전을 안 해줄 때 — 양도인 대위등록 | car-tax-annual-prepay, traffic-fine-check, car-inspection-check | 대위등록 요건·서류·창구 / 이전 전 세금·과태료 귀속과 정정 / 대위등록 후에도 남는 문제(보험·저당·번호판) (예약발행 2026-09-04)
- [x] school-entry-notice | 취학통지서가 오기 전에 알아야 할 것 — 예비소집·취학유예·해외체류 | minor-child-documents, resident-registration-copy, family-relation-certificate | 명부는 주민등록 기준(주소 오류 정정) / 유예 vs 면제 차이 / 예비소집 불참 시 확인 절차 (예약발행 2026-09-06)
- [x] residence-unknown-registration | 주민등록 사실조사 후 '거주불명 등록' 통지를 받았다면 | resident-registration-copy, moving-report-mistake, resident-registration-abstract | 이의신청 vs 전입신고 두 갈래 / 거주불명 상태에서 막히는 행정 / 자진신고 과태료 감경 (예약발행 2026-09-08)
- [x] unemployment-pension-credit | 실업급여 받는 동안 국민연금 채우는 법 — 실업크레딧은 자동이 아니다 | unemployment-benefit, national-pension-history, national-employment-support | 별도 신청·기한 / 제외 대상 기준 / 본인 부담 구조와 판단 기준 (예약발행 2026-09-10)
- [x] energy-voucher-overlap | 에너지바우처·등유바우처·연탄쿠폰은 왜 하나만 되나 | energy-voucher, emergency-welfare-support, basic-pension | 중복 불가 조합 / 난방 방식 변경 시 전환 절차 / 잘못 받았을 때 정정·반납 (예약발행 2026-09-12)
- [x] lease-report-fixed-date | 임대차 신고를 했는데 확정일자가 안 붙었을 때 | real-estate-registration-certificate, iros-search-fail, moving-report-mistake | 자동 부여 예외 조건 / 신고필증에서 확인하는 위치 / 부여현황 사후 확인 (예약발행 2026-09-14)
- [x] utility-discount-reapply | 이사했더니 전기·가스 요금 할인이 끊겼을 때 | energy-voucher, emergency-welfare-support, moving-report-mistake | 감면은 주소·자격에 붙어 승계 안 됨 / 전입신고 동시신청 + 도시가스사 별도 통보 / 소급 불가 범위 (예약발행 2026-09-16)
- [x] health-checkup-target-check | 건강검진 대상인데 조회가 안 될 때 — 이직·퇴사한 해의 대상자 판정 | health-insurance-eligibility-certificate, four-major-insurance-history, health-insurance-loss-date-delay | 조회 불가 3대 원인 / 대상자 변경 신청 창구 / 과태료 부과 구조 ※행정 절차만, 검진 항목·건강 조언 금지 (예약발행 2026-09-18)
- [x] subsidy24-missing-benefits | 보조금24에 내가 받을 지원금이 안 뜰 때 | emergency-welfare-support, youth-rent-support, energy-voucher | 개인 vs 가족 맞춤안내·정보연계 동의 / 분리세대 구성·취소 / 안내≠자격 확정 (예약발행 2026-09-20)
- [x] car-tax-exemption-clawback | 취득세 감면받은 차, 나중에 토해내는 경우 | acquisition-tax, car-tax-annual-prepay, local-tax-certificate | 감면 유형별 요건 / 1년 내 이전·세대분가 추징 구조 / 신청 누락 시 경정청구 (예약발행 2026-09-22)

## 4차 대기 (3차 소진 후)

- [ ] single-parent-certificate | 한부모가족증명서는 왜 아무나 못 떼나 — 지원대상자 선정이 선행
- [ ] dual-job-insurance | 투잡·부업의 4대보험 이중가입과 정산
- [ ] move-in-household-certificate | 전입세대확인서는 정부24로 안 된다
- [ ] business-suspension-vs-closure | 휴업 vs 폐업과 건보료 조정신청

## 완료 (1~2차, 2026-08)

14편 전량 발행 완료 (08-18 ~ 08-31): digital-wallet-rejected · iros-search-fail · kiosk-fingerprint-fail · nhis-refund-smishing · gov24-print-refund · delegation-form-rejected · moving-report-mistake · sibling-document-issuance · basic-pension-history-management · seizure-protected-account · deceased-family-affairs · voluntary-continuous-insurance · minor-child-documents · auto-debit-still-charged
