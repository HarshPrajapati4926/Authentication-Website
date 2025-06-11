import React from "react";

const NewsCard = ({ title, description, imageUrl, url }) => {
	return (
		<div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col overflow-hidden h-80">
			{/* Image */}
			<img
				src={imageUrl || "https://via.placeholder.com/400x200?text=No+Image"}
				alt="News"
				className="h-36 w-full object-cover"
			/>

			{/* Content */}
			<div className="p-4 flex flex-col justify-between flex-grow">
				<div>
					<h2 className="text-md font-semibold text-green-400 line-clamp-2">
						{title}
					</h2>
					<p className="text-sm text-gray-300 mt-2 line-clamp-2">
						{description || "No description available."}
					</p>
				</div>

				<div className="mt-4">
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-md"
					>
						Read more
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
