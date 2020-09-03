import React, { Component } from 'react';
import './App.css';
import FormComponent from './Components/FormComponent';
import TableComponent from './Components/TableComponent';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      datas: [],
      flag: 0,
      index: 0,
      submitButton: 'ADD NEW',
      disabledButton: false,
      target: null
    }
  }
  // componentDidMount(){
  //   this.refs.name.focus();
  // }
  callbackFunctionForm = (childData) => {
    this.setState({
      datas: childData.datas,
      flag: childData.flag  ,
      submitButton: childData.submitButton,
      disabledButton: childData.disabledButton 
     })
  }
 
  callbackFunctionTable = (childData) =>{
    this.setState({
      datas: childData.datas,
    })
  }

  callbackFunctionTableEdit =(childData) =>{
    this.setState({
      datas:childData.datas,
      target: childData.target,
      flag: childData.flag,
      index: childData.index,
      submitButton: childData.submitButton,
      disabledButton: childData.disabledButton
    })


  }
  // functionSubmit = (e) => {
  //   e.preventDefault();
    
  //   let datas = this.state.datas;
  //   let name = this.refs.name.value;
  //   let address = this.refs.address.value;
  //   let phone = this.refs.phone.value;

  //   if(this.state.flag === 0){              //data baru
  //     let data = {
  //       name, address, phone
  //     }
  //     datas.push(data);
  //   }
  //   else{                                  //data update
  //     let index = this.state.index;
  //     datas[index].name = name;
  //     datas[index].address = address;
  //     datas[index].phone = phone;
      
  //     this.setState({
  //       submitButton:'ADD NEW',
  //       disabledButton:false
  //     })
  //   }

  //   this.setState({
  //     datas: datas,
  //     flag: 0,
  //   });

  //   this.refs.myForm.reset();
  //   this.refs.name.focus();
  // }

  // functionDelete = (i) => {
  //   let datas = this.state.datas;
  //   datas.splice(i,1);
  //   this.setState({
  //     datas: datas
  //   })
  //   this.refs.myForm.reset();
  //   this.refs.name.focus();
  // }

  // functionEdit = (i) => {
  //   let data = this.state.datas[i];
  //   this.refs.name.value = data.name;
  //   this.refs.address.value = data.address;
  //   this.refs.phone.value = data.phone;

  //   this.setState({
  //     flag: 1,
  //     index: i,
  //     submitButton:'UPDATE',
  //     disabledButton:true
  //   });
  //   this.refs.name.focus();
  // }
  
  render() {
    let datas = this.state.datas;
    // let target = this.state.target;
    console.log('ini disabled: '+ this.state.disabledButton)
    if (datas.length === 0){
      return ( 
        <>
          <div className="App">
            <div className="container">
              <pre>
                <table className="tableList">
                  <thead>
                    <th>#No</th>
                    <th className="headName">NAME</th>
                    <th className="headAddress">ADDRESS</th>
                    <th className="headPhone">PHONE</th>
                    <th>ACTION</th>
                  </thead>
                  <tbody>
                    <h1>No Data</h1>
                  </tbody>
                </table>
              </pre>
            </div>
            <FormComponent dataStateFromParent ={this.state.datas}
             dataStateButton = {this.state.submitButton}
              parentCallback ={this.callbackFunctionForm} />
            {/* <div className="container centerFixed">
              <form ref="myForm" className="myForm">
                <input type="text" ref="name" placeholder="Name" className="inputName"/>
                <input type="text" ref="address" placeholder="Address" className="inputAddress" />
                <input type="text" ref="phone" placeholder="Phone" className="inputPhone" />
                <button onClick={(e)=>this.functionSubmit(e)} className="myButtonAdd">{this.state.submitButton}</button>
              </form>
            </div> */}
          </div>
        </>
      );
    }else{
      return ( 
        <>
          <div className="App">
            <div className="container">
              <pre>
                <table className="tableList">
                  <thead>
                    <th>#No</th>
                    <th className="headName">NAME</th>
                    <th className="headAddress">ADDRESS</th>
                    <th className="headPhone">PHONE</th>
                    <th>ACTION</th>
                  </thead>
                  <tbody>
                    <TableComponent dataStateFromParent={this.state.datas}
                     parentCallback = {this.callbackFunctionTable}
                      editCallback = {this.callbackFunctionTableEdit}/>
                    {/* {datas.map((data, i) =>
                      <tr>
                        <td>{i+1}</td>
                        <td>{data.name}</td>
                        <td>{data.address}</td>
                        <td>{data.phone}</td>
                        <td>
                          <button onClick={()=>this.functionEdit(i)} className="myButtonEdit">EDIT</button>
                          <button onClick={()=>this.functionDelete(i)} disabled={this.state.disabledButton} className="myButtonDelete">DELETE</button>
                        </td>
                      </tr>
                      )} */}
                  </tbody>
                </table>
              </pre>
            </div>
            <FormComponent dataStateFromParent ={this.state.datas}
             dataStateButton = {this.state.submitButton}
              dataStateEdit={this.state.target}
              dataStateFlag={this.state.flag}
              dataStateIndex={this.state.index}
              dataStateDisabled={this.state.disabledButton}
               parentCallback ={this.callbackFunctionForm} />
            {/* <div className="container centerFixed">
              <form ref="myForm" className="myForm">
                <input type="text" ref="name" placeholder="Name" className="inputName"/>
                <input type="text" ref="address" placeholder="Address" className="inputAddress" />
                <input type="text" ref="phone" placeholder="Phone" className="inputPhone" />
                <button onClick={(e)=>this.functionSubmit(e)} className="myButtonAdd">{this.state.submitButton}</button>
              </form>
            </div> */}
          </div>
        </>
      );
    }
    
  }
}

export default App;