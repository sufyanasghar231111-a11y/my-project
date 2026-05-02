import { RiMoneyDollarCircleLine, RiShoppingBagLine, RiStarFill, RiTimeLine } from "react-icons/ri";

const dashboardData = [
  {
    id: 1,
    title: "Total Spent",
    value: 2450,
    prefix: "$",
    change: "+12.5%",
    changeType: "increase",
    description: "from last month",
    icon: <RiMoneyDollarCircleLine className="w-6 h-6 text-white" />,
    color:'bg-green-500'
  },
  {
    id: 2,
    title: "Total Orders",
    value: 42,
    change: "+8",
    changeType: "increase",
    description: "orders",
    icon: <RiShoppingBagLine className="w-6 h-6 text-white"  />,
    color:"bg-blue-500"
  },
  {
    id: 3,
    title: "Pending Orders",
    value: 3,
    change: "-1",
    changeType: "decrease",
    description: "pending",
    icon: <RiTimeLine className="w-6 h-6 text-white"  />,
    color:"bg-orange-500"
  },
  {
    id: 4,
    title: "Loyalty Points",
    value: 1560,
    icon: <RiStarFill  className="w-6 h-6 text-white"  />,
    description:'points',
    change:"+200",
    color:"bg-purple-500"

  }
];


export default dashboardData