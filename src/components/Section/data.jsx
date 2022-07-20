import image1 from '../../images/img-1.svg'
import image2 from '../../images/img-7.svg'
import image3 from '../../images/img-3.svg'

export const obj1 = {
  id: 'about',
  subtitle: 'siapa kami',
  header: 'Kamipun Tidak Tahu Siapa Kami Sendiri',
  description: 'Kami adalah organisasi yang bergerak di bidang kemanusiaan.',
  button: 'Sawer Kami',
  to: 'blog',
  imgStart: false,
  imgLink: image1,
  dark: false,
  primary: false,
  light: false
}

export const obj2 = {
  id: 'blog',
  subtitle: 'kenali kami',
  header: 'Hayuk Kenalan Dengan Kami',
  description: 'Kenali kami lebih dekat dan jalin hubungan badan dengan kami.',
  button: 'Hubungi Kami',
  to: 'about',
  imgStart: true,
  imgLink: image3,
  dark: true,
  primary: true,
  light: true
}

export const obj3 = {
  id: 'profile',
  subtitle: 'profile kami',
  header: 'Partai Banteng Adalah Kami',
  description: 'Jiwa kami selalu membanteng dan akan selamanya membanteng.',
  button: 'Bubarkan PDIP',
  to: 'discover',
  imgStart: false,
  imgLink: image2,
  dark: true,
  primary: true,
  light: true
}