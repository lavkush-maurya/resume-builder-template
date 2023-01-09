import Header from '../src/components/header/header'
import Heroes from '../src/components/hero/heroes';
import Card from '../src/components/card/card';
import Jumbo from '../src/components/jumbo/jumbo';
import Footer from '../src/components/footer/footer';

const Home = () => {
    return (
        <>
            <Header />
            <Heroes />
            <Card />
            <Jumbo />
            <Footer />
        </>
    )
}

export default Home;