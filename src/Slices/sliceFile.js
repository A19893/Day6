import { createSlice } from '@reduxjs/toolkit';
const initialData = {
    tasks: [
        {
            id: 1,
            Name: "Yash",
            Address: "chd",
            UserImg: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
            taskCount: 0,
            taskDesc: [],
            deadLine: ""
        },
        {
            id: 2,
            Name: "Aniket",
            Address: "Baltana",
            UserImg: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
            taskCount: 0,
            taskDesc: [],
            deadLine: ""
        },
        {
            id: 3,
            Name: "Yuvraj",
            Address: "Gurgaon",
            UserImg: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
            taskCount: 0,
            taskDesc: [],
            deadLine: ""
        }
    ]
};
export const sliceFile = createSlice({
    name: 'display',
    initialState: initialData,
    reducers: {
        addData: (state, data) => {
            console.log(data);
            state.tasks.map((item)=>{
                if(item.id===data.payload.id){
                    let validation=null;
                     validation=item.taskDesc.filter((item)=>{
                          return item===data.payload.taskDesc;
                    })
                    console.log(validation)
                    if(item.deadLine===data.payload.date1 && validation.length>0){
                        alert("Already assigned task")
                    }
                    else{
                    item.taskCount+=1;
                    item.deadLine=data.payload.date1;
                    item.taskDesc.push(data.payload.taskDesc);
                    }
                }
            })
        }
    }
})
export const { addData, deleteData } = sliceFile.actions
export default sliceFile.reducer