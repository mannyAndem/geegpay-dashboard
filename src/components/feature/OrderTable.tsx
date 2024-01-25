import documentIcon from "../../assets/icons/document-icon.svg";
import marcusImg from "../../assets/images/marcus.png";
import jaydenImg from "../../assets/images/jayden.png";
import coreyImg from "../../assets/images/corey.png";
import cooperImg from "../../assets/images/cooper.png";
import philipImg from "../../assets/images/philip.png";

interface Order {
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
    <div className=" bg-white rounded-xl p-5 font-jakarta">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-lg font-semibold">Last Orders</span>
        <button className="text-green font-medium text-lg">See All</button>
      </div>
      <table className="w-full text-left table border-separate border-spacing-y-4">
        <tbody>
          <tr className="text-darkGray colum mb-8">
            <th className="font-medium">Name</th>
            <th className="font-medium">Date</th>
            <th className="font-medium">Amount</th>
            <th className="font-medium">Status</th>
            <th className="font-medium">Invoice</th>
          </tr>
          {orders.map(({ name, img, date, amount, status }) => (
            <OrderRow
              name={name}
              date={date}
              amount={amount}
              status={status}
              img={img}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

const OrderRow = ({ img, name, date, amount, status }: Order) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <img
            src={img}
            alt={name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium">Marcus Bergson</span>
        </div>
      </td>
      <td className="text-darkGray">{date}</td>
      <td className="font-medium">${amount.toLocaleString()}</td>
      <td
        className={`capitalize ${
          status === "paid" ? "text-green" : "text-red"
        }`}
      >
        {status}
      </td>
      <td>
        <button className="flex items-center gap-2">
          <img src={documentIcon} />
          <span className="text-sm">View</span>
        </button>
      </td>
    </tr>
  );
};
