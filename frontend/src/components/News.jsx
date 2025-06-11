import React, { useEffect, useState } from "react";
import NewsCard from './NewsCard'; // Make sure the path is correct

const News = ({ category }) => {
	const [articles, setArticles] = useState([]);
	const [error, setError] = useState(null);

	const fetchNews = async () => {
		try {
			const url =
				`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=205b367a03a74b888832af2c8946648f`;
			const response = await fetch(url);
			const data = await response.json();
			setArticles(data.articles || []);
			console.log(data);
		} catch (err) {
			console.error(err);
			setError(err.message);
		}
	};
     const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

	useEffect(() => {
		fetchNews();
	}, [category]);

	return (
		<div className="p-6 max-w-7xl mx-auto text-white">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text mb-8">
				Top {capitalizeFirstLetter(category)} Headlines
			</h1>

			{error && <p className="text-red-500 mb-4">Error: {error}</p>}

			{articles.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{articles.map((article, index) => (
						<NewsCard
							key={index}
							title={article.title}
							description={article.description}
							imageUrl={article.urlToImage}
							url={article.url}
						/>
					))}
				</div>
			) : (
				<p className="text-gray-400">Loading news...</p>
			)}
		</div>
	);
};

export default News;
