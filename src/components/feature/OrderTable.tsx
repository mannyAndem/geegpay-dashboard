import marcusImg from "../../assets/images/marcus.png";
import jaydenImg from "../../assets/images/jayden.png";
import coreyImg from "../../assets/images/corey.png";
import cooperImg from "../../assets/images/cooper.png";
import philipImg from "../../assets/images/philip.png";
import ViewOrderButton from "./ViewOrderButton";

export interface Order {
  img: string;
  name: string;
  date: string;
  amount: number;
  status: "paid" | "refund";
}

type Orders = Order[];

const OrderTable = () => {
  const orders: Orders = [
    {
      name: "Marcus Bergson",
      img: marcusImg,
      date: "Nov 15, 2023",
      amount: 80000,
      status: "paid",
    },
    {
      name: "Jaydon Vaccaro",
      img: jaydenImg,
      date: "Nov 15, 2023",
      amount: 150000,
      status: "refund",
    },
    {
      name: "Corey Schleifer",
      img: coreyImg,
      date: "Nov 14, 2023",
      amount: 87000,
      status: "paid",
    },
    {
      name: "Cooper Press",
      img: cooperImg,
      date: "Nov 14, 2023",
      amount: 100000,
      status: "refund",
    },
    {
      name: "Philip Lubin",
      img: philipImg,
      date: "Nov 13, 2023",
      amount: 78000,
      status: "paid",
    },
  ];

  return (
    <div className=" bg-white overflow-x-scroll rounded-xl p-5 font-jakarta dark:bg-paleGreen">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-lg font-semibold">Last Orders</span>
        <button className="text-green font-medium text-lg">See All</button>
      </div>
      <table className="w-full  min-w-[550px] text-left table border-spacing-y-4 border-separate">
        <tbody>
          <tr className="text-darkGray colum mb-8">
            <th className="font-medium">Name</th>
            <th className="font-medium">Date</th>
            <th className="font-medium">Amount</th>
            <th className="font-medium">Status</th>
            <th className="font-medium">Invoice</th>
          </tr>
          {orders.map((order, index) => (
            <OrderRow key={index} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

interface OrderRowProps {
  order: Order;
}

const OrderRow = ({ order }: OrderRowProps) => {
  const { img, name, date, amount, status } = order;
  return (
    <tr className="border-b border-lightGray dark:border-lightGreen">
      <td className="p-1 border-b border-lightGray dark:border-lightGreen">
        <div className="w-full flex items-center gap-3">
          <img
            src={img}
            alt={name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium">{name}</span>
        </div>
      </td>
      <td className="p-1 text-darkGray border-b border-lightGray dark:border-lightGreen">
        {date}
      </td>
      <td className="p-1 font-medium border-b border-lightGray dark:border-lightGreen">
        ${amount.toLocaleString()}
      </td>
      <td
        className={`p-1 capitalize border-b border-lightGray dark:border-lightGreen ${
          status === "paid" ? "text-green" : "text-red"
        }`}
      >
        {status}
      </td>
      <td className="p-1 border-b border-lightGray dark:border-lightGreen">
        <ViewOrderButton order={order} />
      </td>
    </tr>
  );
};
