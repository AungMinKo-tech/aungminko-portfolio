/**
 * Inline script runs before paint to apply the saved theme and avoid flash / hydration drift.
 * Must stay in sync with ThemeProvider storageKey and defaultTheme.
 */
export function ThemeScript() {
  const code = `
(function () {
  try {
    var key = 'portfolio-theme';
    var stored = localStorage.getItem(key);
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  } catch (e) {}
})();
`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
