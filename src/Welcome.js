import { useState,useEffect } from "react";
import dios from './dios.webp';


function Welcome(props){

    const [count, setCount] = useState(0)

    function addOne(){
        setCount(count +1);
      }

      function decraseOne(){
        setCount(count -1);
      }

    const [timer,setTimer] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, setTextColor] = useState("black");

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer +1);},1000)
          
            if (timer === 10){
                clearInterval(interval);
                setBackgroundColor("black");
                setTextColor("white");
            }
       
        return () => clearInterval(interval);
     });

    return (
        <>
        <body style={{ backgroundColor: backgroundColor, color: textColor }}>
        <section>
        <h1>Welcome  {props.firstname} {props.lastname} !</h1>
        <p>You have click : {count} time!</p>
        <button onClick={addOne}>Add one</button>
        <button onClick={decraseOne}>decrase one</button>
        </section>

        <section>
            <h2>timer: {timer}</h2>
            {timer >= 10 && (
                <>
                <h2 style={{ fontSize: "50px" }}>ZA WARUDO !!</h2>
                <img src={dios} />
                </>
                )}
        </section>
        </body>
        </>
    );
}

export default Welcome;