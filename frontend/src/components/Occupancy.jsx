export default function RoomOccupancy(){
    return(
        <div className=" bg-white shadow-xl rounded-xl p-6 w-250">
            <h2 className="font-semibold mb-5 text-left">Room Occupancy</h2>
            <table className="w-full text-gray-600 text-center rounded-xl">
                <thead className="bg-rose-50 border border-rose-400 rounded-xl h-20">
                    <tr>
                        <th className="py-2">Room Category</th>
                        <th className="py-2">Total Count</th>
                        <th className="py-2">Occupancy Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-gray-400 rounded-xl h-15 ">
                        <td className="py-2">2 BHK Double Bed</td>
                        <td className="py-2">34</td>
                        <td className="py-2">60%</td>
                    </tr>

                    <tr className="border border-gray-400 rounded-xl h-15 ">
                        <td className="py-2">4 BHK Single Bed</td>
                        <td className="py-2">52</td>
                        <td className="py-2">60%</td>
                    </tr>

                    <tr className="border border-gray-400 rounded-xl h-15 ">
                        <td className="py-2">3 BHK Double Bed</td>
                        <td className="py-2">42</td>
                        <td className="py-2">60%</td>
                    </tr>

                    <tr className="border border-gray-400 rounded-xl h-15 ">
                        <td className="py-2">2 BHK Double Bed</td>
                        <td className="py-2">53</td>
                        <td className="py-2">60%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}