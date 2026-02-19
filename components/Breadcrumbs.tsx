import Link from 'next/link';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex gap-2 text-gray-600 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <>
                <Link href={item.href} className="hover:text-blue-900">
                  {item.label}
                </Link>
                {index < items.length - 1 && <span>/</span>}
              </>
            ) : (
              <>
                <span className="text-gray-900 font-semibold">{item.label}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
