export default function Orders(){
    return(
        <div className=" bg-white shadow-xl rounded-xl p-6 w-250">
            <h2 className="font-semibold mb-5 text-left">Orders & Transactions</h2>
            <div className="mt-5 mb-10 shadow-xl rounded-xl h-30 p-10">
                <span className="flex">
                    <span className="flex items-center mr-30">
                        <img className="w-6 h-6" src="./assets/blueicon.png" alt="icon" />
                        <span> 
                            <p className="text-gray-500 text-left">Total Revenue</p>
                            <h2 className="text-blue-600 font-extrabold text-left">$375,874</h2>
                        </span>
                    </span>
                    
                    <span className="flex items-center mr-30">
                        <img className="w-6 h-6" src="./assets/blueicon.png" alt="icon" />
                        <span> 
                            <p className="text-gray-500 text-left">Total Revenue</p>
                            <h2 className="text-blue-600 font-extrabold text-left">$375,874</h2>
                        </span>
                    </span>

                    <span className="flex items-center ">
                        <img className="w-6 h-6" src="./assets/blueicon.png" alt="icon" />
                        <span> 
                            <p className="text-gray-500 text-left">Total Revenue</p>
                            <h2 className="text-blue-600 font-extrabold text-left">$375,874</h2>
                        </span>
                    </span>
                </span>
            </div>

            <table className="w-full text-gray-600 text-center rounded-xl">
                <thead className="bg-rose-50 border border-rose-400 rounded-xl h-20">
                    <tr>
                        <th className="py-2">Name</th>
                        <th className="py-2">Purchase Date</th>
                        <th className="py-2">Purchase ID</th>
                        <th className="py-2">Room Category</th>
                        <th className="py-2">Paid Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border rounded-xl h-15 ">
                        <td className="py-2"><div className="flex items-center justify-center"><img className="h-7 w-7 rounded-full " src="./assets/avatar.jpg" alt="avatar" /></div>Abantika Sadhukhan</td>
                        <td className="py-2">23 May, 2025</td>
                        <td className="py-2">#17836576</td>
                        <td className="py-2">Room Category 1</td>
                        <td className="py-2"><span className="border-blue-500 bg-blue-100">$520</span></td>
                    </tr>

                    <tr className="border rounded-xl h-15 ">
                        <td className="py-2"><div className="flex items-center justify-center"><img className="h-7 w-7 rounded-full " src="./assets/avatar.jpg" alt="avatar" /></div>Abantika Sadhukhan</td>
                        <td className="py-2">23 May, 2025</td>
                        <td className="py-2">#78395</td>
                        <td className="py-2">Room Category 1</td>
                        <td className="py-2"><span className="border-blue-500 bg-blue-100">$7520</span></td>
                    </tr>

                    <tr className="border rounded-xl h-15 ">
                        <td className="py-2"><div className="flex items-center justify-center"><img className="h-7 w-7 rounded-full " src="./assets/avatar.jpg" alt="avatar" /></div>Abantika Sadhukhan</td>
                        <td className="py-2">23 May, 2025</td>
                        <td className="py-2">#8742692</td>
                        <td className="py-2">Room Category 1</td>
                        <td className="py-2"><span className="border-blue-500 bg-blue-100">$4050</span></td>
                    </tr>

                    <tr className="border rounded-xl h-15 ">
                        <td className="py-2"><div className="flex items-center justify-center"><img className="h-7 w-7 rounded-full " src="./assets/avatar.jpg" alt="avatar" /></div>Abantika Sadhukhan</td>
                        <td className="py-2">23 May, 2025</td>
                        <td className="py-2">#75432213</td>
                        <td className="py-2">Room Category 1</td>
                        <td className="py-2"><span className="border-blue-500 bg-blue-100">$2045</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}