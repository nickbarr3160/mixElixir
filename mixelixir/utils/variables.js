
export const search_types = {
    'Cocktail Name':'strDrink',
    'Non Alcoholic':'strAlcoholic',
    'Glassware':"strGlass",
}

export const comp_theme={
    default:{
        menu:'#8B3AF3',
        ham:'black',
        chart:'#8B3AF3',
        footer:'#242424',
        mainTxt:'#D8D8F6',
        accentTxt:'#F2422B',
        buzzTxt:'#94BDD4',
        ecoHead:'#A5C955',
        ecoSub:'#63B0BC'
    },
    light:{
        menu:'#8B3AF3',
        ham:'red',
        chart:'#8B3AF3',
        footer:'#0D0D0D',
        mainTxt:'#0D0D0D',
        accentTxt:'#F2422B',
        buzzTxt:'#3D5A80',
        ecoHead:'#2C484D',
        ecoSub:'#63B0BC'


    }
}


//THEMES
var black = '#141414' 
var white = 'white'
var peach = '#FEE0CF' 
var salsa = '#FF3549'
var orange = '#F39C6B'
var grey = '#202223'
var turq = '#3AAFB9'
var altGrey = '#202223'

// BODY 
export const global_theme = {
    default:{
        body:black
    },

    light:{
        body:white
    }
} 

//NAV BAR 
export const NavbarTheme = {
    default:{
        bg:black,
        color:white,
        icon:salsa,
        links:white,
        menuBg:altGrey

    },

    light:{
        bg:peach,
        color:salsa,
        icon:salsa,
        links:salsa,
        menuBg:altGrey
    }
}

//HERO MESSAGE
export const HeroTheme = {
    default:{
        headCol:white,
        textCol:salsa
    },

    light:{
        headCol:black,
        textCol:salsa
    }
}

//GENERATE CONTAINER
export const GenerateTheme = {
    default:{
        bgcol:black,
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

//INDIVIDUAL CARD
export const IndDrinkTheme = {
    default:{
        headCol:white,
        subHeadCol:orange,
        bodyText:white
    },

    light:{
        headCol:black,
        subHeadCol:turq,
        bodyText:black    
    }
}

//DRINK CARD
export const DrinkTheme = {
    default:{
        bgCol:salsa
    },

    light:{
        bgCol:turq   
    }
}

//SEARCH FILTER
export const SearchFilterTheme = {
    default:{
        col:salsa
    },

    light:{
        col:black   
    }
}


//UNIVERSAL HEADINGS
export const HeaderTheme = {
    default:{
        col:white
    },

    light:{
        col:turq  
    }
}

export const SubHeaderTheme = {
    default:{
        col:salsa
    },

    light:{
        col:black 
    }
}

//EVENT THEMES
export const EventTheme = {
    default:{
        cardbgcol:altGrey,
        heading:white,
        userCol:salsa,
        bodyText:white
    },

    light:{
        cardbgcol:white,
        heading:turq,
        userCol:turq,
        bodyText:black
    }
}