import { ShowHousesUser } from '@/actions/house/getHouseUser'
import { CardHouseUser } from '@/components/house/cardHouseUser/card'
import Link from 'next/link'
import { BiPlusCircle } from 'react-icons/bi'
import { BsPersonWorkspace } from 'react-icons/bs'

interface SearchParamsProps {
  searchParams: {
    page: number
  }
}

type requestType = {
  data: []
  countPage: number
}
export default async function HouseUser({ searchParams }: SearchParamsProps) {
  let { page } = searchParams || 1
  if (page === undefined) page = 1

  const dt = (await ShowHousesUser(page)) as requestType
  const data = dt.data
  const count = dt.countPage

  return (
    <div className="mt-2 flex flex-col gap-3">
      <div className="md:w-[800px] max-md:w-80 mx-auto space-y-3">
        <Link
          href="/house/insert"
          className="flex items-center text-blue-500 gap-2 w-40 hover:underline"
        >
          <BiPlusCircle size={23} />
          Adicionar anúncio
        </Link>
        <h1 className="flex items-center gap-2">
          <BsPersonWorkspace size={23} />
          Meus anúncios
        </h1>
      </div>
      {data.length > 0 ? (
        <CardHouseUser countPage={count} query={page} data={data} />
      ) : (
        <p>Não há anúncios publicado!</p>
      )}
    </div>
  )
}
