import './head.css'


const Head = ({title} ) => {
    return (  
        <div className='container'>
            <div className="container linebottom py-5" align="center" >
                <h1 className='subrayado'>{title}<img className='imgsize' src="react.gif" alt="imagen de React" /></h1>
                
            </div>
        </div>
    );
}
 
export default Head;