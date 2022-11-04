import React from 'react';
import Navbar from './partials/Navbar'
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
      textColor : '#D9D9D9',
    },

    light: {
      background : '#E3D0B7',
      hightlight : '#F4EDE4',
      textColor : '#1E1E1E',
    },

    colorLinks: {
      primary : '#3BC3A4',
    }
  }

  const colorsThemeToggle = {
    black: {
      dark : '#815AD5',
    },

    light: {
      light : '#FBD38D',
    }
  }

  const styles = {
    colors: {
      text: theme === 'light' ? colors.light.textColor : colors.black.textColor,
      background: theme === 'light' ? colors.light.background : colors.black.background,
      highlight: theme === 'light' ? colors.light.hightlight : colors.black.highlight,
    },
  }

  useEffect(() => {
    document.body.style.background = styles.colors.background
  }, [styles.colors.background])

  return (
    <Navbar styles={styles} />
  );
}

export default App;
