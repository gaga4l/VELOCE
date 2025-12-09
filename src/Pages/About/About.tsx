import Nav from './Components/Navigaiton/Nav';
import HeroText from './Components/HeroText/HeroText';
import Main from './Components/Main/Main';
import Footer from '../../Components/Footer/Footer';

const About = () => {
  return (
    <>
    <Nav />
    <HeroText />
    <Main />
    <Footer backgroundColor="about" />
    </>
  )
}

export default About;