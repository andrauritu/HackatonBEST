// import { useCallback, useEffect, useState, useContext } from 'react';
// import { useQueryClient, useMutation } from 'react-query';
// import updateItemsRequest from '../api/updateItemsRequest';
// import deleteItemRequest from '../api/deleteItemRequest';
// import { debounce } from 'lodash';
// import { TokenContext } from '../App';
// import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// import 'bootstrap/dist/css/bootstrap.min.css';



// //useMutation hook is going to return an array of two items, it is used for updating items


// export const Item = ({ item }) => {
//     const [text, setText] = useState(item.text);
//     const { token } = useContext(TokenContext);

//     const queryClient = useQueryClient(); //this is a hook that we can use to invalidate the cache
//     // and refetch the data from the server

//     const { mutate: updateItem } = useMutation((updatedItem, token) =>
//         updateItemsRequest(updatedItem, token),
//         {
//             onSettled: () => {
//                 queryClient.invalidateQueries('items'); //this is how we invalidate the cache
//                 // and refetch the data from the server
//             },
//         }
//     );

//     const debouncedUpdateItem = useCallback(
//         debounce(updateItem, 600),
//         [updateItem]);

//     // const toggleCompletion = () => {
//     //     console.log('toggleCompletion');
//     // }

//     // }
//     const { mutate: deleteItem } = useMutation((updatedItem) =>
//         deleteItemRequest(updatedItem, token),
//         {
//             onSettled: () => {
//                 queryClient.invalidateQueries('items'); //this is how we invalidate the cache
//                 // and refetch the data from the server
//             },
//         }
//     );

//     useEffect(() => {
//         if (text !== item.text) debouncedUpdateItem({ ...item, text: text });
//     }, [text, item, debouncedUpdateItem]);

//     return (
//         <div>

//             <TextField
//                 // className='mb-3'
//                 value={text}
//                 variant='outlined'
//                 margin='dense'
//                 fullWidth
//                 InputProps={{
//                     startAdornment: (
//                         <Checkbox checked={item.isCompleted} type="checkbox" onChange={() => updateItem({ ...item, isCompleted: !item.isCompleted })}
//                         />
//                     ),
//                     endAdornment: (
//                         <IconButton onClick={() => deleteItem(item)}>
//                             <DeleteIcon />
//                         </IconButton>
//                     )
//                 }}
//                 onChange={(e) => setText(e.target.value)
//                 }
//             />

//         </div>
//     );
// };