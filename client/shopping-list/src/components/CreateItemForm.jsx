// import { useState, useContext } from "react";
// import { useMutation, useQueryClient } from "react-query";
// import createItemRequest from "../api/createItemRequest";
// import { TokenContext } from "../App";
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import AddIcon from '@mui/icons-material/Add';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { makeStyles } from '@material-ui/core/styles';

// // const useStyles = makeStyles({

// //     textFieldStyles: {
// //         backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //         borderRadius: '5px',
// //     },

// // });



// export const CreateItemForm = () => {
//     // const classes = useStyles();
//     const [text, setText] = useState('');
//     const { token } = useContext(TokenContext);

//     const queryClient = useQueryClient();

//     const { mutate: createItem } = useMutation(
//         (newItem) => createItemRequest(newItem, token),
//         {
//             onSettled: () => {
//                 queryClient.invalidateQueries('items'); //this is how we invalidate the cache
//                 // and refetch the data from the server
//             },
//         }
//     );

//     return (
//         <form
//             onSubmit={(e) => {
//                 e.preventDefault();
//                 if (!text) return; //this is how we prevent the form from submitting if the input field is empty
//                 createItem({ text: text })
//                 setText(''); //this is how we clear the input field after we submit the form
//             }}>
//             <TextField
//                 // className="px-3"
//                 label="Add an item"
//                 variant="standard"
//                 //make it as wide as the parent container
//                 // classes={{ root: classes.textFieldStyles }}
//                 fullWidth
//                 InputProps={{
//                     endAdornment: (
//                         <IconButton >
//                             <AddIcon
//                                 type="submit"
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     if (!text) return; //this is how we prevent the form from submitting if the input field is empty
//                                     createItem({ text: text })
//                                     setText(''); //this is how we clear the input field after we submit the form
//                                 }}
//                             />
//                         </IconButton>
//                     )
//                 }}
//                 onChange={(e) => setText(e.target.value)}
//                 type="text"
//                 value={text}
//             />

//         </form >
//     )
// }
