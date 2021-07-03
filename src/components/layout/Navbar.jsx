export default function Navbar ({changePage}){

    return (
        <nav className="navbar-container">
        <ul>
          <li onClick={()=>changePage("Home")}>Home</li>
          <li onClick={()=>changePage("Products")}>Products</li>
        </ul>
      </nav>
    )
}