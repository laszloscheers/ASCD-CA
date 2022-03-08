import Folks from "../components/Folk";

function Dame() {
  const brams = {
    name: 'Dame Jocelyn Bell Burnell (1943-present)',
    description: 'As an astrophysicist, Jocelyn Bell Burnell, is best known for her discovery of the first radio pulsars while still a student. Born in Belfast, Bell\'s father was an architect for the Armagh Observatory. The time she spent there as a child ignited her interest in astronomy.<br><br>The observatory\'s staff encouraged her interest too and she went on to study physics. In 1969, while at the University of Cambridge, Bell helped to construct an 81.5 megahertz radio telescope. It covered enough land to fit 57 tennis courts and looked like a field of wire fencing! She was the first person to run the telescope, which churned out miles of paper readings every day.<br><br>She quickly noticed some strange squiggles... Even her thesis supervisor didn’t know what they were. Initially, he thought they were artificial signals and labelled them ‘LGM-1’ - which stood for ‘Little Green Men’. But as it turned out they came from rapidly-rotating, city-sized collapsed stars. The discovery led to many other scientific developments and even allowed astronomers to make a map to direct aliens toward Earth.'
  }
    return (
      <div>
        <Folks image="Dame-Jocelyn-Bell-Burnell.jpeg" name={brams.name} description={brams.description}/>
      </div>
    );
  }
  
  export default Dame;