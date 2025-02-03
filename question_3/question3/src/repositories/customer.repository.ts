import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShopDataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.customerID,
  CustomerRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(Customer, dataSource);
  }
}
