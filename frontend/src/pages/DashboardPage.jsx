import Navbar from '../components/Navbar';
import News from '../components/News';
import { useState } from 'react';

const DashboardPage = () => {
const [category, setCategory] = useState("general");

    return (
        <>
           <Navbar category={category} setCategory={setCategory} />
            <div className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'>
               <News category={category} />
                
            </div>
            
        </>
    );
};

export default DashboardPage;
