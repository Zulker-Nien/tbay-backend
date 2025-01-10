import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductSaleDto } from './dtos/product-sale.dto';
import { ProductSaleDetailsService } from './providers/product-sale-details.service';
import { ProductSaleEntity } from './product-sale.entity';

@Resolver(() => ProductSaleEntity)
export class ProductSaleResolver {
  constructor(private readonly productSaleService: ProductSaleDetailsService) {}

  @Mutation(() => ProductSaleEntity)
  createProductSale(
    @Args('createProductSaleInput')
    createProductSaleInput: ProductSaleDto,
  ) {
    return this.productSaleService.create(createProductSaleInput);
  }

  @Query(() => [ProductSaleEntity], { name: 'productSales' })
  findAll() {
    return this.productSaleService.findAll();
  }

  @Query(() => ProductSaleEntity, { name: 'productSale' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productSaleService.findOne(id);
  }

  @Mutation(() => ProductSaleEntity)
  removeProductSale(@Args('id', { type: () => Int }) id: number) {
    return this.productSaleService.remove(id);
  }
}
