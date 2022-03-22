
export const search_types = {
    'Cocktail Name':'strDrink',
    'Non-Alcoholic':'strAlcoholic',
    'Glassware':"strGlass",
}

//THEMES
var black = '#000000' 
var white = ' white'
var peach = '#FEE0CF' 
var salsa = '#FF3549'
var orange = '#F39C6B'
var grey = '#2E2B26'
var turq = '#3AAFB9'
// BODY 
export const global_theme = {
    default:{
        body:black
    },

    light:{
        body:peach
    }
} 

//NAV BAR 
export const NavbarTheme = {
    default:{
        bg:black,
        color:white
    },

    light:{
        bg:peach,
        color:salsa
    }
}

//HERO MESSAGE
export const HeroTheme = {
    default:{
        headCol:white,
        textCol:orange
    },

    light:{
        headCol:black,
        textCol:salsa
    }
}

//GENERATE CONTAINER
export const GenerateTheme = {
    default:{
        bgcol:grey,
        col:white
    },

    light:{
        bgcol:white,
        col:black
    }
}

//BUTTON
export const ButtonTheme = {
    default:{
        bgcol:salsa
    },

    light:{
        bgcol:turq
    }
}