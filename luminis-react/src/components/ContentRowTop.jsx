// import mandalorian from '../assets/images/mandalorian.jpg'
import DataContent from './DataContent';
import Category from './Category';



function ContentRowTop(){

    const dataBoxes = [
      {
        title: "Totoal de usuarios",
        amount: 21,
        icon: 'fa-solid fa-user',
        styles: ['border-left-primary' ,'text-primary']
      },
      {
        title: "Total de categorias",
        amount: 9,
        icon: 'fa-solid fa-book',
        styles: [ 'border-left-success' ,'text-success']
      },
      {
        title: "Total de productos",
        amount: 9,
        icon: "fa-solid fa-book-open",
        styles: ['border-left-warning', 'text-warning']
      }
    ]


    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800"></h1>
        </div>
        
        <div className="row">
          {
            dataBoxes.map((dataBox, i) =>(
              <DataContent key={i} dataBox = {dataBox}/>
            ))
          }
        </div>

      </div>
    )
}

export default ContentRowTop;