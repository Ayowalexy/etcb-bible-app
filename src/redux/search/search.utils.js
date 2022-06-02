
export default searchUtils = (prevState, nextState) => {

    let arr;
    console.log('prevstate', prevState, 'next state', nextState)
    if(prevState.length){
        for(let element of prevState){
            if(element.search === nextState){
                arr = prevState.splice(prevState.indexOf(element), 1)
            }
        }

        
        return arr
    } else {
        return prevState
    }

   
}