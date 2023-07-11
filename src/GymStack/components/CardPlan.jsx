export const CardPlan = ({price}) => {
  return (
	<article className="flex flex-col sm:flex-row justify-center items-center border rounded-md p-4">
		<p className="text-3xl text-center mb-4" >
			<span className="text-7xl font-bold">{price}</span> soles
		</p>
		<ul className="w-2/3">
			<li className="p-1" >-Beneficio #1</li>
			<li className="p-1" >-Beneficio #2</li>
			<li className="p-1" >-Beneficio #3</li>
			<li className="p-1" >-Beneficio #4</li>
			<li className="p-1" >-Beneficio #5</li>
		</ul>
	</article>
  )
}