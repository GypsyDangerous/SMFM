import fetch from "fetchio-js";

export default async (req, res) => {
	const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&page=${req.query.page}`);
	res.json(data);
};
