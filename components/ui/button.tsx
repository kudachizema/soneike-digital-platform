import Link from 'next/link';

export function Button({
  href,
  children,
  variant = 'primary'
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const classes =
    variant === 'primary'
      ? 'inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-[#d9bb53]'
      : 'inline-flex items-center justify-center rounded-full border border-navy bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-slate';

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
