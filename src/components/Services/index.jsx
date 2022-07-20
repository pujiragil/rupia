import { Subtitle } from "../Section/SectionElements"
import image4 from '../../images/img-4.svg'
import image5 from '../../images/img-5.svg'
import image6 from '../../images/img-6.svg'

import { 
  Service,
  ServiceContainer,
  ServiceTextWrap,
  ServiceHeader,
  ServiceWrapper,
  ServiceCard,
  ImgWrap,
  Img,
  TextWrap,
  Header,
  Text
} from "./ServicesElements"

const Services = ({ id }) => {
  return (
    <Service id={id}>
      <ServiceContainer>
        <ServiceTextWrap>
          <Subtitle>our services</Subtitle>
          <ServiceHeader>Services</ServiceHeader>
        </ServiceTextWrap>
        <ServiceWrapper>
          <ServiceCard>
            <ImgWrap>
              <Img src={image4}/>
            </ImgWrap>
            <TextWrap>
              <Header>Using AI</Header>
              <Text>We are using AI power to manage our system with best performance.</Text>
            </TextWrap>
          </ServiceCard>
          <ServiceCard>
            <ImgWrap>
              <Img src={image5}/>
            </ImgWrap>
            <TextWrap>
              <Header>Profesional Mentor</Header>
              <Text>Profesional mentor who will assist you in managing your finance.</Text>
            </TextWrap>
          </ServiceCard>
          <ServiceCard>
            <ImgWrap>
              <Img src={image6}/>
            </ImgWrap>
            <TextWrap>
              <Header>Security System</Header>
              <Text>Security system that is secure and assisted by artifical intelligence.</Text>
            </TextWrap>
          </ServiceCard>
        </ServiceWrapper>
      </ServiceContainer>
    </Service>
  )
}

export default Services