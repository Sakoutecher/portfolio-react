const portfolio = {
    namePage: 'portfolio', 
    imgLight: '../photo-projects/portfolio-light.png',
    imgNight: '../photo-projects/portfolio-night.png',
    title: 'Portfolio',
    source: true,
    sourceCode: 'https://github.com/Sakoutecher/portfolio-react',
    techno : [
        {
            alt: 'react',
            src: '../techno-icons/React.png'
        },
    
        {
            alt: 'styledcomponent',
            src: '../techno-icons/StyledComponent.png'
        },
    
        {
            alt: 'js',
            src: '../techno-icons/JS.png'
        },
    
        {
            alt: 'eslint',
            src: '../techno-icons/ESLint.png'
        },
    
        {
            alt: 'prettier',
            src: '../techno-icons/Prettier.png'
        }
    ],
    descriptionEn: `This my personnal portfolio, i made it to make me more visible to the other person and for training. Because i'm currently learning React.js, so building this portfolio it's a good exercise to improve my level in react. In this project i use some librairies, like styled components for better styles and css, i use also react icons for illustrasion and Prettier and Eslint`, 
    descriptionFr: `Ceci est mon portfolio, il me permet de rendre visible mes compétences, mon parcous et également de me présenter aux autres, ce projet m'as également permis de m'entrainer au développement. Je suis actuellement entrain d'apprendre React.js, donc ce projet était un bon exercice d'entrainement pour améliorer mon niveau en React. Dans ce projet j'ai utilisé Styled Components et React Icons mais également Prettier et Eslint.`
}

const cuicuitedays = {
    namePage: 'cuicuitedays', 
    img: '../photo-projects/cuicuitedays.png',
    title: 'CuicuiteDays Website',
    source: false,
    sourceCode: '',
    techno : [
        {
            alt: 'html',
            src: '../techno-icons/html5.png'
        },
    
        {
            alt: 'sass',
            src: '../techno-icons/sass.png'
        },
    
        {
            alt: 'js',
            src: '../techno-icons/JS.png'
        },
    
        {
            alt: 'php',
            src: '../techno-icons/php-logo.svg'
        },
    ],
    descriptionEn: `This project is related to an association of which I am a member. This association organizes a summer festival that brings together the public and the artists. So I created a showcase site that allows to highlight the association and the event, it will also allow to sell tickets and merch. I made this site in Html and Sass and Javascript, as for the admin side I did it in Php.`,
    descriptionFr: `Ce projet est en rapport à une association dont je fais partie. Cette association organise un festival en été qui réunie du publique et des artites. J'ai donc réalisé un site vitrine qui permet de mettre en avant l'association et l'évènement, il vas également permettre de mettre en vente les billets et le merch. J'ai réalisé ce site en Html et Sass et Javascript, en ce qui concerne le côté administrateur je l'ai fais en Php.`,
}

const colorGuess = {
    namePage: 'color-guess', 
    img: '../photo-projects/color-guess.png',
    title: 'Color-Guess Game',
    source: true,
    sourceCode: 'https://github.com/Sakoutecher/color-guess',
    techno : [
        {
            alt: 'react',
            src: '../techno-icons/React.png'
        },
    
    
        {
            alt: 'ts',
            src: '../techno-icons/TS.png'
        },
    
        {
            alt: 'eslint',
            src: '../techno-icons/ESLint.png'
        },
    
        {
            alt: 'prettier',
            src: '../techno-icons/Prettier.png'
        }
    ],
    descriptionEn: `This project is a game, the user will be facing a square of one color and will have to choose from three hexadecimal code, if he finds the right one then he wins the game. This project served me mainly as training for the React.js. framework so I use Reac.js, Css, Typescript, Prettier and Eslint`,
    descriptionFr: `Ce projet est un jeu, l'utilisateur vas être face à un carré d'une couleur et vas devoir choisir parmis trois code hexadecimaux, si il trouve le bon il gagne alors le jeu. Ce projet m'as principalement servis d'entrainement au framework React.js. J'ai donc utiliser Reac.js, Css, Typescript, Prettier et Eslint.`
}

const jungleHouse = {
    namePage: 'jungle-house', 
    img: '../photo-projects/jungle-house.png',
    title: 'Jungle-House',
    source: true,
    sourceCode: 'https://github.com/Sakoutecher/react-jungle-house',
    techno : [
        {
            alt: 'react',
            src: '../techno-icons/React.png'
        },
    
    
        {
            alt: 'js',
            src: '../techno-icons/JS.png'
        },
    
        {
            alt: 'eslint',
            src: '../techno-icons/ESLint.png'
        },
    
        {
            alt: 'prettier',
            src: '../techno-icons/Prettier.png'
        }
    ],
    descriptionEn: `While learning the React.js framework, I took a training on the OpenClassRoom site, during this training I had to make this site with the help of the instructor. This allowed me to see the basics of this framework. So I used for this project React.js, Css, Javascript, Prettier and Eslint.`,
    descriptionFr: `Lors de mon apprentissage au framework React.js, j'ai suivis une formations sur le site de OpenClassRoom, lors de cette formation j'ai du réaliser ce site à l'aide de l'instructeur. Cela m'as permis de voir les bases de ce framework. J'ai donc utiliser pour ce projet React.js, Css, Javascript, Prettier et Eslint.`
}

export {portfolio, cuicuitedays, colorGuess, jungleHouse}