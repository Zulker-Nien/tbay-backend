import { registerEnumType } from '@nestjs/graphql';

export enum OrderType {
  BUY = 'BUY',
  RENT = 'RENT',
}

registerEnumType(OrderType, {
  name: 'ItemType',
  description: 'The type of order item - either BUY or RENT',
});
