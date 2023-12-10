import { useContext } from "react";
import { useQuery } from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader';

import fakeUserRequest from '../api/fakeUserRequest';
// import { User } from '../components/User';
// import { CreateItemForm } from '../components/CreateItemForm';
import { TokenContext } from '../App';


export default function FakeUserPage() {
    const { token } = useContext(TokenContext);
    const { isLoading, data: users } = useQuery('users', () =>
        fakeUserRequest(token)
    );

    return (
        <div>
            <h1>Fake User Page</h1>
            {
                isLoading ? (
                    <ClipLoader color='#f86c6b' size={50} loading={isLoading} />
                ) : (
                    //just display the json format of the data from the user
                    JSON.stringify(users)

                )
            }
        </div>

    )
}