import Folks from "../components/Folk";

function Anne() {
    const brams = {
      name: 'Anne Bonny (Circa 1698)',
      description: 'Anne Cormac, aka Anne Bonny, was a notoriously ruthless pirate who pillaged merchant ships in the Caribbean. Born in county Cork, she was the illegitimate daughter of a lawyer and his maid. Her father brought both Anne and her mother to South Carolina to start a new life. Later on, Anne married a seaman named James Bonny and sailed with him to the Bahamas.<br><br>Here, he made money by telling tales on pirates. But Anne preferred to join them and deserted Bonny for a colourful pirate called Calico Jack. Sailors believed a woman\'s presence on-board brought bad luck.<br><br>But Bonny didn\'t hide her identity. Only during attacks did she dress like a man, donning a loose tunic, trousers and a cap. She was also equipped with a sword, pistols and sometimes a machete. The British Navy captured their ship when most of the crew was drunk. But Anne and another femalepirate, Mary Read, were its fiercest defenders. The whole crew was executed but, being pregnant, Anne and Mary both escaped it. What happened next is disputed. However, many believe Anne returned to South Carolina and lived a long life. Today, her tale is a favourite among children who experience the EPIC exhibition.'
    }
    return (
      <div>
        <Folks image="Anne-Bonny.jpeg" name={brams.name} description={brams.description}/>
      </div>
    );
  }
  
  export default Anne;