export type GlossaryEntry = {
  term: string;
  description: string;
};

const glossary: GlossaryEntry[] = [
  {
    term: "PER",
    description: "주가를 주당순이익으로 나눈 값으로, 기업이 얼마의 이익 대비 어떤 밸류에이션을 받고 있는지 보여줍니다.",
  },
  {
    term: "PBR",
    description: "주가순자산비율로, 기업의 순자산 대비 주가가 얼마나 프리미엄을 받고 있는지 나타냅니다.",
  },
  {
    term: "EPS",
    description: "주당순이익. 기업이 한 주당 벌어들이는 순이익으로, 이익 성장성을 판단하는 핵심 지표입니다.",
  },
  {
    term: "PSR",
    description: "주가매출비율. 매출 규모 대비 밸류에이션을 측정할 때 활용합니다.",
  },
  {
    term: "시가총액",
    description: "발행주식 수에 현재 주가를 곱한 값으로, 기업의 시장가치를 의미합니다.",
  },
  {
    term: "거래대금",
    description: "해당 종목이 일정 기간 동안 거래되며 발생한 전체 금액입니다. 수급을 파악할 수 있습니다.",
  },
  {
    term: "변동성",
    description: "주가가 얼마나 빠르게, 얼마나 크게 움직였는지를 보여주는 지표입니다.",
  },
  {
    term: "Beta",
    description: "시장 전체 대비 개별 종목의 민감도를 파악하는 값입니다.",
  },
  {
    term: "Dividend Yield",
    description: "연간 배당금을 현재 주가로 나눈 값으로, 배당 매력을 의미합니다.",
  },
];

export function getGlossaryByTerms(terms: string[]): GlossaryEntry[] {
  return glossary.filter((entry) => terms.includes(entry.term));
}

export default glossary;
