import React from 'react'
import { HeroMessageCont, HeroWelcomeText, HeroHeading } from './style'
import { HeroTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider'

export const HeroMessage = ({
   heading="Welcome",
   text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
}) => {
  const {theme} = useTheme();
  return (
    <HeroMessageCont>
        <div>
            <HeroHeading color={HeroTheme[theme].headCol}>
                {heading}
            </HeroHeading>

            <HeroWelcomeText color={HeroTheme[theme].textCol}>
                {text}
            </HeroWelcomeText>
        </div>

        
    </HeroMessageCont>
  )
}
