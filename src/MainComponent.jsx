import React,{Component} from "react";
import "./index.css"

export class MainContent extends Component{
    state={title:"Customers",count:5};
    customers=[
        {id:1,name:"user-1",location:"patna"},
        {id:2,name:"user-2",location:"kanpur"},
        {id:3,name:"user-3",location:""},
        {id:4,name:"user-4",location:"raipur"},
    ]
    
    render(){
        return (
        <div>
            <h5 className="border-bottom m-1 p-1">{this.state.title}
            <span className="badge badge-secondary m-2 highlight">{this.state.count}</span>
            <button className="btn btn-secondary" onClick={this.onClickIncrement}>+</button></h5>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
                </thead>
                <tbody>
                    {this.customers.map((cus)=>{
                    return (
                        <tr key={cus.id}>
                        <td>{cus.id}</td>
                        <td>{cus.name}</td>
                        <td>{cus.location == ""?"Not provided":cus.location}</td>
                        </tr>
                    );
                    
                    })}
                   
                </tbody>

            </table>
        </div>
        
        );
    }

    onClickIncrement=()=>{
        this.setState({
            count:4,
        });
    };
}

export default MainContent;