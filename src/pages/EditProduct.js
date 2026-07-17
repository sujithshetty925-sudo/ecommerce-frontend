import React,{useState,useEffect}from"react";
import {useParams,useNavigate} from "react-router-dom";
import {getProductById,updateProduct} from"../services/api";
function EditProduct(){
    const{id}=useParams();
    const navigate=useNavigate();
    const[product,setProduct]=useState({name:"",description:"",price:"",imageUrl:""});
    useEffect(()=>{loadProduct();},[]);
    const loadProduct=async()=>{
        try{
            const response=await getProductById(id);
            setProduct(response.data);}
            catch(error){
                console.error(error);
            }
            };
            const handleChange=(e)=>{
                setProduct({...product,[e.target.name]:e.target.value,})
            }
            const handleSubmit=async(e)=>{
                e.preventDefault();
                try{
                    await updateProduct(id,product);
                    alert("product updated suvcessfully");
                    navigate("/")
                }catch(error){
                    console.error(error);
                    alert("Failed to update product");
                }
            };
            return(
                <div style={{padding:"20px"}}>
                    <h2>Edit Product</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={product.name}
                        onChange={handleChange}
                        />
                        <br/><br/>
                        <textarea
                        name="description"
                        placeholder="Description"
                        value={product.description}
                        onChange={handleChange}
                        />
                        <br/><br/>
                        <input
                        type="number"
                        name="price"
                        placeholder="price"
                        value={product.price}
                        onChange={handleChange}
                        />
                        <br/><br/>
                        <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={product.imageUrl}
                        onChange={handleChange}
                        />
                        <br></br>
                        <button type="submit">
                            Update Product
                        </button>
                    </form>
                </div>
            );
        }
    
        export default EditProduct;
