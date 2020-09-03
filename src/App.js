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
  
  render() {
    let datas = this.state.datas;
    if (datas.length === 0){
      return ( 
        <>
          <div className="App">
            <div className="container">
              <pre>
                <table className="tableList">
                  <thead>
                    <tr>
                      <th>#No</th>
                      <th className="headName">NAME</th>
                      <th className="headAddress">ADDRESS</th>
                      <th className="headPhone">PHONE</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="5" className="centerText">
                        <h1>No Data</h1>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </pre>
            </div>
            <FormComponent 
              dataStateFromParent ={this.state.datas}
              dataStateButton = {this.state.submitButton}
              parentCallback ={this.callbackFunctionForm} 
            />
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
                    <tr>
                      <th>#No</th>
                      <th className="headName">NAME</th>
                      <th className="headAddress">ADDRESS</th>
                      <th className="headPhone">PHONE</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableComponent 
                      dataStateFromParent={this.state.datas}
                      dataStateDisabled={this.state.disabledButton}
                      parentCallback = {this.callbackFunctionTable}
                      editCallback = {this.callbackFunctionTableEdit}
                    />
                  </tbody>
                </table>
              </pre>
            </div>
            <FormComponent 
              dataStateFromParent ={this.state.datas}
              dataStateButton = {this.state.submitButton}
              dataStateEdit={this.state.target}
              dataStateFlag={this.state.flag}
              dataStateIndex={this.state.index}
              parentCallback ={this.callbackFunctionForm} 
            />
          </div>
        </>
      );
    }
  }
}

export default App;