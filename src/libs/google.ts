import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';

import { Gender } from '~/types';

const serviceAccontAuth = new JWT({
  email: process.env.NEXT_PUBLIC_CLIENT_EMAIL ?? '',
  key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? '',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

//pokud neni defined, tak hazi no key or key filed defined err
const googleDocument = new GoogleSpreadsheet(
  process.env.NEXT_PUBLIC_SPREADSHEET_ID ?? '',
  serviceAccontAuth
);

export const appendSpreadsheet = async (row: any, sheetId: number) => {
  try {
    // loads document properties and worksheets
    await googleDocument.loadInfo();

    const sheet = googleDocument.sheetsById[sheetId];

    return await sheet.addRow(row);
  } catch (error) {
    throw error;
  }
};

export const getRowsBySheetId = async (sheetId: number) => {
  try {
    await googleDocument.loadInfo();

    const sheet = googleDocument.sheetsById[sheetId];
    const result = await sheet.getRows();

    return result;
  } catch (e) {
    console.log('get rows by sheet id:', e);
  }
};

export const getAllSheets = async (sheetIds: Array<number>) => {
  try {
    await googleDocument.loadInfo();

    return sheetIds?.map((sheetId) =>
      googleDocument.sheetsById[sheetId].getRows()
    );
  } catch (e) {
    console.log('get all sheets:' + e);
    return Error;
  }
};

export type CampOccupancy = {
  total: number;
  male: number;
  female: number;
};

export const getOccupancyFromRows = (
  rows: GoogleSpreadsheetRow[] = []
): CampOccupancy => {
  const genders = rows.map((row) =>
    String(row.get('Pohlaví') ?? '')
      .trim()
      .toLowerCase()
  );

  return {
    total: rows.length,
    male: genders.filter((gender) => gender === Gender.Male).length,
    female: genders.filter((gender) => gender === Gender.Female).length,
  };
};

export const getOccupancyBySheetId = async (sheetId: number) => {
  await googleDocument.loadInfo();

  const rows = await googleDocument.sheetsById[sheetId].getRows();

  return getOccupancyFromRows(rows);
};
