// libs
import * as React from 'react';
import { navigate } from 'hookrouter';

// [components]
import Layout from '../../layouts/Layout';
import Footer from '../../components/Footer';

// types
import { LinkEnum } from '../../routes';

// styles
import './Home.pcss';

const Home = (): React.ReactElement => {
  // @ts-ignore
  const handleClick = () => navigate(LinkEnum.HOME);

  return (
    <div className="home">
      <Layout className="home__content">
        Go home
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
