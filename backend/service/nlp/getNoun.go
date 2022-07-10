package nlp

import (
	"github.com/ikawaha/kagome-dict/ipa"
	"github.com/ikawaha/kagome/v2/tokenizer"

	"backend/typefile"
	// "fmt"
)

func GetNoun(sentence string)(typefile.MorphologicalResponse){
	var mr typefile.MorphologicalResponse

	t, err := tokenizer.New(ipa.Dict(), tokenizer.OmitBosEos())
	if err != nil {
		panic(err)
	}
	tokens := t.Tokenize(sentence)

    mr.Nouns = map[string]int{}
    for _, token := range tokens {
        features := token.Features()
        // 名詞だけ残す
        if len(features) == 0 || features[0] != "名詞" {
            continue
        }
        _, ok := mr.Nouns[token.Surface]
        if ok {
            mr.Nouns[token.Surface]++
        } else {
            mr.Nouns[token.Surface] = 1
        }
    }

    return mr
}