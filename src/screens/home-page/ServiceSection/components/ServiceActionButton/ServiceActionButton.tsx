import Link from 'next/link';

import { Button } from '~/ui/components';

interface ServiceActionButtonProps {
  label?: string;
  href?: string;
}

export function ServiceActionButton({ href, label }: ServiceActionButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <Button>{label}</Button>
      </Link>
    );
  }

  return <Button disabled>{label}</Button>;
}
