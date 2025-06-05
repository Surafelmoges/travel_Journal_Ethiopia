import Entry from './componets/Entry';
import Header from './componets/Header';
import Data from './componets/Data';


export default function App(){
  const dataElement = Data.map((entry)=> (

    <Entry 
    key={entry.id}
   imageUrl={entry.img}
   title={entry.icon} 
   country={entry.country}
   mapLink={entry.mapLink}
   date={entry.date}
   detail={entry.detail}

    />
    
  ));
  return (
    <>
    <Header />
    {dataElement}
    </>

  )
}