import React, { Component } from 'react';

class TableComponent extends Component {
    
    functionDelete = (i) => {
        let datas = this.props.dataStateFromParent;
        datas.splice(i,1);
        this.setState({
            datas: datas
        })
        this.props.parentCallback({
            datas: datas
        })
      }
    
    functionEdit = (i) => {
        let data = this.props.dataStateFromParent[i];
      
        this.props.editCallback({
            datas:this.props.dataStateFromParent,
            target:data,
            flag: 1,
            index: i,
            submitButton: 'UPDATE',
            disabledButton:true
        })
    }

    render() {
        let datas = this.props.dataStateFromParent;
        let disable = this.props.dataStateDisabled
        return (
            <>
                {datas.map((data, i) =>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{data.name}</td>
                        <td>{data.address}</td>
                        <td>{data.phone}</td>
                        <td>
                            <button 
                                onClick={()=>this.functionEdit(i)} 
                                className="myButtonEdit">EDIT
                            </button>
                            <button 
                                onClick={()=>this.functionDelete(i)} 
                                disabled={disable} 
                                className="myButtonDelete">DELETE
                            </button>
                        </td>
                    </tr>
                )}
            </>
        );
    }
}

export default TableComponent;