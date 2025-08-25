import { Component } from 'react'

type StateType = {
    color: string;
    submitted: string
}

export default class Bai2 extends Component<object, StateType> {

    constructor(props: object){
        super(props);
        this.state={
            color: '#000000',
            submitted: ''
        };
    }
    hangleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({color: event.target.value});
    };

    hangleSubmit = (event: React.FormEvent)=>{
        event.preventDefault();
        this.setState({submitted: this.state.color});
    };

  render() {
    return (
      <div>
        <form onSubmit={this.hangleSubmit}>
            <label>
                Chọn màu:
                <input type="color" value={this.state.color} 
                onChange={this.hangleChange}/>

            </label>
            <button type="submit">Gửi</button>
        </form>
        <div style={{marginTop: '20px'}}>
            <p>Mã màu bạn đã chọn: <strong>{this.state.submitted}</strong></p>
            <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: this.state.submitted,
                border: '1px solid #ccc'
            }}/>
            </div>
        </div>    
    );
  }
}
