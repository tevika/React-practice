import React,{useEffect,useState} from 'react'
import axiosInstance from '../Helper/AxiosInstance'
import {Link} from 'react-router-dom';

const ViewBranch = () => {

  let [state,setState]=useState([]);

  useEffect(()=>{

    let token=localStorage.getItem("token");
    async function  ViewData(){
      let{data}=await axiosInstance.get("/branches/getall",{headers:{Authorization:'Bearer ${token}'}});
      console.log(data.data);
      setState(data.data);
      console.log(state);

    }
    ViewData();

  },[])
let token=localStorage.getItem("token");

let handleDelete=(id)=>{
  axiosInstance.delete('/branches/delete/ ${id}',{headers:{Authorization:`Bearer ${token}`}})

  window.location.assign('/adminDashBoard/ViewBranch');

}

return(
  <div id="viewBranch">
    <h1> View Branch </h1>
    <table cellPadding={2} cellSpacing={5} border={3}>
      {state.map((e)=>{

        return(
          <tr>
            <td> {e.address}</td>
            <td>{e.city}</td>
            <td>{e.phone}</td>
            <td> {e.pincode}</td>
            <td> <button onClick={()=>{handleDelete(e.id)}}> Delete </td>
            <td> <button> <Link to={`/AddCourse/${e.id}`}> Add Course </Link></button></td>
            <td> <button> <Link to={`/UpdateBranch/${e.id}`}> Edit</Link></button></td>
          </tr>
        )
      })}
    </table>
  </div>
)

  
}

export default ViewBranch
