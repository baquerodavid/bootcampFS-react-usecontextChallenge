import { useTheme } from "../themes/ThemeContext";

const ThemeBtn = () => {
  const { theme, changeTheme } = useTheme();

  const handleChangeTheme = () => {
    changeTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      <div>
        <button onClick={handleChangeTheme}>Cambiar modo</button>
      </div>
    </>
  );
}

export default ThemeBtn;