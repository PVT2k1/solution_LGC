import {Entity, model, property} from '@loopback/repository';

@model()
export class Agency extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  agencyID?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  phoneNumber?: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @property({
    type: 'number',
    required: true,
  })
  productID: number;

  @property({
    type: 'number',
    required: true,
  })
  transactionID: number;

  @property({
    type: 'number',
    required: true,
  })
  billingID: number;


  constructor(data?: Partial<Agency>) {
    super(data);
  }
}

export interface AgencyRelations {
  // describe navigational properties here
}

export type AgencyWithRelations = Agency & AgencyRelations;
