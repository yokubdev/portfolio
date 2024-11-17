import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Page() {
  return (
    <>
      <div className="divide-gray-200 dark:divide-gray-700">
        <div className="pt-4 md:pt-4">
          <h1 className="text-xl font-extrabold uppercase leading-10 tracking-tight text-gray-500 dark:text-gray-500 md:text-2xl md:leading-14">
            Recent Works
          </h1>
        </div>
        <div className="flex flex-col py-4">
          <div className="-m-4">
            {projectsData.map((d) => (
              <Card key={d.title} title={d.title} description={d.description} href={d.href} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
