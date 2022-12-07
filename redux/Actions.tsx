
export const getTodos =()=>async(dispatch:any)=>{
    try {
        dispatch({type:"GET_TODOS",payload:{title:"TEST"}})
    } catch (error) {
        
    }
}