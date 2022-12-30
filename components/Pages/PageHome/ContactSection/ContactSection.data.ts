//images
import LocationIcon from "@/public/icons/location.svg";
import UserIcon from "@/public/icons/user.svg";
import EmailIcon from "@/public/icons/email.svg";
import PhoneIcon from "@/public/icons/phone.svg";
//interfaces
import { ContentType, IContact } from "./ContactSection.interface";

export const data: IContact[] = [
  {
    headline: "adresa",
    icon: LocationIcon,
    fragment: [
      {
        output: "Bauerova 321/5, Brno 603 00",
        type: ContentType.normal,
      },
    ],
  },
  {
    headline: "kontaktní osoba",
    icon: UserIcon,
    fragment: [
      {
        output: "Bc. Anna Matušová",
        type: ContentType.normal,
      },
    ],
  },
  {
    headline: "telefon",
    icon: PhoneIcon,
    fragment: [
      {
        output: "+420 626 354 747",
        type: ContentType.link,
      },
    ],
  },
  {
    headline: "e-mail",
    icon: EmailIcon,
    fragment: [
      {
        output: "taborpisarky@kometaplavani.cz",
        type: ContentType.link,
      },
    ],
  },
];
