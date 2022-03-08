import Folks from "../components/Folk";

function Bram() {
  const brams = {
    name: 'Bram Stoker (1847-1912)',
    description: `Abraham, or Bram, Stoker is most famous for writing the Gothic horror novel Dracula. But did you know that he also wrote romance novels? Or that he was bedridden as a child?<br><br>Born in Dublin, Stoker was too sick to leave his house until the age of seven. During this time, he was told lots of Celtic stories, including tales of malevolent fairies who sometimes drank blood! These myths, along with other European folklore, inspired the story of Dracula. But Stoker drew upon other influences too.<br><br>After getting married, he moved to London to work for Henry Irving - a well-known stage actor who liked to dramatically sweep his cloak. Count Dracula developed some similar mannerisms. Stoker thought about calling his novel "The Dead Undead" and naming the main character "Count Wampyr". But he later settled on Dracula for both, which means "devil" in Romanian. Today, the devilish Dracula features in more than 200 films.`
  }
    return (
      <div>
        <Folks image="Bram-Stoker.jpeg" name={brams.name} description={brams.description}/>
      </div>
    );
  }
  
  export default Bram;