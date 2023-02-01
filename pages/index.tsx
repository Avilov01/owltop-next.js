import axios from 'axios';
import { GetStaticProps } from 'next';

import { Title } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';
import { withLayout } from '../layout';

interface HomeProps {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  return (
    <Title variant='h1'>
      Home page
    </Title>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};
