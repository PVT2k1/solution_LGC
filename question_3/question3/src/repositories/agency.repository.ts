import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShopDataSource} from '../datasources';
import {Agency, AgencyRelations} from '../models';

export class AgencyRepository extends DefaultCrudRepository<
  Agency,
  typeof Agency.prototype.agencyID,
  AgencyRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(Agency, dataSource);
  }
}
