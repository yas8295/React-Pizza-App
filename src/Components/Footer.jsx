import { useNavigate } from "react-router-dom";
import Button from "../Reusable/Button";
import { useSelector } from "react-redux";

export default function Footer() {
  const navigate = useNavigate();
  const { price, pizzas, status } = useSelector((state) => state.cart);

  return (
    <>
      {status ? (
        <div className="flex justify-between items-center bg-stone-800 w-full text-white px-4 py-3">
          <div className="flex gap-2 items-center">
            <h1>{pizzas.length} PIZZAS</h1>
            <h1>€{price}.00</h1>
          </div>
          <Button
            title="OPEN CART →"
            textColor="text-black"
            transition={{ type: "spring" }}
            event={(e) => navigate("/React-Pizza-App/Cart")}
          ></Button>
        </div>
      ) : null}
    </>
  );
}
