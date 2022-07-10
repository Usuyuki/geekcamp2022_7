package typefile
import(
	"backend/typefile/model"
)
type ThinkResponseType struct {
	Result string
	What string
	Why string
	How string
	Waka []model.Waka
	Novel []model.Novel
	Homonym []model.Synonyms
	Synonyms []model.Homonym
}