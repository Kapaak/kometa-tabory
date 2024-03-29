//images
import { EnvelopeOpen, Phone } from '@phosphor-icons/react';

import { ContactItem } from './ContactSectionItem';
//interfaces

export const data: ContactItem[] = [
  {
    title: 'Telefon',
    icon: Phone,
    description: '+420 773 708 287',
  },
  {
    title: 'E-mail',
    icon: EnvelopeOpen,
    description: 'info@primestak-brno.cz',
  },
];
