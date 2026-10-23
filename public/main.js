// カードの中身と、背景の「技術とアプリのつながり」の図の両方を、この一覧から組む。
// アプリを足すときはここに1件足す。stack の名前がそのまま背景の点になる（short があれば背景ではそちらを使う）。
// 文章は { ja, en } で日英を並べて持つ。どちらで出すかはページの <html lang> で決める（/ が日本語、/en/ が英語）。
const LANG = document.documentElement.lang.startsWith("en") ? "en" : "ja";
const t = (v) => (typeof v === "string" ? v : v[LANG]);

const UI = {
  usage: { ja: "使い方", en: "How to use" },
  inside: { ja: "中身", en: "Under the hood" },
  stack: { ja: "使っている技術", en: "Built with" },
};

const WORKS = [
  {
    id: "sirube",
    name: "Sirube",
    summary: {
      ja: "目的から逆向きに分解すると、今日やることが出てくるタスク管理。",
      en: "A task manager where breaking a goal down backwards surfaces what to do today.",
    },
    stack: ["TypeScript", "Rust", "Tauri", "Bun"],
    image: {
      src: "/images/sirube.gif",
      width: 960,
      height: 570,
      alt: {
        ja: "一文を分解し、今やれるものを達成にすると親が今やれるものになる様子",
        en: "Breaking a sentence down; marking an actionable item done makes its parent actionable",
      },
    },
    usage: [
      { ja: "目的を一文で書く（例: 引っ越しをする）。", en: "Write the goal as one sentence (e.g. \"Move house\")." },
      {
        ja: "「それには何が必要か」でノードを下ろしていく。タスクは分解して初めて生まれる。",
        en: "Keep asking \"what does that need?\" and add nodes below. Tasks only appear once you break things down.",
      },
      {
        ja: "末端に「今やれるもの」が出る。達成にすると前提が上へ伝わり、次が出てくる。",
        en: "The leaves show what you can do now. Marking one done propagates upward and the next one appears.",
      },
      {
        ja: "半年空けて開いても、グラフから「今どこで、次に何をするか」が組み直される。",
        en: "Even after six months away, the graph rebuilds where you are and what comes next.",
      },
    ],
    tech: {
      ja: "Tauri のデスクトップアプリ（Windows / Linux）。分解した木がそのまま状態機械として動く。外部通信もアカウントも無い。",
      en: "A Tauri desktop app (Windows / Linux). The tree you break down runs directly as a state machine. No network calls, no accounts.",
    },
    links: [
      { label: "GitHub", href: "https://github.com/MotimotiNotch/sirube" },
      { label: { ja: "ダウンロード", en: "Download" }, href: "https://github.com/MotimotiNotch/sirube/releases/latest" },
    ],
  },
  {
    id: "warframe",
    name: "Warframe State Graph",
    short: "Warframe",
    summary: {
      ja: "ゲームの依存関係と自分の所持状態をつないで、次の1手を出す。",
      en: "Connects a game's dependency chains with what you own, and shows your next move.",
    },
    stack: ["TypeScript", "Bun"],
    image: {
      src: "/images/warframe.png",
      width: 1400,
      height: 820,
      alt: {
        ja: "Chain View で、作りたいものから部品とレリックを辿った先に、次にやることが「実行可能」として出ているところ",
        en: "Chain View tracing from a target item through its parts and relics to a next step marked as available",
      },
    },
    usage: [
      { ja: "zip を展開して exe を実行する（インストール不要、Windows）。", en: "Unzip and run the exe (no installer, Windows)." },
      { ja: "作りたいものを登録する。", en: "Add what you want to build." },
      {
        ja: "手元にあるものだけを1タップで切り替える。所持状態を取れる公式 API が無いので、全自動の同期はしない設計にした。",
        en: "Toggle what you already have with one tap. There's no official API for inventory, so it deliberately doesn't try to sync automatically.",
      },
      { ja: "足りないものを辿った先の「次にやること」が出る。", en: "Following what's missing leads to the next thing to do." },
    ],
    tech: {
      ja: "公開ゲームデータ（WFCD）を読み取り専用で取得し、入力した内容はローカルの JSON にだけ保存する。",
      en: "Reads public game data (WFCD) read-only, and keeps everything you enter in a local JSON file.",
    },
    links: [
      { label: "GitHub", href: "https://github.com/MotimotiNotch/warframe-state-graph" },
      { label: { ja: "ダウンロード", en: "Download" }, href: "https://github.com/MotimotiNotch/warframe-state-graph/releases/latest" },
    ],
  },
  {
    id: "loopfinder",
    name: "loopfinder",
    summary: {
      ja: "ノートとスクリプトと AI で回している作業場の、フィードバックループを見つける。",
      en: "Finds the feedback loops in a workspace run on notes, scripts and AI.",
    },
    stack: ["JavaScript", "Node.js", "Python", "VS Code"],
    image: {
      src: "/images/loopfinder.png",
      width: 1206,
      height: 644,
      alt: {
        ja: "作業場の流れの図で、名前のないループが3つ見つかったところ",
        en: "A workspace flow diagram with three unnamed loops found",
      },
    },
    usage: [
      {
        ja: "loopfinder init で、AI エージェント向けの案内（AGENTS.md）を作る。",
        en: "Run loopfinder init to create a guide for AI agents (AGENTS.md).",
      },
      {
        ja: "普段使っている AI エージェント（Claude Code・Codex・Cursor 等）に読ませて、作業場を調べさせる。",
        en: "Have the AI agent you already use (Claude Code, Codex, Cursor, etc.) read it and survey your workspace.",
      },
      {
        ja: "loopfinder build で、スクリプトを書き込み禁止のまま実際に走らせ、何を読み書きしたかを記録する。",
        en: "Run loopfinder build to actually execute your scripts with writes blocked, recording what they read and write.",
      },
      {
        ja: "loopfinder serve で図を開く。意図していないループ・壊れたループ・誰も読まない出力が出る。",
        en: "Open the diagram with loopfinder serve. Unintended loops, broken loops and outputs nobody reads show up.",
      },
    ],
    tech: {
      ja: "依存なし。書き込みを記録して捨てるフック（Node・Python）を持ち、「フックありならディスクがバイト単位で変わらない／フックなしなら変わる」の両方をテストで確かめている。",
      en: "No dependencies. Hooks for Node and Python record writes and discard them, and tests check both sides: with the hook the disk stays byte-for-byte unchanged, without it it changes.",
    },
    links: [
      { label: "GitHub", href: "https://github.com/MotimotiNotch/loopfinder" },
      { label: "VS Code Marketplace", href: "https://marketplace.visualstudio.com/items?itemName=motimotinotch.loopfinder" },
    ],
  },
  {
    id: "cms",
    name: { ja: "作品を守りながら見せる CMS", en: "A CMS that shows artwork while protecting it" },
    short: "CMS",
    summary: {
      ja: "画像・動画を直リンクやスクリプトから守りつつ公開する、自作の CMS。",
      en: "A self-built CMS that publishes images and video while guarding them against hotlinking and scripts.",
    },
    stack: ["TypeScript", "Astro", "React", "Svelte", "Cloudflare Workers", "R2", "KV", "D1"],
    image: {
      src: "/images/cms.svg",
      width: 800,
      height: 520,
      alt: {
        ja: "画像が配られるまでの構成図。閲覧者のリクエストは Worker のプロキシで3つの判定を通ったときだけ R2 の画像に届き、直リンクやスクリプトからの取得はそこで止まる",
        en: "How an image gets served: a visitor's request reaches the image in R2 only after passing three checks in a Worker proxy; hotlinks and scripts are stopped there",
      },
    },
    usage: [
      {
        ja: "管理画面で画像と本文を登録する。サムネイルと OGP 画像はブラウザ側で作る。",
        en: "Register images and text in the admin screen. Thumbnails and OGP images are generated in the browser.",
      },
      {
        ja: "写真は手元の CLI から日付フォルダごと縮小して上げ、下書きのまま置く。",
        en: "Photos are resized and uploaded per date folder from a local CLI, and stay as drafts.",
      },
      { ja: "管理画面で公開する。", en: "Publish from the admin screen." },
      {
        ja: "画像は署名付きの期限 URL とプロキシ経由でだけ配られ、直リンクやスクリプトからの取得を弾く。",
        en: "Images are only served through signed, expiring URLs and a proxy, which rejects hotlinks and scripted fetches.",
      },
    ],
    tech: {
      ja: "Referer/Origin の厳密一致と HMAC 署名の期限 URL を重ねた多層防御。ページ送りが無く1000件を超えると一覧から黙って消える穴を事前に見つけて直した。デプロイの後に「拒否されるべきリクエスト」を実際に投げて確かめる運用。",
      en: "Layered defense combining strict Referer/Origin matching with HMAC-signed expiring URLs. Found and fixed, ahead of time, a gap where listings without pagination would silently drop items past 1,000. After each deploy, requests that should be rejected are actually sent to confirm they are.",
    },
    links: [
      { label: { ja: "Zenn の本（9層の防御）", en: "Book on Zenn (9 layers of defense, Japanese)" }, href: "https://zenn.dev/motimotinotch/books/abdf22eaf31c4c" },
    ],
  },
  {
    id: "ruv",
    name: "Ruv",
    summary: {
      ja: "SNS に常駐して、覚えたことを忘れながら話す bot。",
      en: "A bot that lives on social media and talks while forgetting what it has learned.",
    },
    stack: ["TypeScript", "Cloudflare Workers", "D1", "Workers AI"],
    usage: [
      { ja: "Misskey のアカウント（misskey.io/@ruv_bot）をフォローする。", en: "Follow the Misskey account (misskey.io/@ruv_bot)." },
      {
        ja: "話しかけると、これまでの会話から覚えたことを踏まえて返す。",
        en: "Talk to it and it replies drawing on what it remembers from past conversations.",
      },
      { ja: "時々、bot の側から問いを投げてくる。", en: "Now and then, it asks a question of its own." },
    ],
    tech: {
      ja: "記憶は3層で忘れる（表に出る／残っているが辿れない／核）。辿れない層は刺激があれば戻る。似たもの同士を引き寄せるだけだと記憶が1つの塊に溶けるので、区別を保つ斥力も持たせた。無料枠の CPU 10ms/呼び出しに収めるため、処理を段に分けて回している。",
      en: "Memory fades across three layers (surfaced / kept but unreachable / core). The unreachable layer comes back when something triggers it. Pulling similar memories together alone melts everything into one lump, so a repulsive force keeps them distinct. Processing is split into stages to fit the free plan's 10 ms CPU per invocation.",
    },
    links: [
      { label: "Misskey", href: "https://misskey.io/@ruv_bot" },
      { label: { ja: "記事: 3層の忘却", en: "Article: three layers of forgetting (Japanese)" }, href: "https://zenn.dev/motimotinotch/articles/626ea84a7c9548" },
      { label: { ja: "記事: 区別を保つ斥力", en: "Article: a repulsion that keeps things distinct (Japanese)" }, href: "https://zenn.dev/motimotinotch/articles/ef8d9a4851d657" },
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
// 押す（クリック・タップ・Enter）と選んだ状態になる。同じものをもう一度押すか、何も無いところを押すか、Esc で外す。
// 選んでいる間はホバーで光らせ先を変えない。何も選んでいないときだけ、ホバーとフォーカスで下見として光らせる。
let selected = null; // 押して選んだ光らせ先（{ kind, id }）
const highlight = (target) => highlightHandlers.forEach((fn) => fn(selected ?? target));
const sameTarget = (a, b) => a?.kind === b?.kind && a?.id === b?.id;
const select = (target) => {
  selected = sameTarget(selected, target) ? null : target;
  highlight(null);
};

const hovering = (e) => e.pointerType === "mouse";

// カードの中のタグから離れたときは、そのカードのアプリを光らせ直す
const cardTarget = (node) => {
  const card = node.closest(".card");
  return card ? { kind: "app", id: card.dataset.app } : null;
};

function tagButton(name) {
  const b = el("span", { class: "tag", "data-tech": name, role: "button", tabindex: "0", "aria-pressed": "false" }, name);
  b.addEventListener("pointerenter", (e) => hovering(e) && highlight({ kind: "tech", id: name }));
  b.addEventListener("pointerleave", (e) => hovering(e) && highlight(cardTarget(b)));
  b.addEventListener("focus", () => highlight({ kind: "tech", id: name }));
  b.addEventListener("blur", () => highlight(null));
  b.addEventListener("click", (e) => {
    e.stopPropagation(); // カードの中のタグでも、カードではなくタグを選ぶ
    select({ kind: "tech", id: name });
  });
  b.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    select({ kind: "tech", id: name });
  });
  return b;
}

document.addEventListener("click", () => {
  if (selected) select(null);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && selected) select(null);
});

// 選んだタグ（同じ技術のタグ全部）とカードに印を付ける
onHighlight(() => {
  document.querySelectorAll(".tag").forEach((t) => {
    const on = selected?.kind === "tech" && selected.id === t.dataset.tech;
    t.classList.toggle("is-selected", on);
    t.setAttribute("aria-pressed", String(on));
  });
  document.querySelectorAll(".card").forEach((c) => {
    c.classList.toggle("is-selected", selected?.kind === "app" && selected.id === c.dataset.app);
  });
});

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
    card.append(el("img", { src: w.image.src, width: w.image.width, height: w.image.height, alt: t(w.image.alt), loading: "lazy", decoding: "async" }));
  }
  const body = el("div", { class: "card-body" });
  body.append(el("h3", {}, t(w.name)), el("p", { class: "summary" }, t(w.summary)));

  const tags = el("ul", { class: "tags", "aria-label": t(UI.stack) });
  for (const s of w.stack) {
    const li = el("li");
    li.append(tagButton(s));
    tags.append(li);
  }
  body.append(tags);

  body.append(el("h4", {}, t(UI.usage)));
  const ol = el("ol");
  for (const step of w.usage) ol.append(el("li", {}, t(step)));
  body.append(ol);

  body.append(el("h4", {}, t(UI.inside)), el("p", { class: "tech" }, t(w.tech)));

  const links = el("p", { class: "card-links" });
  for (const l of w.links) links.append(el("a", { href: l.href, rel: "noopener" }, t(l.label)));
  body.append(links);

  card.append(body);
  card.addEventListener("pointerenter", (e) => hovering(e) && highlight({ kind: "app", id: w.id }));
  card.addEventListener("pointerleave", (e) => hovering(e) && highlight(null));
  card.addEventListener("click", (e) => {
    e.stopPropagation(); // 下の「何も無いところで外す」に届かせない
    if (e.target.closest("a")) return; // リンクはそのまま遷移させ、選択は変えない
    if (window.getSelection()?.toString()) return; // 文字をなぞって選んだだけなら選択は変えない
    select({ kind: "app", id: w.id });
  });
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
    ...WORKS.map((w) => ({ id: `app:${w.id}`, key: w.id, kind: "app", label: w.short ?? t(w.name) })),
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
