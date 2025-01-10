import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductRentEntity } from './product-rent.entity';
import { ProductRentDetailsService } from './providers/product-rent-details.service';
import { ProductRentDto } from './dtos/product-rent.dto';

@Resolver(() => ProductRentEntity)
export class ProductRentResolver {
  constructor(private readonly productRentService: ProductRentDetailsService) {}

  @Mutation(() => ProductRentEntity)
  createProductRent(
    @Args('createProductRentInput')
    createProductRentInput: ProductRentDto,
  ) {
    return this.productRentService.create(createProductRentInput);
  }

  @Query(() => [ProductRentEntity], { name: 'productRents' })
  findAll() {
    return this.productRentService.findAll();
  }

  @Query(() => ProductRentEntity, { name: 'productRent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productRentService.findOne(id);
  }

  @Mutation(() => ProductRentEntity)
  removeProductRent(@Args('id', { type: () => Int }) id: number) {
    return this.productRentService.remove(id);
  }
}
