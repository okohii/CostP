import Item from "./Item"

function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="GTR" ano_lancamento={2000}></Item>
        <Item marca="AE86" ano_lancamento={1980}></Item>
        <Item marca="Supra" ano_lancamento={1980}></Item>
        <Item></Item>
      </ul>
    </>
  )
}

export default List