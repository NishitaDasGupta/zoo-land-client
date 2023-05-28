import { Link } from "react-router-dom";


const AllToysTable = ({toy,index}) => {
    const { _id, availableQuantity, price, seller, subcategory, toyName } = toy;
    return (
        <tr>
            <th>{index+1}</th>
            <td>{seller}</td>
            <td>{toyName}</td>
            <td>{subcategory}</td>
            <td>${price}</td>
            <td className="text-center">{availableQuantity}</td>
            <td>
                <Link to={`/alltoy/${_id}`}>
                <button  className="btn  bg-slate-600 hover:bg-slate-800 border-orange-800 border-b-4  border-t-0 border-x-0">Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysTable;