import React from 'react'

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

export const DrinkInformation = (
    {
        defaultData = Drinks
    }
) => {
  return (
    <DrinkWrap>
    {/* all the information about the drink */}
    <DrinkInfo>
        <DrinkHeading> 
            {defaultData.strDrink}
        </DrinkHeading>

        {/* ingredients, prep and glass*/}
        <DrinkInstruct>
            <InstructHeading>
                Ingredients
            </InstructHeading>
            <InstructInfo> 
                {defaultData.ingredients.map((o,i)=>(
                <div key={i}>
                    {o}
                </div>))}
            </InstructInfo>
        </DrinkInstruct>

        <DrinkInstruct>
            <InstructHeading>
                Preparation
            </InstructHeading>
            <InstructInfo> 
                {defaultData.strInstructions}
            </InstructInfo>
        </DrinkInstruct>
        
        <DrinkInstruct>
            <InstructHeading>
                Glassware
            </InstructHeading>
            <InstructInfo> 
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
