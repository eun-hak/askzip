# 안내글 콘텐츠 관리

로컬 TypeScript 파일로 안내글을 관리합니다. DB·CMS 없이 Git으로 버전 관리할 수 있습니다.

## 새 글 추가 방법

1. `_template.ts`를 복사해 `{slug}.ts`로 저장 (예: `driver-license-renewal.ts`)
2. `index.ts`에 import 한 줄 추가
3. `index.ts`의 `articles` 배열 해당 카테고리 섹션에 추가
4. `relatedSlugs`가 다른 글을 참조하면 해당 slug도 확인

## 파일 구조

```
src/data/
├── types.ts              # Article, ContentBlock 타입
├── categories.ts         # 카테고리 (글 수는 자동 계산)
├── articles.ts           # re-export (기존 import 경로 유지)
└── articles/
    ├── index.ts          # 전체 글 목록 + 조회 함수
    ├── _template.ts      # 새 글 작성 템플릿
    └── {slug}.ts         # 글 1개 = 파일 1개
```

## 본문 블록 타입

| type | 용도 |
|------|------|
| `paragraph` | 일반 문단 |
| `h2` | 소제목 (id 필수 → 목차 연동) |
| `steps` | 단계별 안내 |
| `faq` | 자주 묻는 질문 |
| `table` | 표 |
| `warning` | 주의/면책 |
| `tip` | 팁 |
| `notice` | 참고 안내 |

## 카테고리 slug

- `civil-documents` — 민원서류 발급
- `tax-payment` — 세금·납부
- `living-support` — 생활지원금
- `inquiry-service` — 조회서비스
