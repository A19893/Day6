import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Avatar, Space, Select, Input, DatePicker, Button,Badge} from 'antd';
import { addData } from '../Slices/sliceFile';
const Action = () => {
    const options = [];
    const count = useSelector((state) => state.counter.tasks);
    const [taskDesc, setTaskDesc] = useState('')
    const [id, setId] = useState('');
    const [date1, setDate] = useState('');
    const [display,setDisplay]=useState(false);
    const dispatch = useDispatch();
    const handleChange = (value) => {
        setId(value);
    };
    const onChange = (_, dateString) => {
        setDate(dateString)
    };
    return (
        <div className='container'>
            <h1>Enter Task Details</h1>
            <div className='form'>
                <div className='formContainer'>
                <Space style={{ width: '100%' }} direction="vertical">
                    <Input placeholder="Task Description" style={{ width: '300px' }} onChange={e => setTaskDesc(e.target.value)} />
                    <Select
                        defaultValue=""
                        style={{ width: '300px' }}
                        onChange={handleChange}
                        options={
                            count.map((item)=>{
                                return(
                                { value: item.id, label: item.Name,disabled: false }
                                )
                            })
                        }
                    />
                    <DatePicker style={{ width: '300px' }} onChange={onChange} />
                    <Button type="primary" onClick={() => {dispatch(addData({ id, taskDesc, date1 }));setDisplay(true)}}>Submit Details</Button>
                </Space>
                </div>
            </div>
            {display?
            <div className='childContainer'>
                <h1>Tasks Assigned</h1>
                    <div className='count'>
                    {
                    count?.map((item, idx) => {
                        return(
                            <div className="avatarData" key={idx}>
                        <Badge count={item.taskCount}>
                        <Avatar src={item.UserImg} shape="square" size="large" />
                         </Badge>
                         </div>
                        )
                    })
                    }
                    </div>
                {
                    count?.map((item, idx) => {
                        return (
                            <>
                                <div className="userData"key={idx}>
                                    <div className='avatar'><Avatar src={item.UserImg} /></div>
                                    <br/><br/><br/><br/>
                                    <div className="deadLine">{item.deadLine}</div>
                                    <br/><br/><br/><br/>
                                    <div className='taskCount'>{item.taskCount}</div>
                                    <br/><br/><br/><br/>
                                    <div className='name'>{item.Name}</div>
                                    <br/><br/><br/><br/>
                                    <div className='desc'>
                                      {item.taskDesc}
                                    </div>
                                    <br/>
                                </div>
                            </>
                        )
                    })
                }
                
            </div>
            :" "} 
        </div>
    )
}

export default Action