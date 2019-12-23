import { createParamDecorator } from '@nestjs/common';
import * as graphqlFields from 'graphql-fields';

export const Fields = createParamDecorator((_, [, , , info]) =>
  Object.keys(graphqlFields(info)),
);
