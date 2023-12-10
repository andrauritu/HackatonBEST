import { useContext } from "react";
import { useQuery } from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader';
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import readItemsRequests from '../api/readItemsRequests';
import { Item } from '../components/Item';
import { CreateItemForm } from '../components/CreateItemForm';
import { TokenContext } from '../App';

import { makeStyles } from '@material-ui/core/styles';



export const ItemPage = () => {
    const { token } = useContext(TokenContext);
    const { isLoading, data: items } = useQuery(
        'items', () =>
        readItemsRequests(token)
    );


    return (
        <div className="container-fluid">
            <h1 className="display-4 text-center mt-4">Shopping List</h1>
            <div className="col-md-4"></div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 ">
                    {isLoading ? (
                        <ClipLoader color='#f86c6b' size={50} loading={isLoading} />
                    ) : (
                        items.map((item) => (
                            <Item item={item} key={item._id} />
                        ))
                    )}
                    <CreateItemForm />
                </div>

                <div className="col-md-4"></div>
            </div>



        </div>
    )
};
