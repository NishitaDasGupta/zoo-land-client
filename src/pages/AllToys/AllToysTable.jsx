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
                <button  className="btn bg-orange-400 hover:bg-orange-600">Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysTable;