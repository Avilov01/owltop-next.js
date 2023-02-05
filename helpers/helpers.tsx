import BooksIcon from '../assets/icons/books.svg';
import CoursesIcon from '../assets/icons/courses.svg';
import ProductsIcon from '../assets/icons/products.svg';
import ServicesIcon from '../assets/icons/services.svg';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const priceRu = (price: number | string): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/d, ' ').concat(' ₽');
};