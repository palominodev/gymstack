export const CardPlan = ({price}) => {
  return (
	<article>
		<p className="text-3xl" >
			<span className="text-6xl">{price}</span> soles
		</p>
		<ul>
			<li>Beneficio #1</li>
			<li>Beneficio #2</li>
			<li>Beneficio #3</li>
			<li>Beneficio #4</li>
			<li>Beneficio #5</li>
		</ul>
	</article>
  )
}