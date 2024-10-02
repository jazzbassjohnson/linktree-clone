import { createContext, useState } from 'react'
import { Theme } from './types'
type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}


const ThemeContext = createContext<ThemeContextType>({
  theme: {
    primaryColor: '#000',
    secondaryColor: '#000',
    backgroundColor: '#000',
    backgroundImage: '#000',
  },
  setTheme: () => {},
})

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>({
    primaryColor: '#000',
    secondaryColor: '#000',
    backgroundColor: '#000',
    backgroundImage: '#000',
  })

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider };
