// カードの中身と、背景の「技術とアプリのつながり」の図の両方を、この一覧から組む。
// アプリを足すときはここに1件足す。stack の名前がそのまま背景の点になる（short があれば背景ではそちらを使う）。
const WORKS = [
  {
    id: "sirube",
    name: "Sirube",
    summary: "目的から逆向きに分解すると、今日やることが出てくるタスク管理。",
    stack: ["TypeScript", "Rust", "Tauri", "Bun"],
    image: { src: "/images/sirube.gif", width: 960, height: 570, alt: "一文を分解し、今やれるものを達成にすると親が今やれるものになる様子" },
    usage: [
      "目的を一文で書く（例: 引っ越しをする）。",
      "「それには何が必要か」でノードを下ろしていく。タスクは分解して初めて生まれる。",
      "末端に「今やれるもの」が出る。達成にすると前提が上へ伝わり、次が出てくる。",
      "半年空けて開いても、グラフから「今どこで、次に何をするか」が組み直される。",
    ],
    tech: "Tauri のデスクトップアプリ（Windows / Linux）。分解した木がそのまま状態機械として動く。外部通信もアカウントも無い。",
    links: [
      { label: "GitHub", href: "https://github.com/MotimotiNotch/sirube" },
      { label: "ダウンロード", href: "https://github.com/MotimotiNotch/sirube/releases/latest" },
    ],
  },
  {
    id: "warframe",
    name: "Warframe State Graph",
    short: "Warframe",
    summary: "ゲームの依存関係と自分の所持状態をつないで、次の1手を出す。",
    stack: ["TypeScript", "Bun"],
    usage: [
      "zip を展開して exe を実行する（インストール不要、Windows）。",
      "作りたいものを登録する。",
      "手元にあるものだけを1タップで切り替える。所持状態を取れる公式 API が無いので、全自動の同期はしない設計にした。",
      "足りないものを辿った先の「次にやること」が出る。",
    ],
    tech: "公開ゲームデータ（WFCD）を読み取り専用で取得し、入力した内容はローカルの JSON にだけ保存する。",
    links: [
      { label: "GitHub", href: "https://github.com/MotimotiNotch/warframe-state-graph" },
      { label: "ダウンロード", href: "https://github.com/MotimotiNotch/warframe-state-graph/releases/latest" },
    ],
  },
  {
    id: "loopfinder",
    name: "loopfinder",
    summary: "ノートとスクリプトと AI で回している作業場の、フィードバックループを見つける。",
    stack: ["JavaScript", "Node.js", "Python", "VS Code 拡張"],
    image: { src: "/images/loopfinder.png", width: 2000, height: 440, alt: "デモの作業場の流れの図で、ループを1つ選んだところ" },
    usage: [
      "loopfinder init で、AI エージェント向けの案内（AGENTS.md）を作る。",
      "普段使っている AI エージェント（Claude Code・Codex・Cursor 等）に読ませて、作業場を調べさせる。",
      "loopfinder build で、スクリプトを書き込み禁止のまま実際に走らせ、何を読み書きしたかを記録する。",
      "loopfinder serve で図を開く。意図していないループ・壊れたループ・誰も読まない出力が出る。",
    ],
    tech: "依存なし。書き込みを記録して捨てるフック（Node・Python）を持ち、「フックありならディスクがバイト単位で変わらない／フックなしなら変わる」の両方をテストで確かめている。",
    links: [
      { label: "GitHub", href: "https://github.com/MotimotiNotch/loopfinder" },
      { label: "VS Code Marketplace", href: "https://marketplace.visualstudio.com/items?itemName=motimotinotch.loopfinder" },
    ],
  },
  {
    id: "cms",
    name: "作品を守りながら見せる CMS",
    short: "CMS",
    summary: "画像・動画を直リンクやスクリプトから守りつつ公開する、自作の CMS。",
    stack: ["TypeScript", "Astro", "React", "Svelte", "Cloudflare Workers", "R2", "KV", "D1"],
    usage: [
      "管理画面で画像と本文を登録する。サムネイルと OGP 画像はブラウザ側で作る。",
      "写真は手元の CLI から日付フォルダごと縮小して上げ、下書きのまま置く。",
      "管理画面で公開する。",
      "画像は署名付きの期限 URL とプロキシ経由でだけ配られ、直リンクやスクリプトからの取得を弾く。",
    ],
    tech: "Referer/Origin の厳密一致と HMAC 署名の期限 URL を重ねた多層防御。ページ送りが無く1000件を超えると一覧から黙って消える穴を事前に見つけて直した。デプロイの後に「拒否されるべきリクエスト」を実際に投げて確かめる運用。",
    links: [
      { label: "Zenn の本（9層の防御）", href: "https://zenn.dev/motimotinotch/books/abdf22eaf31c4c" },
    ],
  },
  {
    id: "ruv",
    name: "Ruv",
    summary: "SNS に常駐して、覚えたことを忘れながら話す bot。",
    stack: ["TypeScript", "Cloudflare Workers", "D1", "Workers AI"],
    usage: [
      "Misskey のアカウント（misskey.io/@ruv_bot）をフォローする。",
      "話しかけると、これまでの会話から覚えたことを踏まえて返す。",
      "時々、bot の側から問いを投げてくる。",
    ],
    tech: "記憶は3層で忘れる（表に出る／残っているが辿れない／核）。辿れない層は刺激があれば戻る。似たもの同士を引き寄せるだけだと記憶が1つの塊に溶けるので、区別を保つ斥力も持たせた。無料枠の CPU 10ms/呼び出しに収めるため、処理を段に分けて回している。",
    links: [
      { label: "Misskey", href: "https://misskey.io/@ruv_bot" },
      { label: "記事: 3層の忘却", href: "https://zenn.dev/motimotinotch/articles/626ea84a7c9548" },
      { label: "記事: 区別を保つ斥力", href: "https://zenn.dev/motimotinotch/articles/ef8d9a4851d657" },
    ],
  },
];

const el = (tag, attrs = {}, text) => {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  if (text !== undefined) node.textContent = text;
  return node;
};

// 技術は初出順に並べる
const STACK = [...new Set(WORKS.flatMap((w) => w.stack))];

// --- カードとタグ ---

const highlightHandlers = [];
const onHighlight = (fn) => highlightHandlers.push(fn);
let pinned = null; // タップで固定した光らせ先（{ kind, id }）
const highlight = (target) => highlightHandlers.forEach((fn) => fn(target ?? pinned));

function tagButton(name) {
  const b = el("button", { type: "button", class: "tag", "data-tech": name, "aria-pressed": "false" }, name);
  b.addEventListener("pointerenter", () => highlight({ kind: "tech", id: name }));
  b.addEventListener("pointerleave", () => highlight(null));
  b.addEventListener("focus", () => highlight({ kind: "tech", id: name }));
  b.addEventListener("blur", () => highlight(null));
  b.addEventListener("click", () => {
    pinned = pinned?.id === name ? null : { kind: "tech", id: name };
    document.querySelectorAll(".tag").forEach((t) => t.setAttribute("aria-pressed", String(pinned?.id === t.dataset.tech)));
    highlight(null);
  });
  return b;
}

const stackList = document.getElementById("stack");
for (const name of STACK) {
  const li = el("li");
  li.append(tagButton(name));
  stackList.append(li);
}

const cards = document.getElementById("cards");
for (const w of WORKS) {
  const card = el("article", { class: "card", id: w.id, "data-app": w.id });
  if (w.image) {
    card.append(el("img", { src: w.image.src, width: w.image.width, height: w.image.height, alt: w.image.alt, loading: "lazy", decoding: "async" }));
  }
  const body = el("div", { class: "card-body" });
  body.append(el("h3", {}, w.name), el("p", { class: "summary" }, w.summary));

  const tags = el("ul", { class: "tags", "aria-label": "使っている技術" });
  for (const s of w.stack) {
    const li = el("li");
    li.append(tagButton(s));
    tags.append(li);
  }
  body.append(tags);

  body.append(el("h4", {}, "使い方"));
  const ol = el("ol");
  for (const step of w.usage) ol.append(el("li", {}, step));
  body.append(ol);

  body.append(el("h4", {}, "中身"), el("p", { class: "tech" }, w.tech));

  const links = el("p", { class: "card-links" });
  for (const l of w.links) links.append(el("a", { href: l.href, rel: "noopener" }, l.label));
  body.append(links);

  card.append(body);
  card.addEventListener("pointerenter", () => highlight({ kind: "app", id: w.id }));
  card.addEventListener("pointerleave", () => highlight(null));
  cards.append(card);
}

// カードの枠: 光っている技術を使うカード、または光っているアプリのカード
onHighlight((t) => {
  document.querySelectorAll(".card").forEach((c) => {
    const w = WORKS.find((x) => x.id === c.dataset.app);
    const lit = t && (t.kind === "app" ? t.id === w.id : w.stack.includes(t.id));
    c.classList.toggle("lit", Boolean(lit));
  });
});

// --- 背景の図 ---

function drawGraph() {
  if (!window.d3) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const svg = d3.select("#bg");

  const nodes = [
    ...WORKS.map((w) => ({ id: `app:${w.id}`, key: w.id, kind: "app", label: w.short ?? w.name })),
    ...STACK.map((s) => ({ id: `tech:${s}`, key: s, kind: "tech", label: s })),
  ];
  const links = WORKS.flatMap((w) => w.stack.map((s) => ({ source: `app:${w.id}`, target: `tech:${s}`, app: w.id, tech: s })));

  let width = window.innerWidth;
  let height = window.innerHeight;
  svg.attr("viewBox", `0 0 ${width} ${height}`);

  const link = svg.append("g").selectAll("line").data(links).join("line");
  const node = svg.append("g").selectAll("g").data(nodes).join("g");
  node.append("circle").attr("r", (d) => (d.kind === "app" ? 5 : 3)).attr("class", (d) => d.kind);
  node.append("text").attr("x", 8).attr("y", 4).text((d) => d.label);

  const sim = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id((d) => d.id).distance(Math.min(width, height) * 0.16).strength(0.4))
    .force("charge", d3.forceManyBody().strength(-Math.min(width, height) * 0.5))
    .force("x", d3.forceX(width / 2).strength(0.03))
    .force("y", d3.forceY(height / 2).strength(0.05))
    .force("collide", d3.forceCollide(28));

  // 点と名前が画面の外へ出ないように押し戻す（名前は点の右に出るので右側を広めに空ける）
  const clamp = () => {
    for (const n of nodes) {
      n.x = Math.max(12, Math.min(width - 12 - n.label.length * 7, n.x));
      n.y = Math.max(12, Math.min(height - 12, n.y));
    }
  };
  const render = () => {
    clamp();
    link.attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y).attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
    node.attr("transform", (d) => `translate(${d.x},${d.y})`);
  };

  if (reduceMotion) {
    // 動きを減らす設定では、落ち着いた形を1枚だけ描く
    sim.stop();
    for (let i = 0; i < 300; i++) sim.tick();
    render();
  } else {
    // 落ち着いた後も、ごく弱い揺らぎでゆっくり漂わせる
    sim.alphaTarget(0.008).on("tick", () => {
      for (const n of nodes) {
        n.vx += (Math.random() - 0.5) * 0.04;
        n.vy += (Math.random() - 0.5) * 0.04;
      }
      render();
    });
    document.addEventListener("visibilitychange", () => (document.hidden ? sim.stop() : sim.restart()));
  }

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    sim.force("x").x(width / 2);
    sim.force("y").y(height / 2);
    if (reduceMotion) {
      for (let i = 0; i < 300; i++) sim.tick();
      render();
    } else {
      sim.alpha(0.3).restart();
    }
  });

  onHighlight((t) => {
    const linkLit = (l) => Boolean(t) && (t.kind === "tech" ? l.tech === t.id : l.app === t.id);
    const litApps = new Set(links.filter(linkLit).map((l) => l.app));
    const litTechs = new Set(links.filter(linkLit).map((l) => l.tech));
    const nodeLit = (d) => (d.kind === "app" ? litApps.has(d.key) : litTechs.has(d.key));
    link.classed("lit", linkLit);
    node.select("circle").classed("lit", nodeLit);
    node.select("text").classed("lit", nodeLit);
  });
}

drawGraph();
