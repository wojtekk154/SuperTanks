export default function getData() {
  let data = {
      enemies: [
          {
              position: {
                  direction: 3,
                  x: 400,
                  y: 0
              },
              image: 'assets/monster.png'
          },
          {
              position: {
                  direction: 2,
                  x: 500,
                  y: 0
              },
              image: 'assets/monster.png'
          },
          {
              position: {
                  direction: 2,
                  x: 400,
                  y: 0,
              },
              image: 'assets/monster.png'
          },
          {
              position: {
                  direction: 1,
                  x: 750,
                  y: 0
              },
              image: 'assets/monster.png'
          },
          {
              position: {
                  direction: 3,
                  x: 400,
                  y: 500
              },
              image: 'assets/monster.png'
          },
          {
              position: {
                  direction: 2,
                  x: 350,
                  y: 250
              },
              image: 'assets/monster.png'
          },
          {
              position: {
                  direction: 4,
                  x: 450,
                  y: 200
              },
              image: 'assets/monster.png'
          }
      ],

      blocks: [
          {
              x: 0,
              y: 0
          },
          {
              x: 50,
              y: 0
          },
          {
              x: 100,
              y: 0
          },
          {
              x: 150,
              y: 300
          },
          {
              x: 200,
              y: 600
          },
          {
              x: 250,
              y: 0
          },
          {
              x: 250,
              y: 0
          },
          {
              x: 250,
              y: 400
          },
          {
              x: 250,
              y: 400
          },
          {
              x: 250,
              y: 400
          },
          {
              x: 250,
              y: 100
          },
          {
              x: 250,
              y: 200
          },
          {
              x: 450,
              y: 200
          },
          {
              x: 350,
              y: 200
          },
          {
              x: 550,
              y: 200
          },
          {
              x: 650,
              y: 400
          },
          {
              x: 750,
              y: 400
          },
          {
              x: 750,
              y: 100
          },
          {
              x: 250,
              y: 500
          },
          {
              x: 650,
              y: 650
          },
          {
              x: 750,
              y: 550
          },
          {
              x: 650,
              y: 500
          }
      ],
      hero: {
          position: {
              direction: 1,
              x: 500,
              y: 400,
          },
          image: 'assets/hero.png'
      }
  };
  return data;
}