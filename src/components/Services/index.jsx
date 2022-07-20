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
          <Subtitle>layanan kami</Subtitle>
          <ServiceHeader>Services</ServiceHeader>
        </ServiceTextWrap>
        <ServiceWrapper>
          <ServiceCard>
            <ImgWrap>
              <Img src={image4}/>
            </ImgWrap>
            <TextWrap>
              <Header>Kecerdasan AI</Header>
              <Text>Kami menggunakan AI untuk mengatur sistem slot</Text>
            </TextWrap>
          </ServiceCard>
          <ServiceCard>
            <ImgWrap>
              <Img src={image5}/>
            </ImgWrap>
            <TextWrap>
              <Header>Mentor Berpengalaman</Header>
              <Text>Mentor profesional yang akan membantu anda</Text>
            </TextWrap>
          </ServiceCard>
          <ServiceCard>
            <ImgWrap>
              <Img src={image6}/>
            </ImgWrap>
            <TextWrap>
              <Header>Keamanan Sistem</Header>
              <Text>Menggunakan sistem keamanan yang selalu membanteng</Text>
            </TextWrap>
          </ServiceCard>
        </ServiceWrapper>
      </ServiceContainer>
    </Service>
  )
}

export default Services