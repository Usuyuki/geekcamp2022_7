# go 関連のコマンド

依存関係をいい感じに解消して go.mod に書いてくれるコマンド

```
docker-compose exec go go mod tidy
```

モジュール追加

```
docker-compose exec go get りんく
```

デフォルトでホットリロード。

```
docker-compose exec go run main.go
```

# deno 関連

```
deno task start
```

[ドキュメント](https://fresh.deno.dev/docs/introduction)

[fresh Websocker 実装例](https://zenn.dev/kuboon/articles/claphouse-deno-deploy)

[fresh 公式 実装例](https://github.com/denoland/dotland)

[fresh チュートリアル解説](https://zenn.dev/k41531/articles/69c9342f7022dd#%E3%83%8F%E3%83%B3%E3%83%89%E3%83%A9%E3%83%BC%E3%81%AE%E4%BD%9C%E6%88%90)

[fresh チュートリアル解説(ブログサイト)](https://zenn.dev/azukiazusa/articles/fresh-tutorial)

## import のエイリアス

- "@🗃/": "./components/",
- "@🏝/": "./islands/"
