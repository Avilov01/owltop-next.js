import { ParsedUrlQuery } from 'querystring';

import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import { firstLevelMenu } from '../../helpers';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { withLayout } from '../../layout';


interface CourseProps {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page?: TopPageModel;
  products?: ProductModel[];
}

function Course(props: CourseProps): JSX.Element {
  return (
    <div>
      Course page
    </div>
  );
}

export default  withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
      firstCategory: m.id
    });
    const test = menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`));

    paths = paths.concat(test);
  }

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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

  try {
    const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
      firstCategory: firstCategoryItem.id
    });

    if (!menu.length) {
      return {
        notFound: true
      };
    }

    const { data: page } = await axios.get<TopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`);
    const { data: products } = await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
      category: page.category,
      limit: 10
    });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
};
