import { ParsedUrlQuery } from 'querystring';

import { FC } from 'react';

import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import { firstLevelMenu } from '../../helpers';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { withLayout } from '../../layout';

interface TypeProps {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}


const Type: FC<TypeProps> = ({ firstCategory }) => {
  return <>{firstCategory}</>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(m => `/${m.route}`),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory: firstCategoryItem.id
  });

  return {
    props: {
      type: params.type,
      menu,
      firstCategory: firstCategoryItem.id
    }
  };
};