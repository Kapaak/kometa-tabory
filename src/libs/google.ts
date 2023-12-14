import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

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

    await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
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
