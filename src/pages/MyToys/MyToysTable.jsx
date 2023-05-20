

const MyToysTable = ({toy,index}) => {
   
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
                    
                    <button  className="btn bg-orange-400 hover:bg-orange-600">Details</button>
                   
                </td>
            </tr>
    );
};

export default MyToysTable;