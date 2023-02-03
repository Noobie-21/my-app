import { Image, Box, Heading, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import { Image, Box, Heading } from '@chakra-ui/react';

//Imgages
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.png';

const Home = () => {
  const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };

  const headingStyle = {
    bgColor: 'blackAlpha.600',
    color: 'white',
    w: 'full',
    h: 'full',
  };
  // const imgs = [img1, img2, img3, img4, img5];
  return (
    <Box>
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
        >
          <Box w="full" h={'100vh'}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
            <Heading {...headingStyle} {...headingOptions}>
              Watch The Future
            </Heading>
          </Box>
          <Box w={'full'} h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
            <Heading {...headingStyle} {...headingOptions}>
              Watch the Future
            </Heading>
          </Box>
          <Box w={'full'} h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
            <Heading {...headingStyle} {...headingOptions}>
              Watch the Future
            </Heading>
          </Box>
          <Box w={'full'} h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
            <Heading {...headingStyle} {...headingOptions}>
              Watch the Future
            </Heading>
          </Box>
        </Carousel>
      </div>
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading textTransform={'uppercase'} py={2} borderBottom={'2px solid'}>
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
            filter={'hue-rotate(-130deg)'}
          ></Image>

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={[4, 16]}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            corrupti commodi deleniti cupiditate. Sapiente dignissimos et cumque
            sequi accusamus, exercitationem aliquid ullam deserunt quibusdam
            impedit! Officia blanditiis alias in id dignissimos unde aperiam non
            hic ipsa sed mollitia nihil obcaecati similique ratione quod, est
            numquam adipisci illum velit, libero laboriosam doloribus quae
            veniam. Ipsam adipisci minima facere quisquam libero? Dolore, rem?
            Quas, totam obcaecati cupiditate quam dolorum repellat enim magnam
            facilis tempora maiores incidunt natus soluta rem pariatur quisquam
            id modi nihil eveniet quae dolorem aspernat.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
