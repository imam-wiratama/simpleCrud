import React, { Component } from 'react';

class FormComponent extends Component {
    
    componentDidMount(){
        this.refs.name.focus();   
    }
    functionSubmit = (e) => {
        e.preventDefault();
        let datas = this.props.dataStateFromParent;
        let name = this.refs.name.value;
        let address = this.refs.address.value;
        let phone = this.refs.phone.value;
        let flag = this.props.dataStateFlag

        if(typeof this.props.dataStateFlag === 'undefined' || flag === 0){        //data baru 
            let data = {
                name, address, phone
            }
            datas.push(data);
        }
        else{                                                                    //data update
            let index = this.props.dataStateIndex;
            datas[index].name = name;
            datas[index].address = address;
            datas[index].phone = phone;
        }
        this.props.parentCallback({
            datas: datas,
            flag: 0,
            submitButton:'ADD NEW',
            disabledButton:false
        });
        this.refs.myForm.reset();
        this.refs.name.focus();
    }
    
    render() {
        let dataTarget = this.props.dataStateEdit;
        let flag =this.props.dataStateFlag

        if(typeof dataTarget !== 'undefined'){
            if(flag !== 0){
                this.refs.name.value = dataTarget.name;
                this.refs.address.value = dataTarget.address;
                this.refs.phone.value = dataTarget.phone;
            }
        }
        return (
            <div className="container centerFixed">
                <form ref="myForm" className="myForm">
                    <input type="text" ref="name" placeholder="Name" className="inputName"/>
                    <input type="text" ref="address" placeholder="Address" className="inputAddress" />
                    <input type="text" ref="phone" placeholder="Phone" className="inputPhone" />
                    <button onClick={(e)=>this.functionSubmit(e)} className="myButtonAdd">{this.props.dataStateButton}</button>
                </form>
            </div>
        );
    }
}

export default FormComponent;