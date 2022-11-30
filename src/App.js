import React from 'react'
import Loader from './partials/Loader'
import Navbar from './partials/Navbar'
import Welcome from './section/Welcome'
import Description from './section/Description'
import Technologies from './section/Technologies'
import Contact from './section/Contact'
import Footer from './partials/Footer'
import Parcours from './pages/Parcours'
import Hardware from './pages/Hardware'
import Project from './pages/Project'
import CustomCursor from './components/CustomCursor'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ShowProject from './pages/ShowProject'
import ToggleTheme from './components/ToggleTheme'

function App() {

  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState('en')

  const colors = {
    black: {
      background : '#21252D',
      highlight : '#272C35B0',
      navbar : '#272C3580',
      textColor : '#D9D9D9',
    },

    light: {
      background : '#E3D0B7',
      hightlight : '#F4EDE4B0',
      navbar : '#dbc7adb0',
      textColor : '#1E1E1E',
    },

    colorLinks: {
      primary : '#3BC3A4',
    }
  }

  const colorsThemeToggle = {
    black: {
      dark : '#815AD5',
      hoverDark : '#6B46C1',
      svg : 'moon'
    },

    light: {
      light : '#FBD38D',
      hoverLight : '#F6AD55',
      svg : 'sun'
    }
  }

  const styles = {
    colors: {
      text: theme === 'light' ? colors.light.textColor : colors.black.textColor,
      background: theme === 'light' ? colors.light.background : colors.black.background,
      highlight: theme === 'light' ? colors.light.hightlight : colors.black.highlight,
      navbar: theme === 'light' ? colors.light.navbar : colors.black.navbar,
      toggleColor: theme === 'light' ? colorsThemeToggle.black.dark : colorsThemeToggle.light.light,
      toggleColorHover: theme === 'light' ? colorsThemeToggle.black.hoverDark : colorsThemeToggle.light.hoverLight,
      toggleSymbol: theme === 'light' ? colorsThemeToggle.black.svg : colorsThemeToggle.light.svg,
      star: theme === 'light' ? colors.black.textColor : colors.light.textColor,
    },
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    document.body.style.background = styles.colors.background
  }, [styles.colors.background])

  return (
    <>
      {loading ? <Loader /> :
      <>
        <CustomCursor styles={styles} />
        <Navbar 
          theme={theme} 
          setTheme={setTheme} 
          language={language}
          setLanguage={setLanguage}
          styles={styles}
          colors={colors}
        />
        <Routes>
          <Route 
            path='/' 
            element={ 
              <>
                <Welcome styles={styles} language={language} />
                <Description styles={styles} colors={colors} />
                <Technologies styles={styles} /> 
                <Contact colors={colors} styles={styles} />
              </>
            } 
          />
          <Route 
            path='/parcours' 
            element={ <Parcours styles={styles} /> } 
          />
          <Route 
            path='/hardware' 
            element={ <Hardware styles={styles} /> } 
          />
          <Route 
            path='/projects' 
            element={ <Project styles={styles} colors={colors} theme={theme} /> } 
          />
          <Route
            path='/projects/:page'
            element={ <ShowProject styles={styles} colors={colors} theme={theme} /> }
          />
        </Routes>
        <ToggleTheme 
              theme={theme} 
              setTheme={setTheme} 
              styles={styles} 
        />
        <Footer 
            styles={styles}
            language={language}
        />
      </>
      }
    </>
  );
}

export default App;


