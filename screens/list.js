// import { Button, TextInput } from 'react-native';
// import React, { useState } from "react";
// import {
//  ScrollView,
//  Text,
//  TouchableOpacity,
//  View,
// } from "react-native";

// import FormContainer from "../form-components";
// import { Formik } from 'formik';
// import { fields } from "./fields";

// const styles = StyleSheet.create({
//     input:{
//         height: 50,
//         width:250,
//         borderColor: 'gray',
//         borderWidth:2,
//         marginVertical: 40,
//     }

// })

// const ListOfItems = () => {
 

//  const submitHandler=()=>{
//      console.log('hello');
//  }
//       return (

//         <Formik

//         initialValues={{ email: '' }}
   
//         onSubmit={values => console.log(values)}
   
//       >
   
//         {({ handleChange, handleBlur, handleSubmit, values }) => (
   
//           <View>
   
       
   
//             <Button onPress={handleSubmit} title="Submit" />
   
//           </View>
   
//         )}
   
//       </Formik>
//             // <ScrollView>
//             //     <FormContainer
//             //                 fields={fields}
//             //                 initialValues={{ name: "", price: "" }}
                         
//             //                 onSubmit={(submitHandler) => (
//             //                     <View>
                                   
//             //                         <View style={styles.btnContainer}>
//             //                             <Button
//             //                                 onPress={submitHandler}
//             //                                 label="Add To Cart"
//             //                             />
//             //                         </View>
//             //                     </View>
//             //                 )}
//             //             />

//             // </ScrollView>

//     );
// };

// export default ListOfItems ;
import * as Yup from 'yup';

import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer, navigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';
import {addnote} from '../store/actions/food';
import { updateItemPrice } from '../store/actions/food';

const ListOfItems=({navigation})=> {
 

const [total,setTotal]=useState();


 
  const availableList = useSelector(state=>state)

  console.log("list",availableList)

  useEffect(()=>{
    if(availableList.length>0){
      let newtotal= 0;
      for(var i = 0;i<availableList.length;i++){
        newtotal+= parseInt(availableList[i].note.price)
      }
      
     console.log("sum",newtotal);
      setTotal(newtotal);
    }
  })


  // useEffect(() => {
  //   if(availableList.length>0){
  //     let newtotal=0;
  //     for(var i=0;i<availableList.length;i++){
  //         newtotal+= parseInt(availableList[i].note.price)
  //     }
  //     console.log("new sum",newtotal);
  //     setTotal(newtotal);
  //   }
  // }, [])

 

const dispatch = useDispatch();

const addNote = note => {
 
  dispatch(addnote(note))
 
}
   return (
      <Formik
        initialValues={{
          name: '',
          price:'',
          quantity:''
         
        }}

        validationSchema={Yup.object({
          name: Yup.string(),
         price: Yup.number()
      })}
        onSubmit={(values,{resetForm})=>{
          addNote({
          name:values.name,
          price:values.price,
         })
        resetForm({ values: ''});
     

     
      }}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid ,handleSubmit}) =>
       
         (

 
          <View>
            <View style ={styles.formContainer}>
            <TextInput
            type='text'
            id='name'
              value={values.name}
              style={styles.inputStyle}
              onChangeText={handleChange('name')}
              placeholder="List of Items"
            />
                     
            <TextInput
            type='number'
            id='price'
              value={values.price}
              style={styles.inputStyle1}
              onChangeText={handleChange('price')}
              placeholder="Price"
            />

            <TextInput
            type='number'
            id='quantity'
            value={values.price}
            style={styles.inputStyle1}
            onChangeText={handleChange('quantity')}
            placeholder="Quantity"
            />
           

            </View>
            <Button
         
              color="#db9667"
              title='Add to Cart'
              onPress={handleSubmit}
             
           
            />
            <View>
              <Text style ={styles.cart}>CART</Text>
              <FlatList
              data={availableList}
              renderItem={({ item }) => (
               <View style={styles.container2}>
               <Text style = {styles.rows}>{item.note && item.note.name}</Text>
               <Text style={styles.rows2}>{item.note&&item.note.price}</Text>
               <View>
   
             </View>

               </View>
   
  )}
  keyExtractor={item => item.id}
/>
<View style={{alignSelf:'center'}}>
  <Text style={{fontSize:22,fontWeight:'bold'}}>Total:-{total} </Text>
</View>
<Button color="blue"
    title='CheckOut'
    onPress={() => navigation.navigate('viewlisttotal')
}
    ></Button>
            </View>
          </View>
        )}
      </Formik>
    );
 
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 50 ,
    flexDirection:'row'
  },
     inputStyle:{
     borderWidth: 2,
      borderColor: '#4e4e4e',
      padding: 20,
      marginBottom: 20,
      flex:15,
      marginHorizontal:10,
     
     
     },
     inputStyle1:{
      borderWidth: 2,
      borderColor: '#4e4e4e',
      padding: 20,
      marginBottom: 20,
      flex:20
     },
     imputStyle2:{
       borderWidth:2,
       borderColor:'#4e4e4e',
       padding: 20,
       marginBottom:20,
       flex:15,
       marginHorizontal:10
     },
     cart:{
     marginLeft:180,
     marginTop:30
     },
     container2:{
      flexDirection:'row'
     },
     rows:{
       marginLeft:30,
       flex:2
     },
     rows2:{
       flex:2
     }
});
export default ListOfItems;