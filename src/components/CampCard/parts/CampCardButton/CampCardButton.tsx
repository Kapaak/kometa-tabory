import Link from 'next/link';

import { Button } from '~/ui/components';

interface CampCardButtonProps {
  label?: string;
  href?: string;
  disabled?: boolean;
}

export function CampCardButton({ href, label, disabled }: CampCardButtonProps) {
  if (href && !disabled) {
    return (
      <Link href={href}>
        <Button>{label}</Button>
      </Link>
    );
  }

  return <Button disabled>{label}</Button>;
}
