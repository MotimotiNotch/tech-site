# tech-site

`tech.motimotinotch.com` の中身。作ったアプリをカードで紹介し、背景に技術とアプリのつながりを D3 で描く静的サイト。

- 中身は `public/` だけ。ビルドは無い
- カードと背景の図は、どちらも `public/main.js` の `WORKS` から組む。アプリを足すときはそこに1件足す。文章は `{ ja, en }` で日英を並べる
- 日本語は `/`、英語は `/en/`。HTML は言語ごとに1枚ずつ持ち（`public/index.html` と `public/en/index.html`、プライバシーポリシーも同じ）、`main.js` は `<html lang>` を見てどちらの文章を出すか決める。固定の文言を直したら両方直す
- 明暗は `public/theme.js`。何も選んでいなければ OS の設定に従い、右上のボタンで選ぶと `localStorage` の `theme` に覚える。ちらつかないよう `<head>` で同期的に読む（CSP がインラインを許さないので別ファイル）。暗い色は `style.css` に2か所（ボタンで選んだとき／OS が暗いとき）あるので、色を変えたら両方直す
- `public/_headers` の `no-transform` は、Cloudflare がゾーン設定で差し込むスクリプト（JavaScript Detections・Web Analytics）をこのホストだけ止めるため。差し込まれると CSP（`script-src 'self'`）に弾かれてコンソールにエラーが出る
- `public/privacy/`・`public/en/privacy/` はプライバシーポリシー。Cookie・解析・ブラウザへの保存を足したら、ここも直す（今の保存は明暗の選択だけ）
- `public/vendor/d3-subset.min.js` は d3-dispatch / quadtree / timer / force / selection の dist を連結したもの（ライセンスは同じフォルダの `LICENSE-d3.txt`）

## 手元で見る

```sh
npx wrangler dev
```

## 出す

`main` に push すると、Workers Builds（Cloudflare の Git 連携）が `npx wrangler deploy` を走らせる。手で出すことはない。設定は `wrangler.jsonc`（Workers の静的配信、`tech.motimotinotch.com`）。

## ライセンス

コード（HTML・CSS・JavaScript・設定ファイル）は [MIT](LICENSE)。紹介の文章、`public/images/` のスクリーンショット、アイコン（`favicon.ico`・`icon.svg`・アイコンの PNG）は MIT の対象外で、権利を留保します。`public/vendor/d3-subset.min.js` は D3（ISC License、`public/vendor/LICENSE-d3.txt`）。
