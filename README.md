# Moneytoring 리디자인

Moneytoring는 기존 서비스의 정보 구조를 유지하면서 Figma 시안을 그대로 반영한 Next.js 16 기반의 재설계 버전입니다. 연한 라임톤 라이트 테마와 VSCode 다크 테마 느낌의 다크 모드를 모두 지원하며, 환율 변환·용어 도움말·TradingView Lightweight Charts 기반의 실시간 레이아웃을 구현했습니다.

## 핵심 기능

- **테마 전환**: 헤더 우측의 토글로 라이트/다크 모드 전환 및 로컬 스토리지 동기화, 로고 컬러 자동 변경.
- **통화 전환**: 가격/지표 영역에 `₩/$` 토글을 배치해 모든 금액을 USD↔KRW 실시간 환산.
- **용어 도움말**: 용어 사전(`src/data/glossary.ts`)을 기반으로 PER·PBR 등 주요 지표 설명을 모달 패널로 제공.
- **TradingView Lightweight Chart**: 통합 차트는 라이트/다크 색상 테마에 맞춰 동적으로 스타일을 변경하며 기간 필터 제공.
- **모듈화된 섹션**: 검색 히어로, 종목 요약, 뉴스/마켓보이스, 커뮤니티 패널을 재사용 가능한 컴포넌트로 분리.
- **커스텀 로딩 스피너**: 머니터링 로고가 회전하는 `LoadingLogo`를 App Router `loading.tsx` 전역과 개별 페이지에서 공통 사용.

## 기술 스택

- **Framework**: Next.js 16 (App Router, React 19)
- **Styling**: Tailwind CSS v4 + CSS 변수를 활용한 커스텀 테마
- **Charts**: `lightweight-charts`
- **Icons**: `lucide-react`

## 프로젝트 구조

```
src/
├─ app/                   # Next.js App Router 페이지
│  ├─ page.tsx            # 메인 대시보드
│  ├─ news/               # 뉴스 리스트 페이지
│  ├─ community/          # 커뮤니티 피드
│  └─ stocks/[symbol]/    # 종목 상세 (Mock)
├─ components/            # 공통 레이아웃/섹션/Provider
├─ context/               # Theme & Currency 컨텍스트
├─ data/                  # Mock 데이터 및 용어 사전
└─ app/globals.css        # 테마 토큰, 전역 스타일
```

`src/data/mock-market.ts`는 API 교체 시 동일한 shape을 유지하도록 설계된 Mock API 역할을 합니다. 실제 공개 시세/환율 API를 연결할 때에는 해당 파일의 fetch 함수만 교체하면 됩니다.

## 개발 방법

```bash
npm install      # 의존성 설치
npm run dev      # http://localhost:3000
npm run lint     # ESLint 검사
npm run build    # Vercel 배포 전 검증
```

### 환경 변수

기본 환율은 `CurrencyProvider`의 `usdToKrwRate` prop으로 주입되며, `.env.local`에 `NEXT_PUBLIC_MOCK_USD_KRW=1387.45` 와 같이 값을 지정하면 자동으로 반영됩니다. 추후 실제 환율 API를 연결할 경우 해당 Provider에 fetch 로직을 추가하면 됩니다.

## Vercel 배포

1. 새 Vercel 프로젝트를 생성하고 Git 저장소를 연결합니다.
2. **Framework Preset**을 `Next.js`로 선택하고 환경 변수가 있다면 `NEXT_PUBLIC_MOCK_USD_KRW` 등을 추가합니다.
3. 기본 빌드 명령(`npm run build`)과 출력 디렉토리(`.vercel/output` 자동)를 그대로 사용합니다.
4. 배포 후 `https://your-project-name.vercel.app` 로 접속해 라이트/다크 모드, 통화 전환, 도움말, 차트 렌더링을 확인합니다.

## Mock 데이터 확장

- 종목 추가: `stockMap`에 티커를 추가하고 `getStockBySymbol`이 해당 데이터를 반환하도록 구성합니다.
- 뉴스/마켓보이스/커뮤니티: 각각 `news`, `voices`, `community` 배열을 수정하면 되고, 실제 API 연결 시 동일한 타입으로 값을 반환하면 UI가 그대로 동작합니다.
- 용어 설명: `src/data/glossary.ts`의 배열만 수정하면 도움말 패널이 즉시 업데이트됩니다.

이 구조를 기반으로 실제 API 연동과 Vercel 프로덕션 배포를 손쉽게 진행할 수 있습니다.
