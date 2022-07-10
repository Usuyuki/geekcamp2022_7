package tool

func MapMerge(m ...map[string]int) map[string]int {
    ans := make(map[string]int, 0)

    for _, c := range m {
        for k, v := range c {
            _, ok := ans[k]
            if ok {
                ans[k]+=v
            } else {
                ans[k] = v
            }
        }
    }
    return ans
}