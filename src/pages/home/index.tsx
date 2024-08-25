import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calçendário e permita que seus clientes agendem no seu
          tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image height={400} src={previewImage} alt="Preview" priority />
      </Preview>
    </Container>
  )
}
