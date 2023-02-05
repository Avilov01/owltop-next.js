import { SortType } from '../components/Sort';
import { ProductModel } from '../interfaces/product.interface';

export type Action = {
  type: SortType
};

export type SortState = {
  sort: SortType;
  products: ProductModel[]
};

export type SortReducer = (state: SortState, action: Action) => SortState;

export const sortReducer: SortReducer = (state, action) => {
  switch (action.type) {
    case 'Price': {
      return {
        sort: 'Price',
        products: state.products.sort((a, b) => a.price > b.price ? -1 : 1)
      };
    }
    case 'Rating': {
      return {
        sort: 'Rating',
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? 1 : -1)
      };
    }
    default: {
      throw new Error('Не верный тип сортировки');
    }
  }
};