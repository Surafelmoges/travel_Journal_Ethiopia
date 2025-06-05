import logo from '../images/logo.jpg';
export default function Header(){
  return (
    <>
   <div className="container">
    <div className="content">
       <img src={logo} alt="Logo" className='logo' />
       <h1 className='name'>Girma Tour And Travel.</h1>
    </div>
   </div>
    </>
  )
}