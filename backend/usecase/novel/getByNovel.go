package novel

import(
	"backend/typefile/model"
	// "backend/service/fullTextSearch"
	// "backend/domain"
	"fmt"
)

func GetByNovel(nouns map[string]int)([]model.Novel){
	var novel model.Novel
	var Key string
	for key,value :=range nouns{
		fmt.Print("key:",key,"value:",value)
		Key =key
	}
	// fullTextSearch.searchFromNovel(key)

	novel.OriginWord ="単語"+Key
	novel.Author = Key+"から探した作者"
	novel.Title = Key+"から探した小説タイトル"
	novel.Content = Key+"から探した内容"
	novel.Reason = Key+"から探した理由"

	novels := []model.Novel{novel}

	return novels
}