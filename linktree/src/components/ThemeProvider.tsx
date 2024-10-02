import { createContext, useState } from 'react'
import { Theme } from './types'

// Define the type for the ThemeContext
type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: {
    primaryColor: '#000',
    secondaryColor: '#000',
    backgroundColor: '#000',
    backgroundImage: '',  // Default to an empty string for images
  },
  setTheme: () => {
    throw new Error('setTheme function must be overridden in ThemeProvider')
  },
})

// Create the ThemeProvider component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>({
    primaryColor: '#000',
    secondaryColor: '#000',
    backgroundColor: '#000',
    backgroundImage: '', // Default empty string for backgroundImage
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
