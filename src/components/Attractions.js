import {useState, useEffect} from 'react';
import axios from 'axios'

function Attractions() {
    const [data, setData] = useState();
    const [info, setInfo] = useState(false);
    const [selection, setSelection] = useState('select');
    const [error, setError] = useState();

    useEffect( () => {
        async function fetchData() {
            try{
                var response = await axios.get('https://failteireland.azure-api.net/opendata-api/v1/attractions');
                const formattedData = response.data.results.filter(function(data){
                    return data.address.addressRegion === selection;
                });
                console.log(response);
                console.log(formattedData);
                setData(formattedData);
                if(formattedData){
                    setInfo(true);
                } else {
                    setInfo(false);
                }
            } catch (e) {
                setError("Could not retrieve data, please try again later.");
                setInfo(false);
            }
          }
          fetchData();
    }, [selection]);

    function handleSelection(e){
        e.preventDefault();
        setSelection(e.target.value);
        console.log(e.target.value);
    }

    if(info) {
        return (
            <div className='grid'>
                <select onChange={handleSelection}>
                    <option value="select">Choose a region to display</option>
                    <option value="Wicklow">Wicklow</option>
                    <option value="Donegal">Donegal</option>
                    <option value="Tipperary">Tipperary</option>
                    <option value="Waterford">Waterford</option>
                    <option value="Kildare">Kildare</option>
                    <option value="Kerry">Kerry</option>
                    <option value="Meath">Meath</option>
                    <option value="Kilkenny">Kilkenny</option>
                    <option value="Carlow">Carlow</option>
                    <option value="Dublin">Dublin</option>
                    <option value="Cork">Cork</option>
                    <option value="Limerick">Limerick</option>
                    <option value="Galway">Galway</option>
                    <option value="Wexford">Wexford</option>
                    <option value="Mayo">Mayo</option>
                    <option value="Clare">Clare</option>
                </select>
                {
                    data.map(function(i, index) {
                        return (
                            <div className="attractions" key={index}>
                                <br /><br />
                                <h1>{i.name}</h1><br />
                                <h4>Type: {i.tags[0]}</h4><br />
                                <h4><a href={i.url} target="_blank" rel="noreferrer">{i.url}</a></h4><br />
                                <h4><a href={`tel:${i.telephone}`}><i className="fa-solid fa-phone-rotary"></i> Phone: {i.telephone}</a></h4><br />
                            </div>
                        );
                    })
                }

            </div>
        );
    } else if (error){
        return (
            <div>
                <h3>{error}</h3>
            </div>
        );
    } else {
        return (
            <div>
                <select onChange={handleSelection}>
                    <option value="select">Choose a region to display</option>
                    <option value="Sligo">Sligo</option>
                    <option value="Wicklow">Wicklow</option>
                    <option value="Donegal">Donegal</option>
                    <option value="Tipperary">Tipperary</option>
                    <option value="Waterford">Waterford</option>
                    <option value="Kildare">Kildare</option>
                    <option value="Kerry">Kerry</option>
                    <option value="Meath">Meath</option>
                    <option value="Kilkenny">Kilkenny</option>
                    <option value="Carlow">Carlow</option>
                    <option value="Dublin">Dublin</option>
                    <option value="Cork">Cork</option>
                    <option value="Limerick">Limerick</option>
                    <option value="Galway">Galway</option>
                    <option value="Wexford">Wexford</option>
                    <option value="Mayo">Mayo</option>
                    <option value="Clare">Clare</option>
                </select>
            </div>
        );
    }
}

export default Attractions;