import useLocalStorage from '../hooks/useLocalStorage';

export default function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);

  return (
    <div>
      <h1>Settings</h1>

      <div>
        <label>Theme: </label>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div style={{ marginTop: 16 }}>
        <label>Font Size: {fontSize}px </label>
        <input
          type="range"
          value={fontSize}
          onChange={e => setFontSize(Number(e.target.value))}
          min="12"
          max="24"
        />
      </div>

      <p style={{ fontSize: fontSize, marginTop: 16 }}>
        This text changes size!
      </p>
    </div>
  );
}