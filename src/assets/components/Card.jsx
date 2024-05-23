/* import { useEffect, useState } from "react" */
import { data } from "../../../Data";
import { ProgressBar } from "./ProgressBar.";
import { Button } from "./Button";

export const Card = ({ filter }) => {


  console.log("Filtro actual:", filter);
  console.log(filter)

  const typeMapping = {
    0: 'Apartamento',
    1: 'Casa',
    2: 'Comercial',
    3: 'Oficina'
  };

  /* const [data, setData] = useState([]) */
  /* const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'http://atteatro.s3-website-us-east-1.amazonaws.com/generated.json'
 */
  /* useEffect(()=>{
  
    fetch(url) .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      setData(data);
      setLoading(false);
      console.log(data);
      
    })
    .catch((error) => {
      setError(error);
      setLoading(false);

    });

    
  },[]) */

  const MaxandMin = (array) => {

    const numericPrices = array.map(price => parseFloat(price.replace(/[$,]/g, '')));

    // Calcular el valor máximo y mínimo
    const maxPrice = Math.max(...numericPrices);
    const minPrice = Math.min(...numericPrices);

    let mensaje = `$${minPrice} - $${maxPrice} Por Fracción`;

    return (
      mensaje
    )

  }

  const filteredData = filter === 'Todos' ? data : data.filter(item => typeMapping[item.type] === filter);

    return (
      <div className='card-container'>
        {filteredData.map((datas) => (
          <div className='card' key={datas.index}>
            <img src={datas.img} alt="" />
            <div className="card-content">
              <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                  <path d="M12.9946 6.11403C13.0402 6.9793 12.7983 7.88754 12.2759 8.72557C10.5699 11.4624 8.68433 14.0973 6.83224 16.7512C6.57069 17.1259 6.40257 17.0444 6.17932 16.7255C4.35608 14.1218 2.47496 11.5484 0.833059 8.84457C-1.33571 5.27316 0.931631 0.901791 5.30299 0.112707C9.3053 -0.609636 13.0055 2.22779 12.9946 6.11403ZM6.53875 3.47556C4.96348 3.46643 3.79762 4.51807 3.78886 5.95599C3.78027 7.36935 4.96417 8.48773 6.49067 8.50819C7.99828 8.5285 9.2282 7.4065 9.24039 5.99991C9.25276 4.55616 8.10578 3.48438 6.53875 3.4754V3.47556Z" fill="#A596C8" />
                </svg>
                {datas.address}
              </h1>
              <p className="city">{datas.city}</p>
              <h1 className="profitability">{datas.profitability}% EA</h1>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                <path d="M1.55482 11.6546C1.98022 11.6546 2.40525 11.6536 2.83065 11.655C3.08129 11.6557 3.08129 11.6588 3.08494 11.9041C3.08895 12.2011 3.08129 12.4979 3.12361 12.795C3.25204 13.6959 3.78105 14.1744 4.7475 14.2424C5.31956 14.2829 5.85952 14.2027 6.29258 13.8079C6.77635 13.3664 6.84895 12.8036 6.79313 12.2074C6.71433 11.3651 6.12658 10.9223 5.38815 10.5948C4.63367 10.2604 3.82118 10.068 3.06196 9.74565C2.31404 9.42818 1.61137 9.04714 1.07798 8.43845C0.585816 7.87708 0.338822 7.22244 0.259652 6.50286C0.202008 5.97777 0.205657 5.45406 0.290299 4.93276C0.563926 3.24798 1.60918 2.18536 3.35346 1.81088C3.56823 1.76482 3.67561 1.63562 3.67561 1.42328C3.67561 1.01495 3.68072 0.60628 3.67452 0.198297C3.67233 0.0525149 3.7369 0.00104156 3.88247 0.00138702C4.6406 0.0031143 5.39873 0.00346051 6.15686 5.95554e-06C6.29659 -0.000684955 6.33745 0.0587334 6.33636 0.18137C6.33271 0.630808 6.34366 1.08024 6.33125 1.52934C6.32614 1.7183 6.38014 1.80328 6.58992 1.84612C7.28822 1.98879 7.92048 2.27103 8.44073 2.7443C9.10984 3.353 9.40791 4.12336 9.48489 4.98147C9.50678 5.22536 9.52722 5.46926 9.52174 5.71522C9.51882 5.84995 9.46811 5.89797 9.324 5.89728C8.47357 5.89278 7.62277 5.89244 6.77234 5.89728C6.62422 5.89797 6.587 5.84235 6.58007 5.71142C6.56037 5.32658 6.51914 4.94382 6.35022 4.58524C6.12184 4.10091 5.72635 3.84631 5.16925 3.82143C4.81135 3.8052 4.45599 3.80727 4.11633 3.94925C3.76828 4.09503 3.53369 4.33547 3.40928 4.67125C3.25204 5.09478 3.24219 5.52902 3.3323 5.96602C3.45999 6.58611 3.92188 6.93433 4.48226 7.17961C5.14736 7.47048 5.82559 7.73441 6.49762 8.01077C7.18132 8.29197 7.86612 8.56834 8.48159 8.9777C9.35574 9.55979 9.85885 10.3433 9.96319 11.3524C10.0362 12.0595 10.0066 12.7615 9.82054 13.4527C9.4973 14.6549 8.7191 15.4757 7.49982 15.9227C7.18351 16.0388 6.86063 16.1386 6.52425 16.1856C6.37503 16.2064 6.33162 16.2751 6.33308 16.4084C6.33818 16.8579 6.33563 17.3073 6.33454 17.7568C6.33381 17.9841 6.32104 17.9972 6.08572 17.9972C5.35823 17.9979 4.63112 17.9927 3.90363 18C3.7245 18.0017 3.66868 17.9426 3.67196 17.7765C3.68145 17.3446 3.67196 16.9128 3.6767 16.481C3.67853 16.3421 3.63949 16.2741 3.47641 16.252C2.76206 16.1542 2.08055 15.9621 1.48112 15.5638C0.691618 15.0394 0.296136 14.2874 0.116636 13.4165C0.0101042 12.8993 -0.00448973 12.3742 0.000982812 11.8481C0.00244216 11.6902 0.0681129 11.6488 0.222438 11.6508C0.666079 11.6571 1.11008 11.6533 1.55372 11.6533V11.6539L1.55482 11.6546Z" fill="#A596C8" />
              </svg>
              {MaxandMin(datas.prices)} 
            </p>
            <ProgressBar totalFractions={datas.totalFracttions} soldFractions={datas.soldFracttions} />
            </div>
            
            <p className="vendido-text">Vendido</p>
            <div className="buttonclass">
              <Button label="Detalle" estilo="button2" />
            </div>
          </div>
        ))}
      </div>
    );
}