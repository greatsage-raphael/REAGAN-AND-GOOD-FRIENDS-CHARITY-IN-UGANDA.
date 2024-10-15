import Navbar from './navbar'

interface MyComponentProps {
    children: React.ReactNode;
  }
 
  const Layout: React.FC<MyComponentProps> = ({ children }) => {  
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}


export default Layout;