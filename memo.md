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

## import のエイリアス

- "@🗃/": "./components/",
- "@🏝/": "./islands/"
