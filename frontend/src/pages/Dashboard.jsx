import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Topcards from "../components/Topcards";
import Chart from "../components/Chart";
import Occupancy from "../components/Occupancy";
import Orders from "../components/Orders";

export default function Dashboard(){
    return(
        <div className="flex">
            <Sidebar/>
            <div className="flex-1 ml-20 ">
                <Navbar/>
                <div className="p-6 my-8">
                    <Topcards/>
                    <div className="my-8">
                        <Chart/>
                        <div className="my-8">
                            <Occupancy/>
                            <div className="my-8">
                                <Orders/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}