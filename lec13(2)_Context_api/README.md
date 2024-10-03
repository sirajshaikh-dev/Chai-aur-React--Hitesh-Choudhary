# Lec13- Context API

## Screenshot
<img src="Screenshot 2024-10-03 111807.png" width="190">
<img src="Screenshot%202024-10-03%20110453.png" alt="Description" width="215">

## Context API
- The **Context API** in React is a way to **share data between components without having to pass props** down manually at every level of the component tree. It helps manage global states in your app, like user authentication, theme settings, or language preferences

### Problem:
Normally in React, if you want to share data between components, you pass it as props. But when you have deeply nested components (components inside other components), passing props down through multiple layers becomes difficult and messy. This is called "prop drilling."

### Solution:
The Context API allows you to create a central "store" where you can store data and make it available to any component, no matter how deeply nested, without having to pass it as props.

### How it works:
- **Create a Context:** You create a context object using `ReactcreateContext()`. This object is like a container for yourdata.
- **Provide the Data:** You wrap your components in a `Provider` component that is part of the Context. The `Provider` takesa `value` prop, which is the data you want to share.
- **Consume the Data:** Any component that needs the data can"subscribe" to the context using a `Consumer component` orthe `useContext()` hook, which is the modern way.
    
# Exapmle 
### 1. Creating the context
In the file `Contexts/Theme.js`, I've created a ThemeContext using `createContext()`. This holds the default values for themeMode, darkMode, and `lightMode`.
```js
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
```
- `createContext()`: This creates a context object that will store your theme information.
- `ThemeProvider`: This is used to wrap your component tree and provide the context to all components that need it.
- `useTheme()`: A custom hook that allows any component to easily access the context data (like `themeMode`, `darkMode`, `lightMode`).

### 2. Providing the Context
- In the `App.jsx `file, i use the `ThemeProvider` to wrap the components, allowing them to access and update the theme data. The theme mode is stored in a state (`themeMode`) and is changed using two functions, `lightMode()` and `darkMode()`.

```jsx
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
```
- `useState("light")`: Initializes the theme mode as "light."
- `useEffect()`: Whenever the theme changes (`themeMode` is updated), it updates the class on the html element to either "light" or "dark", which triggers CSS-based theme changes.
- `ThemeProvider`: It wraps the component tree (`ThemeBtn`, `Card`), providing access to the theme context for any component inside.

### Consumint the Context:
- The `ThemeBtn` component is where the theme is toggled using the `useTheme()` hook. This hook pulls out `themeMode, lightMode, and darkMode` from the context.

```jsx
import useTheme from "../Contexts/Theme";

export default function ThemeBtn() {
  const { themeMode, lightMode, darkMode } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
    </label>
  );
}
```
- `useTheme()`: This is where the button gets access to the theme context, specifically `themeMode, lightMode, and darkMode.`
- **Checkbox:** When the user toggles the checkbox, it switches between light and dark modes by calling `darkMode()` or `lightMode()`from the context.

## Summary:
- **Theme Context** stores the current theme (`light` or `dark`) and the functions to toggle between them.
- `ThemeProvider` in `App.jsx` makes this context available to all child components like `ThemeBtn`.
- `useTheme()` in `ThemeBtn` allows the component to read and modify the theme state.

# File Structure
``` 
├── node_modules (.gitignore)
├── src
│   ├── components
│   │   ├── Card.jsx
│   │   └── ThemeBtn.jsx
│   ├── Contexts
│   │   └── Theme.js
│   ├── App.jsx
│   ├── index.css
│   └──  main.jsx
├── .gitignore
├── Context.md
├── index.html
├── Screenshot
├── tailwind.config.js
├── package.json
└── README.md
```