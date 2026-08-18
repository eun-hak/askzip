# 콘텐츠 발행 큐

자동 발행 루틴이 위에서부터 순서대로 소비합니다. 형식: `- [ ] slug | 제목안 | 연결 slug | 핵심 포인트`
발행 완료 시 `- [x]`로 바꾸고 끝에 `(발행 YYYY-MM-DD)` 기입.

## 대기

- [x] digital-wallet-rejected | 전자문서지갑으로 냈는데 기관이 안 받아줄 때 — 전자증명서 거부 대처법 | resident-registration-copy, family-relation-certificate | 전자증명서 법적 효력 근거 / 거부 시 즉시 대안(PDF·무인발급기) / 지원 서류 vs 미지원 서류 (발행 2026-08-18)
- [ ] iros-search-fail | 등기부등본이 주소로 검색 안 될 때 — 도로명·지번·신축 케이스별 해결 | real-estate-registration-certificate, building-register | 도로명은 건물에만 부여 / 신축은 보존등기 전 조회 불가 / 건축물대장·고유번호 우회
- [ ] kiosk-fingerprint-fail | 무인발급기 지문인증이 계속 실패할 때 — 원인과 우회 경로 | resident-registration-copy, seal-certificate | 실패 원인별 현장 대처 / 정부24 비대면 지문 재등록 / 모바일 신분증 등 대안
- [ ] nhis-refund-smishing | "건강보험 환급금 확인하세요" 문자, 진짜와 사기 구분법 | tax-refund-check, dormant-money-check | 공단·국세청은 URL 문자 안 보냄 / 공식 확인 경로 목록 / 링크 눌렀을 때 즉시 대처
- [ ] gov24-print-refund | 정부24 수수료 결제됐는데 출력이 안 될 때 — 재출력과 환불 절차 | resident-registration-copy, seal-certificate | 미출력 문서 재출력 메뉴·기한 / 환불 신청 절차 / 출력 실패 예방 설정

- [ ] delegation-form-rejected | 주민센터 위임장, 왜 반려될까 — 대리발급 위임장의 서식·자필·도장 요건 | seal-certificate, resident-registration-copy | 서류별 지정 서식 필수 / 자필+도장 요건 / 인감 위임장은 별도 요건
- [ ] moving-report-mistake | 정부24 전입신고 잘못 썼을 때 — 처리상태별 취소·정정 방법 | resident-registration-copy, resident-registration-abstract | 처리상태별 3갈래 대응 / 세대주 확인 8일 자동취소 / 수정 불가·취소 후 재신청 원칙
- [ ] sibling-document-issuance | 형제자매 등본·가족관계증명서는 왜 인터넷으로 못 뗄까 | family-relation-certificate, resident-registration-copy | 온라인 발급은 직계·배우자만 / 형제자매는 방문+위임장 / 등본·가족관계증명서 권한 차이
- [ ] basic-pension-history-management | 기초연금 탈락해도 끝이 아니다 — 수급희망 이력관리제와 2026년 7월 자동심사 개편 | basic-pension, national-pension-history | 이력관리 5년 자동 조사 / 2026.7 간주신청제 개편 / 과거 탈락자가 지금 할 일
- [ ] seizure-protected-account | 압류방지통장 개설이 안 될 때 — 대상·거절 사유·이미 압류된 경우 | basic-pension, emergency-welfare-support | 급여별 전용통장·1인 1계좌 / 창구 거절 사유 / 기존 압류 소급 보호 안 됨·생계비계좌 차이
- [ ] deceased-family-affairs | 가족 사망 후 명의 정리 순서 — 휴대폰·자동이체·안심상속 6개월 기한 | family-relation-certificate, dormant-money-check | 안심상속 기한·경과 시 대안 / 통신사 사망 해지 서류 / 자동이체·공과금 정리 순서
- [ ] voluntary-continuous-insurance | 퇴사 후 건강보험료 고지서가 이상할 때 — 임의계속가입 2개월 기한과 조정신청 | health-insurance-loss-date-delay, four-major-insurance-history | 임의계속 2개월 기한·1년 요건 / 조정신청 대상·증빙 / 피부양자 포함 세 갈래 비교
- [ ] minor-child-documents | 미성년 자녀 서류, 부모가 대신 발급하는 법 | resident-registration-copy, family-relation-certificate | 부모 등본으로 충분한 경우 구분 / 자녀 인증수단 없으면 온라인 불가·대안 / 기본증명서 상세·특정 차이
- [ ] auto-debit-still-charged | 자동이체 해지했는데 돈이 계속 빠져나갈 때 — 원인·차단·환불 | telecom-unrefunded-fee, dormant-money-check | 해지 후 출금되는 구조적 원인 / 페이인포 일괄 조회·해지 / 오류 정정·환불 절차
