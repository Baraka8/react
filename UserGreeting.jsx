function UserGreeting(props){
   
        if(props.isLogged){
            

            return <h3 className="istrue"> welcome {props.username}</h3> 
              
           }
           else{
            return <p  className="notlogged"> hello, {props.username} you are not logged in</p>
           }
    ;
    
}
export default UserGreeting