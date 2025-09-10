export default function TopCards(){
    
    return(
        <div className=" grid lg:grid-cols-4 gap-1 mt-4 w-250">
            <div className="bg-white shadow-xl rounded-xl p-6 w-50">
                <p className="text-gray-500 text-sm">Total Bookings</p>
                <h3 className="text-2xl font-semibold text-yellow-600">6,589</h3>
            </div>

            <div className="bg-white shadow-xl rounded-xl p-6 w-50">
                <p className="text-gray-500 text-sm">Total Rooms</p>
                <h3 className="text-2xl font-semibold text-yellow-600">6,589</h3>
            </div>

            <div className="bg-white shadow-xl rounded-xl p-6 w-50">
                <p className="text-gray-500 text-sm">Overall Occupancy Rate</p>
                <h3 className="text-2xl font-semibold text-yellow-600">6,589</h3>
            </div>

            <div className="bg-white shadow-xl rounded-xl p-6 w-50">
                <p className="text-gray-500 text-sm">Total Transaction</p>
                <h3 className="text-2xl font-semibold text-yellow-600">6,589</h3>
            </div>
        </div>
    );
}