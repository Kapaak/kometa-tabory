import { CampType } from '~/types';

export function campTypeToUrl(campType?: string) {
  switch (campType) {
    case CampType.Swimming:
      return '/tabor-plavani';
    case CampType.Trip:
      return '/tabor-vylety';
    case CampType.Residential:
      return '/tabor-pobytovy';
    default:
      return '/';
  }
}
