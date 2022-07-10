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

## nlp 関連

[kagome doc](https://zenn.dev/ikawaha/books/kagome-v2-japanese-tokenizer/viewer/tokenization)

[kagome を使った実装例](https://qiita.com/akisame338/items/60aa572e48de0881153f)

[全文検索](https://zenn.dev/ikawaha/articles/20201230-84b042603ccbbce645d5)

## ルーティング参考

[gin を使って MVC モデルの Web アプリを作成する](https://zenn.dev/ajapa/articles/65b9934db18396))

[チャンネルを使った非同期処理](https://qiita.com/TsuyoshiUshio@github/items/6c04b7617db0062d3dee#11-channel-%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B))

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
