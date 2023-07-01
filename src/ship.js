function Ship(length) {
	let hits = 0;
	const hit = () => {
		hits +=1;
	}

	const getHits = () => hits;

	const isSunk = () => (length - hits) <= 0;

	return { length, hits, hit, getHits, isSunk};
}


module.exports = { Ship };