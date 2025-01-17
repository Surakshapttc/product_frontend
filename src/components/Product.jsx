import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();
  return (
  < >
       <section id="ul"> 
        <ul>
        <li>
            <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww" width="180" alt="bag"/>
            </li>
        </ul>

        <ul>
        <li>
            <img src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" width="180" alt="laptop"/>
            </li>
        </ul>

        <ul>
        <li>
            <img src="https://www.shutterstock.com/image-photo/wireless-computer-mouse-isolated-on-260nw-95568295.jpg" width="180" alt="mouse"/>
            </li>
        </ul>

        <ul>
        <li>
            <img src="https://lsmedia.linker-cdn.net/272376/2021/5346651.png?width=1200&height=1125" width="180" alt="cooler"/>
            </li>
        </ul>

        <ul>
        <li>
            <img src="https://img.freepik.com/free-psd/clock-isolated-transparent-background_191095-11166.jpg" width="180" alt="clock"/>
            </li>
        </ul>

        <ul>
        <li>
            <img src="https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1710806400&semt=sph" width="180" alt="mobile"/>
            </li>
        </ul>

        <ul>
        <li>
            <img src="https://backuplane.com/wp-content/uploads/Luminous-Pro-1KVA-NXG-Solar-Inverter.webp" width="180" alt="inverter"/>
            </li>
        </ul>

        <ul>
        <li>
            <img src="https://www.mylloyd.com/media/products/zoom21811.jpg" width="180" alt="tv"/>
            </li>
        </ul>

        <ul>
        <li>
            <img src="https://static.epsonshop.co.in/media/catalog/product/cache/cdcc8b312a05b9ee926321ee87314749/l/3/l3210_27042023_2_.jpg" width="180" alt="printer"/>
            </li>
        </ul>

        <ul>
        <li>
            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675866077/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/228565_0_puyto6.png" width="180" alt="speaker"/>
            </li>
        </ul>
        <button onClick={() => navigate('/')}>Go Back</button>
    </section>
  </>
  
  )
}

export default Product