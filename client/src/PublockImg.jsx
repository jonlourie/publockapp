export default function PublockImg({publock,index=0,className=null}) {
    if(!publock.photos?.length){
        return'';
    }
    if(!className){
        className = 'object-cover';
    }
    return(
            <img className={className} src={'http://localhost:4000/uploads/'+publock.photos[index]} alt=""/>
    );

}