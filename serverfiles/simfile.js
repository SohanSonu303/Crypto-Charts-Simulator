const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let yvalues=[10,25,10,12,5,6,10,25,40,35,30,25];
let m_lab_val=0;
let y_lab_val=0;


async function getlabels(){
    
    const m_fi_lab=[];
    //const y_fi_lab=[];
        for(let i=m_lab_val;i<12;i++){
              m_fi_lab.push(labels[i]);
             // y_fi_lab.push(yvalues[i]);
        }
        for(let i=0;i<m_lab_val;i++){
            m_fi_lab.push(labels[i])
           // let yval=Math.floor((Math.random() * 50) + 1);
           // y_fi_lab.push(yval);
        }

        for(let i=0;i<12;i++){
            if(i<11){
                yvalues[i]=yvalues[i+1];
            }
            else{
                yvalues[i]=Math.floor((Math.random() * 50) + 1);
            }
            
        }

        m_lab_val=m_lab_val+1;
        if(m_lab_val>12){
            m_lab_val=0;
        }
       
        return {m_fi_lab,yvalues};
}



module.exports={
    getlabels,
}