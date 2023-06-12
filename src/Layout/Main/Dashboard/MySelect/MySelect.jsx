import useSelect from "../../../../hooks/useSelect";


const MySelect = () => {
    const [select] = useSelect();
    console.log(select);
    const total = select.reduce((sum,next)=> next.price + sum,0);
    return (
        <div>
            <h1>Select item {select.length}</h1>
            <h2>Total price : {total}</h2>
        </div>
    );
};

export default MySelect;