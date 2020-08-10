async function main(b:Number){
    const a  = await new Promise((resolve)=>{
            resolve()
    })
    console.log(a)
}


export default main;