import React, { useEffect,useState } from "react";
import "./index.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";


const dataArray=[]
const ContentBody = () => {
  const [data,setData]=useState(dataArray)
  const [updatedIds,setUpdatedIds]=useState({})
  const [selectedItem,setSelectedItem]=useState('Today')

  useEffect(()=>{
    const fetchData=async()=>{
    const data=await fetch(`http://localhost:3000/leakage_form?filter=${selectedItem}`)
    let res=await data.json()
    setData(res.slice(0,20))
    }
    fetchData()
    setUpdatedIds({})
  },[selectedItem])

  const onClickSubmit=async(item)=>{
    if(item.submitted)return
    const actualCount=updatedIds[item._id]
    let updatedItem={}
    const updatedData=data.map(eachItem=>{
      if(eachItem._id===item._id){
        updatedItem={
          ...eachItem,
          actualCount,
          rejectCount:eachItem.totalCount-actualCount,
          operation:'edit',
          submitted:true,
          onEditClick:false
        }  
        return updatedItem
      }
     return eachItem
    })
    let response = await fetch(`http://localhost:3000/leakage_form/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });
    response=await response.json()
    if(response.error){
      console.log(response.error)
      alert(response.error)
      return
    }
    setData(updatedData)  
    console.log(response)
  }

  const onChangeInput=(id,e)=>{
    const actualCount=parseInt(e.target.value)
    setUpdatedIds(prevState=>{return {...prevState,[id]:actualCount}})
  }

  const onClickEdit=(item)=>{
    console.log(item)
    let updatedItem={}
    const updatedData=data.map(eachItem=>{
      if(eachItem._id===item._id){
        updatedItem={
          ...eachItem,
          operation:'save',
          onEditClick:true
        } 
        return updatedItem
      }
     return eachItem
    })
    setData(updatedData)
  }
  return (
    <div className="body-container hideScroll">
      <div className="trans-container">
        <div className="sub-heading">Leakage Form</div>
        <div className="outer-flex">
          <div className="inner-flex">
          <div className={`right-border item  pointer  ${selectedItem==='Today'?'selected':''}`} onClick={()=>setSelectedItem("Today")}>Today's</div>
          <div className={`right-border item  pointer  ${selectedItem==='Pending'?'selected':''}`} onClick={()=>setSelectedItem("Pending")}>Pending</div>
          <div className={`item pointer ${selectedItem==='Saved'?'selected':''}`} onClick={()=>setSelectedItem("Saved")}>Saved</div>
          </div>
        </div>
      </div>
      <div className="shadow">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>SKU Name</th>
              <th>Rejection Count</th>
              <th>Actual Count</th>
              <th>Total Count</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (

                <tr key={item._id}>
                  <td >{item.date.split(' ')[0]}</td>
                  <td>{item.skuName}</td>
                  <td >{item.rejectCount}</td>
                 {( (!(item.onEditClick) ) && item.actualCount!==null )?<td >{item.actualCount}</td>:<td><input type='number'  value={updatedIds[item._id]||updatedIds[item._id]===0?updatedIds[item._id]:''} className="input" placeholder="Enter Value" onChange={(e)=>onChangeInput(item._id,e)}/></td>}
                  <td>{item.totalCount}</td>
                  {(item.operation==='save'||item.submitted===true)?
                  <td><button className={`submit-btn pointer ${item.submitted?'submitted':''}`} onClick={()=>onClickSubmit(item)}>Submit</button></td>
                  :<td><button className="edit-btn pointer" onClick={()=>onClickEdit(item)}>Edit</button></td>}
                </tr>

              );
            })}
          </tbody>
        </table>
        <div className="pagination-container">
          <div className="previous-container">
            <div className="pointer">
              <GrFormPrevious />
            </div>
          </div>
          <div className="numbers-container">
          {/* selected-number */}
            <div className="numbers">1</div> 
            <div className="numbers">2</div>
            <div className="numbers">3</div>
            <div className="numbers">4</div>
            <div className="numbers">5</div>
          </div>
          <div className="next-container">
            <div className="pointer">
              <GrFormNext />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBody;
