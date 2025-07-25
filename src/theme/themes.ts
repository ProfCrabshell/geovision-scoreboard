import { Year } from '../config';

import { ThemeRecord } from './types';

// We only support 2023-2025 themes, with 2025 as fallback
export const themes = {
  '2023': {
    colors: {
      primary: {
        700: '#314fdb',
        750: '#1c47d2',
        800: '#173aad',
        900: '#0c0e89',
        950: '#02035e',
      },
      appBgColor: '#1f3496',
      countryItem: {
        bg: '#fff',
        hoverBg: '#e0f2fe',
        text: '#1b1b1c',
        pointsBg: '#fd0184',
        juryPointsText: '#0041fd',
        televotePointsBg: '#0041fd',
        televoteActiveBg: '#0239d9',
        televotePointsText: '#fff',
        televoteCountryText: '#fff',
        televoteUnfinishedText: '#1b1b1c',
        televoteFinishedBg: '#1b1c87',
        televoteOutline: '#3b82f6',
        juryLastPointsBg: '#fef700',
        televoteLastPointsBg: '#fef700',
        lastPointsText: '#fd0184',
        douzePointsBg: '#fef700',
        douzePointsText: '#fd0184',
        douzePointsBlock1: '#0043fe',
        douzePointsBlock2: '#fd0184',
        placeContainerBg: '#fd0184',
        placeText: '#fff',
      },
      panelInfo: {
        activeBg: '#fef700',
        activeText: '#fd0184',
        inactiveText: '#1940be',
      },
    },
  },
  '2024': {
    colors: {
      primary: {
        700: '#8622e4',
        750: '#621fae',
        800: '#4e2c7c',
        900: '#37185f',
        950: '#27064e',
      },
      appBgColor: '#4e2c7c',
      countryItem: {
        bg: '#622898',
        hoverBg: '#501f7f',
        text: '#fffbfd',
        pointsBg: '#c93ebe',
        juryPointsText: '#9868d2',
        televotePointsBg: '#9868d2',
        televoteActiveBg: '#9868d2',
        televotePointsText: '#fffbfd',
        televoteCountryText: '#fffbfd',
        televoteUnfinishedText: '#fffbfd',
        televoteFinishedBg: '#3b1162',
        televoteOutline: '#de84ef',
        juryLastPointsBg: '#2698bb',
        televoteLastPointsBg: '#2698bb',
        lastPointsText: '#fffbfd',
        douzePointsBg: '#de4ed2',
        douzePointsText: '#3d0887',
        douzePointsBlock1: '#710bb6',
        douzePointsBlock2: '#2698bb',
        placeContainerBg: '#622898',
        placeText: '#fffbfd',
      },
      panelInfo: {
        activeBg: '#530b97',
        activeText: '#2798bb',
        inactiveText: '#4e2c7c',
      },
    },
  },
  '2025': {
    colors: {
      primary: {
        700: '#9f47f2',
        750: '#6720b9',
        800: '#551a97',
        900: '#3f1371',
        950: '#320d4e',
      },
      appBgColor: '#3a0451',
      countryItem: {
        bg: '#6224b9',
        hoverBg: '#511b9c',
        text: '#fefefe',
        pointsBg: '#fefefe',
        juryPointsText: '#010002',
        televotePointsBg: '#fefefe',
        televoteActiveBg: '#8138e7',
        televotePointsText: '#010002',
        televoteCountryText: '#fefefe',
        televoteUnfinishedText: '#fefefe',
        televoteFinishedBg: '#bb01c5',
        televoteOutline: '#a088c2',
        juryLastPointsBg: '#bb01c5',
        televoteLastPointsBg: '#9e21de',
        lastPointsText: '#fefefe',
        douzePointsBg: '#05d9d9',
        douzePointsText: '#0e2986',
        douzePointsBlock1: '#710bb6',
        douzePointsBlock2: '#2698bb',
        placeContainerBg: '#7919ab',
        placeText: '#fffbfd',
      },
      panelInfo: {
        activeBg: '#530b97',
        activeText: '#c206cd',
        inactiveText: '#6426a9',
      },
    },
  },
} as ThemeRecord;

// Helper function to get theme for any year
export function getThemeForYear(year: Year) {
  if (year === '2023' || year === '2024' || year === '2025') {
    return themes[year];
  }

  return themes['2025']; // Fallback to 2025 theme
}
