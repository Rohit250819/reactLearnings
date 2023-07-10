import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  padding: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading 
        textTransform={'uppercase'} 
        py={'2'} 
        w={'fit-content'}
        borderBottom={'2px solid'}
        m={'auto'}
        >
          Services
        </Heading>

        <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
        >

        <Image 
        src={img5}
        h={['40', '400']}
        filter={'hue-rotate(-300deg)'}
        />

        <Text
        letterSpacing={'widest'}
        lineHeight={'190%'}
        padding={['4', '16']}
        textAlign={'center'}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque deserunt quia necessitatibus ad nihil fuga doloribus ipsum. Animi, aspernatur maxime. Nisi officia voluptate, illo voluptas iure perferendis ab placeat harum dolore. Labore iusto illum officia optio culpa sunt! Delectus tempora aliquid eligendi, modi repellat neque asperiores excepturi error non inventore doloremque atque autem eius velit perferendis incidunt suscipit iure iste voluptatum porro fuga? Beatae voluptates rerum vero amet assumenda. Assumenda sunt voluptate consequatur. Quod deserunt autem labore harum beatae fugiat quae ullam, aperiam inventore recusandae. Corrupti, soluta. Fuga inventore unde animi quas aperiam sit obcaecati id. Nesciunt, aperiam accusantium?
        </Text>

        </Stack>

      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoplay
    infiniteloop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Love the Night Silence
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
