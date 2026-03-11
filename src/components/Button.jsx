import { useTheme } from "../themes/ThemeContext";

const ThemeBtn = () => {
  const { theme, changeTheme } = useTheme();

  const handleChangeTheme = () => {
    changeTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      <div>
        <button
          onClick={handleChangeTheme}
          style={
            theme === 'dark'
              ? { background: 'rgb(26, 26, 26)' }
              : { background: 'rgb(255, 255, 255)' }
          }
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </>
  );
}

export default ThemeBtn;


// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
import { useContext } from 'react'
import { ThemeContext } from '../themes/ThemeContext'

const Button = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? "☀️" : "🌙" }
    </button>
  )

}

export default Button
 */