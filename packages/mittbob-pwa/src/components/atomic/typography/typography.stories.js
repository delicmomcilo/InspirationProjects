import React from 'react';

export default { title: 'Typography' };

const defaultContent = () => {
  const texts = [
    `In life, the visible surface of the Sperm Whale is not the least among the many marvels he presents. Almost invariably it is all over obliquely crossed and re-crossed with numberless straight marks in thick array, something like those in the finest Italian line engravings. But these marks do not seem to be impressed upon the isinglass substance above mentioned, but seem to be seen through it, as if they were engraved upon the body itself. Nor is this all. In some instances, to the quick, observant eye, those linear marks, as in a veritable engraving, but afford the ground for far other delineations. These are hieroglyphical that is, if you call those mysterious cyphers on the walls of pyramids hieroglyphics, then that is the proper word to use in the present connexion. By my retentive memory of the hieroglyphics upon one Sperm Whale in particular, I was much struck with a plate representing the old Indian characters chiselled on the famous hieroglyphic palisades on the banks of the Upper Mississippi. Like those mystic rocks, too, the mystic-marked whale remains undecipherable..`,
    `He always thought of the sea as 'la mar' which is what people call her in Spanish when they love her. Sometimes those who love her say bad things of her but they are always said as though she were a woman. Some of the younger fishermen, those who used buoys as floats for their lines and had motorboats, bought when the shark livers had brought much money, spoke of her as 'el mar' which is masculine.They spoke of her as a contestant or a place or even an enemy. But the old man always thought of her as feminine and as something that gave or withheld great favours, and if she did wild or wicked things it was because she could not help them. The moon affects her as it does a woman, he thought.`,
    `Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every 'superstar,' every 'supreme leader,' every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam.`,
    `All that is gold does not glitter, Not all those who wander are lost. The old that is strong does not wither, Deep roots are not reached by the frost. From the ashes a fire shall be woken, A light from the shadows shall spring; Renewed shall be blade that was broken, The crownless again shall be king.`,
  ];
  const picked = Math.floor(Math.random() * texts.length);
  return texts[picked];
};
const defaultTitle = 'A title';
export const typography = () => {
  return (
    <div>
      <h1>Thou shalt not have any more H1s but me!</h1>
      <h2>But multiple h2s are ok, I guess</h2>
      <p>H1 tags are used for page titles</p>
      <p>
        H2 tags are for subheadings on a page, like separating different parts
        of a page
      </p>
      <h3>H3s are used below the h2 parts mentioned above</h3>

      <p>{defaultContent()}</p>
      <p>{defaultContent()}</p>
      <p>
        <a href={Math.random()}>I am an unvisited link</a>
      </p>
      <p>
        <a href="/">I am a visited link</a>
      </p>
    </div>
  );
};
export const article = () => {
  return (
    <div>
      <p>
        <span>{defaultTitle}</span>
        {defaultContent()}
      </p>
      <p>{defaultContent()}</p>
    </div>
  );
};
