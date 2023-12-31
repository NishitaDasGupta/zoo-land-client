import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const MyToysTable = ({ toy, index, handleDelete }) => {
    
  const { _id, animal, availableQuantity, price, subcategory, toyName } = toy;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{toyName}</td>
            <td>{animal}</td>
            <td>{subcategory}</td>
            <td>${price}</td>
            <td className="text-center">Total: {availableQuantity}</td>
            <td>
                <div className="flex items-center justify-center">
                    <Link to={`/update/${_id}`}>
                    <p title="Edit">
                        <button className="btn btn-outline border-0  hover:bg-[#e51f6e] "><FaEdit /></button>
                    </p>
                    </Link>
                    <p title="Delete">
                        <button onClick={() => { handleDelete(_id) }} className="btn btn-outline border-0  hover:bg-[#e51f6e] "><RiDeleteBin6Line /></button></p>
                    <Link to={`/alltoy/${_id}`}>
                        <p title="View Details"> <button className="btn btn-outline border-0  hover:bg-[#e51f6e] "><BiDetail /></button></p>

                    </Link>


                </div>
            </td>
        </tr>
    );
};

export default MyToysTable;