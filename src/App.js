import React from 'react';
import Navbar from './partials/Navbar'
import MainSection from './section/MainSection'
import { useState, useEffect } from 'react'

function App() {

  const [theme, setTheme] = useState('dark')

  const externalLinks = {
    gmail: 'hcampospro@gmail.com',
    linkedin: 'https://www.linkedin.com/in/hugo-campos-782702203/',
    github: 'https://github.com/Sakoutecher',
  }

  const colors = {
    black: {
      background : '#21252D',
      highlight : '#272C35',
      navbar : '#272C35',
      textColor : '#D9D9D9',
    },

    light: {
      background : '#E3D0B7',
      hightlight : '#F4EDE4',
      navbar : '#F4EDEB3',
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
    },
  }

  useEffect(() => {
    document.body.style.background = styles.colors.background
  }, [styles.colors.background])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} styles={styles}></Navbar>
      <MainSection />
    </>
  );
}

export default App;


