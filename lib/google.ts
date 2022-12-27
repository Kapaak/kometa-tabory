import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_SPREADSHEET_ID);

const authCredentials = {
	client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL ?? "",
	private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY ?? "",
};

export const appendSpreadsheet = async (row: any, sheetId: string) => {
	console.log(doc, "document");

	console.log(process.env.NEXT_PUBLIC_CLIENT_EMAIL, "email");
	console.log(process.env.NEXT_PUBLIC_PRIVATE_KEY, "private key");

	try {
		await doc.useServiceAccountAuth(authCredentials);
		// loads document properties and worksheets
		await doc.loadInfo();
		const sheet = doc.sheetsById[sheetId];
		console.log(sheet, "sheet");
		await sheet.addRow(row);
	} catch (e) {
		console.error("Error: ", e);
	}
};

export const clickMaxHandler = async (sheetId: string) => {
	try {
		await doc.useServiceAccountAuth(authCredentials);

		await doc.loadInfo();

		const sheet = doc.sheetsById[sheetId];
		const result = await sheet.getRows();

		console.log(result, "reso");
	} catch (e) {
		console.log("eerrror:", e);
	}
};
