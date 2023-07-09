import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://test.amazonaws.com/dev',
    order: 'https://test.amazonaws.com/dev',
    import: 'https://test.amazonaws.com/dev',
    bff: 'https://test.amazonaws.com/dev',
    cart: 'https://test.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: false,
    bff: false,
    cart: false,
  },
};
