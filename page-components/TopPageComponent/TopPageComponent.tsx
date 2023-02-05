import { HhData, Tag, Title, Visible } from '../../components';
import { Advantages } from '../../components/Advantages';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import styles from './TopPageComponent.module.css';

interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page?: TopPageModel;
  products?: ProductModel[];
}

export const TopPageComponent = ({
  firstCategory,
  page,
  products
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Title variant='h1'>{page?.title}</Title>
        <Visible trigger={products}>
          <Tag color='green' size='m'>{products?.length}</Tag>
          <span>Сортировка</span>
        </Visible>
      </div>

      <div>
        {products?.map(p => (
          <div key={p._id}>{p.title}</div>
        ))}
      </div>

      <div className={styles.hhTitle}>
        <Title variant='h2'>Вакансии - {page?.category}</Title>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>

      {firstCategory === TopLevelCategory.Courses && page?.hh && <HhData {...page.hh} />}

      {page?.advantages?.length && (
        <>
          <Title variant='h2'>
            Преимущества
          </Title>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page?.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

      <Title variant='h2'>
        Получаемы навыки
      </Title>
      {page?.tags && page.tags.map((t) => (
        <Tag key={t} color='primary'>{t}</Tag>
      ))}

    </div>
  );
};