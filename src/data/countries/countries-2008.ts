import { BaseCountry } from '../../models';

import { COMMON_COUNTRIES } from './common-countries';

export const COUNTRIES_2008: BaseCountry[] = [
  { ...COMMON_COUNTRIES.Albania, isQualified: true, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Andorra, isQualified: false, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Armenia, isQualified: true, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Azerbaijan, isQualified: true, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Belarus, isQualified: false, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Belgium, isQualified: false, semiFinalGroup: 'SF1' },
  {
    ...COMMON_COUNTRIES.BosniaHerzegovina,
    isQualified: true,
    semiFinalGroup: 'SF1',
  },
  { ...COMMON_COUNTRIES.Bulgaria, isQualified: false, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Croatia, isQualified: true, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Cyprus, isQualified: false, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Czechia, isQualified: false, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Denmark, isQualified: true, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Estonia, isQualified: false, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Finland, isQualified: true, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.France, isQualified: true, isAutoQualified: true },
  { ...COMMON_COUNTRIES.Georgia, isQualified: true, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Germany, isQualified: true, isAutoQualified: true },
  { ...COMMON_COUNTRIES.Greece, isQualified: true, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Hungary, isQualified: false, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Iceland, isQualified: true, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Ireland, isQualified: false, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Israel, isQualified: true, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Latvia, isQualified: true, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Lithuania, isQualified: false, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Malta, isQualified: false, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Moldova, isQualified: false, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Montenegro, isQualified: false, semiFinalGroup: 'SF1' },
  {
    ...COMMON_COUNTRIES.Netherlands,
    isQualified: false,
    semiFinalGroup: 'SF1',
  },
  {
    ...COMMON_COUNTRIES.NorthMacedonia,
    isQualified: false,
    semiFinalGroup: 'SF2',
  },
  { ...COMMON_COUNTRIES.Norway, isQualified: true, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Poland, isQualified: true, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Portugal, isQualified: true, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Romania, isQualified: true, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Russia, isQualified: true, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.SanMarino, isQualified: false, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Serbia, isQualified: true, isAutoQualified: true },
  { ...COMMON_COUNTRIES.Slovenia, isQualified: false, semiFinalGroup: 'SF1' },
  { ...COMMON_COUNTRIES.Spain, isQualified: true, isAutoQualified: true },
  { ...COMMON_COUNTRIES.Sweden, isQualified: true, semiFinalGroup: 'SF2' },
  {
    ...COMMON_COUNTRIES.Switzerland,
    isQualified: false,
    semiFinalGroup: 'SF2',
  },
  { ...COMMON_COUNTRIES.Turkey, isQualified: true, semiFinalGroup: 'SF2' },
  { ...COMMON_COUNTRIES.Ukraine, isQualified: true, semiFinalGroup: 'SF2' },
  {
    ...COMMON_COUNTRIES.UnitedKingdom,
    isQualified: true,
    isAutoQualified: true,
  },
];
