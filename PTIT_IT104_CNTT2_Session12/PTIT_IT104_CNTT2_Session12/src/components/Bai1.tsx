import { Component } from 'react';

export default class Bai1 extends Component {
 
    data: string[] = ['HTML', 'CSS', 'JavaScript', 'ReactJS'];

    render() {
        return (
            <div>
                <h2>Danh sách khóa học</h2>
                <ol>
                    {this.data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        );
    }
}
