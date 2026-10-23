// 明暗の切り替え。<head> で同期的に読み、描く前に data-theme を付けてちらつきを防ぐ。
// 何も選んでいなければ OS の設定に従い（data-theme なし）、ボタンで選んだら localStorage に覚える。
// CSP が script-src 'self' だけなので、インラインではなく別ファイルにしている。
(() => {
  const KEY = "theme";
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  } catch {
    // 保存が使えない環境では OS の設定のまま
  }

  const current = () => root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");
    if (!button) return;
    const sync = () => button.setAttribute("aria-pressed", String(current() === "dark"));
    sync();
    button.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem(KEY, next);
      } catch {}
      sync();
    });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", sync);
  });
})();
