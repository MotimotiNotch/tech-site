# tech-site

`tech.motimotinotch.com` の中身。作ったアプリをカードで紹介し、背景に技術とアプリのつながりを D3 で描く静的サイト。

- 中身は `public/` だけ。ビルドは無い
- カードと背景の図は、どちらも `public/main.js` の `WORKS` から組む。アプリを足すときはそこに1件足す
- `public/_headers` の `no-transform` は、Cloudflare がゾーン設定で差し込むスクリプト（JavaScript Detections・Web Analytics）をこのホストだけ止めるため。差し込まれると CSP（`script-src 'self'`）に弾かれてコンソールにエラーが出る
- `public/vendor/d3-subset.min.js` は d3-dispatch / quadtree / timer / force / selection の dist を連結したもの（ライセンスは同じフォルダの `LICENSE-d3.txt`）

## 手元で見る

```sh
npx wrangler dev
```

## 出す

Cloudflare Workers の静的配信（`wrangler.jsonc`）。

```sh
npx wrangler deploy
```
