package novel

import(
	"backend/typefile/model"
	// "backend/domain"
	"fmt"
)

func GetByNovel(nouns map[string]int)([]model.Novel){
	var novel model.Novel
	for key,value :=range nouns{
		fmt.Print("key:",key,"value:",value)
	}

	novel.OriginWord = "しょうせつ"
	novel.Author = "しょうせつ"
	novel.Title = "しょうせつ"
	novel.Content = "しょうせつは、赤ちゃんです。"

	novels := []model.Novel{novel}

	return novels
}