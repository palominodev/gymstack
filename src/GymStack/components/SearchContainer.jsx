import { SearchItem } from "./SearchItem"

export const SearchContainer = ({ searchUsers, inputSearch }) => {
	const QUERY = {
		initial: (inputSearch === ''),
		none: (inputSearch?.length >= 2 && searchUsers?.length === 0)
	}

	return (
		<section className="h-80 overflow-auto mt-4">
			{
				(QUERY.initial)
				? <p className="text-2xl text-center opacity-75">Empieza a buscar</p>
				: (QUERY.none)
					? <p className="text-2xl text-center opacity-75">No hay coincidencia</p>
					: searchUsers.map(item => (
						<SearchItem
							key={item.uid}
							complete_day={item.complete_days}
							total_days={item.total_days}
							isValid={item.status}
							suscription={item.type}
							name={item.name} />
					))
			}
		</section>
	)
}