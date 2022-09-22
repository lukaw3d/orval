/**
 * Generated by orval v6.10.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type { Dog } from './dog';
import type { Cat } from './cat';
import type { PetCallingCode } from './petCallingCode';
import type { PetCountry } from './petCountry';

export type Pet =
  | (Dog & {
      '@id'?: string;
      id: number;
      name: string;
      tag?: string;
      email?: string;
      callingCode?: PetCallingCode;
      country?: PetCountry;
    })
  | (Cat & {
      '@id'?: string;
      id: number;
      name: string;
      tag?: string;
      email?: string;
      callingCode?: PetCallingCode;
      country?: PetCountry;
    });
