import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const Navbar = ({ category, setCategory }) => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};

	return (
		<nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
			className='w-full sticky top-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md border-b border-gray-800 shadow-xl p-4 flex items-center justify-between flex-wrap gap-y-4'
		>
			<h2 className='text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text'>
				NewsMaster
			</h2>

			<div className='flex items-center gap-8 flex-wrap'>
				{/* Category Selector */}
				<div className="text-sm text-gray-300">
					<label htmlFor="category" className="mr-2 font-semibold text-green-400">
						Category:
					</label>
					<select
						id="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className="bg-gray-800 text-white px-3 py-1 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
					>
                        <option value="General">General</option>
						<option value="Business">Business</option>
						<option value="Entertainment">Entertainment</option>
						<option value="Health">Health</option>
						<option value="Science">Science</option>
						<option value="Sports">Sports</option>
						<option value="Technology">Technology</option>
					</select>
				</div>

				{/* User Info */}
				<div className='text-sm text-gray-300 space-y-1'>
					<p className='font-semibold text-green-400'>
						Name: <span className="text-white">{user.name}</span>
					</p>
					<p>
						Email: <span className="text-white">{user.email}</span>
					</p>
				</div>

				<div className='text-sm text-gray-300 space-y-1'>
					<p className='font-semibold text-green-400'>
						Joined: <span className="text-white">
							{new Date(user.createdAt).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</span>
					</p>
					<p>
						Last Login: <span className="text-white">{formatDate(user.lastLogin)}</span>
					</p>
				</div>

				{/* Logout Button */}
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleLogout}
					className='py-2 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
					font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
					focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900'
				>
					Logout
				</motion.button>
			</div>
		</nav>
	);
};

export default Navbar;
