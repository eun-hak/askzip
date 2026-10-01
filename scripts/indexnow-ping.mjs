#!/usr/bin/env node
/**
 * IndexNow 핑 — 네이버·Bing 등 참여 검색엔진에 URL 변경을 즉시 알린다.
 * (구글은 IndexNow 미지원. 구글은 sitemap + Search Console 색인 요청으로 처리)
 *
 * 사용법:
 *   node scripts/indexnow-ping.mjs                     오늘(KST) 발행된 글을 자동 탐지해 핑
 *   node scripts/indexnow-ping.mjs /tools/waste-fee /  경로·URL 직접 지정
 *   node scripts/indexnow-ping.mjs --all-tools         홈 + 도구 전체
 *
 * 키 파일: public/<KEY>.txt (내용 = KEY). 스크립트가 자동으로 찾는다.
 * 핑 대상이 없으면 아무것도 보내지 않고 종료한다(불필요한 제출 방지).
 */

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const HOST = 'askzip.kr';
const ORIGIN = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const ARTICLES_DIR = path.join(process.cwd(), 'src', 'data', 'articles');

const TOOL_PATHS = [
  '/',
  '/tools',
  '/tools/document-finder',
  '/tools/waste-fee',
  '/tools/car-tax-calculator',
  '/tools/eitc-calculator',
  '/tools/insurance-calculator',
  '/tools/severance-calculator',
];

/** public/ 에서 32자 hex 키 파일을 찾아 키를 읽는다 */
async function findKey() {
  const files = await readdir(PUBLIC_DIR);
  const keyFile = files.find((f) => /^[0-9a-f]{8,128}\.txt$/i.test(f));
  if (!keyFile) throw new Error('public/ 에 IndexNow 키 파일(.txt)이 없습니다');
  const key = (await readFile(path.join(PUBLIC_DIR, keyFile), 'utf8')).trim();
  if (key !== path.basename(keyFile, '.txt')) {
    throw new Error('키 파일 이름과 내용이 일치하지 않습니다');
  }
  return key;
}

/** 오늘(KST) publishedAt 인 글 슬러그 */
async function todaysArticleSlugs() {
  const today = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
  const files = await readdir(ARTICLES_DIR);
  const slugs = [];
  for (const f of files) {
    if (!f.endsWith('.ts') || f === 'index.ts' || f === '_template.ts') continue;
    const src = await readFile(path.join(ARTICLES_DIR, f), 'utf8');
    const pub = src.match(/publishedAt:\s*'([\d-]+)'/)?.[1];
    const slug = src.match(/slug:\s*'([^']+)'/)?.[1];
    if (pub === today && slug) slugs.push(slug);
  }
  return slugs;
}

function toUrl(p) {
  if (p.startsWith('http')) return p;
  return ORIGIN + (p.startsWith('/') ? p : `/${p}`);
}

async function main() {
  const args = process.argv.slice(2);
  let urls = [];

  if (args.includes('--all-tools')) {
    urls = TOOL_PATHS.map(toUrl);
  } else if (args.length > 0) {
    urls = args.map(toUrl);
  } else {
    const slugs = await todaysArticleSlugs();
    urls = slugs.map((s) => toUrl(`/articles/${s}`));
    if (urls.length > 0) urls.unshift(toUrl('/'));
  }

  if (urls.length === 0) {
    console.log('핑할 URL 없음 — 종료');
    return;
  }

  const key = await findKey();
  const body = {
    host: HOST,
    key,
    keyLocation: `${ORIGIN}/${key}.txt`,
    urlList: urls,
  };

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  // 200 OK / 202 Accepted 가 정상. 그 외는 본문과 함께 보고
  const text = await res.text().catch(() => '');
  console.log(`IndexNow ${res.status} ${res.statusText} — ${urls.length}개 URL`);
  urls.forEach((u) => console.log('  ', u));
  if (![200, 202].includes(res.status)) {
    console.error('응답 본문:', text.slice(0, 500));
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
