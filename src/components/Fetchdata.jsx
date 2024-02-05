import { click } from "@testing-library/user-event/dist/click"
import users from "./userdata.json"
const Fetchdata=()=>{
  
    return(
        <section className="flex flex-wrap justify-evenly items-center bg-black">
            {users.map((x)=>{
              
            //This is java script way

                let v=()=>{
                    let id=document.getElementById(x.id)
                   
                    
                    if( id.innerText=="Add Friends👍"){

                        alert(`friend request send to ${x.login} `)
                        id.innerText="cancel👎"
                    }
                    else{
                        
                        id.innerText="Add Friends👍"

                    }
                }
                
               let j=()=>{
                let id=document.getElementById(x.id)
              let comment=  prompt(`say something`)
                console.log(comment,x.login);

                
               } 

            //This is react waay(no need to mention seperate id)

            // let v=(v)=>{
            //   console.log(v);     
            //   v.target.innerText="cancel👎"  
            // and we should write in if-else method
            // }
                
                return(
                     <div className="h-[70vh] w-[26%] bg-black border-2 mb-[20px] rounded-[15px]  shadow-[0px_0px_20px_white] hover:scale-[1.09] duration-500 ">
                        
                        <h1 className="h-[160px] w-[160px] rounded-full  mt-[20px] ml-[30%]" ><img className="rounded-[100px] animate-pulse " src={x.avatar_url} /></h1>
                        <h1 className="text-white text-[35px] font-bold text-center mt-[20px]">{x.login}</h1>
                        <p className="text-white text-center mt-[20px] ml-[10px] mr-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quia ratione vitae consequatur earum nulla possimus amet numquam dicta ullam eius dignissimos debitis consectetur, ea voluptates aliquam quo illum praesentium!</p>
                     
                       <button id={x.id} onClick={v} className="h-[40px] w-[150px] mt-[30px] ml-[30px] text-white border-2 rounded-full shadow-[0px_0px_10px_white] hover:cursor-pointer hover:scale-[1.03]  ">Add Friends👍</button>
                       <button id={x.id} onClick={j} className="h-[40px] w-[150px] mt-[30px] ml-[30px] text-white border-2 rounded-full shadow-[0px_0px_10px_white] hover:cursor-pointer hover:scale-[1.03] ">Message 😉</button>
                       
                        
                     </div>
                
                )
            })}
        </section>
       
    )
}
export default Fetchdata