export type PricePoint = {
  time: string;
  value: number;
};

export type StockMetric = {
  label: string;
  valueUsd: number;
  hint?: string;
};

export type StockSnapshot = {
  symbol: string;
  name: string;
  market: string;
  description: string;
  priceUsd: number;
  changeUsd: number;
  changePercent: number;
  openUsd: number;
  highUsd: number;
  lowUsd: number;
  previousCloseUsd: number;
  volume: number;
  turnoverUsd: number;
  terms: string[];
  primaryMetrics: StockMetric[];
  valuationMetrics: StockMetric[];
};

export type NewsItem = {
  id: string;
  headline: string;
  publisher: string;
  timestamp: string;
  tag: string;
  summary: string;
};

export type MarketVoice = {
  id: string;
  author: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  avatarColor: string;
};

export type CommunityPost = {
  id: string;
  author: string;
  sentiment: "bullish" | "neutral" | "bearish";
  title: string;
  content: string;
  upvotes: number;
  comments: number;
  updatedAt: string;
};

export type MarketSnapshot = {
  exchangeRate: number;
  featuredStock: StockSnapshot;
  chart: PricePoint[];
  news: NewsItem[];
  voices: MarketVoice[];
  community: CommunityPost[];
  searchPlaceholders: string[];
};

const usdToKrwRate = 1387.45;

const baseChart: PricePoint[] = [
  { time: "2024-05-01", value: 186.2 },
  { time: "2024-05-15", value: 189.8 },
  { time: "2024-06-01", value: 197.2 },
  { time: "2024-06-15", value: 201.6 },
  { time: "2024-07-01", value: 207.1 },
  { time: "2024-07-15", value: 212.4 },
  { time: "2024-08-01", value: 219.3 },
  { time: "2024-08-15", value: 226.7 },
  { time: "2024-09-01", value: 229.2 },
  { time: "2024-09-15", value: 231.5 },
  { time: "2024-10-01", value: 235.1 },
  { time: "2024-10-15", value: 241.4 },
  { time: "2024-11-01", value: 247.8 },
  { time: "2024-11-15", value: 256.1 },
  { time: "2024-12-01", value: 262.4 },
  { time: "2024-12-15", value: 271.3 },
  { time: "2025-01-01", value: 278.2 },
  { time: "2025-01-15", value: 284.6 },
];

const featuredStock: StockSnapshot = {
  symbol: "NVDA",
  name: "NVIDIA Corporation",
  market: "NASDAQ · 반도체",
  description:
    "AI 인프라와 엣지 컴퓨팅을 동시에 주도하는 NVIDIA는 데이터센터와 게이밍, 자율주행 SoC 시장에서 수직계열 생태계를 구축했습니다.",
  priceUsd: 284.6,
  changeUsd: 6.4,
  changePercent: 2.29,
  openUsd: 279.1,
  highUsd: 287.3,
  lowUsd: 274.8,
  previousCloseUsd: 278.2,
  volume: 48200000,
  turnoverUsd: 13.7e9,
  terms: ["PER", "PBR", "EPS", "PSR", "시가총액", "거래대금", "변동성"],
  primaryMetrics: [
    { label: "시가총액", valueUsd: 2.1e12 },
    { label: "거래대금", valueUsd: 13.7e9 },
    { label: "52주 최고가", valueUsd: 292.1 },
    { label: "52주 최저가", valueUsd: 138.9 },
  ],
  valuationMetrics: [
    { label: "PER", valueUsd: 74.2 },
    { label: "PBR", valueUsd: 39.8 },
    { label: "EPS", valueUsd: 3.52 },
    { label: "PSR", valueUsd: 32.4 },
  ],
};

const news: NewsItem[] = [
  {
    id: "news-1",
    headline: "미 상원, AI 인프라 세액공제 가속 추진",
    publisher: "Bloomberg",
    timestamp: "08:35",
    tag: "Policy",
    summary:
      "AI 모듈러 데이터센터 투자를 20% 세액 공제 대상으로 포함하는 법안이 가결되며 하이엔드 GPU 수요가 추가로 증가할 전망입니다.",
  },
  {
    id: "news-2",
    headline: "삼성·TSMC, 차세대 CoWoS 라인 2배 증설",
    publisher: "Seoul Economy",
    timestamp: "07:55",
    tag: "Supply Chain",
    summary:
      "AI 패키징 병목을 해소하기 위해 2025년까지 CoWoS 라인을 2배 이상 증설, 주요 고객사로 NVIDIA·AMD가 포함되었습니다.",
  },
  {
    id: "news-3",
    headline: "유럽계 완성차, 대규모 OTA GPU 공급 계약",
    publisher: "Financial Times",
    timestamp: "07:12",
    tag: "Auto",
    summary:
      "독일 OEM 3곳이 OTA 업그레이드를 위해 NVIDIA DRIVE 플랫폼을 채택하며, IVI·ADAS 통합형 칩셋 매출이 본격 반영될 예정입니다.",
  },
  {
    id: "news-4",
    headline: "미국 연기금, AI 인프라 ETF 12억 달러 매수",
    publisher: "WSJ",
    timestamp: "06:40",
    tag: "Flow",
    summary:
      "캘리포니아 연기금이 GPU 공급망 ETF를 대규모로 매수하며 관련 우량 종목들의 추세적 수급이 확인되었습니다.",
  },
];

const voices: MarketVoice[] = [
  {
    id: "voice-1",
    author: "AllianceBernstein",
    title: "AI Capex Cycle 2.0",
    excerpt:
      "2025년에도 하이퍼스케일러 CAPEX는 두 자릿수 증가세를 유지하며, GPU→Inference→Edge로 이어지는 신규 TAM이 열리고 있습니다.",
    publishedAt: "오늘",
    avatarColor: "#6AA84F",
  },
  {
    id: "voice-2",
    author: "Tiger Global",
    title: "데이터센터 전력 구조 전환",
    excerpt:
      "미국 5대 전력기업이 2026년까지 35GW의 신규 전력 인입을 확정, 장비 리드타임은 여전히 42주 이상입니다.",
    publishedAt: "2시간 전",
    avatarColor: "#5CC9F5",
  },
  {
    id: "voice-3",
    author: "Fidelity",
    title: "AI PC 업그레이드 사이클",
    excerpt:
      "고성능 NPU가 탑재된 AI PC가 연내 7천만 대 이상 출하될 것으로 추정되며, 게이밍 GPU 교체 수요도 동반 확대되고 있습니다.",
    publishedAt: "어제",
    avatarColor: "#F8B400",
  },
];

const community: CommunityPost[] = [
  {
    id: "community-1",
    author: "데이터센터PM",
    sentiment: "bullish",
    title: "하이퍼스케일러 CAPEX 가이던스 상향",
    content:
      "Azure와 AWS 모두 2025 CAPEX를 20% 이상 상향하며 GPU 확보 속도를 유지한다고 언급했습니다. 공급 체인의 레버리지 확대 구간이라고 판단합니다.",
    upvotes: 287,
    comments: 46,
    updatedAt: "방금",
  },
  {
    id: "community-2",
    author: "GrowthHedge",
    sentiment: "neutral",
    title: "차트상 단기 과열 체크",
    content:
      "RSI 79 수준이라 단기 조정은 염두에 둬야 하지만, 옵션 볼륨과 펀더멘털 추세가 버티는 이상 깊은 조정은 제한적일 것으로 봅니다.",
    upvotes: 123,
    comments: 18,
    updatedAt: "1시간 전",
  },
  {
    id: "community-3",
    author: "퀀트러",
    sentiment: "bearish",
    title: "마진 압력 리스크 리마인드",
    content:
      "NVIDIA의 gross margin은 72%로 사상 최고치입니다. HPC 재고가 누적되면 스프레드 축소 리스크가 존재하기 때문에 밸류에이션에 버퍼가 필요합니다.",
    upvotes: 88,
    comments: 9,
    updatedAt: "3시간 전",
  },
];

const searchPlaceholders = [
  "NVDA, AMD, LLY, KO...",
  "AI 데이터센터 ETF",
  "환율 1,350원 돌파 시나리오",
];

const stockMap: Record<string, StockSnapshot> = {
  [featuredStock.symbol]: featuredStock,
  AAPL: {
    ...featuredStock,
    symbol: "AAPL",
    name: "Apple Inc.",
    market: "NASDAQ · IT 하드웨어",
    description:
      "서비스·웨어러블·AI 디바이스 결합으로 하이브리드 구독형 모델을 구축하며, Vision Pro 생태계 확장을 준비하고 있습니다.",
    priceUsd: 214.8,
    changeUsd: -1.3,
    changePercent: -0.6,
  },
  MSFT: {
    ...featuredStock,
    symbol: "MSFT",
    name: "Microsoft Corporation",
    market: "NASDAQ · 소프트웨어",
    description:
      "Copilot·Azure 오픈 모델 결합으로 AI 워크로드를 흡수하며, 데이터·보안·업무 앱까지 연결된 플랫폼 파워를 보유합니다.",
    priceUsd: 418.2,
    changeUsd: 3.1,
    changePercent: 0.75,
  },
};

const snapshot: MarketSnapshot = {
  exchangeRate: usdToKrwRate,
  featuredStock,
  chart: baseChart,
  news,
  voices,
  community,
  searchPlaceholders,
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMarketSnapshot(): Promise<MarketSnapshot> {
  await wait(450);
  return snapshot;
}

export async function getStockBySymbol(symbol: string): Promise<StockSnapshot> {
  await wait(350);
  const target = stockMap[symbol.toUpperCase()];
  if (!target) {
    return featuredStock;
  }
  return target;
}

export async function getMarketNews(): Promise<NewsItem[]> {
  await wait(400);
  return news;
}

export async function getCommunityFeed(): Promise<CommunityPost[]> {
  await wait(420);
  return community;
}

export { usdToKrwRate };
