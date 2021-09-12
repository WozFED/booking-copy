import React from 'react'
import Footer from '../Footer';
import Header from '../Header'

const Layout = ({children, blog}) => {
    
    return (
           <div>
            <Header blog = {blog}/>
                {children}
                
            <Footer />
        </div> 
    )
}

export default Layout;