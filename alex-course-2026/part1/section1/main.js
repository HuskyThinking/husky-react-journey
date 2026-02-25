function App() {
  return (
    <>
      <h1>Hello from React</h1>
      <input type="text" />
      <p></p>
    </>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// {
//     "workbench.colorTheme": "Dracula Theme",
//     "workbench.iconTheme": "vscode-icons",
//     "editor.fontSize": 16,
//     "editor.fontFamily": "Fira Code",
//     "editor.minimap.sectionHeaderFontSize": 12,
//     "window.zoomLevel": 1.2,
//     "editor.defaultFormatter": "esbenp.prettier-vscode",
//     "files.autoSave": "onFocusChange",
//     "prettier.semi": true,
//     "prettier.singleQuote": true,
//     "prettier.jsxSingleQuote": false,
//     "editor.formatOnSave": true,
// }
