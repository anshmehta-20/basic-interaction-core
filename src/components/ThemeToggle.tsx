
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-black/80 hover:-translate-y-0.5">
      <label className="relative inline-block w-12 h-7 cursor-pointer">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          className="opacity-0 w-0 h-0"
        />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-300 before:content-[''] before:absolute before:h-5 before:w-5 before:left-1 before:bottom-1 before:bg-white before:transition-all before:duration-300 before:rounded-full checked:bg-gradient-to-r checked:from-avengers-red checked:to-avengers-dark-red checked:before:translate-x-5" 
             style={{
               backgroundColor: theme === 'dark' ? '#dc3545' : '#ccc'
             }}>
        </span>
      </label>
      <em className="ml-3 text-white font-medium text-sm">Dark Mode</em>
    </div>
  )
}
