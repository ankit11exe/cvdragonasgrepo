import {  XAxis, YAxis, LineChart, Line, ResponsiveContainer , Tooltip} from "recharts";

const chartData = [
    { year: "Jan", currency: 10000 },
    { year: "Feb", currency: 20000 },
    { year: "Mar", currency: 15000 },
    { year: "Apr", currency: 30000 },
    { year: "May", currency: 25000 },
    { year: "Jun", currency: 40000 },
    { year: "Jul", currency: 35000 },
    { year: "Aug", currency: 45000 },
    { year: "Sep", currency: 30000 },
    { year: "Oct", currency: 50000 },
    { year: "Nov", currency: 40000 },
    { year: "Dec", currency: 60000 },
];

export default function Chart(){
    return(
        <div className="bg-white shadow-xl rounded-xl p-6 w-250">
            <h2 className="mb-4 font-semibold text-left">Collection of Rooms</h2> <br /><br />
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="currency" stroke="#ffa200ff" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}