import Link from './Link'
import ArrowRight from '@/components/Icon'

const Card = ({ title, description, href }) => (
  <div className="md p-4">
    <div
      className={`flex w-full items-center overflow-hidden rounded-3xl border-2 border-gray-200 border-opacity-60 shadow-gray-400 hover:shadow-lg dark:border-gray-700`}
    >
      <div className="flex w-full items-center justify-between p-6">
        <h2 className="text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {href && (
          <Link
            href={href}
            className="dark: text-base font-medium leading-6 hover:text-primary-600"
            aria-label={`Link to ${title}`}
          >
            <ArrowRight width={30} height={30} />
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
