
function Folks(props) {
  const htmlPart = props.description;
    return (
      <div>
        <div class="card name-description">
          <div class="row no-gutters">
            <div class="col-auto col2">
                <img src={props.image} alt={props.name} class="img-fluid"></img>
            </div>
            <div class="col col2">
                <div class="card-block px-2">
                    <h1 class="card-title">{props.name}</h1>
                    <div dangerouslySetInnerHTML={ {__html: htmlPart} } />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
  
  export default Folks;