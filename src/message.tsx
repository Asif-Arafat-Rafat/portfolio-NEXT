interface Props{
    name:string;
}
function Message({name}:Props){
    return (
        <div><h1 className="text-4xl font-bold underline text-center">Hello,{name}</h1></div>
    );
}
export default Message;