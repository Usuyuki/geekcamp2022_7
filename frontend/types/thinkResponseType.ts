export interface ResultType {
  Result: string;
  What: string;
  Why: string;
  How: string;
  Waka?: Waka[];
  Novel?: Novel[];
  Homonym?: Synonyms[];
  Synonyms?: Homonym[];
}

interface Waka {
  OriginWord: string;
  Author: string;
  Content: string;
  Reason: string;
}
interface Novel {
  OriginWord: string;
  Author: string;
  Title: string;
  Content: string;
  Reason: string;
}
// 同音異義語
interface Homonym {
  OriginWord: string;
  Kana: string;
  Content: string;
  Reason: string;
}
// 類語
interface Synonyms {
  OriginWord: string;
  Content: string;
  Reason: string;
}
