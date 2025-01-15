import _ from 'lodash';

export const formatToThousand = (number: number, separator = ',') => {
  return _.replace(_.toString(number), /\B(?=(\d{3})+(?!\d))/g, separator);
};
