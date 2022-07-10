package service;nlp

import (
	"fmt"
	"strings"

	"github.com/ikawaha/kagome-dict/ipa"
	"github.com/ikawaha/kagome/v2/tokenizer"
)
func NlpTest(words string)(array){
	t, err := tokenizer.New(ipa.Dict(), tokenizer.OmitBosEos())
	if err != nil {
		panic(err)
	}
	tokens := t.Tokenize(words)

	return tokens
	
}

func nlp() {
	t, err := tokenizer.New(ipa.Dict(), tokenizer.OmitBosEos())
	if err != nil {
		panic(err)
	}
	
	// wakati
	fmt.Println("---wakati---")
	seg := t.Wakati("しぐれうい先生を推しています。")
	fmt.Println(seg)

	// tokenize
	fmt.Println("---tokenize---")
	tokens := t.Tokenize("最近のVTuber事情は興味深い")
	for _, token := range tokens {
		features := strings.Join(token.Features(), ",")
		fmt.Printf("%s\t%v\n", token.Surface, features)
	}
}