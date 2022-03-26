import React from 'react'
import { IndDrinkTheme } from '@/utils/variables';
import { 
    DrinkWrap,
    DrinkInfo,
    DrinkImageCont,
    DrinkImage,
    DrinkHeading,
    DrinkInstruct,
    InstructHeading,
    InstructInfo,
    Suggestions
} from './styles';

// data imports 
import { Drinks } from '@/props';
import {useTheme} from '../../utils/provider'

export const DrinkInformation = (
    {
        defaultData = Drinks
    }
) => {
    const {theme} = useTheme();
    return (
    <DrinkWrap>
    {/* all the information about the drink */}
    <DrinkInfo>
        <DrinkHeading color={IndDrinkTheme[theme].headCol}> 
            {defaultData.strDrink}
        </DrinkHeading>

        {/* ingredients, prep and glass*/}
        <DrinkInstruct>
            <InstructHeading color={IndDrinkTheme[theme].headCol}>
                Ingredients
            </InstructHeading>
            <InstructInfo color={IndDrinkTheme[theme].bodyText}> 
                {defaultData.ingredients.map((o,i)=>(
                <div key={i}>
                    {o}
                </div>))}
            </InstructInfo>
        </DrinkInstruct>

        <DrinkInstruct>
            <InstructHeading color={IndDrinkTheme[theme].headCol}>
                Preparation
            </InstructHeading>
            <InstructInfo color={IndDrinkTheme[theme].bodyText}> 
                {defaultData.strInstructions}
            </InstructInfo>
        </DrinkInstruct>
        
        <DrinkInstruct>
            <InstructHeading color={IndDrinkTheme[theme].headCol}>
                Glassware
            </InstructHeading>
            <InstructInfo color={IndDrinkTheme[theme].bodyText}> 
                {defaultData.strGlass}
            </InstructInfo>
        </DrinkInstruct>

    </DrinkInfo>

    {/* Drink Image */}
    <DrinkImageCont>
        <DrinkImage alt='' src={defaultData.strDrinkThumb} />
    </DrinkImageCont>   
                
</DrinkWrap>
  )
}
