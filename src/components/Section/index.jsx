import { Button } from '../Button'
import { Element } from 'react-scroll'
import { 
  Sec,
  SecContainer,
  SecWrapper,
  Column1,
  Column2,
  TextWrap,
  Subtitle,
  Header,
  Description,
  ImageWrap,
  Image
} from "./SectionElements"

const Section = ({ id, subtitle, header, description, button, imgStart, imgLink, dark, primary, light }) => {
  return (
    <Element name={id}>
      <Sec dark={dark}>
        <SecContainer>
          <SecWrapper imgStart={imgStart}>
            <Column1>
              <TextWrap imgStart={imgStart}>
                <Subtitle>{subtitle}</Subtitle>
                <Header dark={dark}>{header}</Header>
                <Description dark={dark}>{description}</Description>
                <Button primary={primary ? 1 : 0} light={light ? 1 : 0} to='about'>{button}</Button>
              </TextWrap>
            </Column1>
            <Column2>
              <ImageWrap>
                <Image src={imgLink} alt="image"/>
              </ImageWrap>
            </Column2>
          </SecWrapper>
        </SecContainer>
      </Sec>
    </Element>
  )
}

export default Section