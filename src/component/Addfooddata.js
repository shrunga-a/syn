import React, { useState } from 'react'
import './Addfooddata.css'

//Firebase imports
import {db,storage} from '../Firebase/FirebaseConfig'
import { addDoc,collection } from 'firebase/firestore'
import {ref , getDownloadURL, uploadBytes} from 'firebase/storage'
const Addfooddata = () => {
    const [groceryname, setgroceryName] = useState('')
    const [groceryPrice,setgroceryPrice] = useState('')
    const [groceryimage,setgroceryimage] = useState(null)
    const [grocerycategory,setgrocerycategory] = useState('')
    const [grocerydescription,setgrocerydescription] = useState('')
    const [groceryShopname,setgroceryShopname] = useState('')
  

    const [groceryimageUrl,setgroceryimageUrl] = useState('')

    //extra for grocery addons
    const [groceryType,setgrocerytype] = useState('')
    const [grocerycategoryType,setgrocerycategoryType] = useState('')//mealtype
    const [groceryAddon,setgroceryaddon] = useState('')
    const [groceryAddonPrice,setgroceryaddonPrice] = useState('') 
////
    const [groceryShopPhoneNumber,setgroceryShopPhoneNumber] = useState('') 
    const [groceryShopEmail,setgroceryshopEmail] = useState('')
    const [groceryshopAddressBulding,setgroceryshopAddressBulding] = useState('')
    const [groceryShopAddressStreet,setgroceryShopAddressStreet] = useState('')
    const [groceryShopAddressCity,setgroceryShopAddressCity] = useState('')
    const [groceryShopAddressPincode,setgroceryShopAddressPincode] = useState('')




    // console.log(groceryname,groceryPrice,groceryimage,grocerycategory,
    //   grocerydescription,groceryShopname,groceryShopAddress,groceryShopPhoneNumber,)
    const handelSubmit =(e) =>{
      e.preventDefault()
      if(groceryimage ==null){
        alert("Please select an image")
        return



      }
      else{
        const imageRef = ref(storage,`GroceryImage/${groceryimage.name}`)
        uploadBytes(imageRef,groceryimage)
        .then(()=>
        {
          alert("Image Uploaded Successfully")
          getDownloadURL(imageRef)
          .then((url)=>{
            //console.log(url)
            setgroceryimageUrl(url)

       const groceryData ={

        groceryname,
        groceryPrice,
        groceryimageUrl: url,
        grocerycategory,
        grocerydescription,
        groceryShopname,

        groceryType,
        grocerycategoryType,
        groceryAddon,
        groceryAddonPrice,

      //  groceryShopAddress,
        groceryShopPhoneNumber,
        groceryShopEmail,
        groceryshopAddressBulding,
        groceryShopAddressStreet,
        groceryShopAddressCity,
        groceryShopAddressPincode


      }


      //console.log(groceryData)
      try{
        const docRef = addDoc(collection(db, "GroceryData"), groceryData);
        alert("Data Added DONE!",docRef.id);



      }
      catch(error){

        alert("Error adding Data");
      }



          })
        })
        .catch((error)=>{
          alert(error.message)

        })
        
        

      }

    }

  return (
    <div className='form-outer'>
    <h1> Add Grocery Item</h1>
    <form className='form-inner'>

    <label> Grocery Name</label>
    <input type='text' Name='grocery_name' onChange={(e)=>{setgroceryName(e.target.value)}}></input>
    <br/>
    <label> Grocery Description</label>
    <input type='text' Name='grocery_description' onChange={(e)=>{setgrocerydescription(e.target.value)}}></input>
    <br/>

    <div className='form-row'>

    <div className='form-col'> 
    <label> Grocery Price</label>
    <input type='number' Name='grocery_Price' onChange={(e)=>{setgroceryPrice(e.target.value)}}></input>
    </div>

    <div className='form-col'>
    <label> Grocery Type</label>
    <select name='grocery_type' onChange={(e)=>{setgrocerytype(e.target.value)}}>
    <option value='null'>Please Select Grocery Type</option>
    <option value='Products'>Products</option>
    <option value='Dairy Products'>Dairy Products</option>
    </select>
   
    </div>
    
    
    </div>
    <br/>

   <div className='form-row'>
   <div className='form-col'>

   <label> Grocery Category</label>
   <select name='grocery_Category' onChange={(e)=>{setgrocerycategory(e.target.value)}}>
    <option value='null'>Select Grocery Category</option>
    <option value='driedfruits'>DriedFruits</option>
    <option value='candy'>Candy</option>
    <option value='fruits'>Fruits</option>
    <option value='juice'>Juice</option>
    <option value='drygoods'>Drygoods</option>
    <option value='bread'>Bread</option>
    <option value='other'>Other</option>
    
    </select>
   <br/>
   
   </div>

   <div className='form-col'>
   <label> Grocery Category Type</label>
   <select name='grocery_Category_Type' onChange={(e)=>{setgrocerycategoryType(e.target.value)}}>
    <option value='null'>Select Category Type</option>
    <option value='eatables'>Eatables</option>
    <option value='household'>HouseHold</option>
    <option value='cutlery'>Cutlery</option>
    <option value='meat'>Meat</option>
    <option value='other'>Other</option>
    </select>

   </div>
   </div>
   <br/>

   <div className='form-row'>
   <div className='form-col'>
   <label>Grocery Addon Name</label>
   <input type='text' name='grocery_addon' onChange={(e)=>{setgroceryaddon(e.target.value)}} />  
   </div> 
   </div>

   <div className='form-row'>
   <div className='form-col'>
   <label>Grocery Addon Price</label>
   <input type='number' name='grocery_addon_Price' onChange={(e)=>{setgroceryaddonPrice(e.target.value)}} />  
   </div> 
   </div>





    <label> Grocery Image</label>
    <input type='file' Name='grocery_image'onChange={(e)=>{setgroceryimage(e.target.files[0])}}></input>
    <br/>
    <label> Grocery Shop Name</label>
    <input type='text' Name='grocery_shop_name'onChange={(e)=>{setgroceryShopname(e.target.value)}}></input>
    <br/>
    
    <div className='form-row'>
    <div className='form-col'>
    <label>GroceryShop Phone Number</label>
    <input type='number' name='groceryshop_phoneNumber' onChange={(e)=>{setgroceryShopPhoneNumber(e.target.value)}} />  
    </div> 
    </div>

    <div className='form-row'>
    <div className='form-col'>
    <label>Grocery Shop Email</label>
    <input type='text' name='grocery_shop_email' onChange={(e)=>{setgroceryshopEmail(e.target.value)}} />  
    </div> 
    </div>

    <div className='form-row'>
    <div className='form-col'>
    <label>Grocery Bulding Name</label>
    <input type='text' name='grocery_bulding_name' onChange={(e)=>{setgroceryshopAddressBulding(e.target.value)}} />  
    </div> 
    </div>

    <div className='form-row'>
    <div className='form-col'>
    <label>Shop Street</label>
    <input type='text' name='shop_street' onChange={(e)=>{setgroceryShopAddressStreet(e.target.value)}} />  
    </div> 
    </div>

    <div className='form-row'>
    <div className='form-col'>
    <label>Shop City</label>
    <input type='text' name='shop_city' onChange={(e)=>{setgroceryShopAddressCity(e.target.value)}} />  
    </div> 
    </div>

    <div className='form-row'>
    <div className='form-col'>
    <label>Address Pincode</label>
    <input type='number' name='address_pincode' onChange={(e)=>{setgroceryShopAddressPincode(e.target.value)}} />  
    </div> 
    </div>
    <button onClick={handelSubmit}> Add Grocery</button>
    </form>
      
    </div>
  )
}

export default Addfooddata
