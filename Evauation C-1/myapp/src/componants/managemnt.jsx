import { useState } from "react";
export function  Counter(){
    const[countbooks,setCountbooks]=useState(13);
    const handlebooks=(value)=>{
        setCountbooks(countbooks+value)
    };

    const[countpens,setCountpens]=useState(10);
    const handlepens=(value)=>{
        setCountpens(countpens+value)
    };

    const[countnoteboks,setCountnotebooks]=useState(44);
    const handlenotebooks=(value)=>{
        setCountnotebooks(countnoteboks+value)
    };
    const[countinkpens,setCountinkpens]=useState(78);
    const handleinkpens=(value)=>{
        setCountinkpens(countinkpens+value)
    };
    return (
    <div className="items">
    <div className="Books">
    <span>Books:</span>
    <button className="addBook" onClick={()=>handlebooks(1*1)}>
        +
    </button>
    <button className="remBook" onClick={()=>handlebooks(-1*1)}>
        -
    </button>
    <span className="totalBooks">{countbooks}</span>
    </div>
    <div className="Pens">
    <span>Pens:</span>
    <button className="addPens" onClick={()=>handlepens(1*1)}>
        +
    </button>
    <button className="remPens" onClick={()=>handlepens(-1*1)}>
        -
    </button>
    <span className="totalPens">{countpens}</span>
    </div>
    <div className="Notebooks">
    <span>Notebooks:</span>
    <button className="addNotebooks" onClick={()=>handlenotebooks(1*1)}>
        +
    </button>
    <button className="remNotebooks" onClick={()=>handlenotebooks(-1*1)}>
        -
    </button>
    <span className="totalNotebooks">{countnoteboks}</span>
    </div>
    <div className="Inkpens">
    <span>Inkpens:</span>
    <button className="addInkpens" onClick={()=>handleinkpens(1*1)}>
        +
    </button>
    <button className="remInkpens" onClick={()=>handleinkpens(-1*1)}>
        -
    </button>
    <span className="totalInkpens">{countinkpens}</span>
    </div>
    <div className="total">{countpens + countbooks +countnoteboks+ countinkpens }</div>
  </div>
    );
}

