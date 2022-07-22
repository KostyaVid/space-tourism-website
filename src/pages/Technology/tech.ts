export interface ITeth {
  name: string;
  about: string;
  imageUrlLand: string;
  imageUrlPort: string;
}

export const techs: Array<ITeth> = [
  {
    name: 'LAUNCH VEHICLE',
    about: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    imageUrlLand: './assets/technology/image-launch-vehicle-landscape.jpg',
    imageUrlPort: './assets/technology/image-launch-vehicle-portrait.jpg',
  },
  {
    name: 'SPACEPORT',
    about:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    imageUrlLand: './assets/technology/image-spaceport-landscape.jpg',
    imageUrlPort: './assets/technology/image-spaceport-portrait.jpg',
  },
  {
    name: 'SPACE CAPSULE',
    about: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    imageUrlLand: './assets/technology/image-space-capsule-landscape.jpg',
    imageUrlPort: './assets/technology/image-space-capsule-portrait.jpg',
  },
];
