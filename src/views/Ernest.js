import Folks from "../components/Folk";

function Ernest() {
  const brams = {
    name: 'Ernest Shackleton (1874-1922)',
    description: 'Born in Kildare and educated in London, Ernest Shackleton developed a passion for adventure by reading books as a child. At just 16, he became a ship\'s apprentice and quickly rose through the ranks. Shackleton aspired to be an explorer, but Europeans had already visited most of the world. So he wanted to be the first person to reach the South Pole.<br><br>In 1902, aged 27, Shackleton was just 400 miles from his goal. But his crew and sled dogs fell ill, so he had to turn back. On another trip, he was only 97 miles away. But once again, he was forced to retreat because of a food shortage.<br><br>Shortly afterward, another explorer got there first. Even then, Shackleton didn’t give up and decided to cross the Antarctic instead. With 69 dogs on-board and a 1.3 metre bow for breaking ice, his ship - the Endurance - set out. But it got stuck! To save his crew, Shackleton bravely embarked on a legendary trip, crossing rough seas, mountains and glaciers.'
  }
    return (
      <div>
        <Folks image="Ernest-Shackleton.jpeg" name={brams.name} description={brams.description}/>
      </div>
    );
  }
  
  export default Ernest;