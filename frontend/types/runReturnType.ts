export interface ResultType {
  result: string;
  what: string;
  why: string;
  how: string;
  waka?: Waka[];
  novel?: Novel[];
  homonym?: Synonyms[];
  synonyms?: Homonym[];
}

interface Waka {
  originWord: string;
  author: string;
  content: string;
  reason: string;
}
interface Novel {
  originWord: string;
  author: string;
  title: string;
  content: string;
  reason: string;
}
// 同音異義語
interface Homonym {
  originWord: string;
  kana: string;
  content: string;
  reason: string;
}
// 類語
interface Synonyms {
  originWord: string;
  content: string;
  reason: string;
}
