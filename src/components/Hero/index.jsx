import { useScroll, useTransform } from 'framer-motion';
import * as Styled from './index.styles';
import { Reveal } from '../Reveal';

const Hero = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <Styled.HeroContainer>
      <Styled.HeroSection style={{ y }}>
        <div>
          <Reveal>
            <Styled.Frontend>Frontend Developer</Styled.Frontend>
          </Reveal>
          <Reveal>
            <Styled.Heading>May-Tove Hovdal</Styled.Heading>
          </Reveal>
          <Reveal>
            <Styled.Text>
              Building user-friendly websites with clean design
            </Styled.Text>
          </Reveal>
        </div>
      </Styled.HeroSection>
    </Styled.HeroContainer>
  );
};

export default Hero;
