interface ListProps {
    title: string;
    type: Item[];
}

interface Item {
    id: number;
    name: string;
    calories: number;
}
const List = (props: ListProps) => {
    const title = props.title;
    const type = props.type;

    // const filteredType = type.filter(item => item.calories < 30)
    // console.log(filteredType)

    // const descendingType = type.sort((a, b) => b.name.localeCompare(a.name))


    const ascendingType = type.sort((a, b) => a.name.localeCompare(b.name))

    // const caloriesOrder = type.sort((a, b) => a.calories - b.calories)

    const listItems = ascendingType.map((item) =>{
        return (
            <li key={item.id}>
                {item.name}: <b>{item.calories}</b> calories
            </li>
        )
    }
    )



  return (
    <div>
        <h4>{title}</h4>
        <ol>{listItems}</ol>
    </div>
  )
}

export default List