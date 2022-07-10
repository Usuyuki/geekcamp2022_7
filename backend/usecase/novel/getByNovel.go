package novel

import(
	"backend/typefile/model"
)

func GetByNovel()([]model.Novel){
	var novel model.Novel
	novel.OriginWord = "しょうせつ"
	novel.Author = "しょうせつ"
	novel.Title = "しょうせつ"
	novel.Content = "しょうせつは、赤ちゃんです。"

	novels := []model.Novel{novel}

	return novels
}