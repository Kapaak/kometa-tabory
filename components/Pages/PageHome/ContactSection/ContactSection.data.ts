//images
import LocationIcon from "@/public/icons/location.svg";
import UserIcon from "@/public/icons/user.svg";
import EmailIcon from "@/public/icons/email.svg";
import PhoneIcon from "@/public/icons/phone.svg";
//interfaces
import { contentType, IContact } from "./ContactSection.interface";

export const data: IContact[] = [
	{
		headline: "adresa",
		icon: LocationIcon,
		fragment: [
			{
				output: "Sportovní 486/4, Brno 602 00",
				type: contentType.normal,
			},
		],
	},
	{
		headline: "kontaktní osoba",
		icon: UserIcon,
		fragment: [
			{
				output: "Bc. Anna Matušová",
				type: contentType.normal,
			},
		],
	},
	{
		headline: "telefon",
		icon: PhoneIcon,
		fragment: [
			{
				output: "+420 606 354 747",
				type: contentType.link,
			},
		],
	},
	{
		headline: "e-mail",
		icon: EmailIcon,
		fragment: [
			{
				output: "plavaniluzanky@kometabrno.cz",
				type: contentType.link,
			},
		],
	},
];
