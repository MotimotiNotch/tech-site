# tech-site

`tech.motimotinotch.com` の中身。作ったアプリをカードで紹介し、背景に技術とアプリのつながりを D3 で描く静的サイト。

- 中身は `public/` だけ。ビルドは無い
- カードと背景の図は、どちらも `public/main.js` の `WORKS` から組む。アプリを足すときはそこに1件足す
- `public/_headers` の `no-transform` は、Cloudflare がゾーン設定で差し込むスクリプト（JavaScript Detections・Web Analytics）をこのホストだけ止めるため。差し込まれると CSP（`script-src 'self'`）に弾かれてコンソールにエラーが出る
- `public/privacy/` はプライバシーポリシー。Cookie・解析を足したら、ここも直す
- `public/vendor/d3-subset.min.js` は d3-dispatch / quadtree / timer / force / selection の dist を連結したもの（ライセンスは同じフォルダの `LICENSE-d3.txt`）

## 手元で見る

```sh
npx wrangler dev
```

## 出す

`main` に push すると、Workers Builds（Cloudflare の Git 連携）が `npx wrangler deploy` を走らせる。手で出すことはない。設定は `wrangler.jsonc`（Workers の静的配信、`tech.motimotinotch.com`）。

## ライセンス

コード（HTML・CSS・JavaScript・設定ファイル）は [MIT](LICENSE)。紹介の文章、`public/images/` のスクリーンショット、アイコン（`favicon.ico`・`icon.svg`・アイコンの PNG）は MIT の対象外で、権利を留保します。`public/vendor/d3-subset.min.js` は D3（ISC License、`public/vendor/LICENSE-d3.txt`）。
