import Folks from "../components/Folk";

function Charles() {
  const brams = {
    name: 'Sir Charles Parsons (1854-1931)',
    description: 'Charles Parsons was the son of the peer of Offaly, the Earl of Rosse, who was a famous astronomer and builder of the "Leviathan", which was at that time, the largest telescope in the world. It can still be visited at their family home at Birr Castle.<br><br>Charles invented the steam turbine. It was highly efficient and could be harnessed directly to generate electricity. As a result of his invention, widespread and cheap electricity became possible and ushered in the modern electric world. He also designed a turbine-powered yacht, the Turbina which was exhibited at Queen Victoria\'s Diamond Jubilee and was at the time the fastest ship in the Royal Navy.<br><br>Parson\'s turbine engines would also be used to power the famous HMS Dreadnought, the first modern battleship. An engineering company he established in Newcastle still exists today nearly 90 years after his death and is now a subsidiary of Siemens, the German conglomerate. Parsons was made a Fellow of the Royal Society in the United Kingdom and knighted for his contributions to science.'
  }
    return (
      <div>
        <Folks image="Sir-Charles-Parsons.jpeg" name={brams.name} description={brams.description}/>
      </div>
    );
  }
  
  export default Charles;