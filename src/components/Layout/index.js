import './index.scss';
import Sidebar from './../Sidebar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>#include &lt;iostream&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                    try &#123; <br />
                        <br />
                    &#125; catch ( exception &e ) &#123; <br />
                        <br />
                    &#125;
                    <br />
                    <span className='bottom-tag-html'>return 0;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout;